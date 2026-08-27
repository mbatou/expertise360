"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { site } from "@/content/site";
import { isRateLimited } from "@/lib/rate-limit";
import { getDb } from "@/lib/db";
import { leadSchema, type LeadFieldErrors } from "@/lib/schema";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: LeadFieldErrors;
};

const GENERIC_ERROR = `Une erreur est survenue lors de l'envoi. Veuillez réessayer, ou nous écrire directement à ${site.email}.`;

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot : le champ « site_web » est masqué aux humains ; s'il est rempli,
  // on répond « succès » sans rien enregistrer pour ne pas guider les bots.
  if (formData.get("site_web")) {
    return { status: "success", message: "Merci, votre demande a bien été envoyée." };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: `Trop de tentatives. Merci de réessayer dans quelques minutes, ou de nous écrire à ${site.email}.`,
    };
  }

  const parsed = leadSchema.safeParse({
    nom: formData.get("nom"),
    organisation: formData.get("organisation") || undefined,
    email: formData.get("email"),
    type_mission: formData.get("type_mission") || undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: LeadFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof LeadFieldErrors;
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return {
      status: "error",
      message: "Veuillez corriger les champs signalés.",
      fieldErrors,
    };
  }

  const lead = parsed.data;

  const db = getDb();
  if (!db) {
    console.error("submitContact: DATABASE_URL manquante");
    return { status: "error", message: GENERIC_ERROR };
  }

  try {
    await db.query(
      `insert into leads (nom, organisation, email, type_mission, message)
       values ($1, $2, $3, $4, $5)`,
      [lead.nom, lead.organisation ?? null, lead.email, lead.type_mission ?? null, lead.message],
    );
  } catch (error) {
    console.error("submitContact: insertion Postgres échouée", error);
    return { status: "error", message: GENERIC_ERROR };
  }

  // Notification e-mail : le lead est déjà en base, un échec d'e-mail ne doit
  // pas faire échouer la soumission.
  try {
    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_NOTIFICATION_EMAIL;
    if (resendKey && to) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "Expertise 360 <onboarding@resend.dev>",
        to,
        replyTo: lead.email,
        subject: `Nouveau lead — ${lead.nom}${lead.organisation ? ` (${lead.organisation})` : ""}`,
        text: [
          `Nom : ${lead.nom}`,
          `Organisation : ${lead.organisation ?? "—"}`,
          `E-mail : ${lead.email}`,
          `Type de mission : ${lead.type_mission ?? "—"}`,
          "",
          "Message :",
          lead.message,
        ].join("\n"),
      });
    } else {
      console.warn("submitContact: RESEND_API_KEY / CONTACT_NOTIFICATION_EMAIL manquants — notification e-mail ignorée");
    }
  } catch (mailError) {
    console.error("submitContact: envoi Resend échoué", mailError);
  }

  return {
    status: "success",
    message: "Merci, votre demande a bien été envoyée. Nous revenons vers vous rapidement.",
  };
}
