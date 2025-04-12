import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitchIcon,
  XIcon,
  YoutubeIcon,
} from "lucide-react";
const footerData = [
  {
    title: "Company",
    links: [
      "About",
      "Media",
      "Blog",
      "Community",
      "Partners",
      "Affiliate Program",
    ],
  },
  {
    title: "Product",
    links: [
      "Pricing",
      "Mobile Responsive Presentations",
      "Templates",
      "Business Proposal Templates",
      "Executive Summary Templates",
      "Case Study Templates",
      "Community Decks",
    ],
  },
  {
    title: "Support",
    links: [
      "Help Center",
      "Support Mail",
      "Privacy Policy",
      "Terms",
      "Contact Page",
    ],
  },
];
const FooterComponent = () => {
  return (
    <footer className="  border-blue-500 my-5 ">
      <div className="mb-10">
        <img src="/65d3d4e5d4e26e0063259c20_Group (7).svg" alt="" />
      </div>
      <div className="flex justify-between border-b my-10 pb-10">
        {footerData.map((section, index) => (
          <div key={index} className={`w-fit`}>
            <h3 className="font-bold text-lg mb-7">{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="text-gray-600 block hover:underline mb-4 cursor-pointer"
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <p>© 2025 Decktopus, Inc.</p>

        <div className="flex gap-3 items-center justify-center">
          <FacebookIcon className="cursor-pointer" />
          <InstagramIcon className="cursor-pointer" />
          <TwitchIcon className="cursor-pointer" />
          <LinkedinIcon className="cursor-pointer" />
          <XIcon className="cursor-pointer" />
          <YoutubeIcon className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
