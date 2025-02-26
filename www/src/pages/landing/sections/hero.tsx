
//<p className="text-xl">
//  Bridge the gap between theory and practice. Experience cutting-edge technology that transforms surgical training, blending unparalleled realism with precise performance data. Our simulators empower the next generation of surgeons to sharpen their skills, deepen their understanding, and elevate patient outcomes.
//</p>
//

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const Hero: React.FC = () => {
return (
      <section className="flex flex-col gap-10 justify-center h-full items-center">
        <p className="
          text-muted-foreground text-center 
          rounded-full p-2 border-2 border-primary backdrop-blur-md">
          The future of surgical excellence is here.
        </p>
        <h1 className="text-6xl/snug break-words text-center rounded-full">
          <span className="underline decoration-primary decoration-wavy decoration-4 font-light">Cutting edge </span>
          <br />
          <TypeAnimation
          sequence={["Surgical Training", 1000, "Surgical Simulation", 5000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        </h1>
        <Button className="p-6">
          <Zap/>
          <span>Get Started</span>
        </Button>
      </section>
  );
}
