import { useReveal } from "@/hooks/useReveal";
import { services } from "@/content/services";

const Services = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="leistungen" ref={ref} className="container py-24 sm:py-32" aria-labelledby="leistungen-titel">
      <p className="section-label reveal">Leistungen</p>
      <h2 id="leistungen-titel" className="reveal max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl">
        Klar geschnittene Angebote.
        <br />
        <span className="text-muted-foreground">Transparente Preise.</span>
      </h2>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {services.map((service, i) => (
          <article
            key={service.title}
            className="reveal group relative bg-card p-8 transition-colors duration-300 hover:bg-secondary sm:p-10"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
            <h3 className="mt-6 font-display text-xl font-semibold sm:text-2xl">{service.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display text-lg font-semibold text-primary">{service.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
