import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavigationMenuForThirdPage = () => {
  return (
    <NavigationMenu className="text-[#2d3958]">
      <NavigationMenuList>
        <NavItem title="Use Cases" />
        <NavItem title="Solution" />

        <a href="###">Pricing</a>
        <NavItem title="Resource" />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuForThirdPage;

const NavItem = ({ title }: { title: string }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          hirakkk
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
