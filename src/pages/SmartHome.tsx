import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home, 
  Zap, 
  Shield, 
  Cloud, 
  Server, 
  Settings, 
  Wifi, 
  Lock,
  Lightbulb,
  Thermometer,
  Music,
  Sun,
  AlertTriangle,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import smartHomeDashboard from "@/assets/smart-home-dashboard.jpg";
import homematicDevices from "@/assets/homematic-devices.jpg";

const SmartHome = () => {
  return (
    <section className="pb-10">
      <SEO
        title="Smart Home – HomeMatic & Home Assistant ohne Cloud-Zwang"
        description="Lokale Smart-Home-Lösungen mit HomeMatic und Home Assistant. Sicher, unabhängig und erweiterbar – ohne Cloud-Zwang und Herstellerabhängigkeit."
      />
      
      {/* Header */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Smart Home – mein Ansatz</h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              Viele Smart-Home-Systeme wirken auf den ersten Blick praktisch, haben aber Nachteile: 
              sie hängen stark an Cloud-Diensten, sind abhängig von Internet und Herstellern und können 
              dadurch unsicher oder teuer werden. Außerdem sind große Systeme wie KNX oder Loxone für 
              Einfamilienhäuser oft überdimensioniert und mit hohen Kosten verbunden.
            </p>
          </div>
          <div className="relative">
            <img
              src={smartHomeDashboard}
              alt="Smart Home Dashboard mit verschiedenen verbundenen Geräten"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
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
          Darum biete ich bewusst eine einfache, unabhängige und bezahlbare Alternative an:
        </p>
      </div>

      {/* Hauptsysteme */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Meine Smart-Home-Systeme</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="text-primary" />
                HomeMatic
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary">Bewährt</Badge>
                <Badge variant="secondary">Lokal</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Ein bewährtes Smart-Home-System, das lokal im Haus läuft</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Ideal für Licht, Heizung, Rollläden oder Sicherheit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Großes Produktportfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Auch für Einsteiger geeignet, ohne komplizierte Technik</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://homematic-ip.com/de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Mehr auf homematic-ip.com
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="text-primary" />
                Home Assistant
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary">Open Source</Badge>
                <Badge variant="secondary">Flexibel</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Eine offene Plattform, die verschiedene Geräte und Systeme verbindet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Ermöglicht Steuerung unterschiedlicher Hersteller in einer Oberfläche</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Läuft ebenfalls lokal – Ihre Daten bleiben bei Ihnen zu Hause</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                  <span>Für komplexere Anwendungsfälle</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Mehr auf home-assistant.io
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Detaillierte Systembeschreibung */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Warum ich HomeMatic und Home Assistant anbiete</h2>
        
        <p className="text-muted-foreground mb-8">
          Als Elektriker im Nebengewerbe setze ich bewusst auf zwei leistungsstarke Smart-Home-Systeme: 
          HomeMatic und Home Assistant. Beide Systeme bieten flexible Möglichkeiten, Ihr Zuhause 
          komfortabler, effizienter und intelligenter zu machen – dabei lege ich besonderen Wert auf 
          lokale Steuerung, Sicherheit und Erweiterbarkeit.
        </p>

        {/* HomeMatic Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="text-primary" />
              HomeMatic – zuverlässige Automatisierung für Ihr Zuhause
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="text-muted-foreground mb-4">
                  HomeMatic überzeugt durch seine Vielseitigkeit: Sie können es entweder lokal oder über die 
                  Cloud betreiben, je nach Anforderung und Komfortwunsch. Das System eignet sich hervorragend 
                  für klassische Automatisierungen in Wohnräumen:
                </p>
                <div className="grid gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      <span>Steuerung von Rolläden und Beleuchtung</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-5 h-5 text-primary" />
                      <span>Regelung der Raumtemperatur</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-primary" />
                      <span>Keypads an Türen für sicheren Zutritt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-primary" />
                      <span>Umsetzung kleiner Programme wie Zeitpläne oder Szenarien</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={homematicDevices}
                  alt="HomeMatic Smart Home Geräte und Komponenten"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
            <p className="text-muted-foreground">
              HomeMatic bietet dabei eine robuste und leicht verständliche Lösung, die zuverlässig im Alltag funktioniert.
            </p>
          </CardContent>
        </Card>

        {/* Home Assistant Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="text-primary" />
              Home Assistant – die offene Plattform für individuelle Lösungen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="text-muted-foreground mb-4">
                  Home Assistant ist ein offenes Open-Source-System, das ebenfalls lokal betrieben werden kann. 
                  Dadurch behalten Sie die Kontrolle über Ihre Daten und Ihre Automatisierungen. Manche 
                  Schnittstellen erfordern zwar eine Cloud-Verbindung, doch viele Funktionen lassen sich 
                  vollständig lokal realisieren. Auch lässt sich HomeMatic in das System einbinden.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  Mit Home Assistant sind besonders individuelle und komplexe Automatisierungen möglich, 
                  die über klassische Smart-Home-Szenarien hinausgehen:
                </p>
              </div>
              <div className="relative">
                <img
                  src={smartHomeDashboard}
                  alt="Home Assistant Dashboard mit verschiedenen Smart Home Steuerungen"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Sun className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Die Klimaanlage läuft nur, wenn ein PV-Überstrom vorhanden ist</span>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Auswertung einzelner Strings einer PV-Anlage für bessere Einsicht</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Music className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Der Lautsprecher spielt Lieblingsmusik beim Betreten des Hauses</span>
                </div>
                <div className="flex items-start gap-2">
                  <Wifi className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Integration verschiedenster Geräte und Marken in einem System</span>
                </div>
              </div>
            </div>

            <Alert className="mt-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Wichtiger Hinweis:</strong> Home Assistant ist ein Open-Source-Projekt, das kontinuierlich 
                von der Community weiterentwickelt wird. Aufgrund dieser Natur kann ich keinen dauerhaften 
                offiziellen Support garantieren. Ich unterstütze Sie jedoch gerne bei Installation, 
                Einrichtung und individuellen Automatisierungen.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
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
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
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

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Vertragslaufzeit:</strong> Der Wartungsvertrag läuft 1 Jahr und verlängert sich automatisch 
              um 1 weiteres Jahr, sofern beide Parteien nicht 3 Monate vor Ende widersprechen.
            </p>
            <p className="text-sm text-muted-foreground">
              Bei der Remote-Hilfe kann ich aufgrund meiner Firmengröße keine standardisierten 
              Reaktionsgeschwindigkeiten anbieten.
            </p>
          </div>

          <Alert className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Hinweis zu Home Assistant:</strong> Home Assistant ist ein Open-Source-Projekt, 
              das von einer Community weiterentwickelt wird. Ein dauerhafter offizieller Support durch 
              den Hersteller kann daher nicht garantiert werden. Ich stelle im Rahmen dieser Servicepakete 
              sicher, dass Ihre Installation gepflegt, abgesichert und im Störungsfall bestmöglich 
              wiederhergestellt wird.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
      <div className="mt-8">
        <Button asChild variant="outline">
          <Link to="/leistungen">← Zurück zu den Leistungen</Link>
        </Button>
      </div>
    </section>
  );
};

export default SmartHome;