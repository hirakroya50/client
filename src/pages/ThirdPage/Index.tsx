import PageContainer from "../_components/warper/PageContainer";
import HeaderC from "./_sub_components/HeaderC";
import { HeroComponent } from "./_sub_components/HeroCompoent";
import SectionWithStickyPageNavigation from "./_sub_components/SectionWithStickyPageNavigation";
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
      <PageContainer>
        <SectionWithStickyPageNavigation />
      </PageContainer>

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
