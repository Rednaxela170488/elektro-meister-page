import heroImage from "@/assets/hero-electric.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-xl border mt-6 mb-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, hsl(var(--brand)/0.35), transparent 60%)`,
          transition: "background 0.2s ease-out",
        }}
        aria-hidden
      />
      <div className="relative grid md:grid-cols-2 gap-6">
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Elektroinstallationen, Smart Home & Wallbox aus einer Hand
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Regional, zuverlässig und fachgerecht: Komplettlösungen für Wohnung und Haus – von der Planung bis zur Abnahme.
          </p>
          <div className="flex gap-3">
            <Button asChild variant="hero">
              <a href="/leistungen">Leistungen ansehen</a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:kontakt@elektrofachbetrieb.de">Kostenlose Beratung</a>
            </Button>
          </div>
        </div>
        <div className="relative min-h-[280px]">
          <img
            src={heroImage}
            alt="Elektriker montiert Smart-Home-Elektroverteilung"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
