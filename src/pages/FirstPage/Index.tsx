import PageContainer from "../_components/warper/PageContainer";
import { PartA } from "./_sub-components/PartA";
import { PartB } from "./_sub-components/PartB";
import { PartC } from "./_sub-components/PartC";
import { PartD } from "./_sub-components/PartD";
import PartE from "./_sub-components/PartE";

const FirstPage = () => {
  return (
    <div>
      <PageContainer className="">
        <PartA />
      </PageContainer>
      <PageContainer className=" bg-[#001246]">
        <PartB />
      </PageContainer>
      <div className="customBackground">
        <PartC />
      </div>
      <PageContainer>
        <PartD />
      </PageContainer>
      <PageContainer>
        <PartE />
      </PageContainer>
    </div>
  );
};

export default FirstPage;
