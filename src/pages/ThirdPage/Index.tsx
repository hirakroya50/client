const ThirdPage = () => {
  return (
    <div>
      <PageContainer>
        <header className="flex justify-between">
          <div>
            <img src="/65c9e01afbd9a7a57f4aa32c_Group (5).svg" alt="logoo" />
            <img
              src="/6225e92a030c491edff40b49_decktopus_symbol_256x256.png"
              className="invisible"
              alt=""
            />
          </div>
          <div>
            <NavigationMenuForThirdPage />
          </div>

          <div>
            <a href="#">login</a>

            <a
              href="#"
              className="block bg-[linear-gradient(45deg,#4f61ff,#f450f9)] border border-red-600"
            >
              <div className="flex justify-center items-center  bg-white m-1">
                <h1 className=" bg-[linear-gradient(45deg,#4f61ff,#f450f9)] bg-clip-text text-transparent">
                  Get Started
                </h1>
              </div>
            </a>
          </div>
        </header>
      </PageContainer>

      <section className="h-[50rem] border border-red-500 my-3"></section>

      <section className="h-[50rem] border border-blue-500 my-3">partB</section>
      <section className="h-[100rem] flex border border-blue-500 my-3 bg-blue-200">
        <div className="border">
          <div className="h-96 w-20 bg-red-400 sticky top-0">styy</div>
        </div>
        <div>parttttt</div>
        partC
      </section>
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

import PageContainer from "../_components/warper/PageContainer";
import NavigationMenuForThirdPage from "./_sub_components/NavigationMenuForThirdPage";
import { StickyFrom } from "./_sub_components/StickyFrom";
