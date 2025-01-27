import React from "react";
import { useEffect, useState } from "react";
import FirstPart from "./text-content/FirstPart";
import FourthPart from "./text-content/FourthPart";
import ThirdPart from "./text-content/thirdPart";
import SecPart from "./text-content/SecPart";

const navigationItems = [
  {
    id: "first",
    label: "Why artificial intelligence & SaaS is a strong combination",
    bgColor: "bg-blue-300",
  },
  {
    id: "2nd",
    label:
      "Options for SaaS Artificial Intelligence implementation: from basic to more sophisticated",
    bgColor: "bg-blue-900",
  },
  {
    id: "third",
    label: "Six steps to build an AI-powered SaaS product",
    bgColor: "bg-green-300",
  },
  { id: "fifth", label: "Conclusion", bgColor: "bg-yellow-300" },
];

const navigationItemsData = [
  {
    id: "first",
    component: <FirstPart />,
  },
  {
    id: "2nd",
    component: <SecPart />,
  },
  {
    id: "third",
    component: <ThirdPart />,
  },
  {
    id: "fifth",
    component: <FourthPart />,
  },
];
const SectionWithStickyPageNavigation = () => {
  // Array of navigation items

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }
      //   { threshold: 0.01 } // Trigger when 50% of the section is visible
    );

    navigationItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <section className=" flex gap-10  my-3 ">
      {/* Sticky navigation */}
      <div className="">
        <div className="  w-64 sticky top-0 p-3">
          <h4 className="text-2xl pb-8 font-medium mt-20">Table of Contents</h4>
          <ul className="flex flex-col pl-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`hover:bg-blue-50 block rounded-[0.5rem] cursor-pointer p-2 mt-1 ${
                    activeSection === item.id
                      ? "bg-blue-100 text-[#4F61FF]"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sections */}
      <div className="flex-1">
        {navigationItemsData.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={`   flex items-center justify-center mb-10 p-4`}
          >
            {item.id === "first" && <FirstPart />}
            {item.id === "2nd" && <SecPart />}
            {item.id === "third" && <ThirdPart />}
            {item.id === "fifth" && <FourthPart />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWithStickyPageNavigation;
