"use client";

import { useEffect, useState, useRef } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

function StatItemRow({ value, suffix, label, description, icon }: StatItem) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing out quadratic function
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * value);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, value]);

  return (
    <div
      ref={elementRef}
      className="group relative flex flex-col justify-center p-6 transition-colors duration-300 hover:bg-neutral-50/50 md:p-8"
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0931A7]/10 text-[#0931A7] transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Text */}
        <div className="flex-1">
          <div className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
            <span className="tabular-nums">{count.toLocaleString()}</span>
            <span className="text-[#0931A7]">{suffix}</span>
          </div>
          <h3 className="mt-1 text-sm font-medium text-neutral-900 transition-colors duration-300 group-hover:text-[#0931A7]">
            {label}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const statsList: StatItem[] = [
    {
      value: 8,
      suffix: "+",
      label: "Languages",
      description: "Learn English, Indian languages, and foreign languages for career, travel, study, business, and global opportunities.",
      icon: (
        <span className="material-symbols-outlined text-[22px] select-none">
          translate
        </span>
      ),
    },
    {
      value: 12,
      suffix: "+",
      label: "Skill Programs",
      description: "Explore Spoken English, IELTS, PTE, TOEFL, CELPIP, Duolingo, soft skills, neat handwriting, decorative calligraphy, and more.",
      icon: (
        <span className="material-symbols-outlined text-[22px] select-none">
          school
        </span>
      ),
    },
    {
      value: 10000,
      suffix: "+",
      label: "Learners Trained",
      description: "Trusted by students, professionals, homemakers, children, job seekers, travelers, and language lovers.",
      icon: (
        <span className="material-symbols-outlined text-[22px] select-none">
          groups
        </span>
      ),
    },
    {
      value: 98,
      suffix: "%",
      label: "Learner Satisfaction",
      description: "Loved for simple teaching, flexible learning, personal attention, practical training, and visible progress.",
      icon: (
        <span className="material-symbols-outlined text-[22px] select-none">
          verified
        </span>
      ),
    },
  ];

  return (
    <section className="relative z-10 -mt-10 w-full md:-mt-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Stats Bar Container */}
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
          <div className="grid grid-cols-1 divide-y divide-neutral-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
            {statsList.map((stat, idx) => (
              <StatItemRow key={idx} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
