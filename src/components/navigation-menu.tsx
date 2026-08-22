"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

const triggerClass =
  "text-sm uppercase tracking-widest text-primary/70 transition-colors hover:text-primary outline-none";
const linkClass =
  "block rounded-lg px-3 py-2 text-sm text-primary/70 transition-colors hover:bg-secondary hover:text-primary outline-none";
const contentClass =
  "absolute left-0 top-full z-50 mt-3 w-48 rounded-xl border border-border bg-background p-2 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95";

export function NavigationMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90">
      {/* Desktop Navigation */}
      <div className="hidden md:block md:fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <NavigationMenuPrimitive.Root
          aria-label="Primary navigation"
          className="relative rounded-full border border-border bg-secondary px-8 py-4 shadow-sm backdrop-blur-sm lg:px-10 z-50"
        >
          <NavigationMenuPrimitive.List className="flex items-center gap-8 lg:gap-12">
            <NavigationMenuPrimitive.Item>
              <NavigationMenuPrimitive.Link asChild>
                <a href="/#" className={triggerClass}>
                  Home
                </a>
              </NavigationMenuPrimitive.Link>
            </NavigationMenuPrimitive.Item>

            <NavigationMenuPrimitive.Item className="relative">
              <NavigationMenuPrimitive.Trigger className={triggerClass}>
                About
              </NavigationMenuPrimitive.Trigger>
              <NavigationMenuPrimitive.Content className={contentClass}>
                <ul className="grid gap-1">
                  <li>
                    <NavigationMenuPrimitive.Link asChild>
                      <a href="/#about" className={linkClass}>
                        About overview
                      </a>
                    </NavigationMenuPrimitive.Link>
                  </li>
                  <li>
                    <NavigationMenuPrimitive.Link asChild>
                      <a href="/profile" className={linkClass}>
                        Detailed profile
                      </a>
                    </NavigationMenuPrimitive.Link>
                  </li>
                </ul>
              </NavigationMenuPrimitive.Content>
            </NavigationMenuPrimitive.Item>

            <NavigationMenuPrimitive.Item className="relative">
              <NavigationMenuPrimitive.Trigger className={triggerClass}>
                Projects
              </NavigationMenuPrimitive.Trigger>
              <NavigationMenuPrimitive.Content className={contentClass}>
                <ul className="grid gap-1">
                  <li>
                    <NavigationMenuPrimitive.Link asChild>
                      <a href="/#projects" className={linkClass}>
                        Projects overview
                      </a>
                    </NavigationMenuPrimitive.Link>
                  </li>
                  <li>
                    <NavigationMenuPrimitive.Link asChild>
                      <a href="/projects" className={linkClass}>
                        All projects
                      </a>
                    </NavigationMenuPrimitive.Link>
                  </li>
                </ul>
              </NavigationMenuPrimitive.Content>
            </NavigationMenuPrimitive.Item>

            <NavigationMenuPrimitive.Item>
              <NavigationMenuPrimitive.Link asChild>
                <a href="mailto:ikagnana@gmail.com" className={triggerClass}>
                  Contact
                </a>
              </NavigationMenuPrimitive.Link>
            </NavigationMenuPrimitive.Item>
          </NavigationMenuPrimitive.List>
        </NavigationMenuPrimitive.Root>
      </div>

      {/* Mobile Nav Header */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <a
          href="/#"
          className="text-primary font-semibold text-lg tracking-wide"
        >
          KI
        </a>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // Prevents Radix from swallowing the click
            setIsMobileMenuOpen((prev) => !prev);
          }}
          className="text-primary/70 hover:text-primary transition-colors focus:outline-none p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 py-4 bg-secondary/95 backdrop-blur-sm border-b border-border shadow-md">
          <a
            href="/#"
            onClick={closeMenu}
            className="group relative text-sm tracking-widest text-primary/70 hover:text-primary transition-colors uppercase py-2"
          >
            Home
          </a>
          <a
            href="/#about"
            onClick={closeMenu}
            className="group relative text-sm tracking-widest text-primary/70 hover:text-primary transition-colors uppercase py-2"
          >
            About Overview
          </a>
          <a
            href="/profile"
            onClick={closeMenu}
            className="pl-4 text-xs font-mono tracking-widest text-primary/50 hover:text-primary transition-colors uppercase py-1"
          >
            Detailed Profile
          </a>
          <a
            href="/#projects"
            onClick={closeMenu}
            className="group relative text-sm tracking-widest text-primary/70 hover:text-primary transition-colors uppercase py-2"
          >
            Projects Overview
          </a>
          <a
            href="/projects"
            onClick={closeMenu}
            className="pl-4 text-xs font-mono tracking-widest text-primary/50 hover:text-primary transition-colors uppercase py-1"
          >
            All Projects
          </a>
          <a
            href="mailto:ikagnana@gmail.com"
            onClick={closeMenu}
            className="group relative text-sm tracking-widest text-primary/70 hover:text-primary transition-colors uppercase py-2"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
