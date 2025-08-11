import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const References = () => {
  return (
    <section className="py-10">
      <SEO
        title="Referenzen – Elektrofachbetrieb"
        description="Ausgewählte Projekte: Smart-Home-Umrüstung, Wallbox-Installationen, Wohnungsmodernisierungen."
      />
      <h1 className="text-3xl font-bold mb-6">Referenzen</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {["Smart-Home-Umrüstung", "Wallbox Doppelgarage", "Wohnung Kernsanierung"].map((title, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Kurzbeschreibung des Projekts, Besonderheiten und Ergebnis.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default References;
