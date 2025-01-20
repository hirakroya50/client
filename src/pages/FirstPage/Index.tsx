import { Button } from "@/components/ui/button";
import PageContainer from "../_components/warper/PageContainer";
import { useState } from "react";

const FirstPage = () => {
  return (
    <div>
      <PageContainer className="">
        <PartA />
      </PageContainer>
      <PageContainer className=" bg-[#001246]">
        <PartB />
      </PageContainer>
      <div className="customBackground">
        <PartC />
      </div>

      <PageContainer>
        <PartD />
      </PageContainer>
      <PageContainer>
        <PartE />
      </PageContainer>
    </div>
  );
};

export default FirstPage;
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
const PartD = () => {
  return (
    <div>
      <h3>What Our Referral & Affiliate Software Customers Say</h3>

      <div className="h-40">
        <img src="/reviewSection.1bad68f5.svg" alt="" className="h-full" />
      </div>
    </div>
  );
};

const PartC = () => {
  return (
    <div className="h-96 flex flex-col items-center">
      <h3>Benefits of Referral and Affiliate Programs</h3>
      <div className="flex">
        {[
          { percentage: "2-3x", text: "Return on Investments (ROI)" },

          {
            percentage: "10-15%",
            text: "Reduction in Customer Acquisition Cost",
          },
          { percentage: "50%", text: "Boost in Conversion Rates" },
          { percentage: "25%", text: "Increased Customer Spend" },
        ].map((item, i) => {
          return (
            <div key={i} className="border-r flex flex-col">
              <p>{item.percentage}</p>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className="h-20 w-40 border">yoputube video</div>
    </div>
  );
};

const PartB = () => {
  return (
    <div className="text-white text-center">
      <h1>Grow Smarter, Spend Less</h1>
      <p>
        Our affiliate and referral management software empowers brand advocacy
        through automated commission tracking, affiliate payouts, and
        customizable loyalty programs.
      </p>

      <div className="flex gap-3">
        <div className="flex flex-col bg-white text-black ">
          <h3>Launch Profitable Partner Programs</h3>
          <p>
            Maximize ROI with automated affiliate commission tracking, affiliate
            portal, auto payouts and seamless affiliate program integration.
          </p>
        </div>
        <div className="flex flex-col bg-[#f26627]">
          <h3>Launch Affiliate & Referral Programs in Minutes</h3>
          <p>
            Launch your referral or affiliate program instantly with our
            automated tracking software. Minimal development effort required for
            maximum program engagement.
          </p>
        </div>
        <div className="flex flex-col  bg-[#f9f9f9] rounded-[0.5rem] text-black p-12">
          <h3>Reduce Customer Acquisition Cost With Affiliate Marketing</h3>
          <p>
            Leverage affiliate and referral marketing to acquire customers
            affordably. Create sustainable growth through brand advocacy and
            partner programs.
          </p>
        </div>
      </div>
    </div>
  );
};

const PartA = () => {
  return (
    <div className="flex ">
      <section>
        <h1>Referral & Affiliate Marketing Software for Business Growth.</h1>
        <p>
          Referral Rocket is a complete referral tracking &
          <span>
            <a href="##">affiliate</a>
          </span>
          software that helps SaaS, D2C, and
          <span>
            <a href="##">Ecommerce</a>
          </span>
          businesses launch automated refer-a-friend programs and affiliate
          marketing campaigns
        </p>
        <div className="flex">
          <Button className="bg-[#f26627] text-sm hover:bg-[#f26627] w-[5.75rem] h-[3.1875rem]">
            Login
          </Button>

          <Button
            variant="outline"
            className="border-[#f26627] hover:bg-[#f26627] h-[3.1875rem] text-[#f26627] hover:text-white focus-visible:ring-0 " //focus-visible:outline-none
          >
            Sign Up
          </Button>
        </div>
        <div className="flex">
          <img src="/capterra.5c9bd067.svg" alt="" />
          <img src="/producthunt.00f1ad13.svg" alt="" />
        </div>
      </section>
      <section>
        <img src="/right-img.webp" alt="side image" />
      </section>
    </div>
  );
};
