import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface NavbarItemProps {
  name: string;
  children: React.ReactNode;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({ name, children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="group flex flex-row items-center gap-2 transition-all p-2 rounded-md cursor-pointer">
          <p className="transition-all group-hover:text-primary-foreground">{name}</p>
          <ChevronDown size={20} className="group-hover:rotate-180 transition-all" />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        {children}
      </PopoverContent>
    </Popover>
  );
}

