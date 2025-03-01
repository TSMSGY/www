
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Menu } from "lucide-react";
import { NavItem } from "./navbar-nav-item";
import { addons } from "@/static/addons";



export const NavbarMenu: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className={className} size="icon" variant="outline">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="font-zig text-sm">
        <div className="flex flex-col p-4 space-y-2">
          <Collapsible className="w-full">
            <CollapsibleTrigger className="w-full rounded-md justify-between">
              <Button variant="ghost" className="justify-center w-full">
                Products
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col space-y-2 mt-2">
                <NavItem title="LS(E)">
                  Laparoscopic Surgical Simulator with the essentials to get
                  you started.
                </NavItem>
                <NavItem title="LS(X)">
                  Laparoscopic Surgical Simulator with advanced features &
                  modules.
                </NavItem>
                <NavItem title="HS(X)">
                  Hysteroscopic Surgical Simulator with advanced features &
                  modules.
                </NavItem>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="w-full">
            <CollapsibleTrigger className="w-full rounded-md justify-between">
              <Button variant="ghost" className="justify-center w-full">
                Addons
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="flex flex-col space-y-2">
                {addons.map((addon) => (
                  <li key={addon.title}>
                    <NavItem {...addon}>{addon.description}</NavItem>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Button variant="ghost" className="w-full">
            Academy
          </Button>
          <Button variant="ghost" className="w-full">
            Testimonial
          </Button>
          <Button variant="ghost" className="w-full">
            Contact
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
