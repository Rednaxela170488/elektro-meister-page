import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Home, Car } from "lucide-react";

const Index = () => {
  return (
    <div className="py-6">
      <SEO
        title="Elektrofachbetrieb – Elektroinstallation, Smart Home, Wallbox"
        description="Ihr regionaler Elektrofachbetrieb: Zimmer- & Wohnungselektroinstallation, Smart Home, Wallbox-Installation."
      />
      <Hero />

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Home /> Installation</CardTitle>
          </CardHeader>
          <CardContent>
            Komplette Zimmer- und Wohnungselektroinstallation inklusive Planung, Sicherungskasten und Abnahme.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Zap /> Smart Home</CardTitle>
          </CardHeader>
          <CardContent>
            Intelligente Steuerung für Licht, Heizung und Sicherheit – komfortabel bedienbar per App.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Car /> Wallbox</CardTitle>
          </CardHeader>
          <CardContent>
            Beratung, Montage und Inbetriebnahme Ihrer Wallbox – inklusive Anmeldung beim Netzbetreiber.
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <div className="rounded-lg border p-6">
          <h2 className="text-2xl font-semibold mb-2">Warum wir?</h2>
          <p className="text-muted-foreground">
            Persönlicher Service, transparente Preise und saubere Ausführung. Termine nach Absprache – wir richten uns nach Ihnen.
          </p>
        </div>
      </section>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ElectricalContractor",
          name: "Elektrofachbetrieb",
          url: typeof window !== 'undefined' ? window.location.origin : undefined,
          areaServed: "Region",
          email: "kontakt@elektrofachbetrieb.de",
          telephone: "+49 1234 567890",
          sameAs: []
        })
      }} />
    </div>
  );
};

export default Index;
