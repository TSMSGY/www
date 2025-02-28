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
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Modules",
    href: "/docs/primitives/modules",
    description: "All the modules you may need for your simulators.",
  },
  {
    title: "Consumables",
    href: "/docs/primitives/consumables",
    description: "All the consumables you may need for your simulators.",
  },
  {
    title: "Interventions",
    href: "/docs/primitives/interventions",
    description: "All the interventions you may need for your simulators.",
  },
  {
    title: "Accessories & Tooling",
    href: "/docs/primitives/accessories",
    description: "Everything you may need to maintain, repair, or supercharge your simulators.",
  },
]

export const NavigationDrawer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className={className} size="icon" variant="outline">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
        </DrawerHeader>
        ...
      </DrawerContent>
    </Drawer>
  )
}

export const NavigationItems: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <div
                    className="flex h-full w-full select-none flex-col justify-end rounded-md
                    bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <Blend className="h-6 w-6" />
                    <p className="mb-2 mt-4 text-lg font-medium">
                      <span
                        className="bg-gradient-to-r from-primary-foreground to-primary bg-clip-text text-transparent"
                      >Next-Gen</span> Surgical Simulators
                    </p>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Master the art of surgery in a risk-free environment.
                    </p>
                  </div>
                </NavigationMenuLink>
              </div>
              <ListItem href="/docs" title="LS(E)">
                Laparoscopic Surgical Simulator with the essentials to get you started.
              </ListItem>
              <ListItem href="/docs/installation" title="LS(X)">
                Laparoscopic Surgical Simulator with advanced features & modules.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="HS(X)">
                Hysteroscopic Surgical Simulator with advanced features & modules.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Primitives
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
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
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
