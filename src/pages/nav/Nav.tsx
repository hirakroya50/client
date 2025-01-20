import PageContainer from "../_components/warper/PageContainer";
import { DropDownMenu } from "./_sub_components/DropDownMenu";
import { SignupDropDown } from "./_sub_components/SignupDropDown";

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

        <DropDownMenu />
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
