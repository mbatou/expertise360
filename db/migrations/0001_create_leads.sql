-- Table des leads du formulaire de contact (brief §7).
-- Accès : uniquement le serveur Next.js (DATABASE_URL) — la base Neon n'est
-- jamais exposée au navigateur.
create table if not exists public.leads (
  id           uuid primary key default gen_random_uuid(),
  nom          text not null,
  organisation text,
  email        text not null,
  type_mission text,
  message      text not null,
  created_at   timestamptz not null default now()
);
