import { Blend } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { NavbarItem } from "./navbar-item";

export const Navbar: React.FC = () => {
  return (
    <nav className="
      flex flex-row gap-2 p-3 border-b border-dashed 
      sticky top-0 backdrop-blur-md justify-between items-center
      ">

      <div className="group flex flex-row gap-2 items-center">
        <Blend className="group-hover:animate-spin" />
        <p className="text-xl font-semibold">
          <span>TrueSim </span>
          <span className="text-primary">Surgery</span>
        </p>
      </div>

      <div className="flex flex-row gap-3 text-muted-foreground">
        <NavbarItem name="Products" />
        <NavbarItem name="Academy" />
        <NavbarItem name="Testimonials" />
        <NavbarItem name="Demo" />
        <NavbarItem name="Contact" />
      </div>

      <div className="flex flex-row gap-3 items-center">
        <Button>Get Started</Button>
        <ThemeToggle />
      </div>
    </nav>
  );
}
