import SEO from "@/components/SEO";

const Impressum = () => {
  return (
    <section className="pb-10">
      <SEO title="Impressum – Elektrofachbetrieb" description="Impressum des Elektrofachbetriebs." />
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>
      <p className="text-muted-foreground mb-2">Angaben gemäß § 5 TMG</p>
      <p>Elektrofachbetrieb<br />Musterstraße 1<br />12345 Musterstadt</p>
      <p className="mt-4">Telefon: +49 1234 567890<br />E-Mail: kontakt@elektrofachbetrieb.de</p>
      <p className="mt-4 text-muted-foreground">USt-IdNr.: DE123456789</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Haftung für Inhalte</h2>
      <p className="text-muted-foreground">Inhalte wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen.</p>
    </section>
  );
};

export default Impressum;
