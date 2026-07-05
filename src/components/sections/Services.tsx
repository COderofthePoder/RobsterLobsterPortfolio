import { useReveal } from "@/hooks/useReveal";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

const Services = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="leistungen" ref={ref} className="container py-24 sm:py-32" aria-labelledby="leistungen-titel">
      <p className="section-label reveal">Leistungen</p>
      <h2 id="leistungen-titel" className="reveal max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl">
        Klar geschnittene Angebote.
        <br />
        <span className="text-muted-foreground">Faire, transparente Preise.</span>
      </h2>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {services.map((service, i) => (
          <article
            key={service.title}
            className={cn(
              "reveal group relative bg-card p-6 transition-colors duration-300 hover:bg-secondary sm:p-10",
              service.featured && "bg-primary/[0.04] sm:col-span-2",
            )}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            {service.featured && (
              <span className="absolute right-6 top-6 rounded-full sm:right-8 sm:top-8 border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                Neu
              </span>
            )}
            <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
            <h3 className="mt-6 font-display text-xl font-semibold sm:text-2xl">{service.title}</h3>
            <div className={cn(service.featured && "sm:grid sm:grid-cols-2 sm:gap-10")}>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className={cn("mt-6 space-y-2 text-sm text-muted-foreground", service.featured && "sm:mt-3")}>
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 font-display text-lg font-semibold text-primary">{service.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
