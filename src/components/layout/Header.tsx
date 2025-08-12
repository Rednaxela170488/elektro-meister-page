import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Building2 } from "lucide-react";
import { useState } from "react";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
  }`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { to: "/", label: "Start", end: true },
    { to: "/ueber-mich", label: "Über mich" },
    { to: "/referenzen", label: "Referenzen" },
    { to: "/leistungen", label: "Leistungen" },
    { to: "/kontakt", label: "Kontakt" },
    { to: "/impressum", label: "Impressum" },
    { to: "/agb", label: "AGB" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-backdrop-blur:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">Elektrofachbetrieb</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={navLinkClass}
              end={item.end}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button 
            asChild 
            variant="default" 
            size="sm"
            className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href="mailto:kontakt@elektrofachbetrieb.de" aria-label="Angebot anfragen">
              Angebot anfragen
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                aria-label="Menü öffnen"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`
                    }
                    end={item.end}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <Button asChild className="w-full" variant="default">
                    <a href="mailto:kontakt@elektrofachbetrieb.de" onClick={() => setIsOpen(false)}>
                      Angebot anfragen
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
