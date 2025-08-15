import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoTemplate from "@/assets/logo-rectangular.png";


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
      <nav className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6 lg:px-8 max-w-7xl">
        
        {/* Desktop Navigation with Logo */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity mr-4">
            <img 
              src={logoTemplate} 
              alt="Elektrofachbetrieb Logo" 
              className="h-12 w-auto object-contain scale-x-[2]"
            />
          </Link>
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

        {/* Mobile Logo (visible only on mobile) */}
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity md:hidden">
          <img 
            src={logoTemplate} 
            alt="Elektrofachbetrieb Logo" 
            className="h-12 w-auto object-contain scale-x-[2]"
          />
        </Link>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2">

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
                
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
