import PageContainer from "../_components/warper/PageContainer";
import ContactUs from "./_sub-components/ContactUs";
import FooterPart from "./_sub-components/FooterPart";
import { PartA } from "./_sub-components/PartA";
import { PartB } from "./_sub-components/PartB";
import { PartC } from "./_sub-components/PartC";
import { PartD } from "./_sub-components/PartD";
import PartE from "./_sub-components/PartE";
import PartF from "./_sub-components/PartF";
import PartG from "./_sub-components/PartG";
import PartH from "./_sub-components/PartH";
import NavBar from "./nav/Nav";

const FirstPage = () => {
  return (
    <>
      <NavBar />
      <div>
        <PageContainer className="">
          <PartA />
        </PageContainer>
        <div className="customBackground">
          <PartC />
        </div>
        {/* <PageContainer className=" bg-[#001246] py-16">
          <PartB />
        </PageContainer>

        <PageContainer>
          <PartD />
        </PageContainer>
        <PageContainer>
          <PartE />
        </PageContainer>
        <PageContainer>
          <PartF />
        </PageContainer>
        <PageContainer className=" bg-[#001246]">
          <PartG />
        </PageContainer>
        <PageContainer>
          <PartH />
        </PageContainer>
        <PageContainer>
          <ContactUs />
        </PageContainer>
        <PageContainer>
          <FooterPart />
        </PageContainer> */}
      </div>
    </>
  );
};

export default FirstPage;
