import { useReveal } from "@/hooks/useReveal";
import { processSteps } from "@/content/process";

const Process = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="prozess" ref={ref} className="border-y border-border bg-card/40 py-24 sm:py-32" aria-labelledby="prozess-titel">
      <div className="container">
        <p className="section-label reveal">Prozess</p>
        <h2 id="prozess-titel" className="reveal max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl">
          Fünf Schritte bis zum Launch.
          <br />
          <span className="text-muted-foreground">Kein Blindflug, keine Überraschungen.</span>
        </h2>

        <ol className="relative mt-16 space-y-0 border-l border-border pl-8 sm:pl-12">
          {processSteps.map((step, i) => (
            <li key={step.step} className="reveal relative pb-12 last:pb-0" style={{ transitionDelay: `${i * 90}ms` }}>
              <span
                className="absolute -left-8 top-1 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border border-primary bg-background sm:-left-12"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <p className="font-mono text-xs tracking-widest text-primary">{step.step}</p>
              <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">{step.title}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
