import { ProductCard } from "@/pages/_components/cards/ProductCard";
const data = [
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
];
const PartE = () => {
  return (
    <div className="">
      <div className="text-center my-12">
        <h1 className="text-4xl font-bold mb-6">
          All-in-One Referral & Affiliate Marketing Software
        </h1>
        <p>
          Launch powerful referral & affiliate programs based on your industry
          type in minutes - track conversions, automate commissions, process
          payouts, and scale your campaigns effortlessly.
        </p>
      </div>
      <div
        className="flex flex-wrap justify-center  gap-y-10 gap-x-14
  "
      >
        {data.map((item, i) => {
          return <ProductCard item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default PartE;
