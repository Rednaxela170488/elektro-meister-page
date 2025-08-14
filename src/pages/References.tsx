import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logoRectangular from "@/assets/logo-rectangular.png";

const References = () => {
  return (
    <section className="py-10">
      <SEO
        title="Referenzen – Elektrofachbetrieb"
        description="Ausgewählte Projekte: Smart-Home-Umrüstung, Wallbox-Installationen, Wohnungsmodernisierungen."
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

      <h1 className="text-3xl font-bold mb-6">Referenzen</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {["Smart-Home-Umrüstung", "Wallbox Doppelgarage", "Wohnung Kernsanierung"].map((title, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Kurzbeschreibung des Projekts, Besonderheiten und Ergebnis.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default References;
