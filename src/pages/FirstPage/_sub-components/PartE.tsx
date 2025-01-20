import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const PartE = () => {
  return (
    <div>
      <h1>All-in-One Referral & Affiliate Marketing Software</h1>
      <p>
        Launch powerful referral & affiliate programs based on your industry
        type in minutes - track conversions, automate commissions, process
        payouts, and scale your campaigns effortlessly.
      </p>

      <div
        className="flex flex-wrap justify-center  gap-y-10 gap-x-14
  "
      >
        {[
          {
            icon: "refer-icon.svg",
            text: "Refer-a-Friend program reward customers for bringing in new referrals, encouraging word-of-mouth marketing.",
            title: "Refer a friend",
          },
          {
            icon: "affiliate-icon.svg",
            text: "Refer-a-Friend program reward customers for bringing in new referrals, encouraging word-of-mouth marketing.",
            title: "Ecommerce",
          },
          {
            icon: "ecommerce-icon.svg",
            text: "Refer-a-Friend program reward customers for bringing in new referrals, encouraging word-of-mouth marketing.",
            title: "Affiliate",
          },
          {
            icon: "milestone-icon.svg",
            text: "Refer-a-Friend program reward customers for bringing in new referrals, encouraging word-of-mouth marketing.",
            title: "Milestone Giveaways",
          },
          {
            icon: "newsletter-icon.svg",
            text: "Refer-a-Friend program reward customers for bringing in new referrals, encouraging word-of-mouth marketing.",
            title: "Newsletter Referral",
          },
          {
            icon: "saas-icon.svg",
            text: "Refer-a-Friend program reward customers for bringing in new referrals, encouraging word-of-mouth marketing.",
            title: "SaaS",
          },
        ].map((item, i) => {
          return <ProductCard item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

const ProductCard = ({
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
      <p>{item.text}</p>
      <Button className="border mt-6 text-[#f26627] border-[#f26627] bg-white rounded-[0.625rem]">
        View Example
      </Button>
    </div>
  );
};

export default PartE;
