"use client";

import { useEnquiry } from "@/components/providers/enquiry-provider";
import {
  BookOpen,
  Award,
  MessageCircle,
  Laptop,
  Users,
  Target
} from "lucide-react";

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
      description: "Develop neat, legible, and impressive writing styles including Cursive, Print, Lucida, and Calligraphy for all age groups.",
      imageSrc: "https://ik.imagekit.io/dypkhqxip/Hand%20holding%20pen-amico.svg"
    }
  ];

  const whyChooseUs = [
    {
      title: "Purpose-Based Learning",
      description: "We understand your goal first and guide you with the right course plan.",
      icon: <Target className="h-6 w-6 text-[#0931A7]" />
    },
    {
      title: "Beginner-Friendly Training",
      description: "Learn step by step, even if you are starting from zero.",
      icon: <Award className="h-6 w-6 text-[#0931A7]" />
    },
    {
      title: "Practical Speaking Practice",
      description: "Focus on real-life conversations, pronunciation, sentence formation, and confidence.",
      icon: <MessageCircle className="h-6 w-6 text-[#0931A7]" />
    },
    {
      title: "Academic & Exam Support",
      description: "Special support for school curriculum, college syllabus, TEF, TCF, DELF, DALF, and level-based exams.",
      icon: <BookOpen className="h-6 w-6 text-[#0931A7]" />
    },
    {
      title: "Online & Offline Classes",
      description: "Flexible learning options for students, professionals, homemakers, and busy learners.",
      icon: <Laptop className="h-6 w-6 text-[#0931A7]" />
    },
    {
      title: "One-to-One & Small Batches",
      description: "Personal attention, correction, practice, and progress tracking.",
      icon: <Users className="h-6 w-6 text-[#0931A7]" />
    }
  ];

  return (
    <section
      id="offers"
      className="w-full bg-[#FBBB6B]/10 py-16 md:py-24 border-b border-neutral-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0931A7] px-3 py-1 bg-[#0931A7]/10 rounded-full">
            Specialized Curriculums
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
            What Polyglot{" "}
            <span className="text-[#0931A7] relative inline-block">
              Offers
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#0931A7] rounded-full"></span>
            </span>
          </h2>
        </div>

        {/* 4 Course Offerings Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-20">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md w-full"
            >
              <div>
                {/* Illustration Box */}
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
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c27613] px-2 py-0.5 bg-[#c27613]/10 rounded-md">
                    {offer.provider}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-900 leading-tight pt-1">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600 font-medium">
                    {offer.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <button
                  onClick={() => openModal(offer.title)}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#0931A7] px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#072889] cursor-pointer"
                >
                  Enquire Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION: WHY CHOOSE POLYGLOT ACADEMY */}
        <div className="border-t border-neutral-200/60 pt-16 max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h3 className="text-2xl font-semibold text-neutral-900">
              Why Choose Polyglot Academy?
            </h3>
            <p className="mt-2 text-neutral-500 text-sm font-medium">
              We focus on practical, custom learning pathways to fit your personal or professional schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl hover:bg-neutral-50 transition-colors duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0931A7]/5 border border-neutral-200/50 shadow-3xs">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-neutral-900 leading-tight">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600 font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
