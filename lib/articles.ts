import "server-only";

import { getSupabaseAdmin } from "./supabase";

/**
 * Accès aux publications (table `articles`) — service role, serveur uniquement.
 * Chaque helper retourne une valeur vide/nulle si Supabase n'est pas configuré,
 * pour que le site build et tourne sans environnement (page vide propre).
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

const COLUMNS =
  "id, created_at, updated_at, published_at, type, status, title, slug, excerpt, content, linkedin_url";

/** Publications visibles sur /articles, plus récentes d'abord. */
export async function getPublishedArticles(): Promise<Article[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("articles")
    .select(COLUMNS)
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false });
  if (error) {
    console.error("getPublishedArticles:", error);
    return [];
  }
  return (data as Article[]) ?? [];
}

/** Article natif publié, par slug — pour /articles/[slug]. */
export async function getPublishedArticleBySlug(slug: string): Promise<Article | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("articles")
    .select(COLUMNS)
    .eq("status", "published")
    .eq("type", "article")
    .eq("slug", slug)
    .maybeSingle();
  if (error) {
    console.error("getPublishedArticleBySlug:", error);
    return null;
  }
  return (data as Article | null) ?? null;
}

/** Toutes les publications (brouillons compris) — backoffice. */
export async function getAllArticles(): Promise<Article[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("articles")
    .select(COLUMNS)
    .order("published_at", { ascending: false, nullsFirst: true })
    .order("created_at", { ascending: false });
  if (error) {
    console.error("getAllArticles:", error);
    return [];
  }
  return (data as Article[]) ?? [];
}

export async function getArticleById(id: string): Promise<Article | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("articles")
    .select(COLUMNS)
    .eq("id", id)
    .maybeSingle();
  if (error) {
    console.error("getArticleById:", error);
    return null;
  }
  return (data as Article | null) ?? null;
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
