import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
const QuestionAnswer = () => {
  const data = [
    {
      value: "item-1",
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      value: "item-2",
      question: "Is it styled?",
      answer:
        "Yes. It comes with default styles that match the other components' aesthetic.",
    },
    {
      value: "item-3",
      question: "Is it animated?",
      answer:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    {
      value: "item-4",
      question: "Can it be customized?",
      answer: "Yes. You can customize it as per your needs with custom styles.",
    },
    {
      value: "item-5",
      question: "Is it mobile-friendly?",
      answer: "Yes. The accordion is responsive and works well on all devices.",
    },
    {
      value: "item-6",
      question: "Does it support multiple themes?",
      answer: "Yes. You can easily switch between light and dark themes.",
    },
    {
      value: "item-7",
      question: "Is it SEO-friendly?",
      answer: "Yes. It follows best practices to ensure SEO compatibility.",
    },
    {
      value: "item-8",
      question: "Is it compatible with older browsers?",
      answer:
        "Yes. It works on most modern browsers and gracefully degrades on older ones.",
    },
    {
      value: "item-9",
      question: "Does it support nested accordions?",
      answer: "Yes. You can nest accordions within each other seamlessly.",
    },
    {
      value: "item-10",
      question: "Is it lightweight?",
      answer:
        "Yes. It's designed to be lightweight and optimized for performance.",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(5);

  const toggleVisibility = () => {
    setVisibleCount(visibleCount === 5 ? data.length : 5);
  };

  return (
    <div className="w-full relative bg-[#171717] text-white my-20 ">
      <h3 className="text-[3rem] text-center">FREQUENTLY ASKED QUESTIONS</h3>
      <Accordion type="single" collapsible className="w-full">
        {data.slice(0, visibleCount).map((item, index) => {
          const isFaded =
            visibleCount === 5 &&
            index >= visibleCount - 2 &&
            index < visibleCount;
          return (
            <AccordionItem
              className={cn(
                isFaded ? "opacity-50" : "",
                "py-2 hover:bg-[#2d2d2d] px-4 group-hover:bg-[#2d2d2d] border-[#2d2d2d]"
              )}
              key={item.value}
              value={item.value}
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-4">
        <button
          onClick={toggleVisibility}
          className="px-4 rounded-xl py-2 bg-[#24355c] text-white hover:bg-[#202e4e]"
          // class="transition-all select-none h-10 flex items-center justify-center rounded-xl text-sm font-medium gap-1.5 disabled:opacity-35 disabled:pointer-events-none bg-primary-200 text-primary-700 hover:bg-primary-300 dark:bg-primary-700 dark:text-primary-200 dark:hover:bg-primary-600 py-3 pr-5 pl-[18px]"
        >
          {visibleCount === 5 ? "See More" : "See Less"}
        </button>
      </div>
    </div>
  );
};

export default QuestionAnswer;
