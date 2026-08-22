import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

const triggerClass =
  "text-sm uppercase tracking-widest text-primary/70 transition-colors hover:text-primary outline-none";
const linkClass =
  "block rounded-lg px-3 py-2 text-sm text-primary/70 transition-colors hover:bg-secondary hover:text-primary outline-none";

// 1. We keep absolute positioning here so it anchors to the relative Items
// 2. We swap the [motion] animations for [state] animations since we aren't using the shared Viewport
const contentClass =
  "absolute left-0 top-full z-50 mt-3 w-48 rounded-xl border border-border bg-background p-2 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95";

export function NavigationMenu() {
  return (
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

      {/* 
        The Viewport is deleted! 
        Radix will now render the Content natively next to the Trigger, 
        respecting your 'absolute left-0 top-full' CSS.
      */}
    </NavigationMenuPrimitive.Root>
  );
}
