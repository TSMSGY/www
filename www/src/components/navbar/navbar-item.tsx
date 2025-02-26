import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface NavbarItemProps {
  name: string;
  children?: React.ReactNode;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({ name, children }) => {
  if (children === undefined) {
    return (
      <div className="group flex flex-row items-center gap-2 transition-all p-2 rounded-md cursor-pointer">
        <p className="transition-all group-hover:text-primary-foreground">{name}</p>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="group flex flex-row items-center gap-2 transition-all p-2 rounded-md cursor-pointer">
          <p className="transition-all group-hover:text-primary-foreground">{name}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-zig text-muted-foreground p-2">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

