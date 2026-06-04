"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "My favorite language academy. I cleared my IELTS with a 7.5 band score in just 6 weeks!",
    by: "Alex, IELTS Candidate",
    imgSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-blue-50/95 border-blue-200/80 text-blue-950",
    textClass: "text-blue-900",
    mutedClass: "text-blue-700/80",
    hoverBorder: "hover:border-blue-400/60",
  },
  {
    tempId: 1,
    testimonial:
      "The hybrid Japanese classes are incredibly engaging. The interactive dashboard keeps me motivated.",
    by: "Dan, Software Engineer",
    imgSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-emerald-50/95 border-emerald-200/80 text-emerald-950",
    textClass: "text-emerald-900",
    mutedClass: "text-emerald-700/80",
    hoverBorder: "hover:border-emerald-400/60",
  },
  {
    tempId: 2,
    testimonial:
      "I can finally speak conversational French with confidence. The native speaker cafés are a game-changer.",
    by: "Stephanie, Marketing Lead",
    imgSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-amber-50/95 border-amber-200/80 text-amber-950",
    textClass: "text-amber-900",
    mutedClass: "text-amber-700/80",
    hoverBorder: "hover:border-amber-400/60",
  },
  {
    tempId: 3,
    testimonial:
      "Polyglot Academy's teachers are extremely patient and structure lessons around real-life scenarios.",
    by: "Marie, Study Abroad Student",
    imgSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-indigo-50/95 border-indigo-200/80 text-indigo-950",
    textClass: "text-indigo-900",
    mutedClass: "text-indigo-700/80",
    hoverBorder: "hover:border-indigo-400/60",
  },
  {
    tempId: 4,
    testimonial:
      "I went from absolute zero to speaking basic Spanish in 3 months. Highly recommended!",
    by: "Andre, UX Designer",
    imgSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-rose-50/95 border-rose-200/80 text-rose-950",
    textClass: "text-rose-900",
    mutedClass: "text-rose-700/80",
    hoverBorder: "hover:border-rose-400/60",
  },
  {
    tempId: 5,
    testimonial:
      "The 1-on-1 speaking app (Polyglot Talk) is super convenient for practicing during my commute.",
    by: "Jeremy, Product Manager",
    imgSrc:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-violet-50/95 border-violet-200/80 text-violet-950",
    textClass: "text-violet-900",
    mutedClass: "text-violet-700/80",
    hoverBorder: "hover:border-violet-400/60",
  },
  {
    tempId: 6,
    testimonial:
      "Helped our corporate team level up our business English skills for international client meetings.",
    by: "Pam, Operations Lead",
    imgSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-sky-50/95 border-sky-200/80 text-sky-950",
    textClass: "text-sky-900",
    mutedClass: "text-sky-700/80",
    hoverBorder: "hover:border-sky-400/60",
  },
  {
    tempId: 7,
    testimonial:
      "Their German prep courses are outstanding. The curriculum is detailed, structured, and rigorous.",
    by: "Daniel, Graduate Student",
    imgSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-teal-50/95 border-teal-200/80 text-teal-950",
    textClass: "text-teal-900",
    mutedClass: "text-teal-700/80",
    hoverBorder: "hover:border-teal-400/60",
  },
  {
    tempId: 8,
    testimonial:
      "Interactive speaking circles and cultural cafés make learning languages incredibly fun!",
    by: "Fernando, Language Enthusiast",
    imgSrc:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-orange-50/95 border-orange-200/80 text-orange-950",
    textClass: "text-orange-900",
    mutedClass: "text-orange-700/80",
    hoverBorder: "hover:border-orange-400/60",
  },
  {
    tempId: 9,
    testimonial:
      "The study-abroad counseling prep made my transition to European universities seamless.",
    by: "Andy, Master's Student",
    imgSrc:
      "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-fuchsia-50/95 border-fuchsia-200/80 text-fuchsia-950",
    textClass: "text-fuchsia-900",
    mutedClass: "text-fuchsia-700/80",
    hoverBorder: "hover:border-fuchsia-400/60",
  },
  {
    tempId: 10,
    testimonial:
      "Best decision I made for my career. Being bilingual has opened so many new doors for me!",
    by: "Pete, Sales Director",
    imgSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-blue-50/95 border-blue-200/80 text-blue-950",
    textClass: "text-blue-900",
    mutedClass: "text-blue-700/80",
    hoverBorder: "hover:border-blue-400/60",
  },
  {
    tempId: 11,
    testimonial:
      "Patient tutoring, amazing student community, and flexible hybrid schedules. 10/10 stars!",
    by: "Marina, HR Specialist",
    imgSrc:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-emerald-50/95 border-emerald-200/80 text-emerald-950",
    textClass: "text-emerald-900",
    mutedClass: "text-emerald-700/80",
    hoverBorder: "hover:border-emerald-400/60",
  },
  {
    tempId: 12,
    testimonial:
      "My kids love the Polyglot Kids program! The visual storytelling format works wonders.",
    by: "Olivia, Parent",
    imgSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-amber-50/95 border-amber-200/80 text-amber-950",
    textClass: "text-amber-900",
    mutedClass: "text-amber-700/80",
    hoverBorder: "hover:border-amber-400/60",
  },
  {
    tempId: 13,
    testimonial:
      "Excellent curriculum that focuses on speaking confidence rather than just memorizing rules.",
    by: "Raj, Analyst",
    imgSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-indigo-50/95 border-indigo-200/80 text-indigo-950",
    textClass: "text-indigo-900",
    mutedClass: "text-indigo-700/80",
    hoverBorder: "hover:border-indigo-400/60",
  },
  {
    tempId: 14,
    testimonial:
      "Outstanding IELTS teachers. The mock tests and feedback gave me the confidence to pass.",
    by: "Lila, Candidate",
    imgSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-rose-50/95 border-rose-200/80 text-rose-950",
    textClass: "text-rose-900",
    mutedClass: "text-rose-700/80",
    hoverBorder: "hover:border-rose-400/60",
  },
  {
    tempId: 15,
    testimonial:
      "Highly professional trainers, state-of-the-art LMS dashboard, and super active student forums.",
    by: "Trevor, Product Owner",
    imgSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-violet-50/95 border-violet-200/80 text-violet-950",
    textClass: "text-violet-900",
    mutedClass: "text-violet-700/80",
    hoverBorder: "hover:border-violet-400/60",
  },
  {
    tempId: 16,
    testimonial:
      "The best language school in town. The native speaking environments are unmatched.",
    by: "Naomi, Heritage Speaker",
    imgSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-sky-50/95 border-sky-200/80 text-sky-950",
    textClass: "text-sky-900",
    mutedClass: "text-sky-700/80",
    hoverBorder: "hover:border-sky-400/60",
  },
  {
    tempId: 17,
    testimonial:
      "A wonderful community of learners. I made great friends while mastering conversational Arabic.",
    by: "Victor, Architect",
    imgSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-teal-50/95 border-teal-200/80 text-teal-950",
    textClass: "text-teal-900",
    mutedClass: "text-teal-700/80",
    hoverBorder: "hover:border-teal-400/60",
  },
  {
    tempId: 18,
    testimonial:
      "The hybrid format is perfect for busy schedules. Highly recommended for corporate learners.",
    by: "Yuki, Engineer",
    imgSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-orange-50/95 border-orange-200/80 text-orange-950",
    textClass: "text-orange-900",
    mutedClass: "text-orange-700/80",
    hoverBorder: "hover:border-orange-400/60",
  },
  {
    tempId: 19,
    testimonial:
      "They focus on practical fluency. I was able to navigate my trip to Germany entirely in German!",
    by: "Zoe, Traveler",
    imgSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    bgClass: "bg-fuchsia-50/95 border-fuchsia-200/80 text-fuchsia-950",
    textClass: "text-fuchsia-900",
    mutedClass: "text-fuchsia-700/80",
    hoverBorder: "hover:border-fuchsia-400/60",
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
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out rounded-2xl",
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
      <h3
        className={cn(
          "text-sm sm:text-base font-medium leading-relaxed tracking-tight",
          isCenter ? "text-white" : testimonial.textClass
        )}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-xs italic font-medium",
          isCenter ? "text-white/80" : testimonial.mutedClass
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(380);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

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
          const position =
            testimonialsList.length % 2
              ? index - (testimonialsList.length + 1) / 2
              : index - testimonialsList.length / 2;
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
