import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Datenschutz = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="container max-w-2xl pb-24 pt-32">
      <h1 className="text-3xl font-bold sm:text-4xl">Datenschutzerklärung</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        [PLATZHALTER — Diese Datenschutzerklärung ist eine Vorlage und muss vor dem Livegang
        geprüft und vervollständigt werden.]
      </p>
      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">1. Verantwortliche Person</h2>
          <p className="mt-3">
            Robin Fäh, [PLATZHALTER — Adresse], Schweiz —{" "}
            <a href="mailto:robinfaeh.123@gmail.com" className="text-primary underline-offset-4 hover:underline">robinfaeh.123@gmail.com</a>
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">2. Grundsatz</h2>
          <p className="mt-3">
            Die Bearbeitung von Personendaten richtet sich nach dem Schweizer
            Datenschutzgesetz (DSG) sowie — soweit anwendbar — nach der europäischen
            Datenschutz-Grundverordnung (DSGVO). Personendaten werden nur bearbeitet, soweit
            dies für die Bereitstellung dieser Website und die Bearbeitung von Anfragen
            erforderlich ist.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">3. Kontaktformular</h2>
          <p className="mt-3">
            Wenn Sie das Kontaktformular nutzen, werden die von Ihnen angegebenen Daten (Name,
            E-Mail-Adresse, Projektbeschrieb, Budget-Range) zur Bearbeitung Ihrer Anfrage
            gespeichert. Die Daten werden in einer Datenbank von Supabase gespeichert
            ([PLATZHALTER — Region/Hosting-Standort der Supabase-Instanz ergänzen]) und nicht
            an Dritte weitergegeben. Sie können jederzeit die Löschung Ihrer Daten verlangen.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">4. Hosting und Server-Logdaten</h2>
          <p className="mt-3">
            [PLATZHALTER — Hosting-Anbieter und ggf. anfallende Logdaten beschreiben, z. B.
            IP-Adresse, Datum/Uhrzeit, Browser-Typ.]
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">5. Cookies und Tracking</h2>
          <p className="mt-3">
            Diese Website verwendet keine Tracking-Cookies und keine Analyse-Tools von
            Drittanbietern. [PLATZHALTER — anpassen, falls später Analytics eingesetzt wird.]
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">6. Ihre Rechte</h2>
          <p className="mt-3">
            Sie haben das Recht auf Auskunft über Ihre gespeicherten Personendaten sowie auf
            deren Berichtigung oder Löschung. Wenden Sie sich dazu an die oben genannte
            Kontaktadresse.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Datenschutz;
