"use client";

import { deleteArticle, setArticleStatus } from "@/app/actions/articles";
import type { Article } from "@/lib/articles";

/** Boutons publier/dépublier/supprimer d'une ligne du dashboard admin. */
export function ArticleRowActions({ article }: { article: Article }) {
  const nextStatus = article.status === "published" ? "draft" : "published";
  return (
    <div className="flex items-center gap-2">
      <form action={setArticleStatus}>
        <input type="hidden" name="id" value={article.id} />
        <input type="hidden" name="status" value={nextStatus} />
        <button
          type="submit"
          className="rounded-full border border-navy/20 px-3 py-1 text-xs font-semibold text-ink transition-colors hover:border-navy"
        >
          {article.status === "published" ? "Dépublier" : "Publier"}
        </button>
      </form>
      <form
        action={deleteArticle}
        onSubmit={(event) => {
          if (!window.confirm(`Supprimer définitivement « ${article.title} » ?`)) {
            event.preventDefault();
          }
        }}
      >
        <input type="hidden" name="id" value={article.id} />
        <button
          type="submit"
          className="rounded-full border border-red-200 px-3 py-1 text-xs font-semibold text-red-700 transition-colors hover:border-red-500"
        >
          Supprimer
        </button>
      </form>
    </div>
  );
}
