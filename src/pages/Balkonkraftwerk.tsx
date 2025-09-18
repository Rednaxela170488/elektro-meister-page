import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Sun, 
  Zap, 
  Shield, 
  CheckCircle, 
  Home, 
  Battery,
  FileCheck,
  Settings,
  TrendingUp,
  Wrench,
  Info
} from "lucide-react";

const Balkonkraftwerk = () => {
  return (
    <section className="pb-10">
      <SEO
        title="Balkonkraftwerke bis 800W – Beratung, Installation & Anmeldung"
        description="Professionelle Balkonkraftwerk-Installation bis 800W: Von der Beratung über die Montage bis zur Anmeldung. Optional mit Solarstromspeicher für maximale Effizienz."
      />
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">🌞 Mein Service für Ihr Balkonkraftwerk – einfach, sicher, persönlich</h1>
        
        <p className="text-lg text-muted-foreground mb-6">
          Sie möchten Stromkosten sparen und mit einem Balkonkraftwerk bis 800 Watt eigenen Solarstrom erzeugen?
          Ich begleite Sie von der Idee bis zum ersten Sonnenstrahl im eigenen Stromnetz – fachgerecht, 
          unkompliziert und individuell.
        </p>
      </div>

      {/* Leistungsangebot */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <CheckCircle className="text-green-600" />
          Mein Leistungsangebot
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Home className="text-primary" />
                Beratung vor Ort
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Ich sehe mir Ihre Gegebenheiten an und erkläre, welche Lösung 
                am besten zu Ihnen passt.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Wrench className="text-primary" />
                Montage & Anschluss
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Ich montiere das Modul, den Wechselrichter und kümmere mich um die 
                fachgerechte Elektroinstallation – auf Wunsch auch mit spezieller Einspeisesteckdose.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="text-primary" />
                Zukunftsfähige Wechselrichter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Ich biete nur Wechselrichter an, die in Home Assistant integriert werden können. 
                So haben Sie volle Transparenz über Ihre Stromproduktion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sun className="text-primary" />
                Individuelle PV-Module
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Die Photovoltaik-Module werden entsprechend Ihrer Wünsche und Gegebenheiten 
                ausgewählt – Größe, Leistung und Optik passen wir gemeinsam an.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Battery className="text-primary" />
                Optionaler Speicher
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Auf Wunsch kann ich einen Solarstromspeicher installieren. So nutzen Sie Ihren Strom auch ohne Sonne effizienter.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="text-primary" />
                Sicherheitsprüfung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Ich prüfe Ihren Stromkreis und messe, ob Schutzmaßnahmen wie FI/RCD 
                korrekt funktionieren.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Anmeldungen */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="text-primary" />
            Anmeldungen leicht gemacht
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Marktstammdatenregister</h3>
              <p className="text-sm text-muted-foreground">
                Ich registriere Ihr Balkonkraftwerk im Marktstammdatenregister.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Netzbetreiber-Anmeldung</h3>
              <p className="text-sm text-muted-foreground">
                Ich unterstütze Sie bei der Anmeldung beim Netzbetreiber.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Zählerwechsel</h3>
              <p className="text-sm text-muted-foreground">
                Sollte Ihr Stromzähler noch nicht geeignet sein, kümmert sich Ihr 
                Netzbetreiber um den kostenlosen Austausch.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Extra-Service */}
      <Card className="mb-8 border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="text-primary" />
            Extra-Service: Stromkreis-Analyse
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Ich analysiere, in welchen Stromkreisen in Ihrer Wohnung der Solarstrom tatsächlich 
            genutzt wird. So sehen Sie, wie viel Eigenverbrauch möglich ist und wo sich Ihr 
            Balkonkraftwerk am meisten lohnt.
          </p>
        </CardContent>
      </Card>

      {/* Ihre Vorteile */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <CheckCircle className="text-green-600" />
          Ihre Vorteile
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Persönliche Betreuung</strong> – alles aus einer Hand</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Keine unnötige Bürokratie</strong> – ich übernehme die Formalitäten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Keine Arbeiten am Zählerschrank</strong> notwendig</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Sofort startklar:</strong> Einstecken, Strom sparen, Umwelt schützen!</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="text-primary" />
                Für wen ist das interessant?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Sun className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">
                    <strong>Für Mieter und Eigentümer,</strong> die ohne großen Aufwand 
                    eigenen Solarstrom nutzen möchten
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">
                    <strong>Für alle, die ihre Stromkosten senken</strong> und gleichzeitig 
                    die Umwelt schonen wollen
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div>
        <Button asChild variant="outline">
          <a href="/leistungen">← Zurück zu den Leistungen</a>
        </Button>
      </div>
    </section>
  );
};

export default Balkonkraftwerk;