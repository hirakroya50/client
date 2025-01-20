import { Button } from "@/components/ui/button";

export const PartA = () => {
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
