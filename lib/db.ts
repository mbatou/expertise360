import "server-only";

import { Pool } from "pg";

/**
 * Pool Postgres (Neon via l'intégration Vercel Marketplace, ou tout Postgres
 * standard). `DATABASE_URL` est injectée automatiquement par Vercel quand la
 * base Neon est connectée au projet (Storage → Connect Database).
 * Retourne null si l'environnement n'est pas configuré, pour que les
 * appelants dégradent proprement (liste vide, message d'erreur avec e-mail
 * de repli) — le site build et tourne sans base.
 */

let pool: Pool | null | undefined;

export function getDb(): Pool | null {
  if (pool !== undefined) return pool;
  const connectionString = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
  if (!connectionString) {
    pool = null;
    return pool;
  }
  pool = new Pool({
    connectionString,
    // Serverless : petites limites, connexions rendues vite ; l'endpoint
    // poolé de Neon (PgBouncer) absorbe la concurrence entre instances.
    max: 3,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });
  return pool;
}
