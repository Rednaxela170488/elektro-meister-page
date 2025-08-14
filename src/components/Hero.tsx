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
      <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Elektroinstallationen, Smart Home & Wallbox aus einer Hand
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Regional, zuverlässig und fachgerecht: Komplettlösungen für Wohnung und Haus – von der Planung bis zur Abnahme.
          </p>
        </div>
        <div className="relative min-h-[200px] sm:min-h-[280px] order-1 lg:order-2">
          <img
            src={heroImage}
            alt="Elektriker montiert Smart-Home-Elektroverteilung"
            className="h-full w-full object-cover rounded-lg lg:rounded-none"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
