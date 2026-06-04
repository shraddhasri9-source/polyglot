"use client";

import Link from "next/link";

interface OfferCard {
  title: string;
  provider: string;
  description: string;
  imageSrc?: string;
  svgIcon?: React.ReactNode;
}

export default function OffersSection() {
  const offers: OfferCard[] = [
    {
      title: "Spoken English",
      provider: "Shraddha Spoken English Institute",
      description: "Master fluent communication, accent training, public speaking confidence, and vocabulary development with native-speaker café sessions.",
      imageSrc: "https://ik.imagekit.io/dypkhqxip/Ideological%20difference-cuate.svg"
    },
    {
      title: "IELTS Preparation",
      provider: "The FLI",
      description: "Excel in all four sections of the IELTS academic and general exams with verified mock tests, essay reviews, and direct expert training.",
      imageSrc: "https://ik.imagekit.io/dypkhqxip/Study%20abroad-pana.svg"
    },
    {
      title: "Handwriting Improvement",
      provider: "Shraddha Handwriting",
      description: "Enhance script neatness, calligraphy styling, pen stroke accuracy, and writing speed under targeted guidance for all age groups.",
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

        {/* 3 Course Offerings Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* Illustration Box */}
                <div className="relative mb-5 flex h-44 w-full items-center justify-center rounded-xl bg-neutral-50/50 p-2 overflow-hidden border border-neutral-100">
                  {offer.imageSrc ? (
                    <img
                      src={offer.imageSrc}
                      alt={offer.title}
                      className="h-full w-auto max-h-40 object-contain transition-transform duration-300 group-hover:scale-105"
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
              <div className="mt-6">
                <Link
                  href="#consultation"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#0931A7] px-4 py-2.5 text-xs font-medium text-white shadow-xs transition-colors hover:bg-[#072889]"
                >
                  Enquire Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
