import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import referenceMainImage from "@/assets/reference-aule-main.jpeg";
import referenceDetail1 from "@/assets/reference-aule-detail1.jpeg";
import referenceDetail2 from "@/assets/reference-aule-detail2.png";

const referenceData = [
  {
    title: "Smart-Home-Umrüstung",
    mainImage: referenceMainImage,
    detailImages: [referenceDetail1, referenceDetail2],
    specs: {
      location: "Frankfurt am Main, Europaviertel",
      type: "Wohnung in Mehrfamilienhaus, Nachrüstung",
      buildYear: "Baujahr 2010",
      area: "120 m² Fläche",
      devices: "22 Funk-Geräte"
    },
    productAreas: ["Heizung", "Beschattung", "Funksteckdosen", "Wassersensor"],
    description: "Komplette Smart-Home-Nachrüstung einer Wohnung eines Mehrfamilienhauses mit modernster Funktechnik. Alle Bereiche wurden intelligent vernetzt und können zentral über eine App gesteuert werden."
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
              <div className="grid md:grid-cols-2 gap-4">
                {/* Left column: Large main image */}
                <div>
                  <AspectRatio ratio={16 / 10}>
                    <img 
                      src={reference.mainImage} 
                      alt={`${reference.title} - Gebäude`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </AspectRatio>
                </div>
                
                {/* Right column: Two detail images stacked */}
                <div className="grid grid-rows-2 gap-4">
                  {/* Top: Landscape detail image */}
                  <AspectRatio ratio={16 / 10}>
                    <img 
                      src={reference.detailImages[0]} 
                      alt={`${reference.title} - Thermostat Detail`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </AspectRatio>
                  
                  {/* Bottom: Portrait smartphone screenshot */}
                  <AspectRatio ratio={9 / 16}>
                    <img 
                      src={reference.detailImages[1]} 
                      alt={`${reference.title} - Smart Home App`}
                      className="w-full h-full object-contain rounded-lg bg-muted"
                    />
                  </AspectRatio>
                </div>
              </div>

              {/* Specifications and Description */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Specifications */}
                <div>
                  <h4 className="font-semibold mb-3">Eckdaten:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    {reference.specs.location && <li>• {reference.specs.location}</li>}
                    <li>• {reference.specs.type}</li>
                    <li>• {reference.specs.buildYear}</li>
                    <li>• {reference.specs.area}</li>
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
