import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Zap, Car } from "lucide-react";
import logoRectangular from "@/assets/logo-rectangular.png";

const Services = () => {
  return (
    <section className="py-10">
      <SEO
        title="Leistungen – Elektroinstallation, Smart Home, Wallbox"
        description="Zimmer- und Wohnungselektroinstallation, Smart-Home-Lösungen und fachgerechte Wallbox-Montage."
      />
      
      {/* Logo Hero Section */}
      <section className="py-12 mb-8">
        <div className="relative max-w-lg mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15 rounded-2xl blur-2xl"></div>
          <div className="relative bg-card/70 backdrop-blur-sm border border-border/30 rounded-xl p-8 shadow-lg animate-fade-in">
            <img 
              src={logoRectangular} 
              alt="Elektrofachbetrieb Logo" 
              className="h-20 w-auto mx-auto object-contain hover-scale"
            />
          </div>
        </div>
      </section>

      <h1 className="text-3xl font-bold mb-6">Leistungsangebot</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Home />Zimmer- & Wohnungselektro</CardTitle></CardHeader>
          <CardContent>
            • Planung & Stromkreise
            <br />• Sicherungskasten & FI-Schutz
            <br />• Beleuchtung & Steckdosen
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Zap />Smart Home</CardTitle></CardHeader>
          <CardContent>
            • Licht-, Heizungs- und Rollladensteuerung
            <br />• App-Bedienung & Szenen
            <br />• Nachrüstung im Bestand
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Car />Wallbox-Installation</CardTitle></CardHeader>
          <CardContent>
            • Beratung & Auswahl
            <br />• Montage & Inbetriebnahme
            <br />• Anmeldung beim Netzbetreiber
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
