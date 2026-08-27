import "server-only";

import { getDb } from "./db";

/**
 * Accès aux publications (table `articles`) — Postgres/Neon, serveur
 * uniquement. Chaque helper retourne une valeur vide/nulle si la base n'est
 * pas configurée, pour que le site build et tourne sans environnement
 * (page vide propre).
 */

export type ArticleType = "article" | "linkedin";
export type ArticleStatus = "draft" | "published";

export type Article = {
  id: string;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  type: ArticleType;
  status: ArticleStatus;
  title: string;
  slug: string | null;
  excerpt: string | null;
  content: string | null;
  linkedin_url: string | null;
};

// Les timestamptz sont renvoyés en ISO 8601 pour rester sérialisables tels
// quels vers les Client Components (le driver pg les hydrate en Date).
const COLUMNS = `id, created_at::text, updated_at::text, published_at::text,
  type, status, title, slug, excerpt, content, linkedin_url`;

/** Publications visibles sur /articles, plus récentes d'abord. */
export async function getPublishedArticles(): Promise<Article[]> {
  const db = getDb();
  if (!db) return [];
  try {
    const { rows } = await db.query<Article>(
      `select ${COLUMNS} from articles
       where status = 'published'
       order by published_at desc nulls last`,
    );
    return rows;
  } catch (error) {
    console.error("getPublishedArticles:", error);
    return [];
  }
}

/** Article natif publié, par slug — pour /articles/[slug]. */
export async function getPublishedArticleBySlug(slug: string): Promise<Article | null> {
  const db = getDb();
  if (!db) return null;
  try {
    const { rows } = await db.query<Article>(
      `select ${COLUMNS} from articles
       where status = 'published' and type = 'article' and slug = $1`,
      [slug],
    );
    return rows[0] ?? null;
  } catch (error) {
    console.error("getPublishedArticleBySlug:", error);
    return null;
  }
}

/** Toutes les publications (brouillons compris) — backoffice. */
export async function getAllArticles(): Promise<Article[]> {
  const db = getDb();
  if (!db) return [];
  try {
    const { rows } = await db.query<Article>(
      `select ${COLUMNS} from articles
       order by published_at desc nulls first, created_at desc`,
    );
    return rows;
  } catch (error) {
    console.error("getAllArticles:", error);
    return [];
  }
}

export async function getArticleById(id: string): Promise<Article | null> {
  const db = getDb();
  if (!db) return null;
  try {
    const { rows } = await db.query<Article>(
      `select ${COLUMNS} from articles where id = $1`,
      [id],
    );
    return rows[0] ?? null;
  } catch (error) {
    console.error("getArticleById:", error);
    return null;
  }
}

/** Slug URL à partir d'un titre (accents retirés, tirets). */
export function slugify(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Extrait affiché sur les cartes : excerpt saisi, sinon début du contenu. */
export function articleExcerpt(article: Article, maxLength = 180): string {
  const source =
    article.excerpt?.trim() ||
    (article.content ?? "")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/[*_`>\[\]()]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  return source.length > maxLength ? `${source.slice(0, maxLength).trimEnd()}…` : source;
}
