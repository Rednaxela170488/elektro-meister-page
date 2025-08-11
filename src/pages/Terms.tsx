import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <article className="py-10">
      <SEO title="AGB – Elektrofachbetrieb" description="Allgemeine Geschäftsbedingungen (AGB) des Elektrofachbetriebs." />
      <h1 className="text-3xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Geltungsbereich</h2>
      <p className="text-muted-foreground">Diese AGB gelten für alle Verträge zwischen dem Elektrofachbetrieb und seinen Kunden.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Angebote und Preise</h2>
      <p className="text-muted-foreground">Alle Angebote sind freibleibend. Preise verstehen sich in Euro inkl. gesetzlicher MwSt., sofern nicht anders angegeben.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Zahlung</h2>
      <p className="text-muted-foreground">Zahlungen sind binnen 14 Tagen nach Rechnungsstellung ohne Abzug fällig.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Gewährleistung</h2>
      <p className="text-muted-foreground">Es gelten die gesetzlichen Gewährleistungsrechte.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">5. Haftung</h2>
      <p className="text-muted-foreground">Die Haftung für einfache Fahrlässigkeit ist ausgeschlossen, außer bei Verletzung wesentlicher Vertragspflichten.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">6. Schlussbestimmungen</h2>
      <p className="text-muted-foreground">Es gilt deutsches Recht. Gerichtsstand ist der Sitz des Unternehmens.</p>
    </article>
  );
};

export default Terms;
