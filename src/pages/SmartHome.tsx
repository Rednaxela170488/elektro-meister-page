import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Zap, Shield, Cloud, Server, Settings, Wifi, Lock, Lightbulb, Thermometer, Music, Sun, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import smartHomeDashboard from "@/assets/smart-home-dashboard.jpg";
import homematicDevices from "@/assets/homematic-devices.jpg";
const SmartHome = () => {
  return <section className="pb-10">
      <SEO title="Smart Home – HomeMatic & Home Assistant ohne Cloud-Zwang" description="Lokale Smart-Home-Lösungen mit HomeMatic und Home Assistant. Sicher, unabhängig und erweiterbar – ohne Cloud-Zwang und Herstellerabhängigkeit." />
      
      {/* Header */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Smart Home – mein Ansatz</h1>
            
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-3">
                Viele Smart-Home-Systeme wirken auf den ersten Blick praktisch, haben aber Nachteile:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Sie hängen stark an Cloud-Diensten</li>
                <li>Abhängigkeit von Internet und Herstellern (dadurch unsicher und teuer)</li>
                <li>Große Systeme wie KNX oder Loxone sind für Einfamilienhäuser oft überdimensioniert und mit hohen Kosten verbunden</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <img src={smartHomeDashboard} alt="Smart Home Dashboard mit verschiedenen verbundenen Geräten" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
        
        {/* Meine Philosophie */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Meine Philosophie</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Durch die Kombination aus HomeMatic und Home Assistant kann ich sowohl einfach bedienbare 
              Standardlösungen als auch hochgradig individuelle Automatisierungen anbieten. So profitieren 
              Sie von Komfort, Sicherheit und Effizienz, ohne auf Flexibilität verzichten zu müssen.
            </p>
            <p className="text-muted-foreground">
              Bei jeder Smart Home Installation erstelle ich eine Dokumentation mit Systemtopologie, 
              Passwörtern, Software-Versionsständen und einer Backup-Sicherung, damit alles nachvollziehbar ist.
            </p>
          </CardContent>
        </Card>

        <p className="text-lg text-muted-foreground mb-6">
          Darum biete ich bewusst eine einfache, unabhängige und bezahlbare Alternative an.
        </p>
      </div>

      {/* Smart-Home-Systeme */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Smart-Home-Systeme</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* HomeMatic */}
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="text-primary" />
                HomeMatic – bewährt & zuverlässig
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary">Bewährt</Badge>
                <Badge variant="secondary">Lokal</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ein bewährtes Smart-Home-System, das lokal oder über die Cloud betrieben werden kann. 
                Ideal für klassische Automatisierungen ohne komplizierte Technik.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  <span className="text-sm">Steuerung von Rolläden und Beleuchtung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-primary" />
                  <span className="text-sm">Regelung der Raumtemperatur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="text-sm">Keypads an Türen für sicheren Zutritt</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-primary" />
                  <span className="text-sm">Zeitpläne und Szenarien</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full" asChild>
                <a href="https://homematic-ip.com/de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Mehr auf homematic-ip.com
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Home Assistant */}
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="text-primary" />
                Home Assistant – flexibel & offen
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary">Open Source</Badge>
                <Badge variant="secondary">Flexibel</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Lokales Open-Source-System, das verschiedene Geräte und Hersteller verbindet. 
                Ermöglicht individuelle und komplexe Automatisierungen.
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-primary" />
                  <span className="text-sm">PV-Überstrom für Klimaanlage nutzen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-primary" />
                  <span className="text-sm">Musik beim Betreten des Hauses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-primary" />
                  <span className="text-sm">Integration verschiedenster Marken</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mb-4" asChild>
                <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Mehr auf home-assistant.io
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  <strong>Hinweis:</strong> Als Open-Source-Projekt kann ich keinen dauerhaften offiziellen 
                  Support garantieren, unterstütze Sie aber gerne bei Installation und Einrichtung.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* Service-Paket */}
      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="text-primary" />
            🔧 Service-Paket für Ihr Smart Home
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Damit Ihr Smart Home dauerhaft zuverlässig läuft, biete ich Ihnen auf Wunsch einen laufenden 
            Servicevertrag an. So erhalten Sie regelmäßige Pflege, Sicherheit durch Backups und schnelle 
            Hilfe im Störungsfall. Die Leistungen umfassen:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span className="text-sm">Installation eines VPN-Gateways für Remote-Zugriff</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span className="text-sm">Regelmäßige Updates zu HomeMatic und HomeAssistant</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span className="text-sm">Backup-Pflege</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span className="text-sm">Jährlich bis zu 5 Änderungen in der Konfiguration kostenlos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span className="text-sm">Remote-Hilfe (Fernwartung)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8">
        <Button asChild variant="outline">
          <Link to="/leistungen">← Zurück zu den Leistungen</Link>
        </Button>
      </div>
    </section>;
};
export default SmartHome;