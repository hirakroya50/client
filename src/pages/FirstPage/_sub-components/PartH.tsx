const PartH = () => {
  return (
    <div>
      <h3 className="text-center text-4xl my-10">
        Learn how to get the most out of referral and affiliate marketing
      </h3>

      <div className="flex justify-center gap-6 flex-col md:flex-row">
        {[
          {
            img: "/home-blog-1.webp",
            text: "How to Start a Referral Program That Lands You the Best Customers and Accelerates Your Success?",
          },

          {
            img: "/home-blog-2.webp",
            text: "Affiliate Marketing Vs Referral Marketing – Which is Better for Your Business?",
          },
          {
            img: "/home-blog-3.webp",
            text: "Why Referral Software is Key to Scalable Business Growth ?",
          },
        ].map((item, i) => {
          return (
            <a
              href="###"
              key={i}
              className={` border-gray-400 w-full md:w-[30%] flex gap-6 flex-col pr-0 md:pr-5 ${
                i === 2 ? "" : "md:border-r border-r-0 md:border-b-0 border-b"
              }`}
            >
              <div className="max-w-[80%] flex   mx-auto md:mx-0">
                <div className="">
                  <img src={item.img} alt="" className=" w-full" />
                </div>
              </div>
              <p className="font-normal md:font-bold w-[80%] md:w-full mx-auto">
                {item.text}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PartH;
