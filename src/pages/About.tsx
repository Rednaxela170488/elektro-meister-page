import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Heart, Lightbulb, Target, Calendar, User } from "lucide-react";
import portraitTemplate from "@/assets/portrait-template.jpg";
import workTemplate from "@/assets/work-template.jpg";


const About = () => {
  return (
    <section className="pb-10">
      <SEO
        title="Über mich – Ihr Elektrofachmann mit Leidenschaft"
        description="Erfahren Sie mehr über mich als Ihren Elektrofachmann: Meine Motivation, mein Werdegang und warum ich Elektroinstallation als Nebentätigkeit ausübe."
      />
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-4">Über mich</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Hallo! Ich bin Ihr persönlicher Elektrofachmann – mit Leidenschaft für Technik 
            und dem Anspruch, Ihnen maßgeschneiderte Lösungen zu bieten.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">Elektrofachkraft</Badge>
            <Badge variant="secondary">Smart Home Spezialist</Badge>
            <Badge variant="secondary">Produktmanager</Badge>
          </div>
        </div>
        <div className="relative">
          <img
            src={portraitTemplate}
            alt="Porträt des Elektrofachmanns"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Motivation */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary" />
          Warum ich das mache
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Briefcase className="w-5 h-5" />
                Abwechslung zum Hauptjob
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nach einem Tag voller Büroarbeit ist die praktische Elektroarbeit 
                der perfekte Ausgleich. Hier kann ich mit den Händen arbeiten und 
                konkrete Ergebnisse schaffen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="w-5 h-5" />
                Berufliche Synergien
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Als Produktmanager für Smart Commercial Buildings bringe ich 
                tiefes Verständnis für moderne Gebäudetechnik mit – von der 
                Theorie in die Praxis.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="w-5 h-5" />
                Leidenschaft für Elektrotechnik
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Elektrotechnik fasziniert mich seit meiner Ausbildung. 
                Die ständige Weiterentwicklung der Technik, besonders im 
                Smart Home Bereich, begeistert mich jeden Tag aufs Neue.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="w-5 h-5" />
                Eigene Verwirklichung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Als selbstständiger Elektrofachmann kann ich meine Visionen 
                von perfekten Elektroinstallationen verwirklichen und Kunden 
                individuell betreuen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Werdegang */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary" />
          Mein Werdegang
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-semibold text-lg">2025 - HEUTE</h3>
              <p className="text-primary font-medium">Selbständigkeit Elektrotechnik Stanzel</p>
              <p className="text-sm text-muted-foreground">
                Elektro-Dienstleistung
              </p>
            </div>
            
            <div className="border-l-2 border-muted pl-4">
              <h3 className="font-semibold">2011 - HEUTE</h3>
              <p className="font-medium">Angestellter bei SIEMENS AG</p>
              <p className="text-sm text-muted-foreground">
                Technischer Vertrieb für Industrielle Elektrotechnik und Gebäudetechnik
              </p>
            </div>
            
            <div className="border-l-2 border-muted pl-4">
              <h3 className="font-semibold">2004 - 2011</h3>
              <p className="font-medium">Ausbildung und Studium</p>
              <p className="text-sm text-muted-foreground">
                Elektroniker für Geräte und Systeme + Diplom-Wirtschaftsingenieur Fachrichtung Elektrotechnik
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={workTemplate}
              alt="Elektroarbeiten in der Praxis"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Persönlicher Ansatz */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4">Mein persönlicher Ansatz</h3>
          <p className="text-muted-foreground mb-4">
            Bei mir bekommen Sie keine Massenabfertigung, sondern individuelle Betreuung. 
            Jeder Auftrag wird mit derselben Sorgfalt behandelt – egal ob kleine Reparatur 
            oder komplexe Smart Home Installation.
          </p>
          <p className="text-muted-foreground">
            Da ich dies als Nebentätigkeit ausübe, kann ich mir die Zeit nehmen, 
            die für eine perfekte Lösung nötig ist. Qualität vor Quantität ist mein Motto.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
