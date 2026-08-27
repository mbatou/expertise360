"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { z } from "zod";
import {
  createAdminSession,
  destroyAdminSession,
  isAdminAuthenticated,
  isAdminConfigured,
  verifyPassword,
} from "@/lib/admin-auth";
import { getArticleById, slugify } from "@/lib/articles";
import { linkedInEmbedUrl } from "@/lib/linkedin";
import { getDb } from "@/lib/db";
import { isRateLimited } from "@/lib/rate-limit";

export type AdminActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const NOT_AUTHENTICATED: AdminActionState = {
  status: "error",
  message: "Session expirée — rechargez la page pour vous reconnecter.",
};
const NOT_CONFIGURED: AdminActionState = {
  status: "error",
  message: "Backoffice non configuré (DATABASE_URL, ADMIN_PASSWORD, AUTH_SECRET).",
};

/** Revalide les pages publiques impactées par un changement de publication. */
function revalidateArticles(slug?: string | null) {
  revalidatePath("/articles");
  if (slug) revalidatePath(`/articles/${slug}`);
  revalidatePath("/sitemap.xml");
}

// ---------------------------------------------------------------------------
// Connexion / déconnexion
// ---------------------------------------------------------------------------

export async function loginAdmin(
  _prev: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  if (!isAdminConfigured()) return NOT_CONFIGURED;

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";
  if (isRateLimited(`admin:${ip}`)) {
    return { status: "error", message: "Trop de tentatives. Réessayez dans quelques minutes." };
  }

  const password = formData.get("password");
  if (typeof password !== "string" || !verifyPassword(password)) {
    return { status: "error", message: "Mot de passe incorrect." };
  }

  await createAdminSession();
  return { status: "success" };
}

export async function logoutAdmin(): Promise<void> {
  await destroyAdminSession();
  revalidatePath("/admin");
}

// ---------------------------------------------------------------------------
// Articles natifs
// ---------------------------------------------------------------------------

const articleSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().trim().min(3, "Titre requis (3 caractères min.)").max(200),
  slug: z
    .string()
    .trim()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Slug invalide (minuscules, chiffres, tirets)")
    .max(80)
    .optional()
    .or(z.literal("")),
  excerpt: z.string().trim().max(500, "Extrait : 500 caractères max.").optional(),
  content: z.string().trim().min(10, "Contenu requis (10 caractères min.)"),
  status: z.enum(["draft", "published"]),
  published_at: z.string().optional(),
});

export async function saveArticle(
  _prev: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  if (!(await isAdminAuthenticated())) return NOT_AUTHENTICATED;
  const db = getDb();
  if (!db) return NOT_CONFIGURED;

  const parsed = articleSchema.safeParse({
    id: (formData.get("id") as string) || undefined,
    title: formData.get("title"),
    slug: (formData.get("slug") as string) ?? "",
    excerpt: (formData.get("excerpt") as string) || undefined,
    content: formData.get("content"),
    status: formData.get("status"),
    published_at: (formData.get("published_at") as string) || undefined,
  });
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Champs invalides." };
  }
  const input = parsed.data;

  const slug = input.slug || slugify(input.title);
  if (!slug) return { status: "error", message: "Impossible de dériver un slug du titre." };

  const publishedAt = input.published_at
    ? new Date(`${input.published_at}T12:00:00Z`).toISOString()
    : null;

  const row = {
    type: "article" as const,
    title: input.title,
    slug,
    excerpt: input.excerpt ?? null,
    content: input.content,
    status: input.status,
    published_at:
      publishedAt ?? (input.status === "published" ? new Date().toISOString() : null),
  };

  const previous = input.id ? await getArticleById(input.id) : null;
  try {
    if (input.id) {
      await db.query(
        `update articles
         set title = $1, slug = $2, excerpt = $3, content = $4, status = $5,
             published_at = $6, updated_at = now()
         where id = $7`,
        [row.title, row.slug, row.excerpt, row.content, row.status, row.published_at, input.id],
      );
    } else {
      await db.query(
        `insert into articles (type, title, slug, excerpt, content, status, published_at)
         values ('article', $1, $2, $3, $4, $5, $6)`,
        [row.title, row.slug, row.excerpt, row.content, row.status, row.published_at],
      );
    }
  } catch (error) {
    console.error("saveArticle:", error);
    const message =
      (error as { code?: string }).code === "23505"
        ? `Le slug « ${slug} » est déjà utilisé par une autre publication.`
        : "Enregistrement impossible. Réessayez.";
    return { status: "error", message };
  }

  revalidateArticles(slug);
  if (previous?.slug && previous.slug !== slug) revalidateArticles(previous.slug);
  return {
    status: "success",
    message: input.status === "published" ? "Article publié." : "Brouillon enregistré.",
  };
}

