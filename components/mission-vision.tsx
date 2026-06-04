"use client";

export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="w-full bg-neutral-50/50 py-10 md:py-14 border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          
          {/* Mission Card - Text Left, Image Right on Desktop */}
          <div className="group flex flex-col md:flex-row gap-8 items-center rounded-2xl border border-[#0931A7]/10 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0931A7]/[0.02] hover:shadow-md md:p-8">
            {/* Text Content */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0931A7]/10 text-[#0931A7] transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[22px] select-none">
                    track_changes
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-[#0931A7]">
                    Purpose & Action
                  </span>
                  <h3 className="text-xl font-medium text-neutral-900 leading-tight">
                    Our Mission
                  </h3>
                </div>
              </div>
              
              <p className="text-sm font-medium leading-relaxed text-neutral-600">
                To democratize language learning by delivering rigorous, immersive, and
                interactive training that bridges cultural gaps, enhances global career
                prospects, and fosters authentic human connections.
              </p>
            </div>

            {/* Illustration */}
            <div className="relative w-full h-56 md:w-80 md:h-80 shrink-0 overflow-hidden rounded-xl bg-neutral-50/50 flex items-center justify-center p-4">
              <img
                src="https://ik.imagekit.io/dypkhqxip/Business%20mission-bro.svg"
                alt="Our Mission Illustration"
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Desktop Separator Line (with gradient fade) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent -translate-x-1/2" aria-hidden="true" />

          {/* Mobile Separator Line */}
          <div className="block md:hidden h-px w-full bg-neutral-200 my-2" aria-hidden="true" />

          {/* Vision Card - Image Left, Text Right on Desktop */}
          <div className="group flex flex-col md:flex-row-reverse gap-8 items-center rounded-2xl border border-[#FBBB6B]/30 bg-amber-50/20 p-6 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-50/50 hover:shadow-md md:p-8 md:text-right">
            {/* Text Content */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 md:flex-row-reverse">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100/50 text-[#c27613] transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[22px] select-none">
                    visibility
                  </span>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-[#c27613]">
                    Aspiration & Future
                  </span>
                  <h3 className="text-xl font-medium text-neutral-900 leading-tight">
                    Our Vision
                  </h3>
                </div>
              </div>
              
              <p className="text-sm font-medium leading-relaxed text-neutral-600">
                To become the world's most trusted partner in bilingualism and global
                communication, empowering learners to step into any environment with
                confidence, empathy, and clarity.
              </p>
            </div>

            {/* Illustration */}
            <div className="relative w-full h-56 md:w-80 md:h-80 shrink-0 overflow-hidden rounded-xl bg-neutral-50/50 flex items-center justify-center p-4">
              <img
                src="https://ik.imagekit.io/dypkhqxip/Creative%20writing-bro.svg"
                alt="Our Vision Illustration"
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
