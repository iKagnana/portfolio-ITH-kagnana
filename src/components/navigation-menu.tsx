import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import type { ReactNode } from "react"

const links = [
  { label: "Home", href: "/#" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects", child: { label: "All work", href: "/projects" } },
  { label: "Profile", href: "/profile", child: { label: "About", href: "/#about" } },
  { label: "Contact", href: "mailto:ikagnana@gmail.com" },
]

export function NavigationMenu() {
  return (
    <NavigationMenuPrimitive.Root aria-label="Primary navigation" className="rounded-full border border-border bg-secondary px-8 py-4 shadow-sm backdrop-blur-sm lg:px-10">
      <NavigationMenuPrimitive.List className="flex items-center gap-8 lg:gap-12">
        {links.map((link) => (
          <NavigationMenuPrimitive.Item key={link.label} className="flex items-center gap-3">
            <NavigationMenuPrimitive.Link asChild>
              <a href={link.href} className="text-sm uppercase tracking-widest text-primary/70 transition-colors hover:text-primary">{link.label}</a>
            </NavigationMenuPrimitive.Link>
            {link.child ? <NavigationMenuPrimitive.Link asChild><a href={link.child.href} className="font-mono text-[10px] uppercase tracking-wider text-primary/45 transition-colors hover:text-primary">{link.child.label}</a></NavigationMenuPrimitive.Link> : null}
          </NavigationMenuPrimitive.Item>
        ))}
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  )
}

export type { ReactNode }
