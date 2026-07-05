// ─────────────────────────────────────────────────────────────────────────────
// [PLATZHALTER] Alle Case Studies in dieser Datei sind Platzhalter und müssen
// durch echte Projekte ersetzt werden. Alternativ können Projekte über die
// Supabase-Tabellen `projects` und `reviews` gepflegt werden (siehe README).
// ─────────────────────────────────────────────────────────────────────────────

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  image: string;
  situation: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  quote: { text: string; author: string; company: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "platzhalter-projekt-1",
    title: "[PLATZHALTER — durch echtes Projekt ersetzen] Business-Website Handwerksbetrieb",
    category: "Business-Website",
    year: "2026",
    summary:
      "[PLATZHALTER] Kompletter Webauftritt für einen regionalen Handwerksbetrieb — von der Positionierung bis zur Anfrage-Strecke.",
    image: "/assets/mockups/case-1.webp",
    situation:
      "[PLATZHALTER — Ausgangslage beschreiben: Was war das Problem? Veraltete Website, keine Anfragen über die Website, schlechte Auffindbarkeit bei Google, ...]",
    solution:
      "[PLATZHALTER — Lösung beschreiben: Neues Design, klare Leistungsübersicht, optimierte Anfrage-Strecke, technische Umsetzung, ...]",
    result:
      "[PLATZHALTER — Resultat beschreiben: Konkrete Verbesserungen nach dem Launch, z. B. mehr Anfragen, bessere Rankings, ...]",
    metrics: [
      { label: "Ladezeit", value: "[0.X s]" },
      { label: "Lighthouse-Score", value: "[9X]" },
      { label: "Anfragen pro Monat", value: "[+XX %]" },
    ],
    quote: {
      text: "[PLATZHALTER — echtes Kundenzitat einfügen]",
      author: "[Vorname Name]",
      company: "[Firma]",
    },
  },
  {
    slug: "platzhalter-projekt-2",
    title: "[PLATZHALTER — durch echtes Projekt ersetzen] Landingpage Produktlancierung",
    category: "Landingpage",
    year: "2026",
    summary:
      "[PLATZHALTER] Conversion-fokussierte Landingpage für eine Produktlancierung — in unter drei Wochen von der Idee bis live.",
    image: "/assets/mockups/case-2.webp",
    situation:
      "[PLATZHALTER — Ausgangslage beschreiben: Kampagnenstart geplant, keine geeignete Zielseite, hoher Zeitdruck, ...]",
    solution:
      "[PLATZHALTER — Lösung beschreiben: Fokussierte One-Pager-Struktur, klare Call-to-Actions, Tracking-Setup, ...]",
    result:
      "[PLATZHALTER — Resultat beschreiben: Conversion-Rate, Kampagnen-Performance, ...]",
    metrics: [
      { label: "Conversion-Rate", value: "[X.X %]" },
      { label: "Ladezeit", value: "[0.X s]" },
      { label: "Time-to-Launch", value: "[X Wochen]" },
    ],
    quote: {
      text: "[PLATZHALTER — echtes Kundenzitat einfügen]",
      author: "[Vorname Name]",
      company: "[Firma]",
    },
  },
  {
    slug: "platzhalter-projekt-3",
    title: "[PLATZHALTER — durch echtes Projekt ersetzen] Redesign & Performance-Optimierung",
    category: "Redesign",
    year: "2025",
    summary:
      "[PLATZHALTER] Technisches Redesign einer bestehenden Website — messbar schneller, moderner Auftritt, bessere Rankings.",
    image: "/assets/mockups/case-3.webp",
    situation:
      "[PLATZHALTER — Ausgangslage beschreiben: Langsame Website, hohe Absprungrate, veraltetes CMS, ...]",
    solution:
      "[PLATZHALTER — Lösung beschreiben: Technologie-Migration, Bild-Optimierung, neues Design-System, ...]",
    result:
      "[PLATZHALTER — Resultat beschreiben: Ladezeit-Verbesserung, Core Web Vitals, SEO-Effekt, ...]",
    metrics: [
      { label: "Ladezeit vorher → nachher", value: "[X.X s → 0.X s]" },
      { label: "Lighthouse-Score", value: "[9X]" },
      { label: "Absprungrate", value: "[−XX %]" },
    ],
    quote: {
      text: "[PLATZHALTER — echtes Kundenzitat einfügen]",
      author: "[Vorname Name]",
      company: "[Firma]",
    },
  },
  {
    slug: "platzhalter-projekt-4",
    title: "[PLATZHALTER — durch echtes Projekt ersetzen] Website Selbstständige Dienstleisterin",
    category: "Business-Website",
    year: "2025",
    summary:
      "[PLATZHALTER] Persönlicher, professioneller Webauftritt für eine selbstständige Dienstleisterin — inklusive Online-Terminbuchung.",
    image: "/assets/mockups/case-4.webp",
    situation:
      "[PLATZHALTER — Ausgangslage beschreiben: Kein Webauftritt, Kundengewinnung nur über Empfehlungen, ...]",
    solution:
      "[PLATZHALTER — Lösung beschreiben: Positionierung, Design mit persönlicher Note, Terminbuchungs-Integration, ...]",
    result:
      "[PLATZHALTER — Resultat beschreiben: Neue Kundschaft über die Website, Zeitersparnis durch Online-Buchung, ...]",
    metrics: [
      { label: "Lighthouse-Score", value: "[9X]" },
      { label: "Neue Anfragen", value: "[+XX %]" },
      { label: "Ladezeit", value: "[0.X s]" },
    ],
    quote: {
      text: "[PLATZHALTER — echtes Kundenzitat einfügen]",
      author: "[Vorname Name]",
      company: "[Firma]",
    },
  },
];
