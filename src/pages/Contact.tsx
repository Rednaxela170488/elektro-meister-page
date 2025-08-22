import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";


const Contact = () => {
  return (
    <section className="pb-10">
      <SEO
        title="Kontakt – Elektrofachbetrieb für Ihre Region"
        description="Kontaktieren Sie uns für Ihre Elektroinstallation, Smart Home oder Wallbox. Telefon, E-Mail und Anfahrt."
      />
      <h1 className="text-3xl font-bold mb-2">Kontakt</h1>
      <p className="text-muted-foreground mb-8">
        Haben Sie Fragen oder benötigen ein Angebot? Wir freuen uns auf Ihre Nachricht!
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Kontaktdaten */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Direkte Kontaktaufnahme
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="font-medium">Telefon</p>
                <a 
                  href="tel:+491234567890" 
                  className="text-primary hover:underline"
                >
                  +49 1234 567890
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="font-medium">E-Mail</p>
                <a 
                  href="mailto:kontakt@elektrofachbetrieb.de" 
                  className="text-primary hover:underline"
                >
                  kontakt@elektrofachbetrieb.de
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <a 
                  href="https://wa.me/491234567890" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +49 1234 567890
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Öffnungszeiten & Standort */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Verfügbarkeit & Standort
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium mb-1">Termine nach Vereinbarung</p>
                <p className="text-sm text-muted-foreground">
                  Mo-Fr: 18:00 - 21:00 Uhr<br />
                  Sa: 09:00 - 16:00 Uhr<br />
                  <span className="text-amber-600 dark:text-amber-400">
                    (Nebentätigkeit - flexible Terminabsprache)
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium mb-1">Einsatzgebiet</p>
                <p className="text-sm text-muted-foreground">
                  [Ihre Stadt] und Umgebung<br />
                  Anfahrt innerhalb 30 km kostenfrei
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kontakt-Buttons */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <Button asChild size="lg" className="h-12">
          <a href="tel:+491234567890">
            <Phone className="w-4 h-4 mr-2" />
            Jetzt anrufen
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-12">
          <a href="mailto:kontakt@elektrofachbetrieb.de">
            <Mail className="w-4 h-4 mr-2" />
            E-Mail schreiben
          </a>
        </Button>
      </div>

      {/* Zusätzliche Infos */}
      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-3">So erreichen Sie uns am besten:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span><strong>Für eilige Anfragen:</strong> Telefonisch oder WhatsApp</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span><strong>Für Kostenvoranschläge:</strong> E-Mail mit Beschreibung und Fotos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span><strong>Rückruf gewünscht?</strong> Hinterlassen Sie Ihre Nummer, wir melden uns zeitnah</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;