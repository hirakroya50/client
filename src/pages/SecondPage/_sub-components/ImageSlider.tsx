import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ImageSlider = () => {
  const [value, setValue] = useState(90); // Initialize state with a default value

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(event.target.value)); // Update the state with the current input value
  };

  const imageArray = [
    {
      item1: "outdoor_magic.webp",
      item2: "outdoor_magic_edited.webp",
    },
  ];
  console.log(imageArray);
  return (
    <div className="bg-black border border-red-700 mt-10 text-white">
      <h3 className="text-white text-center font-bold text-3xl">
        TRY AN EXAMPLE
      </h3>
      <ToggleMenu />
      <div className=" w-full force-full-screen-w m-auto second-page-dot-background flex flex-col items-center justify-center gap-8 py-8 md:py-16">
        <div className="image border border-red-500 h-full w-full flex justify-center overflow-hidden flex-1">
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
                    src="/Portrait-Relight.webp"
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
                    src="/Portrait.webp"
                    className="max-w-full  pointer-events-none m-auto bg-gray-200 dark:bg-gray-800 h-full"
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

      <p className="text-center w-[50%] text-[#BABABA] mx-auto">
        Elevate the quality of your selfies or portraits effortlessly. Transform
        ordinary photos into stunning, professionally-lit images.
      </p>

      <div className="flex justify-center">
        <Button className="rounded-xl bg-[#1C60F6] font-bold">
          Try with this Example
        </Button>
      </div>
    </div>
  );
};

export default ImageSlider;

const ToggleMenu = () => {
  const options = ["Portrait", "Elevate", "Remix", "Drawing"];
  const [selected, setSelected] = useState("Portrait");

  return (
    <div className="flex gap-2  p-4 rounded-lg relative z-20 justify-center">
      {options.map((option) => (
        <Button
          key={option}
          className={`px-4 py-2 rounded-full border ${
            selected === option
              ? "bg-white text-black"
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
