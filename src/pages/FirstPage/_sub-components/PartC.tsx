export const PartC = () => {
  return (
    <div className="h-96 flex flex-col items-center">
      <h3>Benefits of Referral and Affiliate Programs</h3>
      <div className="flex">
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
            <div key={i} className="border-r flex flex-col">
              <p>{item.percentage}</p>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className="h-20 w-40 border">yoputube video</div>
    </div>
  );
};
