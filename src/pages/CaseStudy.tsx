import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/caseStudies";
import NotFound from "./NotFound";

const CaseStudy = () => {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  useEffect(() => {
    if (cs) document.title = `${cs.title} — Robin Fäh`;
    return () => {
      document.title = "Robin Fäh — Webdesign & Entwicklung Schweiz | Websites, die verkaufen";
    };
  }, [cs]);

  if (!cs) return <NotFound />;

  const index = caseStudies.indexOf(cs);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container pb-20 pt-28 sm:pb-24 sm:pt-32">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Zurück zum Portfolio
        </Link>

        <p className="mt-10 font-mono text-xs uppercase tracking-widest text-primary">
          {cs.category} — {cs.year}
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{cs.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{cs.summary}</p>

        <img
          src={cs.image}
          alt={`Projekt-Mockup: ${cs.title}`}
          width={1600}
          height={1200}
          className="mt-12 aspect-[16/9] w-full rounded-2xl border border-border object-cover"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-20">
          <div className="space-y-12">
            <section aria-labelledby="ausgangslage">
              <h2 id="ausgangslage" className="font-display text-2xl font-semibold">Ausgangslage</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{cs.situation}</p>
            </section>
            <section aria-labelledby="loesung">
              <h2 id="loesung" className="font-display text-2xl font-semibold">Lösung</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{cs.solution}</p>
            </section>
            <section aria-labelledby="resultat">
              <h2 id="resultat" className="font-display text-2xl font-semibold">Resultat</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{cs.result}</p>
            </section>

            <figure className="rounded-2xl border border-border bg-card p-8">
              <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 font-display text-xl leading-relaxed">{cs.quote.text}</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                {cs.quote.author}, {cs.quote.company}
              </figcaption>
            </figure>
          </div>

          <aside>
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-lg font-semibold">Kennzahlen</h2>
              <dl className="mt-6 space-y-6">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-sm text-muted-foreground">{m.label}</dt>
                    <dd className="mt-1 font-display text-2xl font-bold text-primary">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
          <Button asChild size="lg">
            <a href="/#kontakt">
              Ähnliches Projekt anfragen <ArrowRight />
            </a>
          </Button>
          <Link
            to={`/projekte/${next.slug}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Nächstes Projekt <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
