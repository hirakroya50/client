import ImageSlider from "./_sub-components/ImageSlider";
import QuestionAnswer from "./_sub-components/QuestionAnswer";
import VideoCardContainer from "./_sub-components/VideoCardContainer";
import PageContainer from "../_components/warper/PageContainer";
import UploadPart from "./_sub-components/UploadPart";
import { HeaderComponent } from "./_sub-components/HeaderComponent";
const SecondPage = () => {
  return (
    <div className="bg-[#171717] text-white">
      <HeaderComponent />
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
