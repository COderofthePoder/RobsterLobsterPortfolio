-- ============================================================================
-- Portfolio Robin Fäh — Initiales Schema
-- Tabellen: contact_requests, projects, reviews
-- RLS: anonym nur INSERT auf contact_requests, SELECT auf veröffentlichte
--      projects/reviews. Keine offenen Schreibrechte.
-- ============================================================================

-- Kontaktanfragen ------------------------------------------------------------
create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 200),
  email text not null check (char_length(email) between 5 and 320),
  project_description text not null check (char_length(project_description) between 10 and 5000),
  budget_range text not null check (char_length(budget_range) between 1 and 100),
  created_at timestamptz not null default now()
);

alter table public.contact_requests enable row level security;

-- Anonyme Besucher dürfen Anfragen einreichen — sonst nichts.
create policy "Anon kann Kontaktanfragen einreichen"
  on public.contact_requests
  for insert
  to anon
  with check (true);

-- Kein SELECT/UPDATE/DELETE für anon: bewusst keine weiteren Policies.

-- Projekte / Case Studies ----------------------------------------------------
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null,
  summary text not null default '',
  situation text not null default '',
  solution text not null default '',
  result text not null default '',
  metrics jsonb not null default '[]'::jsonb,
  image_url text,
  published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

create policy "Veröffentlichte Projekte sind öffentlich lesbar"
  on public.projects
  for select
  to anon
  using (published = true);

-- Kundenstimmen ----------------------------------------------------------------
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects (id) on delete set null,
  quote text not null,
  author_name text not null,
  author_company text not null,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.reviews enable row level security;

create policy "Veröffentlichte Reviews sind öffentlich lesbar"
  on public.reviews
  for select
  to anon
  using (published = true);
