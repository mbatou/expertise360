"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { saveLinkedInPost, type AdminActionState } from "@/app/actions/articles";
import { linkedInEmbedUrl } from "@/lib/linkedin";

const IDLE: AdminActionState = { status: "idle" };

const inputClass =
  "rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-base outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

/**
 * Ajout d'un post LinkedIn par URL publique. L'aperçu utilise l'embed officiel
 * dès que l'URL est reconnue.
 */
export function LinkedInForm() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(saveLinkedInPost, IDLE);
  const [url, setUrl] = useState("");
  const embedUrl = linkedInEmbedUrl(url);

  useEffect(() => {
    if (state.status === "success") {
      const timer = setTimeout(() => router.push("/admin"), 900);
      return () => clearTimeout(timer);
    }
  }, [state.status, router]);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <p className="rounded-lg bg-navy/5 p-4 text-sm leading-relaxed text-ink">
        Sur LinkedIn : ouvrez le post → menu <strong>…</strong> →{" "}
        <strong>Copier le lien du post</strong>, puis collez-le ci-dessous. Seuls les posts{" "}
        <strong>publics</strong> peuvent être affichés.
      </p>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold">
          Titre court * <span className="font-normal text-slate">— pour la liste admin et l&apos;accessibilité</span>
        </span>
        <input type="text" name="title" required maxLength={200} className={inputClass} />
      </label>

      <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_180px]">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold">URL du post LinkedIn *</span>
          <input
            type="url"
            name="linkedin_url"
            required
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://www.linkedin.com/posts/…-activity-…"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold">Date du post</span>
          <input type="date" name="published_at" className={inputClass} />
        </label>
      </div>

      {url.trim() !== "" && (
        <p className={`text-sm font-medium ${embedUrl ? "text-green-700" : "text-slate"}`}>
          {embedUrl ? "✓ URL reconnue — aperçu ci-dessous." : "URL pas encore reconnue…"}
        </p>
      )}
      {embedUrl && (
        <iframe
          src={embedUrl}
          title="Aperçu du post LinkedIn"
          className="h-[480px] w-full max-w-xl rounded-xl border border-navy/10 bg-white"
        />
      )}

      {state.status !== "idle" && state.message && (
        <p
          role="status"
          className={`text-sm font-medium ${state.status === "error" ? "text-red-700" : "text-green-700"}`}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft disabled:opacity-60"
      >
        {pending ? "Ajout…" : "Ajouter à la page Articles"}
      </button>
    </form>
  );
}
