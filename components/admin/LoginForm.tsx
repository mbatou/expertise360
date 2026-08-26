"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { loginAdmin, type AdminActionState } from "@/app/actions/articles";

const IDLE: AdminActionState = { status: "idle" };

export function LoginForm() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(loginAdmin, IDLE);

  // Le cookie est posé par l'action : on rafraîchit pour rendre le dashboard.
  useEffect(() => {
    if (state.status === "success") router.refresh();
  }, [state.status, router]);

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold">Mot de passe</span>
        <input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          className="rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-base outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </label>
      {state.status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft disabled:opacity-60"
      >
        {pending ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
