import PageContainer from "../_components/warper/PageContainer";
import FooterComponent from "./_sub_components/FooterComponent";
import HeaderC from "./_sub_components/HeaderC";
import { HeroComponent } from "./_sub_components/HeroCompoent";
import LastArticle from "./_sub_components/LastArtical";
import SectionWithStickyPageNavigation from "./_sub_components/SectionWithStickyPageNavigation";
import { StickyFrom } from "./_sub_components/StickyFrom";

const ThirdPage = () => {
  return (
    <div>
      <PageContainer>
        <HeaderC />
      </PageContainer>

      <PageContainer className="bg-[url('background.png')] bg-cover bg-center py-28">
        <HeroComponent />
      </PageContainer>
      <PageContainer>
        <SectionWithStickyPageNavigation />
      </PageContainer>
      <PageContainer>
        <LastArticle />
      </PageContainer>

      <div className=" sticky bottom-10">
        <StickyFrom />
      </div>
      <PageContainer>
        <FooterComponent />
      </PageContainer>
    </div>
  );
};

export default ThirdPage;
