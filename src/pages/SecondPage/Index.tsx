import ImageSlider from "./_sub-components/ImageSlider";
import QuestionAnswer from "./_sub-components/QuestionAnswer";
import VideoCardContainer from "./_sub-components/VideoCardContainer";
import PageContainer from "../_components/warper/PageContainer";
import UploadPart from "./_sub-components/UploadPart";
import { HeaderComponent } from "./_sub-components/HeaderComponent";
const SecondPage = () => {
  return (
    <div className=" text-white bg-[#171717]">
      <PageContainer className="bg-[#171717] border-b sticky top-0 z-50 border-[#424242]">
        <HeaderComponent />
      </PageContainer>

      <UploadPart />

      <PageContainer className="bg-[#171717]">
        <ImageSlider />
        <VideoCardContainer />

        <QuestionAnswer />
      </PageContainer>
    </div>
  );
};

export default SecondPage;
