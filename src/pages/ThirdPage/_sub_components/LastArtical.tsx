const LastArticle = () => {
  return (
    <section className=" my-8 ">
      <h2 className="text-4xl text-center font-semibold my-[50px]">
        Latest Articles
      </h2>

      <div className="flex justify-between gap-20">
        {[
          {
            heading:
              "Create Line Graphs Chart Simple: Explore Our Easy-to-Use Line Graph Maker ",
            text: "Discover the easiest way to create stunning line graphs with Decktopus! Our guide walks you through the process step-by-step to design professional graphs effortlessly.",
            img: "659ed0c5d59b5d048258e65b_Create Line Graphs Chart Simple_ Explore Our Easy-to-Use Line Graph Maker (1).avif",
          },
          {
            heading:
              "How to Make a Line Graph: Definition, Types, and Examples",
            text: "Learn everything about line graphs in our comprehensive guide! Understand their importance, applications, and how to create impactful line graphs with Decktopus.",
            img: "658c0fd5adc727c27b3fcd3a_How to Make a Line Graph_ Definition, Types, and Examples (1).avif",
          },
          {
            heading:
              "Convert Powerpoint to Google Slides with These Easy Steps",
            // text: "Step-by-step instructions on how you can easily convert your PowerPoint presentation into a google slides format.",
            text: "Learn everything about line graphs in our comprehensive guide! Understand their importance, applications, and how to create impactful line graphs with Decktopus.",
            img: "6281fdd3c63bf83bfec0fd28_Convert Powerpoint to Google Slides with These Easy Steps.avif",
          },
        ].map((item, i) => {
          return (
            <a href="##" key={i} className="flex flex-col gap-3 grow w-[33%]">
              <div className="rounded-[20px] overflow-clip mb-4">
                <img src={item.img} alt="" />
              </div>
              <h2 className="text-xl">{item.heading}</h2>
              <p className="font-thin">{item.text}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default LastArticle;
