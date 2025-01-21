import CustomButton from "@/pages/_components/buttons/CustomButton";
import React from "react";

const PartG = () => {
  return (
    <div className="text-white flex justify-center flex-col items-center gap-6 py-10">
      <h2 className="text-4xl">Lorem ipsum dolor sit amet consectetur,</h2>
      <p className="text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        totam molestiae ratione magnam
      </p>
      <CustomButton variant={"VarA"}>Start for free</CustomButton>
    </div>
  );
};

export default PartG;
