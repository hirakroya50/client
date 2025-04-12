import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

const FooterPart = () => {
  const data = [
    {
      title: "Products",
      navs: [
        { url: "Home" },
        { url: "Referral Software" },
        { url: "Affiliate Software" },
        { url: "Dashboard" },
        { url: "Affiliate Portal" },
        { url: "Examples" },
        { url: "Pricing" },
      ],
    },
    {
      title: "Compare Us",
      navs: [
        { url: "Rewardful Alternative" },
        { url: "FirstPromoter Alternative" },
        { url: "Tolt Alternative" },
        { url: "Tapfiliate Alternative" },
        { url: "Growsurf Alternative" },
        { url: "Viral Loops Alternative" },
      ],
    },
    {
      title: "Resources",
      navs: [
        { url: "Blog" },
        { url: "Affiliate Program" },
        { url: "Help Guide" },
        { url: "ROI Calculator" },
        { url: "FAQs" },
        { url: "Trust Center" },
        { url: "Terms of Service" },
        { url: "Privacy Policy" },
        { url: "Security" },
      ],
    },
  ];

  return (
    <footer className="border-[#f0f1f2] border-t flex flex-col md:flex-row pt-10">
      <div className=" w-full md:w-96">
        <div className="flex items-center  justify-center md:justify-start">
          <div className="h-20 ">
            <img src="/clientapplogo.png" alt="" className="h-full w-full" />
          </div>
          <h4 className="text-2xl font-bold">Referral Roctet</h4>
        </div>

        <p className="mb-10 text-center md:text-left">
          Referral & Affiliate Software for SaaS, Ecommerce & other businesses.
        </p>

        <div className="flex gap-5">
          {[
            { id: 1, Icon: InstagramIcon },
            { id: 2, Icon: LinkedinIcon },
            { id: 3, Icon: FacebookIcon },
            { id: 4, Icon: YoutubeIcon },
          ].map(({ id, Icon }) => (
            <div key={id} className="p-3 rounded-full border">
              <Icon />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-around grow mt-10 md:mt-0">
        {data.map((item, i) => {
          return (
            <div key={i}>
              <h6 className=" text-lg md:text-2xl font-bold">{item.title}</h6>
              <ul className="pt-4">
                {item.navs.map((nav, j) => {
                  return (
                    <li key={j} className="mt-1.5 text-xs md:text-sm">
                      <a href="###">{nav.url}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default FooterPart;
