import { PersonStanding, SoupIcon } from "lucide-react";

export const PartB = () => {
  return (
    <div className="text-white text-center ">
      <div className="mb-20">
        <h1 className="text-4xl mb-6 font-bold">Grow Smarter, Spend Less</h1>
        <p className="text-lg font-medium">
          Our affiliate and referral management software empowers brand advocacy
          through automated commission tracking, affiliate payouts, and
          customizable loyalty programs.
        </p>
      </div>

      <div className="flex gap-3 flex-col md:flex-row">
        <div className="flex flex-col  items-center gap-3 py-20 max-w-[100%] md:max-w-[25rem] bg-[#f9f9f9] rounded-[0.5rem] text-black p-12">
          <PersonStanding className="text-[#f26627] h-10 w-10" />
          <h3 className="text-lg font-bold">
            Launch Profitable Partner Programs
          </h3>
          <p>
            Maximize ROI with automated affiliate commission tracking, affiliate
            portal, auto payouts and seamless affiliate program integration.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 py-20 max-w-[100%] md:max-w-[25rem] bg-[#f26627] rounded-[0.5rem] text-black p-12">
          <SoupIcon className="text-[#ffff] h-10 w-10" />

          <h3 className="text-[#ffff] text-lg font-bold">
            Launch Affiliate & Referral Programs in Minutes
          </h3>
          <p>
            Launch your referral or affiliate program instantly with our
            automated tracking software. Minimal development effort required for
            maximum program engagement.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 py-20 max-w-[100%] md:max-w-[25rem] bg-[#f9f9f9] rounded-[0.5rem] text-black p-12">
          <PersonStanding className="text-[#f26627] h-10 w-10" />
          <h3 className="text-lg font-bold">
            Reduce Customer Acquisition Cost With Affiliate Marketing
          </h3>
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
