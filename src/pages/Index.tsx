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

      {/* Was wir NICHT machen */}
      <section className="mb-12">
        <div className="rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-amber-800 dark:text-amber-200">Was wir bewusst nicht anbieten</h2>
          <p className="text-amber-700 dark:text-amber-300 mb-4">
            Als spezialisierter Elektrokleinbetrieb konzentrieren wir uns auf unsere Kernkompetenzen. 
            Folgende Bereiche bieten wir bewusst nicht an:
          </p>
          <ul className="text-amber-700 dark:text-amber-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 dark:text-amber-400 mt-0.5">•</span>
              <span><strong>Komplette Hausinstallationen:</strong> Neubau-Elektroinstallationen für ganze Häuser übersteigen unsere Kapazitäten</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 dark:text-amber-400 mt-0.5">•</span>
              <span><strong>Photovoltaik-Anlagen:</strong> Planung und Installation von Solaranlagen erfordern spezielle Zertifizierungen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 dark:text-amber-400 mt-0.5">•</span>
              <span><strong>Industrielle Elektrotechnik:</strong> Großanlagen und Industrieinstallationen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 dark:text-amber-400 mt-0.5">•</span>
              <span><strong>24/7-Notdienst:</strong> Als Nebentätigkeit können wir keinen Rund-um-die-Uhr-Service anbieten</span>
            </li>
          </ul>
          <p className="text-amber-700 dark:text-amber-300 mt-4 text-sm">
            So können wir Ihnen in unseren Spezialgebieten die beste Qualität und persönliche Betreuung garantieren.
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
