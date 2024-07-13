import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ThemeToggle } from "./theme-toggle";

const routes = [
  { path: '/characters', label: 'Characters' },
  { path: '/locations', label: 'Locations' },
  { path: '/episodes', label: 'Episodes' },
];

export const Header = () => {
  return (
    <div className="border-b">
      <div className="relative container flex justify-between items-center max-w-screen-xl min-h-14 mx-auto">
        <MobileNavbar className="absolute left-8 sm:hidden" />
        <Link
          href={'/'}
          className="ml-14 sm:ml-0 text-sm font-semibold dark:text-primary"
        >
          Rick And Morty
        </Link>
        <div className="hidden sm:block space-x-10">
          {routes.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={buttonVariants({ variant: 'ghost' })}
            >
              {label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}

interface MobileNavbarProps {
  className: string;
}

const MobileNavbar = ({ className }: MobileNavbarProps) => {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'} size={'icon'}>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {routes.map(({ label, path }) => (
            <Link key={path} href={path}>
              <DropdownMenuItem>
                {label}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};