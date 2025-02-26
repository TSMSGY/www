
//<p className="text-xl">
//  Bridge the gap between theory and practice. Experience cutting-edge technology that transforms surgical training, blending unparalleled realism with precise performance data. Our simulators empower the next generation of surgeons to sharpen their skills, deepen their understanding, and elevate patient outcomes.
//</p>
//

import { Button } from "@/components/ui/button";
import { useCallback, useRef } from "react";

export const Hero: React.FC = () => {
  const nextSectionRef = useRef<HTMLElement>(null);

  const scrollToNextSection = useCallback(() => {
    if (!nextSectionRef) return;
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div className="h-screen">
      <section className="flex flex-col gap-8 justify-center h-full items-center">
        <h1 className="text-4xl sm:text-7xl/snug break-words text-center">
          <span className="italic">Cutting edge</span>
          <br />
          <span className="underline decoration-primary decoration-4 font-light">Surgical Simulation</span>
          <br />
          <span className="font-serif">Solutions</span>
        </h1>
        <Button size="lg" onClick={scrollToNextSection}>Get Started</Button>
      </section>
      <section ref={nextSectionRef} className="flex flex-col gap-8 justify-center h-full items-center">
        <h1 className="text-4xl sm:text-7xl/snug break-words text-center">
          <span className="italic">Cutting edge</span>
          <br />
          <span className="underline decoration-primary decoration-4">Surgical Simulation</span>
          <br />
          <span className="font-serif">Solutions</span>
        </h1>
        <Button size="lg">Get Started</Button>
      </section>
    </div>
  );
} 
