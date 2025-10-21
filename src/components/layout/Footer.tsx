import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Elektrotechnik Stanzel. Alle Rechte vorbehalten.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/impressum" className="text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link to="/agb" className="text-muted-foreground hover:text-foreground transition-colors">
              AGB
            </Link>
            <Link to="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
