import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80";

const navButtonClassName =
  "inline-flex items-center justify-center rounded-md border border-[#0931A7] bg-[#0931A7] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#072889] hover:bg-[#072889]";

const outlineButtonClassName =
  "inline-flex items-center justify-center rounded-md border border-white bg-white px-4 py-2 text-sm font-medium text-[#0931A7] transition-colors hover:bg-neutral-100";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[62vh] w-full overflow-hidden scroll-mt-0 sm:min-h-[68vh]"
    >
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[62vh] max-w-7xl flex-col items-start justify-center px-4 py-10 sm:min-h-[68vh] sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="flex w-full max-w-2xl flex-col items-start gap-4 text-left">
          <p className="text-sm font-medium tracking-wide text-[#FBBB6B]">
            The Polyglot Academy
          </p>

          <h1 className="text-2xl font-medium leading-tight text-white sm:text-3xl lg:text-4xl lg:leading-[1.2]">
            Learn language, communication, and confidence in one place.
          </h1>

          <p className="text-base font-medium leading-relaxed text-white/85">
            Build confidence in spoken English, IELTS preparation, foreign
            languages, and career communication through structured modern
            learning experiences.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
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
