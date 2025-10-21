import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Lightbulb, Wrench, Shield, CheckCircle, Settings, Power, Zap } from "lucide-react";
import wohnungselektroTools from "@/assets/wohnungselektro-tools.png";
const Wohnungselektro = () => {
  return <section className="pb-10">
      <SEO title="Wohnungselektro – Elektroinstallationen für Wohnungen" description="Professionelle Elektroinstallationen für Wohnungen: Schalter- und Steckdosentausch, Unterverteiler-Erneuerung, Lichtsteuerungen und Renovierungsarbeiten." />
      
      {/* Header */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Wohnungselektro</h1>
            <p className="text-lg text-muted-foreground">Als Ihr erfahrener Elektriker biete ich umfassende Lösungen: von Austauscharbeiten bis zu kompletten Renovierungen. Ich sorge für moderne, sichere Elektrik in Ihrem Zuhause. Meine Priorität sind fachgerechte Ausführung, höchste Sicherheitsstandards und individuelle Beratung für optimal funktionierende Elektrik.</p>
          </div>
          <div className="relative">
            <img src={wohnungselektroTools} alt="Elektrowerkzeuge und Baupläne für professionelle Wohnungsinstallationen" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Basis-Dienstleistungen */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Wrench className="text-primary" />
          Basis-Dienstleistungen
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Power className="text-primary w-5 h-5" />
                Austausch & Modernisierung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Austausch alter Schalter und Steckdosen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Modernisierung von Thermostaten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Nachrüstung zusätzlicher Steckdosen</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="text-primary w-5 h-5" />
                Unterverteiler & Sicherheit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Erneuerung Unterverteiler (FI/LS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Installation Überspannungsschutz</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Aufbau & Verdrahtung von Unterverteilern</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="text-primary w-5 h-5" />
                Beleuchtung & Steuerung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Installation Innen- und Außenbeleuchtung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Automatische Lichtsteuerungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Nachrüstung zusätzlicher Schalter</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Installationen für Wohnungen */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Home className="text-primary" />
          Installationen bei Renovierung
        </h2>
        
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Elektroinstallation bei Wohnungsrenovierung</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Bei einer Renovierung oder Modernisierung Ihrer Wohnung übernehme ich die komplette 
              Planung und Ausführung der Elektroinstallation. Von der Leitungsverlegung bis zur 
              Inbetriebnahme.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Leistungen im Detail
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                    <span>Planung der Elektroinstallation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                    <span>Leitungsverlegung in Wänden und Decken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                    <span>Nachrüstung zusätzlicher Stromkreise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                    <span>Installation von Schaltern und Steckdosen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                    <span>Aufbau und Verdrahtung von Unterverteilern</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Für wen geeignet?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Diese Leistungen sind ideal für:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                    <span>Wohnungen in Mehrfamilienhäusern</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                    <span>Kleine Gewerbeeinheiten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                    <span>Büroräume und Praxen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                    <span>Renovierungs- und Modernisierungsprojekte</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weitere Informationen */}
      <Card className="mb-8 bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Warum Wohnungselektro?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Als spezialisierter Elektroservice konzentriere ich mich auf Arbeiten in Wohnungen 
            und kleinen Gewerbeeinheiten. Das bedeutet für Sie:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
              <span><strong>Überschaubare Projekte</strong> – keine monatelangen Großbaustellen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
              <span><strong>Persönliche Betreuung</strong> – direkter Kontakt ohne große Hierarchien</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
              <span><strong>Transparente Preise</strong> – klare Angebote ohne versteckte Kosten</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
              <span><strong>Qualität statt Masse</strong> – sorgfältige Arbeit mit Liebe zum Detail</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div>
        <Button asChild variant="outline">
          <Link to="/leistungen">← Zurück zu den Leistungen</Link>
        </Button>
      </div>
    </section>;
};
export default Wohnungselektro;