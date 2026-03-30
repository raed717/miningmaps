import { NavLink } from "react-router";
import { Mountain } from "lucide-react";

import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const links = [
    { to: "/", label: "Platform" },
    { to: "/map", label: "Map View" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <NavLink to="/" className="mr-8 flex items-center space-x-2 text-primary">
          <Mountain className="h-6 w-6" />
          <span className="font-bold tracking-tight text-foreground">MiningMaps</span>
        </NavLink>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          {links.map(({ to, label }) => {
            return (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
                end={to === "/"}
              >
                {label}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
