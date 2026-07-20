"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact, type ContactFormState } from "@/app/actions/contact";
import { missionTypes } from "@/content/contact";
import { Button } from "./ui/Button";

const initialState: ContactFormState = { status: "idle" };

const labelClass = "mb-1.5 block text-sm font-semibold text-white";
const fieldClass =
  "w-full rounded-lg border border-navy-soft bg-navy-deep px-4 py-3 text-white placeholder:text-white/40 focus:border-gold";
const errorClass = "mt-1.5 text-sm font-medium text-gold-soft";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className={errorClass}>
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={formAction} noValidate className="flex flex-col gap-5">
      {/* Honeypot anti-spam : masqué aux humains, hors tabulation. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="site_web">Ne pas remplir ce champ</label>
        <input id="site_web" name="site_web" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className={labelClass}>
            Nom complet <span aria-hidden="true">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.nom)}
            aria-describedby={errors.nom ? "erreur-nom" : undefined}
            className={fieldClass}
          />
          <FieldError id="erreur-nom" message={errors.nom} />
        </div>

        <div>
          <label htmlFor="organisation" className={labelClass}>
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(errors.organisation)}
            aria-describedby={errors.organisation ? "erreur-organisation" : undefined}
            className={fieldClass}
          />
          <FieldError id="erreur-organisation" message={errors.organisation} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "erreur-email" : undefined}
            className={fieldClass}
          />
          <FieldError id="erreur-email" message={errors.email} />
        </div>

        <div>
          <label htmlFor="type_mission" className={labelClass}>
            Type de mission
          </label>
          <select id="type_mission" name="type_mission" className={fieldClass} defaultValue="">
            <option value="">Sélectionner…</option>
            {missionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Votre message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "erreur-message" : undefined}
          className={fieldClass}
        />
        <FieldError id="erreur-message" message={errors.message} />
      </div>

      <div>
        <Button type="submit" disabled={pending}>
          {pending ? "Envoi en cours…" : "Envoyer la demande"}
        </Button>
      </div>

      <p role="status" aria-live="polite" className="min-h-6 text-sm font-medium">
        {state.status === "success" && (
          <span className="text-gold-soft">{state.message}</span>
        )}
        {state.status === "error" && <span className="text-gold-soft">{state.message}</span>}
      </p>
    </form>
  );
}
