import { Button } from "@/components/ui/button";
import { imageArray } from "@/constants/secound";
import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const [value, setValue] = useState(70); // Initialize state with a default value

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(event.target.value)); // Update the state with the current input value
  };

  console.log(imageArray);
  const [selected, setSelected] = useState<
    "Portrait" | "Elevate" | "Remix" | "Drawing"
  >("Portrait");
  const [data, setData] = useState(imageArray[0]);

  useEffect(() => {
    // if (selected === "Portrait")
    setData(imageArray[0]);
    // if (selected === "Elevate") setData(imageArray[1]);

    // if (selected === "Remix") setData(imageArray[2]);

    // if (selected === "Drawing") setData(imageArray[3]);
  }, [selected]);

  return (
    <div className="bg-[#171717] mt-10 text-white">
      <h3 className="text-white text-center font-bold text-3xl">
        TRY AN EXAMPLE
      </h3>
      <ToggleMenu selected={selected} setSelected={setSelected} />
      <div className=" w-full force-full-screen-w m-auto second-page-dot-background flex flex-col items-center justify-center gap-8 py-8 md:py-16">
        <div className="image  h-full w-full flex justify-center overflow-hidden flex-1">
          <div
            className="relative overflow-hidden max-h-full h-auto w-auto"
            style={{
              aspectRatio: "1/1",
            }}
          >
            <div
              className="relative overflow-hidden flex justify-center items-center m-auto rounded-2xl max-h-full h-auto"
              style={{
                aspectRatio: "1/1",
              }}
            >
              <div
                className="relative rounded-xl overflow-hidden h-full"
                style={{
                  aspectRatio: "1/1",
                }}
              >
                <div className="h-full">
                  <img
                    src={data.item1}
                    alt=""
                    className="max-w-full  pointer-events-none m-auto h-full"
                    style={{
                      aspectRatio: "1/1",
                    }}
                  />
                </div>

                <div
                  className="absolute top-0 left-0 h-full w-full"
                  style={{
                    clipPath: `polygon(${value}% 0px, 100% 0px, 100% 100%, ${value}% 100%)`,
                  }}
                >
                  <img
                    src={data.item2}
                    className="max-w-full   pointer-events-none m-auto bg-gray-200 dark:bg-gray-800 h-full"
                    alt=""
                  />
                </div>

                {/* slider path */}
                <div
                  className="absolute w-0.5 bg-gray-100 h-full top-0"
                  style={{
                    left: `calc(${value}% - 1px)`,
                  }}
                ></div>

                <input
                  className="image-comparison-slider"
                  type="range"
                  step="0.01"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center w-[50%] text-[#BABABA] mx-auto">{data.text}</p>
    </div>
  );
};

export default ImageSlider;

const ToggleMenu = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<
    React.SetStateAction<"Portrait" | "Elevate" | "Remix" | "Drawing">
  >;
}) => {
  const options = ["Portrait", "Elevate", "Remix", "Drawing"] as const;

  return (
    <div className="flex gap-2  p-4 rounded-lg relative z-20 justify-center">
      {options.map((option) => (
        <Button
          key={option}
          className={`px-4 py-2 rounded-full border ${
            selected === option
              ? "bg-white text-black hover:bg-gray-300"
              : "border-white text-white"
          }`}
          onClick={() => setSelected(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
