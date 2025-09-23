import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const referenceData = [
  {
    title: "Smart-Home-Umrüstung",
    mainImage: "/placeholder.svg",
    detailImages: ["/placeholder.svg", "/placeholder.svg"],
    specs: {
      type: "Einfamilienhaus, Nachrüstung",
      buildYear: "Baujahr 2000",
      area: "150 m² Fläche",
      property: "400 m² Grundstück",
      devices: "80 Funk-Geräte"
    },
    productAreas: ["Heizung und Klima", "Licht", "Zutritt", "Sicherheit und Überwachung"],
    description: "Komplette Smart-Home-Nachrüstung eines Einfamilienhauses mit modernster Funktechnik. Alle Bereiche wurden intelligent vernetzt und können zentral über eine App gesteuert werden."
  },
  {
    title: "Wohnung Kernsanierung",
    mainImage: "/placeholder.svg",
    detailImages: ["/placeholder.svg", "/placeholder.svg"],
    specs: {
      type: "Wohnung, Kernsanierung",
      buildYear: "Baujahr 1985",
      area: "85 m² Fläche",
      property: "3. OG",
      devices: "45 Funk-Geräte"
    },
    productAreas: ["Licht", "Heizung und Klima", "Sicherheit"],
    description: "Vollständige elektrische Neuinstallation mit integrierter Smart-Home-Technologie. Moderne Beleuchtungssteuerung und intelligente Heizungsregelung für optimalen Komfort."
  }
];

const References = () => {
  return (
    <section className="pb-10">
      <SEO
        title="Referenzen – Elektrofachbetrieb"
        description="Ausgewählte Projekte: Smart-Home-Umrüstung, Wallbox-Installationen, Wohnungsmodernisierungen."
      />
      <h1 className="text-3xl font-bold mb-6">Referenzen</h1>
      
      <div className="space-y-12">
        {referenceData.map((reference, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">{reference.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Images Section */}
              <div className="grid md:grid-cols-3 gap-4">
                {/* Large main image */}
                <div className="md:col-span-2">
                  <AspectRatio ratio={16 / 10}>
                    <img 
                      src={reference.mainImage} 
                      alt={`${reference.title} - Gebäude`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </AspectRatio>
                </div>
                
                {/* Two smaller detail images */}
                <div className="space-y-4">
                  {reference.detailImages.map((image, idx) => (
                    <AspectRatio key={idx} ratio={4 / 3}>
                      <img 
                        src={image} 
                        alt={`${reference.title} - Detail ${idx + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </AspectRatio>
                  ))}
                </div>
              </div>

              {/* Specifications and Description */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Specifications */}
                <div>
                  <h4 className="font-semibold mb-3">Eckdaten:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• {reference.specs.type}</li>
                    <li>• {reference.specs.buildYear}</li>
                    <li>• {reference.specs.area}</li>
                    <li>• {reference.specs.property}</li>
                    <li>• {reference.specs.devices}</li>
                  </ul>
                  
                  <h5 className="font-semibold mb-3">Produktbereiche:</h5>
                  <div className="flex flex-wrap gap-2">
                    {reference.productAreas.map((area, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Description */}
                <div>
                  <h4 className="font-semibold mb-3">Projektbeschreibung:</h4>
                  <p className="text-muted-foreground">{reference.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default References;
