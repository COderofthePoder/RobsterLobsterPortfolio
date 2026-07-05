import { useReveal } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";

const Stat = ({ target, suffix, label, decimals = 0 }: { target: number; suffix: string; label: string; decimals?: number }) => {
  const { ref, value } = useCountUp(target, 1400, decimals);
  return (
    <div>
      <p className="font-display text-3xl font-bold text-primary sm:text-5xl">
        <span ref={ref}>{value}</span>
        {suffix}
      </p>
      <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
};

const About = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="ueber-mich" ref={ref} className="container py-24 sm:py-32" aria-labelledby="ueber-mich-titel">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative order-2 lg:order-1">
          {/* [PLATZHALTER] Abstraktes Visual — durch echtes Porträtfoto von Robin ersetzen */}
          <img
            src="/assets/portrait-placeholder.webp"
            alt="Porträt-Platzhalter — wird durch ein Foto von Robin Fäh ersetzt"
            width={900}
            height={1200}
            loading="lazy"
            decoding="async"
            className="aspect-[3/4] w-full rounded-2xl border border-border object-cover"
          />
          <p className="absolute bottom-4 left-4 rounded-full bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
            [Platzhalter — echtes Porträt folgt]
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <p className="section-label reveal">Über mich</p>
          <h2 id="ueber-mich-titel" className="reveal text-3xl font-bold sm:text-4xl lg:text-5xl">
            Designer bauen schöne Websites.
            <br />
            <span className="text-muted-foreground">Ich baue schöne, die auch technisch exzellent sind.</span>
          </h2>
          <div className="reveal mt-8 space-y-4 leading-relaxed text-muted-foreground [transition-delay:120ms]">
            <p>
              Ich bin gelernter Applikationsentwickler (EFZ) und arbeite seit fünf Jahren als
              Software Engineer. Webdesign ist für mich kein Baukasten-Handwerk, sondern
              Ingenieursarbeit: Jede Website, die ich baue, ist von Grund auf massgeschneidert —
              performant, sicher und mit sauberem Code.
            </p>
            <p>
              Das unterscheidet mich von reinen Designern: Bei mir bekommen Sie beides aus einer
              Hand. Ein Design, das Ihre Marke trägt — und eine technische Basis, die bei Google
              punktet, blitzschnell lädt und morgen nicht schon wieder veraltet ist.
            </p>
            <p>
              Diese Website ist mein bestes Argument: Prüfen Sie ihre Ladezeit, ihren
              Lighthouse-Score, ihre Details. Genau diese Qualität baue ich für Sie.
            </p>
          </div>

          <div className="reveal mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:mt-12 sm:gap-6 sm:pt-10 [transition-delay:200ms]">
            <Stat target={5} suffix="+" label="Jahre als Software Engineer" />
            <Stat target={95} suffix="+" label="Lighthouse-Score, garantiert" />
            <Stat target={0.8} suffix="s" label="Typische Ladezeit" decimals={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
