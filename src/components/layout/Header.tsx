
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-header.png";


const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
  }`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { to: "/", label: "Start", end: true },
    { to: "/ueber-mich", label: "Über mich" },
    { to: "/referenzen", label: "Referenzen" },
    { to: "/kontakt", label: "Kontakt" },
    { to: "/impressum", label: "Impressum" },
    { to: "/agb", label: "AGB" },
  ];

  const leistungenItems = [
    { to: "/leistungen", label: "Übersicht" },
    { to: "/wohnungselektro", label: "Wohnungselektro" },
    { to: "/smart-home", label: "Smart Home" },
    { to: "/balkonkraftwerk", label: "Balkonkraftwerk" },
  ];

  const mobileNavigationItems = [
    { to: "/", label: "Start", end: true },
    { to: "/ueber-mich", label: "Über mich" },
    { to: "/referenzen", label: "Referenzen" },
    { to: "/leistungen", label: "Leistungen" },
    { to: "/wohnungselektro", label: "Wohnungselektro", indent: true },
    { to: "/smart-home", label: "Smart Home", indent: true },
    { to: "/balkonkraftwerk", label: "Balkonkraftwerk", indent: true },
    { to: "/kontakt", label: "Kontakt" },
    { to: "/impressum", label: "Impressum" },
    { to: "/agb", label: "AGB" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <nav className="container mx-auto flex h-16 items-center justify-between md:justify-center px-4 md:px-6 lg:px-8 max-w-7xl">
        
        {/* Desktop Navigation with Logo */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity mr-4">
            <img 
              src={logo} 
              alt="Elektrotechnik Stanzel Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
              }`
            }
            end={true}
            onClick={() => setLeistungenOpen(false)}
          >
            Start
          </NavLink>
          <NavLink
            to="/ueber-mich"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
              }`
            }
            onClick={() => setLeistungenOpen(false)}
          >
            Über mich
          </NavLink>
          <NavLink
            to="/referenzen"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
              }`
            }
            onClick={() => setLeistungenOpen(false)}
          >
            Referenzen
          </NavLink>
          
          {/* Leistungen Dropdown */}
          <NavigationMenu value={leistungenOpen ? 'leistungen' : undefined}>
            <NavigationMenuList>
              <NavigationMenuItem value="leistungen">
                <NavigationMenuTrigger 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/leistungen') || 
                    location.pathname.startsWith('/wohnungselektro') || 
                    location.pathname.startsWith('/smart-home') || 
                    location.pathname.startsWith('/balkonkraftwerk')
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setLeistungenOpen(!leistungenOpen)}
                >
                  Leistungen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2 bg-popover">
                    {leistungenItems.map((item) => (
                      <li key={item.to}>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              `block w-full select-none rounded-md p-3 leading-none no-underline outline-none transition-colors ${
                                isActive 
                                  ? "bg-primary/10 text-primary font-medium" 
                                  : "text-popover-foreground"
                              }`
                            }
                          >
                            <div className="text-sm font-medium leading-none">{item.label}</div>
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <NavLink
            to="/kontakt"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
              }`
            }
            onClick={() => setLeistungenOpen(false)}
          >
            Kontakt
          </NavLink>
          <NavLink
            to="/impressum"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
              }`
            }
            onClick={() => setLeistungenOpen(false)}
          >
            Impressum
          </NavLink>
          <NavLink
            to="/agb"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
              }`
            }
            onClick={() => setLeistungenOpen(false)}
          >
            AGB
          </NavLink>
        </div>

        {/* Mobile Logo (visible only on mobile) */}
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity md:hidden ml-4">
          <img 
            src={logo} 
            alt="Elektrotechnik Stanzel Logo" 
            className="h-12 w-auto object-contain"
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
                {mobileNavigationItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        item.indent ? 'pl-6 text-sm' : ''
                      } ${
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
