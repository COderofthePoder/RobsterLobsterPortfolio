import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section id="hero" className="relative flex min-h-svh items-center overflow-hidden" aria-label="Intro">
    {/* Hintergrund-Video (nur Desktop, respektiert reduced-motion via CSS-Pause nicht nötig — Poster als Fallback) */}
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <video
        className="hidden h-full w-full object-cover opacity-50 motion-reduce:hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/assets/video/hero-poster.webp"
      >
        <source src="/assets/video/hero-loop.webm" type="video/webm" />
        <source src="/assets/video/hero-loop.mp4" type="video/mp4" />
      </video>
      <img
        src="/assets/video/hero-poster.webp"
        alt=""
        className="h-full w-full object-cover opacity-50 motion-reduce:block md:hidden"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
    </div>

    <div className="container py-32">
      <p className="section-label reveal">Webdesign & Entwicklung — Schweiz</p>
      <h1 className="reveal max-w-4xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl">
        Websites, die <span className="text-primary">verkaufen</span>.
        <br />
        Entwickelt mit Ingenieurs&#8209;Präzision.
      </h1>
      <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground [transition-delay:120ms]">
        Ich bin Robin Fäh — Software Engineer und Webdesigner. Ich baue massgeschneiderte
        Websites für Firmen und Selbstständige, die nicht nur gut aussehen, sondern messbar
        performen: Ladezeit unter einer Sekunde, Lighthouse 95+.
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
