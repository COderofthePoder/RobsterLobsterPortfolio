import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Quality from "@/components/sections/Quality";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  const heroRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Zum Inhalt springen
      </a>
      <Navbar />
      <main id="main">
        <div ref={heroRef}>
          <Hero />
        </div>
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Quality />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
