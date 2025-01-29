import { Button } from "@/components/ui/button";
import ImageSlider from "./_sub-components/ImageSlider";
import QuestionAnswer from "./_sub-components/QuestionAnswer";
import VideoCardContainer from "./_sub-components/VideoCardContainer";

const SecondPage = () => {
  return (
    <div className="">
      <HeaderCompponent />
      <ImageSlider />
      <VideoCardContainer />
      <QuestionAnswer />
    </div>
  );
};

export default SecondPage;

const HeaderCompponent = () => {
  return (
    <div className="fixed top-0 z-10 flex justify-between w-full border text-white bg-gray-900 ">
      <p>CopyBoard By Jser</p>
      <div>
        <Button className="transition-all select-none h-10 justify-center rounded-xl text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600 py-3 px-5 flex items-center gap-2 pl-5 pr-[18px]">
          API
        </Button>
        <Button>Jsper Free Trial</Button>
        <Button>Pricing</Button>
        <Button>Sign-in / Sign-up</Button>
      </div>
    </div>
  );
};
