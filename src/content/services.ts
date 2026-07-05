import { Globe, Rocket, RefreshCw, Wrench, Bot } from "lucide-react";

export const services = [
  {
    icon: Rocket,
    title: "Landingpage",
    description:
      "Eine fokussierte Seite mit einem Ziel: Conversion. Ideal für Kampagnen, Produktlancierungen oder als schlanker Erstauftritt.",
    features: ["Conversion-optimiert", "Blitzschnelle Ladezeit", "Kampagnen-Tracking", "In 2–3 Wochen live"],
    price: "ab CHF 990",
    featured: false,
  },
  {
    icon: Globe,
    title: "Business-Website",
    description:
      "Ihr digitaler Auftritt, der Vertrauen schafft und Anfragen generiert. Massgeschneidert auf Ihre Marke — vom Konzept bis zum Launch.",
    features: ["Individuelles Design", "Inhalte selbst pflegbar", "SEO-Grundausstattung", "Kontakt- & Anfrage-Formulare"],
    price: "ab CHF 2'400",
    featured: false,
  },
  {
    icon: RefreshCw,
    title: "Redesign & Performance",
    description:
      "Ihre bestehende Website ist langsam oder wirkt veraltet? Ich modernisiere Design und Technik — messbar schneller, messbar besser.",
    features: ["Performance-Audit", "Modernes Redesign", "Core Web Vitals Optimierung", "SEO-Erhalt bei Migration"],
    price: "ab CHF 1'400",
    featured: false,
  },
  {
    icon: Wrench,
    title: "Wartung & Betreuung",
    description:
      "Damit Ihre Website sicher, aktuell und schnell bleibt. Updates, Monitoring und kleine Anpassungen — ohne dass Sie sich kümmern müssen.",
    features: ["Sicherheits-Updates", "Uptime-Monitoring", "Inhalts-Anpassungen", "Fairer Monatspreis, monatlich kündbar"],
    price: "ab CHF 59/Mt.",
    featured: false,
  },
  {
    icon: Bot,
    title: "Web-Automation & KI-Chatbots",
    description:
      "Repetitive Abläufe kosten Sie jede Woche Stunden — ich automatisiere sie. Kontaktanfragen, die direkt in Ihrem CRM oder Posteingang landen, automatische Offerten und Terminbestätigungen, oder ein KI-Chatbot auf Ihrer Website, der Fragen beantwortet und Leads erfasst. Umgesetzt mit n8n: über 400 Tools anbindbar, kein Vendor-Lock-in. Als Abo — Einrichtung, Betrieb, Monitoring und laufende Anpassungen inklusive, Preis nach Projektgrösse, monatlich kündbar.",
    features: [
      "KI-Chatbot mit Ihrem Firmenwissen",
      "Anfragen → CRM / E-Mail / Slack automatisch",
      "Offerten-, Termin- & Rechnungs-Workflows",
      "Betrieb, Monitoring & Anpassungen inklusive",
    ],
    price: "im Abo ab CHF 99/Mt.",
    featured: true,
  },
] as const;
