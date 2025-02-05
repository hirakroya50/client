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
        <FooterComponent />
      </PageContainer>
    </div>
  );
};

export default SecondPage;

const FooterComponent = () => {
  return (
    <footer className="border-t border-gray-600 mt-7 pt-6">
      <div className="flex justify-between mx-[5vw] sm:mx-[20vw]">
        {[
          {
            title: "Clipdrop",
            links: [
              { href: "#", text: "Home" },
              { href: "#", text: "Blog" },
              { href: "#", text: "Career" },
            ],
          },
          {
            title: "Support",
            links: [{ href: "#", text: "Contact us" }],
          },
          {
            title: "Legal",
            links: [
              { href: "#", text: "Privacy" },
              { href: "#", text: "Terms of Use" },
              { href: "#", text: "Legal notice" },
              { href: "#", text: "Cookie Use" },
              { href: "#", text: "Cookies preferences" },
            ],
          },
          {
            title: "Social",
            links: [
              { href: "#", text: "Twitter" },
              { href: "#", text: "Product Hunt" },
              { href: "#", text: "Instagram" },
              { href: "#", text: "Github" },
            ],
          },
        ].map((item, i) => {
          return (
            <div key={i} className="flex  flex-col gap-4">
              <h6 className="text-gray-400">{item.title}</h6>
              <ul className="flex flex-col gap-1">
                {item.links.map((list, j) => {
                  return (
                    <li key={j} className="text-xs">
                      {list.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="text-center text-xs my-2 mt-8">
        Copyright 2025 © InitML
      </div>
    </footer>
  );
};
