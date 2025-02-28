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
import { Blend, Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import { addons } from "@/static/addons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

export const NavigationDrawer: React.FC<{ className?: string }> = ({
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
            <CollapsibleTrigger className="w-full bg-muted rounded-md justify-between p-2">
              Products
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col space-y-2 mt-2">
                <ListItem title="LS(E)">
                  Laparoscopic Surgical Simulator with the essentials to get
                  you started.
                </ListItem>
                <ListItem title="LS(X)">
                  Laparoscopic Surgical Simulator with advanced features &
                  modules.
                </ListItem>
                <ListItem title="HS(X)">
                  Hysteroscopic Surgical Simulator with advanced features &
                  modules.
                </ListItem>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="w-full">
            <CollapsibleTrigger className="w-full bg-muted rounded-md justify-between p-2">
              Add-ons
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="flex flex-col space-y-2 mt-2">
                {addons.map((addon) => (
                  <li key={addon.title}>
                    <ListItem {...addon}>{addon.description}</ListItem>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Button variant="secondary" className="justify-center w-full">
            Academy
          </Button>
          <Button variant="secondary" className="justify-center w-full">
            Testimonial
          </Button>
          <Button variant="secondary" className="justify-center w-full">
            Contact
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

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
              <ListItem title="LS(E)">
                Laparoscopic Surgical Simulator with the essentials to get you
                started.
              </ListItem>
              <ListItem title="LS(X)">
                Laparoscopic Surgical Simulator with advanced features &
                modules.
              </ListItem>
              <ListItem title="HS(X)">
                Hysteroscopic Surgical Simulator with advanced features &
                modules.
              </ListItem>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Add-ons</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {addons.map((addon) => (
                <ListItem key={addon.title} {...addon}>
                  {addon.description}
                </ListItem>
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

const ListItem: React.FC<{
  className?: string;
  title: string;
  children: React.ReactNode;
}> = ({ className, title, children }) => {
  return (
    <div>
      <a
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </div>
  );
};
