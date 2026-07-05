import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="container flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
      <div>
        <p className="font-display text-lg font-bold">
          robin<span className="text-primary">fäh</span>
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Webdesign & Entwicklung — Schweiz
        </p>
      </div>
      <nav aria-label="Rechtliches">
        <ul className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <li>
            <a href="mailto:robinfaeh.123@gmail.com" className="transition-colors hover:text-foreground">
              robinfaeh.123@gmail.com
            </a>
          </li>
          <li>
            <Link to="/impressum" className="transition-colors hover:text-foreground">Impressum</Link>
          </li>
          <li>
            <Link to="/datenschutz" className="transition-colors hover:text-foreground">Datenschutz</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="container pb-8">
      <p className="text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Robin Fäh. Diese Website erreicht Lighthouse 95+ — genau wie Ihre.
      </p>
    </div>
  </footer>
);

export default Footer;
