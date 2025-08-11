import SEO from "@/components/SEO";

const About = () => {
  return (
    <article className="py-10">
      <SEO
        title="Über mich – Elektrofachbetrieb"
        description="Erfahren Sie mehr über Ihren Elektriker: Ausbildung, Erfahrung und Werte."
      />
      <h1 className="text-3xl font-bold mb-4">Über mich</h1>
      <p className="text-muted-foreground leading-relaxed">
        Seit über 10 Jahren arbeite ich als Elektriker mit Fokus auf Wohnungsbau und Smart-Home-Lösungen. 
        Mir ist wichtig: saubere Arbeit, ehrliche Beratung und eine zuverlässige Terminabstimmung. 
        Ich begleite Sie von der Planung über die Installation bis zur Inbetriebnahme.
      </p>
    </article>
  );
};

export default About;
