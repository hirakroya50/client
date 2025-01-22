import React, { useEffect, useRef, useState } from "react";

const SecondPage = () => {
  return (
    <div className="bg-black">
      <div className="relative w-full force-full-screen-w m-auto second-page-dot-background flex flex-col items-center justify-center gap-8 py-8 md:py-16">
        <ImageSlider />
      </div>

      <div className="grid gap-1 md:gap-2 w-full justify-center grid-cols-2 lg:grid-cols-3">
        {[{}, {}, {}].map((item, i) => {
          return <VideoCard key={i} />;
        })}
      </div>
    </div>
  );
};

const VideoCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [hoverState, setHoverState] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    if (hoverState) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hoverState]);
  return (
    <a
      onMouseEnter={() => {
        setHoverState(true);
      }}
      onMouseLeave={() => {
        setHoverState(false);
      }}
      href="###"
      className="h-[330px] bg-gray-200 dark:bg-gray-800 rounded-2xl flex flex-col justify-end relative"
    >
      <div
        className="absolute inset-0 rounded-2xl bg-red-500 w-full h-[208px] overflow-hidden"
        style={{
          height: `${hoverState ? "100%" : "208px"}`,
          border: `${hoverState ? "1px solid red" : "1px solid blue"}`,
          transition: "height 0.3s ease",
        }}
      >
        <div className="relative w-full   rounded-2xl h-full bg-gray-500 overflow-hidden">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/UniversalResizer.mp4"
            muted
            playsInline
            loop
          ></video>
        </div>
      </div>
      <div className="absolute bottom-4 flex w-full justify-center">
        <div className="">
          <div
            className=""
            style={{
              opacity: `${hoverState ? "1" : "0"}`,
              transition: "opacity 0.3s ease",
            }}
          >
            <button className="transition-all bg-blue-600 select-none h-10 flex items-center justify-center text-sm font-medium gap-1.5 disabled:opacity-35 disabled:pointer-events-none bg-primary-500 text-gray-100 hover:bg-primary-400 py-3 px-5 rounded-full w-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
              kkk
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-2 text-gray-700 dark:text-gray-200 h-[123px]">
        <div className="flex">
          <span>icon</span> <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
          fugit!
        </p>
      </div>
    </a>
  );
};

export default SecondPage;

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
    <>
      <input
        type="range"
        step="0.01"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
      <p>Current Value: {value}</p>
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
    </>
  );
};
