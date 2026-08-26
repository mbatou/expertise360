import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Session admin du backoffice /admin : cookie httpOnly signé HMAC-SHA256.
 * Un seul rédacteur (le fondateur) → mot de passe unique `ADMIN_PASSWORD`,
 * signature avec `AUTH_SECRET`. Aucune dépendance à Supabase Auth : cohérent
 * avec le modèle « service role côté serveur uniquement » du reste du site.
 */

const COOKIE_NAME = "e360_admin";
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 jours

function getSecret(): string | null {
  return process.env.AUTH_SECRET || null;
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD && getSecret());
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

export function verifyPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  return Boolean(expected) && safeEqual(candidate, expected as string);
}

/** Pose le cookie de session (à appeler après vérification du mot de passe). */
export async function createAdminSession(): Promise<void> {
  const secret = getSecret();
  if (!secret) throw new Error("AUTH_SECRET manquant");
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const payload = String(expiresAt);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, `${payload}.${sign(payload, secret)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(expiresAt),
  });
}

export async function destroyAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

/** Vrai si le cookie de session est présent, signé et non expiré. */
export async function isAdminAuthenticated(): Promise<boolean> {
  const secret = getSecret();
  if (!secret) return false;
  const cookieStore = await cookies();
  const raw = cookieStore.get(COOKIE_NAME)?.value;
  if (!raw) return false;
  const dotIndex = raw.lastIndexOf(".");
  if (dotIndex <= 0) return false;
  const payload = raw.slice(0, dotIndex);
  const signature = raw.slice(dotIndex + 1);
  if (!safeEqual(signature, sign(payload, secret))) return false;
  const expiresAt = Number(payload);
  return Number.isFinite(expiresAt) && Date.now() < expiresAt;
}
