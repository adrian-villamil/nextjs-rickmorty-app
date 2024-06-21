import Link from "next/link"
import { ThemeToggle } from "./theme-toggle";

const routes = [
  { path: '/characters', label: 'Characters' },
  { path: '/locations', label: 'Locations' },
  { path: '/episodes', label: 'Episodes' },
];

export const Header = () => {
  return (
    <div className="border-b">
      <div className="container flex justify-between items-center max-w-screen-xl min-h-14 mx-auto">
        <Link
          href={'/'}
          className="text-sm font-bold"
        >
          Rick And Morty
        </Link>
        <div className="space-x-10">
          {routes.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className="text-sm font-bold hover:text-green-500"
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
