import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
    <p className="font-mono text-sm uppercase tracking-widest text-primary">Fehler 404</p>
    <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Diese Seite existiert nicht.</h1>
    <p className="mt-4 max-w-md text-muted-foreground">
      Der Link ist veraltet oder die Seite wurde verschoben. Zurück zur Startseite — dort
      finden Sie alles Wichtige.
    </p>
    <Button asChild size="lg" className="mt-8">
      <Link to="/">Zur Startseite</Link>
    </Button>
  </div>
);

export default NotFound;
