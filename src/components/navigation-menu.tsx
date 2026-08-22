import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
const triggerClass = "text-sm uppercase tracking-widest text-primary/70 transition-colors hover:text-primary"
const linkClass = "block rounded-lg px-3 py-2 text-sm text-primary/70 transition-colors hover:bg-secondary hover:text-primary"
const contentClass = "absolute left-0 top-full z-50 mt-3 w-48 rounded-xl border border-border bg-background p-2 shadow-lg data-[motion=from-start]:animate-in data-[motion=to-start]:animate-in"

export function NavigationMenu() {
  return (
    <NavigationMenuPrimitive.Root aria-label="Primary navigation" className="relative rounded-full border border-border bg-secondary px-8 py-4 shadow-sm backdrop-blur-sm lg:px-10">
      <NavigationMenuPrimitive.List className="flex items-center gap-8 lg:gap-12">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link asChild><a href="/#" className={triggerClass}>Home</a></NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item className="relative">
          <NavigationMenuPrimitive.Trigger className={triggerClass}>About</NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className={contentClass}>
            <ul className="grid gap-1">
              <li><NavigationMenuPrimitive.Link asChild><a href="/#about" className={linkClass}>About overview</a></NavigationMenuPrimitive.Link></li>
              <li><NavigationMenuPrimitive.Link asChild><a href="/profile" className={linkClass}>Detailed profile</a></NavigationMenuPrimitive.Link></li>
            </ul>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item className="relative">
          <NavigationMenuPrimitive.Trigger className={triggerClass}>Projects</NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className={contentClass}>
            <ul className="grid gap-1">
              <li><NavigationMenuPrimitive.Link asChild><a href="/#projects" className={linkClass}>Projects overview</a></NavigationMenuPrimitive.Link></li>
              <li><NavigationMenuPrimitive.Link asChild><a href="/projects" className={linkClass}>All projects</a></NavigationMenuPrimitive.Link></li>
            </ul>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item><NavigationMenuPrimitive.Link asChild><a href="mailto:ikagnana@gmail.com" className={triggerClass}>Contact</a></NavigationMenuPrimitive.Link></NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
      <NavigationMenuPrimitive.Viewport className="absolute left-0 top-full mt-3 hidden h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top overflow-hidden rounded-xl border border-border bg-background shadow-lg md:block" />
    </NavigationMenuPrimitive.Root>
  )
}
