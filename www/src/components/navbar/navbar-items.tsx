import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Blend } from "lucide-react";
import { addons } from "@/static/addons";
import { NavItem } from "./navbar-nav-item";


export const NavigationItems: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div className="row-span-3">
                <div
                  className="flex h-full w-full select-none flex-col justify-end rounded-md
                    bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                >
                  <Blend className="h-6 w-6" />
                  <p className="mb-2 mt-4 text-lg font-medium">
                    <span className="bg-gradient-to-r from-primary-foreground to-primary bg-clip-text text-transparent">
                      Next-Gen
                    </span>{" "}
                    Surgical Simulators
                  </p>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Master the art of surgery in a risk-free environment.
                  </p>
                </div>
              </div>
              <NavItem title="LS(E)">
                Laparoscopic Surgical Simulator with the essentials to get you
                started.
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
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Add-ons</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {addons.map((addon) => (
                <NavItem key={addon.title} {...addon}>
                  {addon.description}
                </NavItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Academy
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Testimonial
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

