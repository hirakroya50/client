import NavigationMenuForThirdPage from "./NavigationMenuForThirdPage";

const HeaderC = () => {
  return (
    <header className="flex items-center  justify-between">
      <div>
        <img src="/65c9e01afbd9a7a57f4aa32c_Group (5).svg" alt="logoo" />
        <img
          src="/6225e92a030c491edff40b49_decktopus_symbol_256x256.png"
          className="invisible hidden"
          alt=""
        />
      </div>
      <div>
        <NavigationMenuForThirdPage />
      </div>

      <div className="flex items-center gap-8">
        <a href="#" className="">
          Login
        </a>

        <a
          href="#"
          className="block h-fit bg-[linear-gradient(45deg,#4f61ff,#f450f9)] rounded-[8px]"
        >
          <div className="flex justify-center items-center  bg-white m-0.5 rounded-[6px]">
            <h1 className=" bg-[linear-gradient(45deg,#4f61ff,#f450f9)] text-[1rem] py-2 px-3 bg-clip-text text-transparent">
              Get Started
            </h1>
          </div>
        </a>
      </div>
    </header>
  );
};

export default HeaderC;
