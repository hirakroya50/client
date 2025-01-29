import { Button } from "@/components/ui/button";
import ImageSlider from "./_sub-components/ImageSlider";
import QuestionAnswer from "./_sub-components/QuestionAnswer";
import VideoCardContainer from "./_sub-components/VideoCardContainer";

const SecondPage = () => {
  return (
    <div className="">
      <HeaderCompponent />
      <ImageSlider />
      <VideoCardContainer />

      <QuestionAnswer />
    </div>
  );
};

export default SecondPage;

const HeaderCompponent = () => {
  return (
    <div className=" sticky top-0 z-20 flex items-center justify-between w-full  text-white bg-[#171717] py-4 border-b border-[#424242]">
      <p className="font-bold flex gap-2">
        <span>
          <Square />
        </span>
        <span> CopyBoard By Jser</span>
      </p>
      <div className="flex gap-3">
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
    </div>
  );
};
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Square } from "lucide-react";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[120px] rounded-xl text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600 border-none">
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
