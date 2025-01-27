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
    <footer className=" px-60   border-blue-500 my-5 ">
      <div>
        <img src="/65d3d4e5d4e26e0063259c20_Group (7).svg" alt="" />
      </div>
      <div className="flex justify-between border-b mt-10">
        {footerData.map((section, index) => (
          <div key={index} className={`w-fit`}>
            <h3 className="font-bold text-lg mb-4">{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="text-gray-600 hover:underline mb-2 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <p>© 2025 Decktopus, Inc.</p>

        <div className="flex gap-3 items-center">
          <FacebookIcon />
          <InstagramIcon />
          <TwitchIcon />
          <LinkedinIcon />
          <XIcon />
          <YoutubeIcon />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
