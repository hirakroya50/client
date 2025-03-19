export const HeroComponent = () => {
  return (
    <div className="flex  gap-10 justify-between ">
      <div className="flex gap-10 max-w-[30rem]  flex-col items-center justify-center text-[#37384A]">
        <h3 className="text-4xl font-bold leading-[3.125rem]">
          How to Develop an AI-powered SaaS Product in 6 Steps
        </h3>
        <p className="text-[1rem] leading-6 font-medium">
          Discover the essential guide on how to develop an AI SaaS product in
          just six comprehensive steps. Dive deep into the world of artificial
          intelligence SaaS solutions and unlock the potential of integrating AI
          into your SaaS offerings.
        </p>
      </div>

      <div className=" rounded-[1.6875rem] shadow-lg overflow-clip max-w-[40rem]">
        <img
          src="/654e14015a507bad6c8c07c8_How_to_Develop.avif"
          className=" w-fit"
          alt=""
        />
      </div>
    </div>
  );
};
