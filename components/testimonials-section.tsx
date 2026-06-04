"use client";

import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full bg-white py-8 md:py-10 border-b border-neutral-200 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-6 md:mb-8">
          <span className="text-xs font-medium uppercase tracking-wider text-[#0931A7]">
            Success Stories
          </span>
          <h2 className="mt-2 text-2xl font-medium text-neutral-900">
            What Our Students Say
          </h2>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <StaggerTestimonials />
    </section>
  );
}
