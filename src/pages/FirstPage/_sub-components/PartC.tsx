export const PartC = () => {
  return (
    <div className="  flex flex-col items-center">
      <h3 className="text-4xl font-bold relative bottom-20">
        Benefits of Referral and Affiliate Programs
      </h3>
      <div className="flex gap-5 wrap">
        {[
          { percentage: "2-3x", text: "Return on Investments (ROI)" },

          {
            percentage: "10-15%",
            text: "Reduction in Customer Acquisition Cost",
          },
          { percentage: "50%", text: "Boost in Conversion Rates" },
          { percentage: "25%", text: "Increased Customer Spend" },
        ].map((item, i) => {
          return (
            <div
              key={i}
              className={` border-[#f26627] flex flex-col p-4 text-center max-w-[14rem] ${
                i === 3 ? "" : "border-r"
              }`}
            >
              <p className="text-[#f26627] text-3xl font-medium">
                {item.percentage}
              </p>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className="w-[80%] relative top-20 h-[13rem] md:h-[20rem] lg:h-[30rem]">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-[1.875rem] w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};
