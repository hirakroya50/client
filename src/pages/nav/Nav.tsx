import { Link } from "react-router-dom";
import PageContainer from "../_components/warper/PageContainer";

const NavBar = () => {
  return (
    <PageContainer className="border border-[#e5e7eb]">
      <nav className="flex justify-between">
        <a href="#" className="flex  items-center">
          <span className="block h-10 w-12">
            <img
              src="/clientapplogo.png"
              alt="logo"
              className="bg-transparent w-full h-full"
              style={{
                objectFit: "contain",
              }}
            />
          </span>
          <span className="text-xl font-medium">Referral Rocket </span>
        </a>

        <NavigationMenuDemo />
        <div className="relative">
          <Button className="bg-[#f26627] text-sm hover:bg-[#f26627] w-[5.75rem] h-[3.1875rem]">
            Login
          </Button>

          <SignupDropDown />
        </div>
      </nav>
    </PageContainer>
  );
};

export default NavBar;

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SignupDropDown() {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DropdownMenuTrigger
        asChild
        className="border-[#f26627] focus:border-[#f26627]  focus:outline-none"
      >
        <Button
          variant="outline"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="border-[#f26627] hover:bg-[#f26627] h-[3.1875rem] text-[#f26627] hover:text-white focus-visible:ring-0 " //focus-visible:outline-none
        >
          Sign Up
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        style={{ transform: "translateY(-3px)" }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid  gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[200px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {[
          { name: "Home", path: "/" },

          { name: "Examples", path: "/example" },
          { name: "Blogs", path: "##" },
        ].map((item, i) => {
          return (
            <NavigationMenuItem key={i}>
              <Link to={item.path} className="text-[#170F49] text-lg">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
