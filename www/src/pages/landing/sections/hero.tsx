import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 justify-center h-full items-center">
      <p className="
        animate-pulse
        text-sm
        md:text-base
        text-center rounded-full py-2 px-3 
        border-2 border-primary backdrop-blur-md">
        The future of surgical excellence is here
      </p>
      <h1 className="text-4xl/snug md:text-5xl/snug lg:text-6xl/snug break-words text-center rounded-full">
        <span className="underline decoration-primary decoration-wavy decoration-2 font-light">Cutting edge </span>
        <br />
        <TypeAnimation
          sequence={["Surgical Training", 2000, "Surgical Simulation", 5000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <Button className="p-6 shadow-primary/50 shadow-lg">
        <Zap />
        <span>Get Started</span>
      </Button>
    </section>
  );
}
