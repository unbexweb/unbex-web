-- Bolsa de trabajo / directorio de profesionales — Comunidad Unbex
-- Ejecutar en el SQL Editor de Supabase (Project > SQL Editor > New query)

create table if not exists profesionales (
  id uuid default gen_random_uuid() primary key,
  nombre text not null,
  apellido text not null,
  rubro text not null,
  descripcion text,
  telefono text not null,
  instagram text,
  zona text,
  estado text default 'pendiente', -- pendiente | aprobado | rechazado
  token_moderacion uuid default gen_random_uuid(),
  created_at timestamp default now()
);

alter table profesionales enable row level security;

-- Lectura pública: solo publicaciones aprobadas
create policy "Lectura publica de aprobados"
  on profesionales for select
  using (estado = 'aprobado');

-- No se define policy de insert/update para el rol "anon" ni "authenticated":
-- toda escritura pasa por las API routes usando la service role key,
-- que ignora RLS. Esto evita que cualquiera pueda insertar o moderar
-- publicaciones directamente contra Supabase.

-- ─────────────────────────────────────────────────────────────────────────
-- Migración: agregar zona/barrio (filtro de cercanía en el directorio)
-- Ejecutar solo si la tabla profesionales ya existía sin esta columna.
-- ─────────────────────────────────────────────────────────────────────────
alter table profesionales add column if not exists zona text;
