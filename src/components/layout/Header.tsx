import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
  }`;

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold">Elektrofachbetrieb</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>Start</NavLink>
          <NavLink to="/ueber-mich" className={navLinkClass}>Über mich</NavLink>
          <NavLink to="/referenzen" className={navLinkClass}>Referenzen</NavLink>
          <NavLink to="/leistungen" className={navLinkClass}>Leistungen</NavLink>
          <NavLink to="/impressum" className={navLinkClass}>Impressum</NavLink>
          <NavLink to="/agb" className={navLinkClass}>AGB</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero">
            <a href="mailto:kontakt@elektrofachbetrieb.de" aria-label="Angebot anfragen">
              Angebot anfragen
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
