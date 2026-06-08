"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "One of the best handwriting centres in Hyderabad, especially for kids living around Gachibowli & the IT corridor. The teachers focus on correct posture, pen grip, spacing, and neatness from the very first class, so the improvement becomes clearly visible in school notebooks over time.",
    by: "Shanmukha Priya Chadarada, Handwriting Course",
    bgClass: "bg-blue-50/95 border-blue-200/80 text-blue-950",
    textClass: "text-blue-900",
    mutedClass: "text-blue-700/80",
    hoverBorder: "hover:border-blue-400/60",
  },
  {
    tempId: 1,
    testimonial:
      "TEF success was my one clear goal a year ago: Being occupied with my job in Canada I was preparing for Canada PR, so I joined this Institute’s online French training. I started at A1 and, step by step, completed B1 in about 9 months. It was really a challenging thing to Balance a full-time job with French learning, but polyglot’s flexible class timings and clear guidance made it possible to achieve my goal. The training included speaking practice, vocabulary, grammar, and exam-based strategies in a way that enabled me to follow easily and instilled confidence to attempt the TEF exam successfully. I’m thankful to the trainers, and I would recommend this Institute to those who are willing to learn French for PR through online classes.",
    by: "Sairam Voonna, Online French Candidate",
    bgClass: "bg-emerald-50/95 border-emerald-200/80 text-emerald-950",
    textClass: "text-emerald-900",
    mutedClass: "text-emerald-700/80",
    hoverBorder: "hover:border-emerald-400/60",
  },
  {
    tempId: 2,
    testimonial:
      "I just finished the 1 month Classroom Program at THEFLI institute for IELTS, and I'm very much happy with the outcome. Thanks to the guidance of Shraddha Srinivas Sir and Julia mam, my score jumped from 5.5 to a remarkable 7.5 bands in my initial attempt. Their teaching techniques are excellent, and the individualized support I got was priceless. I strongly recommend this institute for IELTS coaching in Hyderabad to anyone seeking abroad education.",
    by: "indira.minnala, THEFLI IELTS Student",
    bgClass: "bg-amber-50/95 border-amber-200/80 text-amber-950",
    textClass: "text-amber-900",
    mutedClass: "text-amber-700/80",
    hoverBorder: "hover:border-amber-400/60",
  },
  {
    tempId: 3,
    testimonial:
      "Earlier, I assumed institutes could not give structured results, and I felt stuck with only partial Hindi knowledge. I always felt shy when my North Indian colleagues switched to fast Hindi. My main purpose was to speak confidently with my in-laws after marriage. Polyglot Institute, with its long-standing reputation, impressed me during counselling online. Since I stay far from the institute I attended online classes which proved productive for me. The institute’s practical, easy-to-understand teaching made every trip worth it. Now, Hindi is no longer a barrier for me.",
    by: "gaddam divija vanhishikha, Online Hindi Learner",
    bgClass: "bg-indigo-50/95 border-indigo-200/80 text-indigo-950",
    textClass: "text-indigo-900",
    mutedClass: "text-indigo-700/80",
    hoverBorder: "hover:border-indigo-400/60",
  },
  {
    tempId: 4,
    testimonial:
      "The professional counselling, good environment, and positive student feedback inspired me to join Shraddha Spoken English Institute, Ameerpet. The training was excellent, and now I have reached my English-speaking goals.",
    by: "Rama Devi, Shraddha Spoken English Student",
    bgClass: "bg-rose-50/95 border-rose-200/80 text-rose-950",
    textClass: "text-rose-900",
    mutedClass: "text-rose-700/80",
    hoverBorder: "hover:border-rose-400/60",
  },
  {
    tempId: 5,
    testimonial:
      "After completing my B.Tech, I began preparing for the IELTS exam on my own and achieved a score of six bands. Realizing the importance of professional guidance, I decided to enroll in coaching at THEFLI institute. The decision proved to be immensely satisfying as I received regular practice sessions, daily mock tests, and weekly assessments in all modules which helped me score 7.5 bands.",
    by: "LEELU LEELU, THEFLI IELTS Candidate",
    bgClass: "bg-violet-50/95 border-violet-200/80 text-violet-950",
    textClass: "text-violet-900",
    mutedClass: "text-violet-700/80",
    hoverBorder: "hover:border-violet-400/60",
  },
  {
    tempId: 6,
    testimonial:
      "I came to Hyderabad for my job and found it hard to talk to locals. I joined the Telugu speaking course at Polyglot Institute. The trainer taught us basic grammar, market vocabulary, and polite phrases. With regular speaking practice, I slowly started talking to my neighbors, shopkeepers, and even my maid. It really helped me adjust to life here. I’m very thankful to my trainer for this smooth learning experience.",
    by: "padma latha, Telugu Language Student",
    bgClass: "bg-sky-50/95 border-sky-200/80 text-sky-950",
    textClass: "text-sky-900",
    mutedClass: "text-sky-700/80",
    hoverBorder: "hover:border-sky-400/60",
  },
  {
    tempId: 7,
    testimonial:
      "I am from Vizag and came to Hyderabad to study MBA. Living with my uncle’s family in Manikonda. I joined Shraddha Institute. Before joining this institute, I felt very shy and nervous speaking English. But after completing the course, I became much more confident and my pronunciation improved a lot. The trainer made learning simple and fun. The flexible timings helped me manage my studies, and the trainer’s patience and support kept me motivated. I am really thankful for this amazing spoken English course!",
    by: "Kasavarapu Uma, MBA Spoken English Student",
    bgClass: "bg-teal-50/95 border-teal-200/80 text-teal-950",
    textClass: "text-teal-900",
    mutedClass: "text-teal-700/80",
    hoverBorder: "hover:border-teal-400/60",
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 sm:p-8 transition-all duration-500 ease-in-out rounded-2xl flex flex-col justify-between",
        isCenter
          ? "z-10 bg-[#0931A7] text-white border-[#0931A7]"
          : cn("z-0", testimonial.bgClass, testimonial.hoverBorder)
      )}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -50%) 
          translateX(${cardSize * 0.52 * position}px)
          translateY(${isCenter ? -20 : position % 2 ? 8 : -8}px)
          rotate(${isCenter ? 0 : position % 2 ? 2 : -2}deg)
        `,
        boxShadow: isCenter
          ? "0px 10px 30px -10px rgba(9, 49, 167, 0.4)"
          : "0px 4px 20px -10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="overflow-y-auto pr-1 flex-1 max-h-[78%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <h3
          className={cn(
            "text-xs sm:text-[13px] font-medium leading-relaxed tracking-tight",
            isCenter ? "text-white" : testimonial.textClass
          )}
        >
          "{testimonial.testimonial}"
        </h3>
      </div>
      <div className="mt-3 shrink-0">
        <p
          className={cn(
            "text-[11px] italic font-semibold",
            isCenter ? "text-white/90" : testimonial.mutedClass
          )}
        >
          - {testimonial.by}
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(380);
  const [testimonialsList, setTestimonialsList] = useState(() => {
    // Triplicate the list (24 cards total) to ensure full horizontal screen coverage on wide monitors
    return [...testimonials, ...testimonials, ...testimonials].map((t, idx) => ({
      ...t,
      tempId: idx,
    }));
  });

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 380 : 300);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative w-full">
      {/* Cards Viewport Container */}
      <div
        className="relative w-full overflow-hidden bg-transparent"
        style={{ height: 420 }}
      >
        {testimonialsList.map((testimonial, index) => {
          const centerIndex = Math.floor(testimonialsList.length / 2);
          const position = index - centerIndex;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
      </div>

      {/* Navigation Buttons placed downside */}
      <div className="relative flex justify-center gap-3 mt-4 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-xl",
            "bg-white border border-neutral-200 hover:bg-[#0931A7] hover:text-white hover:border-[#0931A7] hover:scale-105 active:scale-100 shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0931A7]/30"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-xl",
            "bg-white border border-neutral-200 hover:bg-[#0931A7] hover:text-white hover:border-[#0931A7] hover:scale-105 active:scale-100 shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0931A7]/30"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
