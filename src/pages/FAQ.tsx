import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Kann ich ein Balkonkraftwerk installieren, wenn ich schon eine PV-Anlage habe?",
      answer: (
        <>
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
        </>
      ),
    },
    {
      question: "Was bringt mir Nulleinspeisung bei einem Balkonkraftwerk?",
      answer: (
        <>
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
        </>
      ),
    },
    {
      question: "Welche steuerlichen Vorteile habe ich?",
      answer: (
        <p>
          Seit Januar 2023 gilt: Balkonkraftwerke sind von der Mehrwertsteuer befreit. Das heißt, sowohl Module als auch Wechselrichter und Installation können zum 0 % MwSt.-Satz erworben werden.
        </p>
      ),
    },
    {
      question: "Bedeutet die 800 W-Grenze, dass auch die PV-Module zusammen nur 800 W haben dürfen?",
      answer: (
        <>
          <p className="mb-4">
            Nein. Die 800 W beziehen sich ausschließlich auf die maximale Ausgangsleistung des Wechselrichters – also das, was tatsächlich ins Hausnetz eingespeist wird.
          </p>
          <p className="mb-4">
            Die PV-Module dürfen durchaus mehr Leistung haben (z. B. 2 × 430 Wp = 860 Wp). Das ist sogar sinnvoll: Da Solarmodule selten ihre volle Nennleistung erreichen (z. B. bei bewölktem Himmel oder ungünstigem Sonnenstand), stellt man so sicher, dass der Wechselrichter möglichst oft seine 800 W ausschöpfen kann.
          </p>
          <p className="text-sm text-muted-foreground">
            👉 Kurz gesagt: Module dürfen größer sein, der Wechselrichter bleibt bei max. 800 W Einspeisung.
          </p>
        </>
      ),
    },
    {
      question: "Was kann ich mit der HomeAssistant-Anbindung meines Balkonkraftwerks machen?",
      answer: (
        <>
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
        </>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="FAQ - Häufig gestellte Fragen | Elektrofachbetrieb"
        description="Antworten auf häufig gestellte Fragen zu Balkonkraftwerken, Smart Home und Installation. Erfahren Sie mehr über Nulleinspeisung, steuerliche Vorteile und HomeAssistant-Integration."
      />
      
      <div className="py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Häufig gestellte Fragen</h1>
          <p className="text-muted-foreground mb-12">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um Balkonkraftwerke und Smart Home.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FAQ;
