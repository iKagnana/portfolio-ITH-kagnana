import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
const menuClass = "absolute left-1/2 top-full z-50 mt-3 hidden w-48 -translate-x-1/2 rounded-xl border border-border bg-background p-2 shadow-lg group-hover:block group-focus-within:block"

export function NavigationMenu() {
  return (
    <NavigationMenuPrimitive.Root aria-label="Primary navigation" className="rounded-full border border-border bg-secondary px-8 py-4 shadow-sm backdrop-blur-sm lg:px-10">
      <NavigationMenuPrimitive.List className="flex items-center gap-8 lg:gap-12">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link asChild><a href="/#" className="text-sm uppercase tracking-widest text-primary/70 transition-colors hover:text-primary">Home</a></NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item className="group relative">
          <NavigationMenuPrimitive.Trigger className="text-sm uppercase tracking-widest text-primary/70 transition-colors hover:text-primary">About</NavigationMenuPrimitive.Trigger>
          <ul className={menuClass}>
            <li><NavigationMenuPrimitive.Link asChild><a href="/#about" className="block rounded-lg px-3 py-2 text-sm text-primary/70 hover:bg-secondary hover:text-primary">Overview</a></NavigationMenuPrimitive.Link></li>
            <li><NavigationMenuPrimitive.Link asChild><a href="/profile" className="block rounded-lg px-3 py-2 text-sm text-primary/70 hover:bg-secondary hover:text-primary">Detailed profile</a></NavigationMenuPrimitive.Link></li>
          </ul>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item className="group relative">
          <NavigationMenuPrimitive.Trigger className="text-sm uppercase tracking-widest text-primary/70 transition-colors hover:text-primary">Projects</NavigationMenuPrimitive.Trigger>
          <ul className={menuClass}>
            <li><NavigationMenuPrimitive.Link asChild><a href="/#projects" className="block rounded-lg px-3 py-2 text-sm text-primary/70 hover:bg-secondary hover:text-primary">Overview</a></NavigationMenuPrimitive.Link></li>
            <li><NavigationMenuPrimitive.Link asChild><a href="/projects" className="block rounded-lg px-3 py-2 text-sm text-primary/70 hover:bg-secondary hover:text-primary">All projects</a></NavigationMenuPrimitive.Link></li>
          </ul>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item><NavigationMenuPrimitive.Link asChild><a href="mailto:ikagnana@gmail.com" className="text-sm uppercase tracking-widest text-primary/70 transition-colors hover:text-primary">Contact</a></NavigationMenuPrimitive.Link></NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  )
}
