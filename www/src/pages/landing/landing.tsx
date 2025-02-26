import { Button } from "@/components/ui/button";
import { AtSign, Zap } from "lucide-react";
import { useCallback, useRef } from "react";
import { Hero } from "./sections/hero";
import { Testimonials } from "./sections/testimonials";


export const Landing: React.FC = () => {
  const nextSectionRef = useRef<HTMLElement>(null);

  const scrollToNextSection = useCallback(() => {
    if (!nextSectionRef) return;
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div className="h-screen">
      <Hero/>
      <Testimonials/>

      <section ref={nextSectionRef} className="flex flex-col gap-8 justify-center items-center">
        <h2 className="text-2xl sm:text-4xl/snug text-center">
          <span className="underline decoration-primary decoration-wavy decoration-4 font-light">Transforming</span>
          <br />
          <span>Surgical Training</span>
        </h2>
        <p className="text-muted-foreground text-center">
          Bridge the gap between theory and practice
        </p>
        <Button className="p-6">
          <AtSign/>
          <span>Contact Us</span>
        </Button>
      </section>

    </div>
  );
} 
