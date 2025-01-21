import CustomButton from "@/pages/_components/buttons/CustomButton";

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
          <CustomButton variant={"VarA"}>Login</CustomButton>

          <CustomButton variant={"VarB"}>Sign Up</CustomButton>
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
