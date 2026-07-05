import { useReveal } from "@/hooks/useReveal";

const flows = [
  {
    id: "workflow",
    title: "Anfrage → CRM",
    description:
      "Eine Kontaktanfrage trifft ein und landet automatisch in Ihrem CRM, Posteingang oder Slack — sekundenschnell, ohne Abtippen.",
  },
  {
    id: "chatbot",
    title: "KI-Chatbot",
    description:
      "Beantwortet Fragen zu Ihrem Angebot rund um die Uhr, qualifiziert Interessenten und erfasst Leads direkt auf Ihrer Website.",
  },
  {
    id: "integrations",
    title: "Tools verbinden",
    description:
      "Ihre Tools sprechen miteinander: Offerten, Terminbestätigungen, Rechnungen — Daten fliessen automatisch dorthin, wo sie hingehören.",
  },
] as const;

const AutomationShowcase = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="automation"
      ref={ref}
      className="border-y border-border bg-card/40 py-24 sm:py-32"
      aria-labelledby="automation-titel"
    >
      <div className="container">
        <p className="section-label reveal">Automation in Aktion</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="automation-titel" className="reveal max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl">
            So sehen Automationen aus.
            <br />
            <span className="text-muted-foreground">Abläufe, die von selbst laufen.</span>
          </h2>
          <p className="reveal max-w-xs text-sm text-muted-foreground">
            Drei Beispiele aus der Praxis — im Abo ab CHF 99/Mt., abgestimmt auf Ihr Projekt.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {flows.map((flow, i) => (
            <figure key={flow.id} className="reveal group" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <video
                  className="aspect-video w-full object-cover motion-reduce:hidden"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={`/assets/automation/${flow.id}-poster.webp`}
                  aria-hidden="true"
                >
                  <source src={`/assets/automation/${flow.id}.webm`} type="video/webm" />
                  <source src={`/assets/automation/${flow.id}.mp4`} type="video/mp4" />
                </video>
                <img
                  src={`/assets/automation/${flow.id}-poster.webp`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="hidden aspect-video w-full object-cover motion-reduce:block"
                  aria-hidden="true"
                />
              </div>
              <figcaption className="mt-5">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">0{i + 1}</p>
                <h3 className="mt-2 font-display text-lg font-semibold sm:text-xl">{flow.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{flow.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationShowcase;
