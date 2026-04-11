# Pendientes — Unbex Web (migración Next.js)

## Alta prioridad

- [ ] **Sección Precios** — completar con planes y valores reales (actualmente placeholder vacío en `app/page.jsx`)
- [ ] **Sección Contacto** — agregar mapa, redes y datos de contacto (actualmente placeholder vacío en `app/page.jsx`)

## Media prioridad

- [ ] **Página 404 personalizada** — crear `app/not-found.jsx` con diseño del sitio en vez de la página genérica de Next.js
- [ ] **Open Graph / meta social** — agregar `og:image`, `og:url` y `twitter:card` en `app/layout.jsx` para que el link se vea bien al compartir en WhatsApp/Instagram
- [ ] **Videos de disciplinas** — cargar IDs de YouTube en `.env.local` para las disciplinas que tienen video (actualmente solo Crossfit tiene)
- [ ] **HSTS** — descomentar `Strict-Transport-Security` en `next.config.mjs` una vez que el sitio esté en producción con HTTPS

## Baja prioridad / A evaluar

- [ ] **Favicon y manifest** — agregar `manifest.json` y íconos para PWA / "Agregar a pantalla de inicio"
- [ ] **Textos de disciplinas** — evaluar si conviene moverlos a un CMS o JSON para que el cliente los edite sin tocar código
- [ ] **Merge a main** — cuando la migración Next.js esté aprobada, mergear `migration-next` → `main`
