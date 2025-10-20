import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Sun, Zap, Shield, CheckCircle, Home, Battery, FileCheck, Settings, TrendingUp, Wrench, Info } from "lucide-react";
import balkonkraftwerkInstallation from "@/assets/balkonkraftwerk-hero.png";
import solarMonitoring from "@/assets/solar-monitoring.jpg";
const Balkonkraftwerk = () => {
  return <section className="pb-10">
      <SEO title="Balkonkraftwerke bis 800W – Beratung, Installation & Anmeldung" description="Professionelle Balkonkraftwerk-Installation bis 800W: Von der Beratung über die Montage bis zur Anmeldung. Optional mit Solarstromspeicher für maximale Effizienz." />
      
      {/* Header */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Mein Service für Ihr Balkonkraftwerk</h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              Sie möchten Stromkosten sparen und mit einem Balkonkraftwerk bis 800 Watt eigenen Solarstrom erzeugen?
              Ich begleite Sie von der Idee bis zum ersten Sonnenstrahl im eigenen Stromnetz – fachgerecht, 
              unkompliziert und individuell.
            </p>
          </div>
          <div className="relative">
            <img src={balkonkraftwerkInstallation} alt="Balkonkraftwerk Installation mit Solarpanelen am Balkongeländer" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
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
          <p className="text-muted-foreground mb-4">
            Ich analysiere, in welchen Stromkreisen in Ihrer Wohnung der Solarstrom tatsächlich 
            genutzt wird. So sehen Sie, wie viel Eigenverbrauch möglich ist und wo sich Ihr 
            Balkonkraftwerk am meisten lohnt.
          </p>
          <p className="text-muted-foreground text-sm">
            Mit modernen Wechselrichtern und Monitoring-Apps behalten Sie jederzeit den Überblick 
            über Ihre Stromproduktion und Ihren Eigenverbrauch.
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

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Häufig gestellte Fragen</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-left">
              Kann ich ein Balkonkraftwerk installieren, wenn ich schon eine PV-Anlage habe?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p className="mb-4">
                Ja, das ist grundsätzlich erlaubt. Ein Balkonkraftwerk bis 800 W kann zusätzlich zu Ihrer bestehenden PV-Anlage Strom ins Hausnetz einspeisen.
              </p>
              <ul className="space-y-3 list-none">
                <li>
                  <strong>Sicherheitscheck:</strong> Ich prüfe vorab, ob Ihr Hausanschluss, Zähler und die Sicherungen die zusätzliche Einspeisung vertragen.
                </li>
                <li>
                  <strong>Effektive Nutzung:</strong> Ich kann analysieren, in welchen Stromkreisen der Solarstrom am besten genutzt wird – so steigt Ihr Eigenverbrauch und Sie sparen mehr Stromkosten.
                </li>
                <li>
                  <strong>Anmeldung:</strong> Auch hier gilt die Pflicht zur Anmeldung beim Netzbetreiber und im Marktstammdatenregister (MaStR).
                </li>
                <li>
                  <strong>Netzbetreiber:</strong> Sollte Ihr Zähler nicht geeignet sein, tauscht der Netzbetreiber diesen automatisch aus – für Sie kostenfrei.
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                💡 Tipp: Mit der Kombination aus Haupt-PV-Anlage und Balkonkraftwerk erhöhen Sie Ihren Eigenverbrauch und nutzen Ihren Solarstrom noch effizienter.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Was bringt mir Nulleinspeisung bei einem Balkonkraftwerk?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p className="mb-4">
                Bei einem Balkonkraftwerk gibt es für eingespeisten Strom keine Vergütung. Deshalb fragen sich viele: „Warum sollte ich auf Nulleinspeisung achten?"
              </p>
              <ul className="space-y-3 list-none">
                <li>
                  <strong>Ohne Speicher:</strong> Überschüssiger Strom fließt einfach ins Netz – das kostet Sie nichts, Sie bekommen aber auch nichts dafür. Ob eingespeist wird oder nicht, macht für Sie kaum einen Unterschied.
                </li>
                <li>
                  <strong>Mit Speicher:</strong> Mit einer Nulleinspeisungslösung (z. B. in Kombination mit einem SUNLIT Balkonkraftwerkspeicher) wird Überschussstrom nicht ins Netz verschenkt, sondern gespeichert. So können Sie ihn später selbst nutzen, wenn keine Sonne scheint.
                </li>
                <li>
                  <strong>Rechtliche Sicherheit:</strong> Manche Netzbetreiber oder Vermieter wünschen ausdrücklich, dass keine Einspeisung erfolgt. Mit Nulleinspeisung können Sie das garantieren.
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                💡 Kurz gesagt: Nulleinspeisung lohnt sich vor allem, wenn Sie einen Speicher einsetzen oder sicherstellen wollen, dass wirklich kein Strom ins öffentliche Netz fließt. Wenn der Speicher voll ist, regelt der Wechselrichter ab.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Welche steuerlichen Vorteile habe ich?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>
                Seit Januar 2023 gilt: Balkonkraftwerke sind von der Mehrwertsteuer befreit. Das heißt, sowohl Module als auch Wechselrichter und Installation können zum 0 % MwSt.-Satz erworben werden.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Bedeutet die 800 W-Grenze, dass auch die PV-Module zusammen nur 800 W haben dürfen?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p className="mb-4">
                Nein. Die 800 W beziehen sich ausschließlich auf die maximale Ausgangsleistung des Wechselrichters – also das, was tatsächlich ins Hausnetz eingespeist wird.
              </p>
              <p className="mb-4">
                Die PV-Module dürfen durchaus mehr Leistung haben (z. B. 2 × 430 Wp = 860 Wp). Das ist sogar sinnvoll: Da Solarmodule selten ihre volle Nennleistung erreichen (z. B. bei bewölktem Himmel oder ungünstigem Sonnenstand), stellt man so sicher, dass der Wechselrichter möglichst oft seine 800 W ausschöpfen kann.
              </p>
              <p className="text-sm text-muted-foreground">
                👉 Kurz gesagt: Module dürfen größer sein, der Wechselrichter bleibt bei max. 800 W Einspeisung.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              Was kann ich mit der HomeAssistant-Anbindung meines Balkonkraftwerks machen?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p className="mb-4">
                Die Integration des Wechselrichters in HomeAssistant eröffnet viele Möglichkeiten, um den selbst erzeugten Solarstrom optimal zu nutzen und dein Smart Home effizienter zu steuern:
              </p>
              <ul className="space-y-3 list-none">
                <li>
                  <strong>Echtzeit-Überwachung:</strong> Du siehst genau, wie viel Strom gerade erzeugt wird, welcher Strom ins Haus fließt und wie viel du verbrauchst.
                </li>
                <li>
                  <strong>Automatisierungen:</strong> HomeAssistant kann Geräte automatisch steuern. Zum Beispiel:
                  <ul className="mt-2 ml-6 space-y-2 list-disc">
                    <li>Waschmaschine oder Spülmaschine startet nur, wenn genügend Solarstrom erzeugt wird.</li>
                    <li>Ladegeräte für E-Bikes oder Elektroautos nutzen direkt den überschüssigen Solarstrom.</li>
                  </ul>
                </li>
                <li>
                  <strong>Verbrauchsoptimierung:</strong> Du kannst überwachen, in welchen Stromkreisen in der Wohnung dein Solarstrom am meisten genutzt wird, und so den Eigenverbrauch maximieren.
                </li>
                <li>
                  <strong>Langzeit-Statistiken:</strong> Erfasse die Stromproduktion über Tage, Wochen oder Monate und analysiere, wie sich unterschiedliche Wetterbedingungen auf deine Erträge auswirken.
                </li>
                <li>
                  <strong>Smart Home Szenarien:</strong> Kombiniere deine Balkonkraftwerksdaten mit anderen Smart-Home-Geräten, z. B. Heizungen, Rollläden oder Beleuchtung, für intelligente Energiesparlösungen.
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                💡 Kurz: Mit HomeAssistant wird dein Balkonkraftwerk zu einem aktiven Teil deines Smart Homes – du hast Kontrolle, Transparenz und maximale Effizienz beim Eigenverbrauch.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <Button asChild variant="outline">
          <Link to="/leistungen">← Zurück zu den Leistungen</Link>
        </Button>
      </div>
    </section>;
};
export default Balkonkraftwerk;