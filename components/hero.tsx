"use client";

import Link from "next/link";
import { useEnquiry } from "@/components/providers/enquiry-provider";

const navButtonClassName =
  "inline-flex items-center justify-center rounded-md border border-[#0931A7] bg-[#0931A7] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#072889] hover:bg-[#072889]";

const outlineButtonClassName =
  "inline-flex items-center justify-center rounded-md border border-[#0931A7] bg-white px-4 py-2 text-sm font-medium text-[#0931A7] transition-colors hover:bg-neutral-50";

export default function Hero() {
  const { openModal } = useEnquiry();

  return (
    <section
      id="hero"
      className="relative min-h-[55vh] w-full overflow-hidden scroll-mt-0 bg-[#F3F4F6] sm:bg-[url('/hero_bg.png?v=5')] sm:bg-cover bg-no-repeat sm:bg-center sm:min-h-[60vh]"
    >

      <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col items-start justify-center px-4 py-8 sm:min-h-[60vh] sm:px-6 sm:py-10 lg:px-8 lg:py-12 z-10 pointer-events-none">
        <div className="flex w-full max-w-2xl flex-col items-start gap-4 text-left">
          <p className="text-sm font-bold tracking-wide text-[#0931A7]">
            Your Complete Academy for -
          </p>

          <h1 className="text-xl font-bold leading-tight text-neutral-900 sm:text-2xl lg:text-3xl lg:leading-[1.2]">
            Confident English, IELTS Success,<br />
            Indian & Foreign Languages,<br />
            Personality Skills & Beautiful Handwriting.
          </h1>

          <p className="text-base font-medium leading-relaxed text-neutral-700">
            Hyderabad's trusted training hub for students and professionals. Achieve fluent spoken English, score 7.5+ in IELTS, master global languages (Telugu, Hindi, English, French, Spanish, and German), and improve your penmanship.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1 pointer-events-auto">
            <button onClick={() => openModal()} className={navButtonClassName + " cursor-pointer"}>
              Book a free consultation
            </button>
            <Link href="#offers" className={outlineButtonClassName}>
              Explore programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
