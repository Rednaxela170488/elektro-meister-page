import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Zap, Home, Sun, ArrowRight } from "lucide-react";
import logoSquare from "@/assets/logo-square.png";


const Index = () => {
  return (
    <div className="pb-6">
      <SEO
        title="Elektrofachbetrieb – Elektroinstallation, Smart Home, Wallbox"
        description="Ihr regionaler Elektrofachbetrieb: Zimmer- & Wohnungselektroinstallation, Smart Home, Wallbox-Installation."
      />
      <Hero />

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <Link to="/leistungen" className="group">
          <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="w-5 h-5 shrink-0 group-hover:text-primary transition-colors" /> 
                <span className="hyphens-auto" lang="de">Wohnungselektro</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Basis-Dienstleistungen und Installationen für Wohnungen – von Schalteraustausch bis komplette Renovierung.</p>
              <span className="text-sm text-primary flex items-center gap-1">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </span>
            </CardContent>
          </Card>
        </Link>
        <Link to="/smart-home" className="group">
          <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 shrink-0 group-hover:text-primary transition-colors" /> 
                <span className="hyphens-auto" lang="de">Smart Home</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">HomeMatic und Home Assistant – lokale Smart-Home-Lösungen ohne Cloud-Zwang für mehr Komfort und Sicherheit.</p>
              <span className="text-sm text-primary flex items-center gap-1">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </span>
            </CardContent>
          </Card>
        </Link>
        <Link to="/balkonkraftwerk" className="group">
          <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="w-5 h-5 shrink-0 group-hover:text-primary transition-colors" /> 
                <span className="hyphens-auto" lang="de">Balkonkraftwerke</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Beratung und Installation von Balkonkraftwerken bis 800W – inklusive Anmeldung und optionalem Speicher.</p>
              <span className="text-sm text-primary flex items-center gap-1">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </span>
            </CardContent>
          </Card>
        </Link>
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

      {/* Logo Section */}
      <section className="flex justify-center items-center my-12">
        <img 
          src={logoSquare} 
          alt="Elektrotechnik Stanzel Logo" 
          className="w-48 h-48 md:w-64 md:h-64 object-contain"
        />
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
