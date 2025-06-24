"use client";

import Link from "next/link";
import { Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { UserNav } from "./user-nav";

export function MainNav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/feed", label: "Feed" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/feed" className="flex items-center gap-2">
            <Sun className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Today</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
