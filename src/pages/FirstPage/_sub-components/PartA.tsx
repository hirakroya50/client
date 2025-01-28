import CustomButton from "@/pages/_components/buttons/CustomButton";

export const PartA = () => {
  return (
    <div className="flex gap-10 my-8">
      <section className="flex flex-col justify-center gap-5">
        <h1 className="text-3xl font-bold text-[#292929]">
          Referral & Affiliate Marketing Software for Business Growth.
        </h1>
        <p className="text-[rgba(0,0,0,0.7)] font-medium text-sm">
          Referral Rocket is a complete
          <a href="##" className="text-blue-500">
            referral tracking
          </a>{" "}
          &{" "}
          <span>
            <a href="##" className="text-blue-500">
              affiliate software
            </a>
          </span>
          that helps SaaS, D2C, and
          <span>
            <a href="##">Ecommerce</a>
          </span>
          businesses launch automated refer-a-friend programs and affiliate
          marketing campaigns
        </p>
        <div className="flex gap-4">
          <CustomButton variant={"VarA"}>Book A Demo</CustomButton>

          <CustomButton variant={"VarB"}>Sign Up</CustomButton>
        </div>
        <div className="flex gap-4">
          <div>
            <img src="/capterra.5c9bd067.svg" alt="" />
          </div>
          <div>
            <img src="/producthunt.00f1ad13.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="flex items-center max-w-[33rem] ">
        <img src="/right-img.webp" alt="side image" />
      </section>
    </div>
  );
};
