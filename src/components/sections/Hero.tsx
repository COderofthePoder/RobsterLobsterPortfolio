import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/HeroBackground";

const Hero = () => (
  <section id="hero" className="relative flex min-h-svh items-center overflow-hidden" aria-label="Intro">
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,hsl(78_100%_67%/0.07),transparent_70%)]" />
      <HeroBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
    </div>

    <div className="container py-28 sm:py-32">
      <p className="section-label reveal">Webdesign, Entwicklung & Automation — Schweiz</p>
      <h1 className="reveal max-w-4xl text-4xl font-bold leading-[1.08] sm:text-6xl sm:leading-[1.05] lg:text-7xl xl:text-8xl">
        Websites, die <span className="text-primary">verkaufen</span>.
        <br />
        Entwickelt mit Ingenieurs-Präzision.
      </h1>
      <p className="reveal mt-6 max-w-xl text-base leading-relaxed sm:mt-8 sm:text-lg text-muted-foreground [transition-delay:120ms]">
        Ich bin Robin Fäh — Software Engineer und Webdesigner. Ich baue massgeschneiderte
        Websites und Automationen für Firmen und Selbstständige, die nicht nur gut aussehen,
        sondern messbar performen: Ladezeit unter einer Sekunde, Lighthouse 95+.
      </p>
      <div className="reveal mt-10 flex flex-wrap items-center gap-4 [transition-delay:240ms]">
        <Button asChild size="lg">
          <a href="#kontakt">
            Projekt anfragen <ArrowRight />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#portfolio">Portfolio ansehen</a>
        </Button>
      </div>
    </div>

    <a
      href="#leistungen"
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary motion-reduce:hidden md:block"
      aria-label="Zu den Leistungen scrollen"
    >
      <ArrowDown className="h-5 w-5 animate-bounce" />
    </a>
  </section>
);

export default Hero;
