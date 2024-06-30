import Link from "next/link"
import { NavBar } from "./navbar";
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
        <NavBar className="absolute left-8 sm:hidden" />
        <Link
          href={'/'}
          className="ml-14 sm:ml-0 text-sm font-bold"
        >
          Rick And Morty
        </Link>
        <div className="hidden sm:block space-x-10">
          {routes.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className="text-sm font-bold hover:text-lime-500"
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