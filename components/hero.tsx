"use client";

import Link from "next/link";
import { useScreenSize } from "@/components/hooks/use-screen-size";
import { PixelTrail } from "@/components/ui/pixel-trail";

const navButtonClassName =
  "inline-flex items-center justify-center rounded-md border border-[#0931A7] bg-[#0931A7] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#072889] hover:bg-[#072889]";

const outlineButtonClassName =
  "inline-flex items-center justify-center rounded-md border border-[#0931A7] bg-white px-4 py-2 text-sm font-medium text-[#0931A7] transition-colors hover:bg-neutral-50";

export default function Hero() {
  const screenSize = useScreenSize();

  return (
    <section
      id="hero"
      className="relative min-h-[62vh] w-full overflow-hidden scroll-mt-0 bg-[#DCDDD8] sm:min-h-[68vh]"
    >
      {/* Pixel Trail Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-70">
        <PixelTrail
          pixelSize={screenSize.lessThan("md") ? 48 : 80}
          fadeDuration={800}
          delay={0}
          pixelClassName="rounded-full bg-[#ffa04f]"
        />
      </div>

      <div className="relative mx-auto flex min-h-[62vh] max-w-7xl flex-col items-start justify-center px-4 py-10 sm:min-h-[68vh] sm:px-6 sm:py-12 lg:px-8 lg:py-14 z-10 pointer-events-none">
        <div className="flex w-full max-w-2xl flex-col items-start gap-4 text-left">
          <p className="text-sm font-semibold tracking-wide text-[#0931A7]">
            Polyglot Academy
          </p>

          <h1 className="text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl lg:text-4xl lg:leading-[1.2]">
            Speak Better. Communicate Smarter. Score Higher. Write Beautifully.
          </h1>

          <p className="text-base font-medium leading-relaxed text-neutral-700">
            A complete academy for language learning, career-focused communication, soft skills, international exam preparation, and handwriting excellence — helping learners speak with confidence, present themselves professionally, and grow globally.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1 pointer-events-auto">
            <Link href="#consultation" className={navButtonClassName}>
              Book a free consultation
            </Link>
            <Link href="#programs" className={outlineButtonClassName}>
              Explore programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
