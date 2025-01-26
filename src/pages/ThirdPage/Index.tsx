import PageContainer from "../_components/warper/PageContainer";
import HeaderC from "./_sub_components/HeaderC";
import { HeroComponent } from "./_sub_components/HeroCompoent";
import { StickyFrom } from "./_sub_components/StickyFrom";

const ThirdPage = () => {
  return (
    <div>
      <PageContainer>
        <HeaderC />
      </PageContainer>

      <PageContainer>
        <HeroComponent />
      </PageContainer>

      <SectionWithStickyPageNavigation />

      <section className="h-[50rem] border border-blue-500 my-3 bg-yellow-200">
        partd
      </section>

      <div className="bg-red-400 sticky bottom-10">
        <StickyFrom />
      </div>

      <section className="h-[150rem] border border-blue-500 my-3 bg-yellow-200">
        partd
      </section>
    </div>
  );
};

export default ThirdPage;

export const SectionWithStickyPageNavigation = () => {
  // Array of navigation items
  const navigationItems = [
    { id: "first", label: "First", bgColor: "bg-blue-300" },
    { id: "2nd", label: "Second", bgColor: "bg-blue-900" },
    { id: "third", label: "Third", bgColor: "bg-green-300" },
    { id: "fifth", label: "Fifth", bgColor: "bg-yellow-300" },
  ];

  return (
    <section className=" flex border border-blue-500 my-3 bg-blue-200">
      {/* Sticky navigation */}
      <div className="border">
        <div className="h-96 w-20 bg-red-400 sticky top-0">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sections */}
      <div className="flex-1">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={`h-[50vh] border ${item.bgColor} flex items-center justify-center`}
          >
            <h2 className="text-2xl font-bold">{item.label}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};
