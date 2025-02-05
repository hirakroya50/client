import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import {
  Wrench,
  Sparkles,
  Bolt,
  Image,
  Eraser,
  Expand,
  Monitor,
  Paintbrush,
  RefreshCcw,
  BringToFront,
} from "lucide-react";
const VideoCardContainer = () => {
  const videoData = [
    {
      videoUrl: "/UniversalResizer.mp4",
      title: "Universal Resizer",
      description: "Resize your media effortlessly with this powerful tool.",
      icon: <Wrench size={20} />,
      buttonText: "Try Now",
    },
    {
      videoUrl: "/GenerativeFill.webm",
      title: "AI Generative Fill",
      description: "Automatically fill and enhance images with AI.",
      icon: <Sparkles size={20} />,
      buttonText: "Explore",
    },
    {
      videoUrl: "/SD-Turbo.webm",
      title: "Super Fast SD Processing",
      description: "Experience high-speed stable diffusion with SD Turbo.",
      icon: <Bolt size={20} />,
      buttonText: "Boost",
    },
    {
      videoUrl: "/JasperAI-1.1.webm",
      title: "Jasper AI 1.1",
      description: "Enhanced AI-powered content creation at your fingertips.",
      icon: <Bolt size={20} />,
      buttonText: "Generate",
    },
    {
      videoUrl: "/ReplaceBackground.webm",
      title: "Background Replacer",
      description: "Swap backgrounds effortlessly using AI technology.",
      icon: <Image size={20} />,
      buttonText: "Replace",
    },
    {
      videoUrl: "/RemoveBG.webm",
      title: "Background Remover",
      description: "Instantly remove image backgrounds with precision.",
      icon: <Eraser size={20} />,
      buttonText: "Remove",
    },
    {
      videoUrl: "/Cleanup.webm",
      title: "AI Cleanup Tool",
      description: "Erase unwanted objects from images with AI magic.",
      icon: <BringToFront size={20} />,
      buttonText: "Clean",
    },
    {
      videoUrl: "/Uncrop.webm",
      title: "AI Uncrop",
      description: "Extend images beyond their original boundaries seamlessly.",
      icon: <Expand size={20} />,
      buttonText: "Expand",
    },
    {
      videoUrl: "/Enhance.webm",
      title: "Image Enhancer",
      description: "Sharpen and improve image quality instantly.",
      icon: <Monitor size={20} />,
      buttonText: "Enhance",
    },
    {
      videoUrl: "/StableDoodle.webm",
      title: "Stable Doodle",
      description: "Transform doodles into high-quality digital art.",
      icon: <Paintbrush size={20} />,
      buttonText: "Draw",
    },
    {
      videoUrl: "/ImageVariation.webm",
      title: "Image Variation Generator",
      description: "Create multiple variations of an image with AI.",
      icon: <RefreshCcw size={20} />,
      buttonText: "Generate",
    },
  ];
  return (
    <div className="bg-[#171717]">
      <h3 className="text-white text-center font-bold text-3xl">Tools</h3>
      <ToggleMenu />
      <div className="grid gap-1 md:gap-2 w-full justify-center grid-cols-2 lg:grid-cols-3">
        {videoData.map((item, i) => {
          return (
            <VideoCard
              key={i}
              videoUrl={item.videoUrl}
              title={item.title}
              description={item.description}
              icon={item.icon}
              buttonText={item.buttonText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VideoCardContainer;

const VideoCard = ({
  description,
  icon,
  title,
  videoUrl,
  buttonText,
}: {
  videoUrl: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
}) => {
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
      className="h-[330px] bg-[#2d2d2d] dark:bg-gray-800 text-white rounded-2xl flex flex-col justify-end relative"
    >
      <div
        className="absolute inset-0 rounded-2xl  w-full h-[208px] overflow-hidden"
        style={{
          height: `${hoverState ? "100%" : "208px"}`,
          transition: "height 0.3s ease",
        }}
      >
        <div className="relative w-full   rounded-2xl h-full bg-gray-500 overflow-hidden">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoUrl}
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
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-2  dark:text-gray-200 h-[123px]">
        <div className="flex items-center gap-2">
          {icon} <h1 className="ml-2">{title}</h1>
        </div>
        <p>{description}</p>
      </div>
    </a>
  );
};

const ToggleMenu = () => {
  const options = [
    "Highlight",
    "New",
    "Image edition",
    "Generative tools",
    "Real-estate",
    "Portrait edition",
    "All",
  ];
  const [selected, setSelected] = useState("Highlight");

  return (
    <div className="flex gap-2 p-4 rounded-lg">
      {options.map((option) => (
        <Button
          key={option}
          className={`px-4 py-2 rounded-full border ${
            selected === option
              ? "bg-white text-black hover:bg-gray-300"
              : option === "New"
              ? "border-blue-500 text-blue-500"
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
