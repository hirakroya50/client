import CustomButton from "../../_components/buttons/CustomButton";
import PageContainer from "../../_components/warper/PageContainer";
import { DropDownMenu } from "./_sub_components/DropDownMenu";
import { SignupDropDown } from "./_sub_components/SignupDropDown";

const NavBar = () => {
  return (
    <PageContainer className="border-b border-[#e5e7eb]">
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
        <DropDownMenu />
        <div className="relative hidden md:flex">
          <CustomButton variant={"VarA"} className="mr-5">
            Login
          </CustomButton>
          <SignupDropDown />
        </div>

        <SideNavBarForMobile />
      </nav>
    </PageContainer>
  );
};

import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
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
          <MenuIcon className=" h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent className="  border-none flex flex-col gap-6">
        <SheetHeader className="mb-4 ">
          <SheetTitle className="e text-lg font-bold">
            <a href="#" className="flex  items-center border-b">
              <span className="block h-10 w-12 ">
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
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4">
          {[
            { label: "Home", variant: "ghost" },
            { label: "JExamples", variant: "ghost" },
            { label: "Blogs", variant: "ghost" },
            {
              label: "Sign-in / Sign-up",
              variant: "solid",
            },
          ].map((item, index) => (
            <Button
              key={index}
              className={`
         text-left  block hover:bg-white bg-white text-gray-800 border-b
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
export default NavBar;
