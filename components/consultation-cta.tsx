"use client";

import Link from "next/link";

export default function ConsultationCTA() {
  return (
    <section id="consultation-cta" className="w-full bg-neutral-50/50 py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Rounded Card CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0931A7] to-[#072889] p-6 shadow-lg shadow-[#0931A7]/20 md:p-8">
          {/* Subtle background glow highlights */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[#FBBB6B]/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Text details */}
            <div className="text-center md:text-left space-y-1">
              <h3 className="text-lg md:text-xl font-medium text-white tracking-tight">
                Ready to accelerate your language learning?
              </h3>
              <p className="text-xs md:text-sm text-white/80 max-w-xl font-medium">
                Book a free 15-minute consultation with our academic advisors to
                find the perfect learning pathway for your goals.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="#consultation"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-xs md:text-sm font-medium text-[#0931A7] shadow-sm transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.02] active:scale-100 shrink-0"
            >
              Book a free consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
