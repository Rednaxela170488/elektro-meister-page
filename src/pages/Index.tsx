import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Home, Sun } from "lucide-react";


const Index = () => {
  return (
    <div className="pb-6">
      <SEO
        title="Elektrofachbetrieb – Elektroinstallation, Smart Home, Wallbox"
        description="Ihr regionaler Elektrofachbetrieb: Zimmer- & Wohnungselektroinstallation, Smart Home, Wallbox-Installation."
      />
      <Hero />

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Home /> Wohnungselektro</CardTitle>
          </CardHeader>
          <CardContent>
            Basis-Dienstleistungen und Installationen für Wohnungen – von Schalteraustausch bis komplette Renovierung.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Zap /> Smart Home</CardTitle>
          </CardHeader>
          <CardContent>
            HomeMatic und Home Assistant – lokale Smart-Home-Lösungen ohne Cloud-Zwang für mehr Komfort und Sicherheit.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Sun /> Balkonkraftwerke</CardTitle>
          </CardHeader>
          <CardContent>
            Beratung und Installation von Balkonkraftwerken bis 800W – inklusive Anmeldung und optionalem Speicher.
          </CardContent>
        </Card>
      </section>


      {/* Hinweis zu meinem Leistungsangebot */}
      <section className="mb-12">
        <div className="rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-amber-800 dark:text-amber-200">Hinweis zu meinem Leistungsangebot</h2>
          <p className="text-amber-700 dark:text-amber-300">
            Mein Elektroservice ist bewusst überschaubar und spezialisiert.
            Da ich den Betrieb eigenständig im Nebengewerbe führe, biete ich genau die Arbeiten an, die ich zuverlässig und mit hoher Qualität erledigen kann.
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
