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
            Einweisung und Dokumentation sind im Leistungsumfang enthalten. Die Wartung und regelmäßige Inspektion 
            des Smart Home Systems ist nicht im Angebotspreis enthalten. Wartungs- und Serviceleistungen können bei 
            Bedarf zusätzlich und gesondert vereinbart werden. Für die Betriebsbereitschaft und Funktionsfähigkeit 
            gelten die vom Hersteller empfohlenen Wartungsintervalle. Die Einhaltung dieser Intervalle liegt in der 
            Verantwortung des Kunden.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Balkonkraftwerke:</strong> Steckerfertige PV-Anlagen entsprechen den gesetzlichen Anforderungen 
            für Geräte bis 800 Watt Einspeiseleistung. Die Installation und Inbetriebnahme erfolgt unter 
            Berücksichtigung der geltenden Vorschriften, insbesondere der Produktnorm für steckerfertige PV-Anlagen 
            sowie den vereinfachten Anforderungen der VDE-AR-N-4105 für Anlagen dieser Leistungsklasse. Durch den 
            Hersteller des Wechselrichters ist die Einhaltung der Konformitätserklärung (CE/Konformität zu 
            VDE-AR-N-4105) sichergestellt. Eine zusätzliche Schutztechnik oder ein umfangreicher Netzanschlussantrag 
            ist bei Balkonkraftwerken unter 800 Watt nicht erforderlich. Anmeldung beim Netzbetreiber und im 
            Marktstammdatenregister erfolgt durch den Kunden oder nach gesonderter Vereinbarung.
          </p>
          <p className="text-muted-foreground">
            Der Kunde stellt, soweit zumutbar, unentgeltlich die erforderlichen Hilfskräfte sowie Strom, Wasser und 
            Heizung zur Verfügung. Sicherheitsbestimmungen sind einzuhalten, Arbeitsplatz muss frei zugänglich sein.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Preise und Zahlungsbedingungen</h2>
          <p className="text-muted-foreground mb-2">
            Preise verstehen sich in Euro inklusive gesetzlicher Mehrwertsteuer, sofern nicht anders angegeben. 
            Bei Kleinunternehmerregelung (§ 19 UStG) erfolgt kein Mehrwertsteuerausweis.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Zahlungsbedingungen:</strong> Bei Aufträgen über 5.000 EUR ist eine Anzahlung von 50% 
            vor Arbeitsbeginn fällig. Restzahlung binnen 14 Tagen nach Rechnungsstellung ohne Abzug.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Verzug:</strong> Bei Zahlungsverzug werden Verzugszinsen in Höhe von 5% über dem Basiszinssatz 
            sowie Mahngebühren (je Mahnung: 5 EUR, insgesamt max. 3 Mahnungen) berechnet.
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
            Termine sind nur in Textform verbindlich. Bei Terminverzögerungen, welche durch unvorhersehbare und 
            vom Auftragnehmer nicht zu vertretende Umstände entstehen, verlängern sich die Fristen entsprechend.
          </p>
          <p className="text-muted-foreground mb-2">
            Der Kunde ist verpflichtet, die Baustelle rechtzeitig und vollständig bereitzustellen, 
            erforderliche Genehmigungen einzuholen und bei Terminabsagen mindestens 48 Stunden vorher zu informieren. 
            Die bei Missachtung entstandenen Kosten werden in angemessener Form in Rechnung gestellt.
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Stornierung/Verschiebung:</strong> Bei Stornierung oder Verschiebung bereits bestätigter 
            Termine weniger als 48 Stunden können transparente, angemessen begrenzte Ausfallpauschalen berechnet 
            werden, sofern nicht anders vereinbart.
          </p>
          <p className="text-muted-foreground">
            <strong>Wartezeiten:</strong> Wartezeiten durch nicht bereitgestellte Baustelle oder 
            fehlende Mitwirkung des Kunden werden als Arbeitszeit und gemäß des Stundensatzes des Angebots berechnet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Abnahme, Gefahrenübergang und Eigentumsvorbehalt</h2>
          <p className="text-muted-foreground mb-2">
            <strong>Abnahme:</strong> Der Kunde ist mit Beendigung der Tätigkeit am letzten Leistungserbringungstag 
            automatisch zur Abnahme aufgefordert. Die Abnahme gilt als erfolgt, wenn der Kunde die Leistung in Betrieb 
            nimmt oder 14 Tage nach Fertigstellungsanzeige verstreichen, ohne dass Mängel gerügt werden.
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
            Grundsätzlich besteht die Obliegenheit zur zeitnahen Mängelanzeige.
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
            Der Auftragnehmer haftet uneingeschränkt für Schäden, die auf einer vorsätzlichen oder fahrlässigen 
            Verletzung des Lebens, des Körpers oder der Gesundheit beruhen.
          </p>
          <p className="text-muted-foreground mb-2">
            Für sonstige Schäden haftet der Auftragnehmer nur bei Vorsatz oder grober Fahrlässigkeit. 
            Bei einfacher Fahrlässigkeit haftet der Auftragnehmer lediglich bei Verletzung wesentlicher 
            Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypischen, 
            vorhersehbaren Schaden und maximal auf die Auftragssumme begrenzt.
          </p>
          <p className="text-muted-foreground mb-2">
            Die Haftung für entgangenen Gewinn, mittelbare und Folgeschäden sowie für Datenverlust ist – 
            soweit gesetzlich zulässig – ausgeschlossen.
          </p>
          <p className="text-muted-foreground mb-2">
            Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
          </p>
          <p className="text-muted-foreground mb-2">
            Der Auftraggeber (Kunde) ist verpflichtet, zur Schadensvermeidung und -minderung beizutragen. 
            Schäden, die durch eine unterlassene oder mangelhafte Mitwirkung des Auftraggebers entstehen, 
            sind von diesem selbst zu tragen.
          </p>
          <p className="text-muted-foreground">
            Der Auftragnehmer verfügt über eine ausreichend bemessene Betriebshaftpflichtversicherung für 
            Personen-, Sach- und Vermögensschäden.
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
            Die Verarbeitung personenbezogener Daten erfolgt entsprechend der DSGVO. Personenbezogene Daten werden 
            nur im Rahmen der Kontaktaufnahme erhoben und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">11. Schlussbestimmungen</h2>
          <p className="text-muted-foreground mb-2">
            Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
          <p className="text-muted-foreground">
            Zwischen Kaufleuten findet ausschließlich das Recht der Bundesrepublik Deutschland Anwendung; 
            das UN-Kaufrecht (CISG) wird ausgeschlossen. Gerichtsstand für alle Streitigkeiten aus dem 
            Vertragsverhältnis ist – soweit gesetzlich zulässig – der Sitz des Auftragnehmers.
          </p>
        </section>
      </div>
    </article>
  );
};

export default Terms;
