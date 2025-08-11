const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Elektrofachbetrieb. Alle Rechte vorbehalten.</p>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <a href="/impressum" className="hover:text-foreground">Impressum</a>
          <a href="/agb" className="hover:text-foreground">AGB</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
