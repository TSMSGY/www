import { Blend } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { NavbarItem } from "./navbar-item";
import { Button } from "../ui/button";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export const Navbar: React.FC = () => {
  return (
    <nav className="
      flex flex-row gap-2 p-3 border-b border-dashed 
      sticky top-0 backdrop-blur-md justify-between items-center z-50
      ">

      <div className="group flex flex-row gap-2 items-center">
        <Blend className="group-hover:animate-spin" />
        <p className="text-xl font-semibold">
          <span>Temp </span>
          <span className="text-primary">Surgery</span>
        </p>
      </div>

      <div className="flex flex-row gap-3 text-muted-foreground">
        <NavbarItem name="Products">
          <DropdownMenuItem>
            <p>Simulators</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Modules
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>Accessories</p>
          </DropdownMenuItem>
        </NavbarItem>
        <NavbarItem name="Academy" />
        <NavbarItem name="Testimonials" />
        <NavbarItem name="Contact us" />
      </div>

      <div className="flex flex-row gap-3 items-center">
        <Button>Get a Quote</Button>
        <ThemeToggle />
      </div>
    </nav>
  );
}
