import { z } from "zod";

/** Validation côté serveur du formulaire de contact (brief §7). */
export const leadSchema = z.object({
  nom: z
    .string()
    .trim()
    .min(2, "Veuillez indiquer votre nom.")
    .max(200, "Le nom est trop long."),
  organisation: z.string().trim().max(200, "L'organisation est trop longue.").optional(),
  email: z
    .string()
    .trim()
    .min(1, "Veuillez indiquer votre e-mail.")
    .email("Veuillez indiquer un e-mail valide.")
    .max(320, "L'e-mail est trop long."),
  type_mission: z.string().trim().max(100).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Votre message doit contenir au moins 10 caractères.")
    .max(5000, "Votre message est trop long."),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadFieldErrors = Partial<Record<keyof LeadInput, string>>;
