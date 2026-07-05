import { Globe, Rocket, RefreshCw, Wrench } from "lucide-react";

export const services = [
  {
    icon: Globe,
    title: "Business-Website",
    description:
      "Ihr digitaler Auftritt, der Vertrauen schafft und Anfragen generiert. Massgeschneidert auf Ihre Marke — vom Konzept bis zum Launch.",
    features: ["Individuelles Design", "CMS für eigene Inhalte", "SEO-Grundausstattung", "Kontakt- & Anfrage-Formulare"],
    price: "ab CHF 3'900",
  },
  {
    icon: Rocket,
    title: "Landingpage",
    description:
      "Eine fokussierte Seite mit einem Ziel: Conversion. Ideal für Kampagnen, Produktlancierungen oder als schlanker Erstauftritt.",
    features: ["Conversion-optimiert", "A/B-Test-ready", "Blitzschnelle Ladezeit", "Kampagnen-Tracking"],
    price: "ab CHF 1'900",
  },
  {
    icon: RefreshCw,
    title: "Redesign & Performance",
    description:
      "Ihre bestehende Website ist langsam oder wirkt veraltet? Ich modernisiere Design und Technik — messbar schneller, messbar besser.",
    features: ["Performance-Audit", "Modernes Redesign", "Core Web Vitals Optimierung", "SEO-Erhalt bei Migration"],
    price: "ab CHF 2'900",
  },
  {
    icon: Wrench,
    title: "Wartung & Betreuung",
    description:
      "Damit Ihre Website sicher, aktuell und schnell bleibt. Updates, Monitoring und kleine Anpassungen — ohne dass Sie sich kümmern müssen.",
    features: ["Sicherheits-Updates", "Uptime-Monitoring", "Inhalts-Anpassungen", "Monatlicher Report"],
    price: "ab CHF 90/Mt.",
  },
] as const;
