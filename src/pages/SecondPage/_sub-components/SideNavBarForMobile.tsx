import { MenuIcon, SquareMIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const SideNavBarForMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="block md:hidden p-2">
          <MenuIcon className="text-white h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-[#171717] text-white border-none flex flex-col gap-6">
        <SheetHeader className="mb-4">
          <div className="flex items-center gap-3">
            <SquareMIcon className="h-8 w-8" />
            <SheetTitle className="text-white text-lg font-bold">
              MopyBoard By Jser
            </SheetTitle>
          </div>
          <SheetDescription className="text-gray-400 text-sm">
            This is a simple SaaS product with a simple UI and UX.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4">
          {[
            { label: "API", variant: "ghost" },
            { label: "Jsper Free Trial", variant: "ghost" },
            { label: "Pricing", variant: "ghost" },
            {
              label: "Sign-in / Sign-up",
              variant: "solid",
            },
          ].map((item, index) => (
            <Button
              key={index}
              className={`
         text-left rounded-xl block hover:bg-gray-600 bg-gray-800
h-10        
      `}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideNavBarForMobile;
