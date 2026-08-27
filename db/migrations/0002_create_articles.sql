-- Publications du site : articles natifs (markdown) et posts LinkedIn
-- référencés par URL (embed officiel). Accès : uniquement le serveur Next.js
-- (DATABASE_URL) ; le backoffice /admin est protégé par mot de passe côté
-- serveur (ADMIN_PASSWORD + cookie signé AUTH_SECRET).

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  -- Date de publication affichée et utilisée pour le tri (modifiable en admin).
  published_at timestamptz,
  -- 'article' : rédigé dans le backoffice ; 'linkedin' : post embarqué par URL.
  type text not null default 'article' check (type in ('article', 'linkedin')),
  status text not null default 'draft' check (status in ('draft', 'published')),
  title text not null check (char_length(title) between 1 and 200),
  -- Slug d'URL (articles natifs uniquement).
  slug text unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  excerpt text check (char_length(excerpt) <= 500),
  -- Corps markdown (articles natifs).
  content text,
  -- URL du post LinkedIn public (type 'linkedin').
  linkedin_url text,
  constraint article_shape check (
    (type = 'article' and slug is not null and content is not null)
    or (type = 'linkedin' and linkedin_url is not null)
  )
);

create index if not exists articles_published_idx
  on public.articles (status, published_at desc);
