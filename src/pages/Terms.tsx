import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <article className="pb-10">
      <SEO title="AGB – Elektrofachbetrieb" description="Allgemeine Geschäftsbedingungen (AGB) des Elektrofachbetriebs für Smart Home, Balkonkraftwerke und Elektroinstallationen." />
      
      <h1 className="text-3xl font-bold mb-6">Allgemeine Geschäftsbedingungen</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Geltungsbereich</h2>
          <p className="text-muted-foreground mb-2">
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen dem Elektrofachbetrieb 
            und seinen Kunden über Elektroinstallationen, Smart Home Systeme, Balkonkraftwerke, Wartungsarbeiten 
            und sonstige elektrotechnische Leistungen.
          </p>
          <p className="text-muted-foreground">
            Abweichende Bedingungen des Kunden werden nur bei ausdrücklicher schriftlicher Zustimmung Vertragsbestandteil.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Angebote und Vertragsschluss</h2>
          <p className="text-muted-foreground mb-2">
            Alle Angebote sind freibleibend und unverbindlich, sofern nicht ausdrücklich etwas anderes vereinbart wird. 
            Der Vertrag kommt durch schriftliche Auftragsbestätigung oder Beginn der Arbeiten zustande.
          </p>
          <p className="text-muted-foreground mb-2">
            Kostenvoranschläge sind unverbindlich. Unvorhergesehene Mehrarbeiten werden nach Aufwand berechnet. 
            Bei Überschreitungen über 20% wird der Kunde informiert.
          </p>
          <p className="text-muted-foreground">
            <strong>Mehrarbeiten:</strong> Alle vom ursprünglichen Auftrag abweichenden Arbeiten gelten als 
            Mehrarbeiten und werden gesondert nach den zum Zeitpunkt der Ausführung gültigen Preisen berechnet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Leistungen und Ausführung</h2>
          <p className="text-muted-foreground mb-2">
            <strong>Elektroinstallationen:</strong> Alle Arbeiten werden nach den gültigen VDE-Bestimmungen, 
            DIN-Normen und örtlichen Anschlussvorschriften ausgeführt. Nach Abschluss wird ein 
            Prüfprotokoll nach VDE 0100-600 erstellt.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Smart Home Systeme:</strong> Installation und Konfiguration erfolgen nach Herstellervorgaben. 
            Einweisung und Dokumentation sind im Leistungsumfang enthalten. Wartungsintervalle richten 
            sich nach Herstellerempfehlungen.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Balkonkraftwerke:</strong> Installation erfolgt nach VDE-AR-N 4105. Anmeldung beim 
            Netzbetreiber und im Marktstammdatenregister erfolgt durch den Kunden oder nach gesonderter Vereinbarung.
          </p>
          <p className="text-muted-foreground">
            Der Kunde stellt unentgeltlich die erforderlichen Hilfskräfte sowie Strom, Wasser und Heizung zur Verfügung.
            Sicherheitsbestimmungen sind einzuhalten, Arbeitsplatz muss frei zugänglich sein.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Preise und Zahlungsbedingungen</h2>
          <p className="text-muted-foreground mb-2">
            Preise verstehen sich in Euro inklusive gesetzlicher Mehrwertsteuer, sofern nicht anders angegeben. 
            Bei Kleinunternehmerregelung (§ 19 UStG) erfolgt kein Mehrwertsteuerausweis.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Zahlungsbedingungen:</strong> Bei Aufträgen über 500 EUR ist eine Anzahlung von 50% 
            vor Arbeitsbeginn fällig. Restzahlung binnen 7 Tagen nach Rechnungsstellung ohne Abzug.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Verzug:</strong> Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9% über dem Basiszinssatz 
            sowie Mahngebühren (1. Mahnung: 5 EUR, 2. Mahnung: 10 EUR, 3. Mahnung: 15 EUR) berechnet.
          </p>
          <p className="text-muted-foreground mb-2">
            Aufrechnungsrechte bestehen nur bei unbestrittenen oder rechtskräftig festgestellten Forderungen.
          </p>
          <p className="text-muted-foreground">
            Bei Zahlungsverzug kann der Auftragnehmer weitere Arbeiten einstellen und gelieferte 
            Materialien bis zur vollständigen Bezahlung zurückbehalten.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Termine und Fristen</h2>
          <p className="text-muted-foreground mb-2">
            Termine sind nur bei schriftlicher Bestätigung verbindlich. Bei Terminverzögerungen durch 
            höhere Gewalt, Materialmangel, Witterung oder Kundenverhalten verlängern sich die Fristen entsprechend.
          </p>
          <p className="text-muted-foreground mb-2">
            Der Kunde ist verpflichtet, die Baustelle rechtzeitig und vollständig bereitzustellen, 
            erforderliche Genehmigungen einzuholen und bei Terminabsagen mindestens 48 Stunden vorher zu informieren.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Stornierung/Verschiebung:</strong> Bei Stornierung oder Verschiebung bereits bestätigter 
            Termine weniger als 48 Stunden vorher werden 80% des vereinbarten Entgelts, 
            mindestens jedoch 150 EUR Ausfallpauschale berechnet.
          </p>
          <p className="text-muted-foreground">
            <strong>Wartezeiten:</strong> Wartezeiten durch nicht bereitgestellte Baustelle oder 
            fehlende Mitwirkung des Kunden werden als Arbeitszeit berechnet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Abnahme, Gefahrenübergang und Eigentumsvorbehalt</h2>
          <p className="text-muted-foreground mb-2">
            <strong>Abnahme:</strong> Der Kunde ist zur Abnahme der Werkleistung verpflichtet. 
            Die Abnahme gilt als erfolgt, wenn der Kunde die Leistung in Betrieb nimmt oder 
            14 Tage nach Fertigstellungsanzeige verstreichen, ohne dass Mängel gerügt werden.
          </p>
          <p className="text-muted-foreground mb-2">
            Die Gefahr geht mit der Übergabe der Arbeiten bzw. bei Teilleistungen mit deren Abnahme auf den Kunden über.
          </p>
          <p className="text-muted-foreground">
            Gelieferte Materialien und eingebaute Komponenten bleiben bis zur vollständigen Bezahlung Eigentum des Auftragnehmers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Gewährleistung und Garantie</h2>
          <p className="text-muted-foreground mb-2">
            Die Gewährleistung richtet sich nach den gesetzlichen Bestimmungen. 
            Gewährleistungsansprüche bestehen nur bei fachgerechter Nutzung und ordnungsgemäßer Wartung.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Ausschluss:</strong> Die Gewährleistung entfällt bei Eingriffen durch Dritte, 
            unsachgemäßer Behandlung, natürlichem Verschleiß oder Schäden durch höhere Gewalt.
          </p>
          <p className="text-muted-foreground mb-2">
            Mängel sind unverzüglich, spätestens binnen 7 Tagen schriftlich mit Fotodokumentation anzuzeigen. 
            Verspätete Anzeigen schließen Gewährleistungsansprüche aus.
          </p>
          <p className="text-muted-foreground mb-2">
            Herstellergarantien bleiben unberührt und werden an den Kunden weitergegeben.
          </p>
          <p className="text-muted-foreground">
            Bei berechtigten Mängelrügen wird zunächst Nachbesserung geleistet. 
            Schlägt diese zweimalig fehl, kann der Kunde Minderung oder Rücktritt verlangen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Haftung und Versicherung</h2>
          <p className="text-muted-foreground mb-2">
            Die Haftung des Auftragnehmers ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. 
            Bei leichter Fahrlässigkeit haftet er nur bei Verletzung wesentlicher Vertragspflichten, 
            begrenzt auf den vertragstypischen, vorhersehbaren Schaden, maximal jedoch die Auftragssumme.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Haftungsausschluss:</strong> Ausgeschlossen ist die Haftung für Folgeschäden, 
            entgangenen Gewinn, Betriebsunterbrechung, Datenverlust und mittelbare Schäden aller Art.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Mitwirkungspflicht:</strong> Der Kunde ist zur Schadensminderung verpflichtet. 
            Schäden durch mangelhafte Mitwirkung des Kunden gehen zu dessen Lasten.
          </p>
          <p className="text-muted-foreground mb-2">
            Bei Schäden an Leben, Körper und Gesundheit haftet der Auftragnehmer uneingeschränkt.
          </p>
          <p className="text-muted-foreground">
            Der Auftragnehmer verfügt über eine Betriebshaftpflichtversicherung. 
            Die Versicherungssumme beträgt 1 Mio. EUR für Personen- und Sachschäden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">9. Widerrufsrecht</h2>
          <p className="text-muted-foreground mb-2">
            Bei Verbraucherverträgen, die außerhalb von Geschäftsräumen geschlossen werden, 
            besteht ein Widerrufsrecht von 14 Tagen. Die Widerrufsbelehrung wird gesondert erteilt.
          </p>
          <p className="text-muted-foreground">
            <strong>Ausschluss:</strong> Das Widerrufsrecht erlischt bei Dienstleistungen, wenn der 
            Unternehmer die Dienstleistung vollständig erbracht hat und mit der Ausführung erst 
            begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">10. Datenschutz</h2>
          <p className="text-muted-foreground">
            Die Verarbeitung personenbezogener Daten erfolgt entsprechend der DSGVO. 
            Einzelheiten regelt die Datenschutzerklärung.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">11. Schlussbestimmungen</h2>
          <p className="text-muted-foreground mb-2">
            Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
          <p className="text-muted-foreground mb-2">
            Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
          </p>
          <p className="text-muted-foreground">
            Gerichtsstand ist bei Vollkaufleuten, juristischen Personen des öffentlichen Rechts oder 
            öffentlich-rechtlichen Sondervermögen der Sitz des Unternehmens.
          </p>
        </section>
      </div>
    </article>
  );
};

export default Terms;
