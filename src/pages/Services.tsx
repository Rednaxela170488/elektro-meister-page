import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Zap, Car } from "lucide-react";


const Services = () => {
  return (
    <section className="py-10">
      <SEO
        title="Leistungen – Elektroinstallation, Smart Home, Wallbox"
        description="Zimmer- und Wohnungselektroinstallation, Smart-Home-Lösungen und fachgerechte Wallbox-Montage."
      />
      <h1 className="text-3xl font-bold mb-6">Leistungsangebot</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Home />Zimmer- & Wohnungselektro</CardTitle></CardHeader>
          <CardContent>
            • Planung & Stromkreise
            <br />• Sicherungskasten & FI-Schutz
            <br />• Beleuchtung & Steckdosen
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Zap />Smart Home</CardTitle></CardHeader>
          <CardContent>
            • Licht-, Heizungs- und Rollladensteuerung
            <br />• App-Bedienung & Szenen
            <br />• Nachrüstung im Bestand
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Car />Wallbox-Installation</CardTitle></CardHeader>
          <CardContent>
            • Beratung & Auswahl
            <br />• Montage & Inbetriebnahme
            <br />• Anmeldung beim Netzbetreiber
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
