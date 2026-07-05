import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/useReveal";
import { faqItems } from "@/content/faq";

const Faq = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="border-y border-border bg-card/40 py-24 sm:py-32" aria-labelledby="faq-titel">
      <div className="container grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="section-label reveal">FAQ</p>
          <h2 id="faq-titel" className="reveal text-3xl font-bold sm:text-4xl">
            Häufige Fragen.
          </h2>
          <p className="reveal mt-4 text-muted-foreground [transition-delay:120ms]">
            Ihre Frage ist nicht dabei? <a href="#kontakt" className="text-primary underline-offset-4 hover:underline">Fragen Sie mich direkt.</a>
          </p>
        </div>

        <Accordion type="single" collapsible className="reveal [transition-delay:150ms]">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
