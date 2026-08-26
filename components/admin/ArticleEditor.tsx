"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { saveArticle, type AdminActionState } from "@/app/actions/articles";
import type { Article } from "@/lib/articles";
import { Markdown } from "@/components/articles/Markdown";

const IDLE: AdminActionState = { status: "idle" };

const inputClass =
  "rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-base outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

/** Éditeur d'article natif (création si `article` absent, édition sinon). */
export function ArticleEditor({ article }: { article?: Article }) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(saveArticle, IDLE);
  const [content, setContent] = useState(article?.content ?? "");
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (state.status === "success") {
      const timer = setTimeout(() => router.push("/admin"), 900);
      return () => clearTimeout(timer);
    }
  }, [state.status, router]);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {article && <input type="hidden" name="id" value={article.id} />}

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold">Titre *</span>
        <input
          type="text"
          name="title"
          required
          defaultValue={article?.title}
          maxLength={200}
          className={inputClass}
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold">
            Slug (URL) <span className="font-normal text-slate">— vide = dérivé du titre</span>
          </span>
          <input
            type="text"
            name="slug"
            defaultValue={article?.slug ?? ""}
            pattern="[a-z0-9]+(-[a-z0-9]+)*"
            title="Minuscules, chiffres et tirets"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold">Date de publication affichée</span>
          <input
            type="date"
            name="published_at"
            defaultValue={article?.published_at?.slice(0, 10)}
            className={inputClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold">
          Extrait <span className="font-normal text-slate">— affiché sur la carte (optionnel)</span>
        </span>
        <textarea
          name="excerpt"
          rows={2}
          maxLength={500}
          defaultValue={article?.excerpt ?? ""}
          className={inputClass}
        />
      </label>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">Contenu (markdown) *</span>
          <div role="tablist" aria-label="Mode d'édition" className="flex gap-1 rounded-full bg-navy/5 p-1">
            {[
              { label: "Écrire", value: false },
              { label: "Aperçu", value: true },
            ].map((tab) => (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={preview === tab.value}
                onClick={() => setPreview(tab.value)}
                className={`rounded-full px-4 py-1 text-xs font-semibold transition-colors ${
                  preview === tab.value ? "bg-navy text-white" : "text-ink hover:bg-navy/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {preview ? (
          <div className="min-h-[320px] rounded-lg border border-navy/20 bg-white p-5">
            {content.trim() ? (
              <Markdown>{content}</Markdown>
            ) : (
              <p className="text-sm text-slate">Rien à prévisualiser.</p>
            )}
          </div>
        ) : (
          <textarea
            name="content"
            required
            rows={16}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder={"## Sous-titre\n\nVotre texte… **gras**, *italique*, listes, liens."}
            className={`${inputClass} font-mono text-sm leading-relaxed`}
          />
        )}
        {/* Le textarea disparaît du DOM en mode aperçu : on soumet la valeur via un champ caché. */}
        {preview && <input type="hidden" name="content" value={content} />}
      </div>

      {state.status !== "idle" && state.message && (
        <p
          role="status"
          className={`text-sm font-medium ${state.status === "error" ? "text-red-700" : "text-green-700"}`}
        >
          {state.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          name="status"
          value="published"
          disabled={pending}
          className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft disabled:opacity-60"
        >
          {pending ? "Enregistrement…" : "Publier"}
        </button>
        <button
          type="submit"
          name="status"
          value="draft"
          disabled={pending}
          className="rounded-full border border-navy/20 px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-navy disabled:opacity-60"
        >
          Enregistrer en brouillon
        </button>
      </div>
    </form>
  );
}
