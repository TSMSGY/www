import { Blend } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { NavigationItems } from "./navbar-items";
import { NavbarMenu } from "./navbar-menu";

export const Navbar: React.FC = () => {
  return (
    <nav
      className="
      flex flex-row gap-2 p-3 border-b border-dashed 
      sticky top-0 backdrop-blur-md justify-between
      items-center z-50
      "
    >
      <div className="group flex flex-row gap-2 items-center">
        <Blend className="group-hover:animate-spin" />
        <p className="text-xl font-semibold">
          <span>TrueSim </span>
          <span className="text-primary">Surgery</span>
        </p>
      </div>

      <NavigationItems className="hidden lg:flex" />

      <div className="hidden lg:flex lg:flex-row gap-3 items-center">
        <Button>Get a Quote</Button>
        <ThemeToggle />
      </div>

      <div className="lg:hidden flex flex-row gap-3 items-center">
        <ThemeToggle />
        <NavbarMenu />
      </div>
    </nav>
  );
};
