import logoSquare from "@/assets/logo-square.png";
import logoHorizontal from "@/assets/logo-horizontal.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const Hero = () => {
  return <section className="relative overflow-hidden rounded-xl border bg-card mt-6 mb-12">
      <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">Elektrotechnik Dienstleistungen - einfach und zuverlässig</h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">Regional und fachgerecht: Komplettlösungen von der Planung bis zur Abnahme.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="h-12">
              <Link to="/kontakt">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt Kontakt aufnehmen
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12">
              <Link to="/leistungen">
                Leistungen ansehen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative min-h-[200px] sm:min-h-[280px] order-1 lg:order-2 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 p-8">
          {/* Mobile & Tablet: Horizontal Logo */}
          <img 
            src={logoHorizontal} 
            alt="Elektrotechnik Stanzel Logo" 
            className="w-full max-w-md object-contain opacity-90 md:hidden" 
            loading="eager" 
          />
          {/* Desktop: Square Logo */}
          <img 
            src={logoSquare} 
            alt="Elektrotechnik Stanzel Logo" 
            className="w-full max-w-xs object-contain opacity-90 hidden md:block" 
            loading="eager" 
          />
        </div>
      </div>
    </section>;
};
export default Hero;