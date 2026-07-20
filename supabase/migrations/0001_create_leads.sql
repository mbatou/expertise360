-- Table des leads du formulaire de contact (brief §7).
create table public.leads (
  id           uuid primary key default gen_random_uuid(),
  nom          text not null,
  organisation text,
  email        text not null,
  type_mission text,
  message      text not null,
  created_at   timestamptz not null default now()
);

alter table public.leads enable row level security;

-- Pas d'accès public en lecture ni en écriture : aucune policy n'est créée.
-- Les insertions passent exclusivement par le serveur (service role, qui
-- contourne la RLS), via la Server Action `submitContact`.
