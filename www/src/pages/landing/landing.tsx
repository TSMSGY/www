import { useRef } from "react";
import { Hero } from "./sections/hero";
import { Testimonials } from "./sections/testimonials";


export const Landing: React.FC = () => {
  const nextSectionRef = useRef<HTMLElement>(null);

  return (
    <div className="h-screen">
      <Hero />
      <Testimonials />

      <section ref={nextSectionRef} className="flex flex-col gap-8 justify-center items-center p-5">

        <h2 className="text-2xl sm:text-4xl/snug text-center">
          <span className="font-bold underline decoration-primary decoration-wavy decoration-2">
            Imagined
          </span>
          <br />
          <span>by world-leading experts.</span>
        </h2>
        <p className="text-muted-foreground text-center">
          Carefully crafted & engineered under the supervision of award-winning Scholars.
        </p>
      </section>
    </div>
  );
} 
