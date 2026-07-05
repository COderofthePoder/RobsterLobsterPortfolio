import { useState, type FormEvent } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import { useReveal } from "@/hooks/useReveal";

const budgetOptions = [
  "unter CHF 2'000",
  "CHF 2'000 – 5'000",
  "CHF 5'000 – 10'000",
  "über CHF 10'000",
  "noch offen",
];

const Contact = () => {
  const ref = useReveal<HTMLElement>();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Spam-Schutz: Honeypot-Feld — Bots füllen es aus, Menschen sehen es nicht.
    if ((data.get("website") as string)?.length) {
      setSubmitted(true);
      return;
    }

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const description = (data.get("description") as string)?.trim();

    if (!name || name.length < 2) {
      toast.error("Bitte geben Sie Ihren Namen an.");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      toast.error("Bitte geben Sie eine gültige E-Mail-Adresse an.");
      return;
    }
    if (!description || description.length < 10) {
      toast.error("Bitte beschreiben Sie Ihr Projekt in ein paar Sätzen.");
      return;
    }
    if (!budget) {
      toast.error("Bitte wählen Sie eine Budget-Range.");
      return;
    }

    if (!isSupabaseConfigured) {
      toast.error("Das Formular ist noch nicht verbunden. Schreiben Sie mir direkt: robinfaeh.123@gmail.com");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_requests").insert({
      name,
      email,
      project_description: description,
      budget_range: budget,
    });
    setSubmitting(false);

    if (error) {
      toast.error("Senden fehlgeschlagen. Schreiben Sie mir direkt: robinfaeh.123@gmail.com");
      return;
    }

    setSubmitted(true);
    toast.success("Anfrage gesendet — ich melde mich innert 48 Stunden.");
  };

  return (
    <section id="kontakt" ref={ref} className="container py-24 sm:py-32" aria-labelledby="kontakt-titel">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="section-label reveal">Kontakt</p>
          <h2 id="kontakt-titel" className="reveal text-3xl font-bold sm:text-4xl lg:text-5xl">
            Bereit für eine Website,
            <br />
            <span className="text-muted-foreground">die für Sie arbeitet?</span>
          </h2>
          <p className="reveal mt-6 leading-relaxed text-muted-foreground [transition-delay:120ms]">
            Erzählen Sie mir von Ihrem Projekt — Sie erhalten innert 48 Stunden eine Antwort
            mit einer ehrlichen Einschätzung und den nächsten Schritten. Das Erstgespräch ist
            kostenlos und unverbindlich.
          </p>
          <a
            href="mailto:robinfaeh.123@gmail.com"
            className="reveal mt-8 inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary [transition-delay:200ms]"
          >
            <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
            robinfaeh.123@gmail.com
          </a>
        </div>

        <div className="reveal [transition-delay:150ms]">
          {submitted ? (
            <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-border bg-card p-10">
              <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
              <h3 className="mt-6 font-display text-2xl font-semibold">Vielen Dank!</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Ihre Anfrage ist angekommen. Ich melde mich innert 48 Stunden persönlich bei
                Ihnen — versprochen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-10" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" autoComplete="name" placeholder="Ihr Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" placeholder="ihre@email.ch" required />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="budget">Budget-Range</Label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger id="budget" aria-label="Budget-Range wählen">
                    <SelectValue placeholder="Budget wählen…" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="description">Projektbeschrieb</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Worum geht es? Was ist das Ziel Ihrer Website? Gibt es einen Wunschtermin?"
                  required
                />
              </div>

              {/* Honeypot — für Menschen unsichtbar */}
              <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
                <label htmlFor="website">Website (leer lassen)</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto" disabled={submitting}>
                {submitting ? "Wird gesendet…" : "Anfrage senden"} <Send />
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                Ihre Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.
                Details in der <a href="/datenschutz" className="underline underline-offset-2 hover:text-foreground">Datenschutzerklärung</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
