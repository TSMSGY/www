import { Blend, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

interface NavItemProps {
  name: string;
};

const NavItem: React.FC<NavItemProps> = ({ name }) => {
  return (
    <div className="group flex flex-row items-center gap-2 transition-all p-2 rounded-md cursor-pointer">
      <p className="transition-all group-hover:text-primary-foreground">{name}</p>
      <ChevronDown size={20} className="group-hover:rotate-180 transition-all" />
    </div>
  );
}

const NavItems: React.FC = () => {
  return (
    <div className="flex flex-row gap-3 text-muted-foreground">
      <NavItem name="Products" />
      <NavItem name="Academy" />
      <NavItem name="Testimonials" />
      <NavItem name="Demo" />
      <NavItem name="Contact" />
    </div>
  );
}


export const Navbar: React.FC = () => {
  return (
    <nav className="
      flex flex-row gap-2 p-3 border-b border-dashed 
      sticky top-0 backdrop-blur-md justify-between items-center
      ">

      <div className="group flex flex-row gap-2 items-center">
        <Blend className="group-hover:animate-spin" />
        <p className="text-xl font-semibold">
          <span>Surgeon</span>
          <span className="text-primary">X</span>
        </p>
      </div>

      <NavItems />

      <div className="flex flex-row gap-3 items-center">
        <Button>Get Started</Button>
        <ThemeToggle />
      </div>
    </nav>
  );
}
