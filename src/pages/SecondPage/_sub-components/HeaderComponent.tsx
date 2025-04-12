export const HeaderComponent = () => {
  return (
    <div className="  flex items-center justify-between w-full  text-white bg-[#171717] ">
      <p className="font-bold flex gap-2 items-center">
        <span>
          <SquareMIcon className="h-10 w-10" />
        </span>
        <span> MopyBoard By Jser</span>
      </p>
      <div className=" gap-3 hidden md:flex ">
        <SelectDemo />

        <Button className="hover:bg-gray-600 bg-transparent rounded-xl">
          API
        </Button>

        <Button className="bg-transparent hover:bg-gray-600 rounded-xl">
          Jsper Free Trial
        </Button>
        <Button className="bg-transparent hover:bg-gray-600 rounded-xl">
          Pricing
        </Button>
        <Button className=" text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600 rounded-xl">
          Sign-in / Sign-up
        </Button>
      </div>
      <SideNavBarForMobile />
    </div>
  );
};

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import SideNavBarForMobile from "./SideNavBarForMobile";
import { SquareMIcon } from "lucide-react";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[7.5rem] rounded-xl text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600 border-none">
        <SelectValue placeholder="Select a op" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
