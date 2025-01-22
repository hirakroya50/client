import ImageSlider from "./_sub-components/ImageSlider";
import QuestionAnswer from "./_sub-components/QuestionAnswer";
import VideoCardContainer from "./_sub-components/VideoCardContainer";

const SecondPage = () => {
  return (
    <div className="px-8">
      <ImageSlider />
      <VideoCardContainer />
      <QuestionAnswer />
    </div>
  );
};

export default SecondPage;
