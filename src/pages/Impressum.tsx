import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="container max-w-2xl pb-24 pt-32">
      <h1 className="text-3xl font-bold sm:text-4xl">Impressum</h1>
      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">Verantwortlich für diese Website</h2>
          <p className="mt-3">
            Robin Fäh
            <br />
            [PLATZHALTER — Strasse und Hausnummer]
            <br />
            [PLATZHALTER — PLZ und Ort]
            <br />
            Schweiz
          </p>
          <p className="mt-3">
            E-Mail: <a href="mailto:robinfaeh.123@gmail.com" className="text-primary underline-offset-4 hover:underline">robinfaeh.123@gmail.com</a>
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">Haftungsausschluss</h2>
          <p className="mt-3">
            Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr
            übernommen. Haftungsansprüche gegen den Betreiber wegen Schäden materieller oder
            immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der
            veröffentlichten Informationen entstanden sind, werden ausgeschlossen.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">Urheberrechte</h2>
          <p className="mt-3">
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern oder anderen Dateien auf
            dieser Website gehören ausschliesslich Robin Fäh oder den speziell genannten
            Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche
            Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Impressum;
