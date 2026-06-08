"use client";

import Link from "next/link";
import { useEnquiry } from "@/components/providers/enquiry-provider";

interface OfferCard {
  title: string;
  provider: string;
  description: string;
  imageSrc?: string;
  svgIcon?: React.ReactNode;
}

export default function OffersSection() {
  const { openModal } = useEnquiry();
  const offers: OfferCard[] = [
    {
      title: "Spoken English",
      provider: "Shraddha Spoken English Institute",
      description: "Practical English training for students, job seekers, employees, and homemakers — from spelling and reading to confident speaking, accent clarity, public speaking, and vocabulary growth.",
      imageSrc: "https://ik.imagekit.io/dypkhqxip/Ideological%20difference-cuate.svg"
    },
    {
      title: "IELTS & Global Exams",
      provider: "The FLI",
      description: "Build confidence and score higher in global English exams with expert training for IELTS, TOEFL, PTE, CELPIP, and Duolingo.",
      imageSrc: "https://ik.imagekit.io/dypkhqxip/Study%20abroad-pana.svg"
    },
    {
      title: "Indian & Foreign Languages",
      provider: "Polyglot Academy",
      description: "Comprehensive training in Indian and foreign languages: Hindi, Telugu, Tamil, Kannada, Malayalam, Urdu, Bengali, French, German, Spanish, Mandarin, Italian, Japanese, and Arabic.",
      svgIcon: (
        <span className="material-symbols-outlined text-[72px] text-[#0931A7] select-none leading-none">
          translate
        </span>
      )
    },
    {
      title: "Handwriting Improvement",
      provider: "Shraddha Handwriting",
      description: "Handwriting & creative Handwriting skills handwriting courses through cursive..... for all ages",
      imageSrc: "https://ik.imagekit.io/dypkhqxip/Hand%20holding%20pen-amico.svg"
    }
  ];

  return (
    <section
      id="offers"
      className="w-full bg-[#FBBB6B]/10 py-12 md:py-16 border-b border-neutral-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header with underline styling */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-12 text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-[#0931A7]">
            Specialized Curriculums
          </span>
          <h2 className="mt-2 text-2xl font-medium text-neutral-900">
            What Polyglot{" "}
            <span className="text-[#0931A7] underline decoration-[#0931A7] decoration-2 underline-offset-8">
              Offers
            </span>
          </h2>
        </div>

        {/* 4 Course Offerings Grid (One single line on desktop, stacks vertically on mobile so cards are not cut off) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md w-full"
            >
              <div>
                {/* Illustration Box (reduced height to h-32) */}
                <div className="relative mb-4 flex h-32 w-full items-center justify-center rounded-xl bg-neutral-50/50 p-2 overflow-hidden border border-neutral-100">
                  {offer.imageSrc ? (
                    <img
                      src={offer.imageSrc}
                      alt={offer.title}
                      className="h-full w-auto max-h-28 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    offer.svgIcon
                  )}

                </div>

                {/* Offer details */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#c27613]">
                    {offer.provider}
                  </span>
                  <h3 className="text-lg font-medium text-neutral-900 leading-tight">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 font-medium">
                    {offer.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <button
                  onClick={() => openModal(offer.title)}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#0931A7] px-4 py-2.5 text-xs font-medium text-white shadow-xs transition-colors hover:bg-[#072889] cursor-pointer"
                >
                  Enquire Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