// ---------------------------------------------------------------------------
// Posts LinkedIn (embed par URL)
// ---------------------------------------------------------------------------

const linkedInSchema = z.object({
  title: z.string().trim().min(3, "Donnez un titre court au post (affiché en admin et en accessibilité).").max(200),
  linkedin_url: z.string().trim().url("URL invalide."),
  published_at: z.string().optional(),
});

export async function saveLinkedInPost(
  _prev: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  if (!(await isAdminAuthenticated())) return NOT_AUTHENTICATED;
  const db = getDb();
  if (!db) return NOT_CONFIGURED;

  const parsed = linkedInSchema.safeParse({
    title: formData.get("title"),
    linkedin_url: formData.get("linkedin_url"),
    published_at: (formData.get("published_at") as string) || undefined,
  });
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Champs invalides." };
  }

  if (!linkedInEmbedUrl(parsed.data.linkedin_url)) {
    return {
      status: "error",
      message:
        "URL non reconnue. Collez l'URL publique du post (linkedin.com/posts/… ou linkedin.com/feed/update/…).",
    };
  }

  try {
    await db.query(
      `insert into articles (type, title, linkedin_url, status, published_at)
       values ('linkedin', $1, $2, 'published', $3)`,
      [
        parsed.data.title,
        parsed.data.linkedin_url,
        parsed.data.published_at
          ? new Date(`${parsed.data.published_at}T12:00:00Z`).toISOString()
          : new Date().toISOString(),
      ],
    );
  } catch (error) {
    console.error("saveLinkedInPost:", error);
    return { status: "error", message: "Enregistrement impossible. Réessayez." };
  }

  revalidateArticles();
  return { status: "success", message: "Post LinkedIn ajouté à la page Articles." };
}

// ---------------------------------------------------------------------------
// Publier / dépublier / supprimer
// ---------------------------------------------------------------------------

export async function setArticleStatus(formData: FormData): Promise<void> {
  if (!(await isAdminAuthenticated())) return;
  const db = getDb();
  if (!db) return;

  const id = formData.get("id");
  const status = formData.get("status");
  if (typeof id !== "string" || (status !== "draft" && status !== "published")) return;

  const article = await getArticleById(id);
  try {
    await db.query(
      `update articles
       set status = $1, updated_at = now(),
           published_at = coalesce(published_at, case when $1 = 'published' then now() end)
       where id = $2`,
      [status, id],
    );
  } catch (error) {
    console.error("setArticleStatus:", error);
    return;
  }
  revalidateArticles(article?.slug);
  revalidatePath("/admin");
}

export async function deleteArticle(formData: FormData): Promise<void> {
  if (!(await isAdminAuthenticated())) return;
  const db = getDb();
  if (!db) return;

  const id = formData.get("id");
  if (typeof id !== "string") return;

  const article = await getArticleById(id);
  try {
    await db.query(`delete from articles where id = $1`, [id]);
  } catch (error) {
    console.error("deleteArticle:", error);
    return;
  }
  revalidateArticles(article?.slug);
  revalidatePath("/admin");
}
