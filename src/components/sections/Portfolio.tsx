import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { caseStudies } from "@/content/caseStudies";

const Portfolio = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="portfolio" ref={ref} className="py-24 sm:py-32" aria-labelledby="portfolio-titel">
      <div className="container">
        <p className="section-label reveal">Portfolio</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="portfolio-titel" className="reveal max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ausgewählte Projekte.
            <br />
            <span className="text-muted-foreground">Mit messbaren Resultaten.</span>
          </h2>
          <p className="reveal max-w-xs text-sm text-muted-foreground">
            Jede Case Study zeigt Ausgangslage, Lösung und konkrete Kennzahlen.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              to={`/projekte/${cs.slug}`}
              className="reveal group block cursor-pointer"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={cs.image}
                  alt={`Projekt-Mockup: ${cs.title}`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    {cs.category} — {cs.year}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-primary sm:text-xl">
                    {cs.title}
                  </h3>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
