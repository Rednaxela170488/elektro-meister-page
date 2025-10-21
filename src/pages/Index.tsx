import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Zap, Home, Sun, ArrowRight } from "lucide-react";
import logoSquare from "@/assets/logo-square.png";
import portrait from "@/assets/portrait.png";
import { Button } from "@/components/ui/button";
const Index = () => {
  return <div className="pb-6">
      <SEO title="Elektrofachbetrieb – Elektroinstallation, Smart Home, Wallbox" description="Ihr regionaler Elektrofachbetrieb: Zimmer- & Wohnungselektroinstallation, Smart Home, Wallbox-Installation." />
      <Hero />

      {/* About Me Section */}
      <section className="my-12 bg-card border rounded-lg p-6 sm:p-8">
        <div className="grid sm:grid-cols-[200px_1fr] gap-6 items-center">
          <div className="mx-auto sm:mx-0">
            <img src={portrait} alt="Porträt des Elektrofachmanns" className="rounded-lg shadow-md w-48 h-48 sm:w-full sm:h-auto object-cover" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Ihr persönlicher Ansprechpartner</h2>
            <p className="text-muted-foreground">Mit Leidenschaft für Technik und dem Anspruch, maßgeschneiderte Lösungen zu bieten. Ich gebe mir größte Mühe Ihnen eine individuelle Betreuung zu ermöglichen und die Aufgaben mit Sorgfalt zu erledigen.</p>
            <p className="text-muted-foreground">Meine Kenntnisse stützen sich auf eine fundierte Ausbildung und langjährige Berufserfahrung in der Gebäudetechnik. Mit meinem Nebengewerbe und dem Fokus auf smarten Lösungen möchte ich einen Beitrag zu einer nachhaltigeren Zukunft leisten.</p>
            <Link to="/ueber-mich">
              <Button variant="outline" className="gap-2">
                Mehr über mich erfahren <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <Link to="/wohnungselektro" className="group">
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
    </div>;
};
export default Index;