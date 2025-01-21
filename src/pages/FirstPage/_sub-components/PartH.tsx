const PartH = () => {
  return (
    <div className="flex justify-center">
      {[
        {
          img: "/home-blog-1.webp",
          text: "How to Start a Referral Program That Lands You the Best Customers and Accelerates Your Success?",
        },

        {
          img: "/home-blog-2.webp",
          text: "Affiliate Marketing Vs Referral Marketing – Which is Better for Your Business?",
        },
        { img: "/home-blog-3.webp", text: "Boost in Conversion Rates" },
      ].map((item, i) => {
        return (
          <a
            href="###"
            key={i}
            className="border-r border-gray-400 w-[30%] flex flex-col"
          >
            <div>
              <img src={item.img} alt="" />
            </div>
            <p>{item.text}</p>
          </a>
        );
      })}
    </div>
  );
};

export default PartH;
