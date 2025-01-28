import { Button } from "@/components/ui/button";
import { useState } from "react";

export const ProductCard = ({
  item,
}: {
  item: {
    icon: string;
    title: string;
    text: string;
  };
}) => {
  const [hoverEffect, setHoverEffect] = useState(false);
  return (
    <div
      onMouseEnter={() => setHoverEffect(true)}
      onMouseLeave={() => setHoverEffect(false)}
      className={`${
        hoverEffect ? "bg-[#fff8f3]" : ""
      }  border max-w-[22.5rem] py-[1.875rem] px-[1.5rem] h-fit rounded-[1.3rem] border-[#737373]  flex flex-col  items-start`}
    >
      <div>
        <img src={item.icon} alt="icon" />
      </div>
      <p className="text-[##252b42] text-[1.3rem] font-bold py-3 ">
        {item.title}
      </p>
      <p className="text-[#404040]">{item.text}</p>
      <Button className="border mt-6 text-[#f26627] border-[#f26627] bg-white rounded-[0.625rem] hover:bg-white">
        View Example
      </Button>
    </div>
  );
};
