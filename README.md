# Robin Fäh — Portfolio & Webdesign

Premium-Portfoliowebsite: dunkles Theme, Akzentfarbe Chartreuse (`#CDFF57`),
Typografie Space Grotesk (Display) + Inter (Text). Lovable-Standardstack:
**Vite + React + TypeScript + Tailwind CSS + shadcn/ui**, Supabase via
Lovable-Integration.

## Entwicklung

```sh
npm install
npm run dev     # Dev-Server auf Port 8080
npm run build   # Produktions-Build
```

## Wie pflege ich Inhalte?

**Im Repo (statische Inhalte, selten geändert):**

| Inhalt | Datei |
| --- | --- |
| Leistungen & Preise | `src/content/services.ts` |
| Prozess-Schritte | `src/content/process.ts` |
| FAQ | `src/content/faq.ts` |
| Case Studies (Platzhalter) | `src/content/caseStudies.ts` |
| Über-mich-Texte | `src/components/sections/About.tsx` |

**In Supabase (optional, ohne Deploy änderbar):** Die Tabellen `projects` und
`reviews` sind vorbereitet (inkl. `published`-Flag). Aktuell liest das Frontend
die Case Studies aus `src/content/caseStudies.ts` — sobald echte Projekte in
Supabase erfasst sind, kann die Datenquelle umgestellt werden (Query via
`@tanstack/react-query` + `supabase.from("projects").select()`).

## Supabase einrichten

1. In Lovable die **Supabase-Integration** verbinden (Project Settings → Integrations).
   Lovable setzt dann `VITE_SUPABASE_URL` und `VITE_SUPABASE_PUBLISHABLE_KEY`
   (siehe `.env.example`) bzw. aktualisiert `src/integrations/supabase/client.ts`.
2. Migration ausführen: `supabase/migrations/20260705120000_initial_schema.sql`
   — entweder via Lovable, Supabase CLI (`supabase db push`) oder per Copy-Paste
   im Supabase SQL-Editor.
3. RLS ist aktiv: anonyme Besucher dürfen **nur** in `contact_requests`
   einfügen und veröffentlichte (`published = true`) `projects`/`reviews` lesen.
   Keine Service-Keys im Frontend.

Kontaktanfragen landen in der Tabelle `contact_requests`
(Name, E-Mail, Projektbeschrieb, Budget-Range, Timestamp). Spam-Schutz:
Honeypot-Feld + Client-Validierung.

## Lovable-Synchronisation

Das Repo ist auf den Lovable-Standardstack ausgelegt (`vite.config.ts` mit
`lovable-tagger`, Struktur `src/pages`, `src/components`,
`src/integrations/supabase`). Lovable synchronisiert bidirektional mit dem
Branch **`main`** — Änderungen hier landen in Lovable und umgekehrt. Die
Build-Toolchain (Vite) nicht ersetzen.

## Assets

Alle Visuals wurden mit Higgsfield generiert und liegen optimiert (WebP,
komprimiertes MP4/WebM) unter `public/assets/`:

- `video/hero-loop.{mp4,webm}` + `hero-poster.webp` — Hero-Hintergrund (Desktop; mobil nur Poster)
- `mockups/case-{1..4}.webp` — Projekt-Mockups der Platzhalter-Case-Studies
- `portrait-placeholder.webp` — abstraktes Über-mich-Visual (durch echtes Foto ersetzen)
- `section-texture.webp` — dezente Hintergrund-Textur (Qualitäts-Sektion)
- `og-image.jpg` — Social-Media-Vorschaubild

## Offene [PLATZHALTER] — vor Livegang ersetzen

1. **4 Case Studies** in `src/content/caseStudies.ts`: Titel, Texte
   (Ausgangslage/Lösung/Resultat), Kennzahlen, Kundenzitate mit Name/Firma —
   alles klar mit `[PLATZHALTER]` markiert. Erfinde nichts: nur echte Projekte
   und echte Zitate eintragen.
2. **Porträtfoto** in `src/components/sections/About.tsx`
   (`/assets/portrait-placeholder.webp` ersetzen und Badge «[Platzhalter —
   echtes Porträt folgt]» entfernen).
3. **Impressum** (`src/pages/Impressum.tsx`): Adresse.
4. **Datenschutzerklärung** (`src/pages/Datenschutz.tsx`): Adresse,
   Supabase-Region, Hosting-Anbieter — vor Livegang rechtlich prüfen.
5. **Domain**: `https://robinfaeh.ch` in `index.html` (Canonical, OG, JSON-LD),
   `public/sitemap.xml` und `public/robots.txt` durch die echte Domain ersetzen.
6. **Supabase `project_id`** in `supabase/config.toml` (setzt Lovable beim
   Verbinden).
7. Optional: OG-Image (`public/assets/og-image.jpg`) mit echtem Branding neu
   erstellen.

## Qualitätsziele

Lighthouse 95+ in allen Kategorien, Ladezeit < 1 s, vollständig responsive
(Mobile-first), `prefers-reduced-motion` wird respektiert, semantisches HTML,
Fokus-States, schema.org (Person, ProfessionalService), Sitemap + robots.txt.
