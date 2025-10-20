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
