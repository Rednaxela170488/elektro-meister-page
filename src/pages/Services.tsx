import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { 
  Home, 
  Zap, 
  Sun, 
  CheckCircle, 
  XCircle, 
  Info, 
  Wrench,
  Lightbulb,
  Settings,
  Battery
} from "lucide-react";

const Services = () => {
  return (
    <section className="pb-10">
      <SEO
        title="Leistungen – Elektroinstallation, Smart Home, Balkonkraftwerke"
        description="Spezialisierter Elektroservice: Wohnungselektro, Smart-Home-Lösungen mit HomeMatic/HomeAssistant und Balkonkraftwerke bis 800W."
      />
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Leistungen Elektro</h1>
        
      </div>

      {/* Hauptleistungen */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Meine Leistungen im Überblick</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench />
                Basis-Dienstleistungen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm">
                <li>• Austausch alter Schalter, Thermostate und Steckdosen</li>
                <li>• Erneuerung Unterverteiler (FI/LS, Überspannungsschutz)</li>
                <li>• Automatische Lichtsteuerungen</li>
                <li>• Installation von Innen- und Außenbeleuchtung</li>
                <li>• Nachrüstung zusätzlicher Steckdosen und Schalter</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home />
                Installationen für Wohnungen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm">
                <li>• Planung & Leitungsverlegung bei Renovierung</li>
                <li>• Nachrüstung zusätzlicher Stromkreise</li>
                <li>• Aufbau & Verdrahtung von Unterverteilern</li>
              </ul>
              <div className="mt-4">
                <Badge variant="secondary">Wohnungen & kleine Gewerbe</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap />
                Smart Home
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm mb-4">
                <li>• Beratung & Installation mit HomeMatic</li>
                <li>• Smart Home ohne Cloud-Zwang</li>
                <li>• Grundkonfiguration & Integration über HomeAssistant</li>
                <li>• Dokumentation & Einweisung für Kunden</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/smart-home">Mehr zu Smart Home</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun />
                Balkonkraftwerke
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm mb-4">
                <li>• Beratung & Installation bis 800W</li>
                <li>• Anmeldung beim Netzbetreiber</li>
                <li>• Zukunftssichere Wechselrichter</li>
                <li>• Optional mit Speicher</li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/balkonkraftwerk">Mehr zu Balkonkraftwerken</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Was ich nicht anbiete */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <XCircle className="text-red-600" />
          Leistungen, die ich nicht anbiete
        </h2>
        <Card className="border-red-200">
          <CardContent className="pt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                  <span><strong>Arbeiten am Netzanschluss</strong> (Zählerplatz, Hausanschlusskasten)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                  <span><strong>PV-Anlagen und Batteriespeicher</strong> (Ausnahme: Balkonkraftwerke)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                  <span><strong>Wallbox-Installation</strong> mit Netzbetreiber-Anmeldung</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                  <span><strong>Satellitenanlagen und Antennentechnik</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                  <span><strong>Klassische IT-/Netzwerkinstallation</strong></span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                  <span><strong>Reparatur von Elektrogeräten</strong> (Waschmaschinen, Trockner, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                  <span><strong>24h-Notdienst / Störungsdienst</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                  <span><strong>Industrielle Anlagen und Maschinen</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                  <span><strong>Größere Gewerbebetriebe</strong> mit KNX oder BACnet</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

    </section>
  );
};

export default Services;
