import { Gauge, ShieldCheck, Smartphone, Search, Scale, Code2 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const standards = [
  {
    icon: Gauge,
    title: "Ladezeit unter 1 Sekunde",
    description: "Optimierte Bilder, minimaler Code, modernes Hosting — Geschwindigkeit ist eingebaut, nicht nachgerüstet.",
  },
  {
    icon: Code2,
    title: "Lighthouse 95+",
    description: "Performance, Accessibility, Best Practices und SEO — in allen vier Kategorien, messbar und nachprüfbar.",
  },
  {
    icon: Smartphone,
    title: "Vollständig responsive",
    description: "Mobile-first entwickelt und auf echten Geräten getestet — vom kleinen Smartphone bis zum 4K-Bildschirm.",
  },
  {
    icon: Search,
    title: "SEO-Grundausstattung",
    description: "Saubere Struktur, Meta-Tags, strukturierte Daten und Sitemap — damit Google Sie findet und versteht.",
  },
  {
    icon: Scale,
    title: "DSG/DSGVO-konform",
    description: "Schweizer Datenschutzgesetz und DSGVO von Anfang an mitgedacht — inklusive Datenschutzerklärung und Impressum.",
  },
  {
    icon: ShieldCheck,
    title: "Sicher & wartbar",
    description: "Aktuelle Technologien, saubere Architektur, kein Plugin-Wildwuchs — Ihre Website bleibt sicher und erweiterbar.",
  },
];

const Quality = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="qualitaet" ref={ref} className="container py-24 sm:py-32" aria-labelledby="qualitaet-titel">
      <p className="section-label reveal">Tech- & Qualitätsversprechen</p>
      <h2 id="qualitaet-titel" className="reveal max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl">
        Standards, die jede
        <br />
        <span className="text-muted-foreground">meiner Websites erfüllt.</span>
      </h2>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {standards.map((s, i) => (
          <div key={s.title} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
            <s.icon className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quality;
