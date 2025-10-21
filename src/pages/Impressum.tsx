import SEO from "@/components/SEO";
const Impressum = () => {
  return <section className="pb-10">
      <SEO title="Impressum – Elektrofachbetrieb" description="Impressum des Elektrofachbetriebs." />
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>
      <p className="text-muted-foreground mb-2">Angaben gemäß § 5 TMG</p>
      <p>Elektrotechnik Stanzel<br />Höhenweg 2<br />91161 Hilpoltstein</p>
      <p className="mt-4">Telefon: +49 175 9604280<br />E-Mail: info@elektrotechnik-stanzel.de</p>
      
      <p className="mt-4"><strong>Rechtsform:</strong> Einzelunternehmer</p>
      <p className="mt-2"><strong>Handwerksrolleneintrag:</strong> Elektrotechniker</p>
      <p className="mt-2"><strong>Zuständige Handwerkskammer:</strong> Handwerkskammer für Mittelfranken</p>
      <p className="mt-2"><strong>Verantwortliche Elektrofachkraft:</strong> Alexander Stanzel</p>
      
      <p className="mt-4 text-muted-foreground"></p>
      <p className="mt-2 text-muted-foreground">
        <strong>Kleinunternehmerregelung:</strong> Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-2">Haftung für Inhalte</h2>
      <p className="text-muted-foreground">Inhalte wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-2">Datenschutzerklärung</h2>
      <p className="text-muted-foreground mb-4">
        Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website verwendet keine Cookies oder andere Tracking-Technologien. 
        Personenbezogene Daten werden nur im Rahmen der Kontaktaufnahme erhoben und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
      </p>
      <p className="text-muted-foreground">
        <strong>Verantwortlicher für die Datenverarbeitung:</strong><br />
        Alexander Stanzel<br />
        Höhenweg 2<br />
        91161 Hilpoltstein<br />
        E-Mail: alexander@elektrotechnik-stanzel.de
      </p>
    </section>;
};
export default Impressum;