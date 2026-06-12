"use client"

import { Pricing } from "@/components/ui/pricing-table"
import { useEnquiry } from "@/components/providers/enquiry-provider"

export default function PricingDemo() {
  const { openModal } = useEnquiry();

  return (
    <Pricing
      className="bg-[#62dcdb]/10 border-b border-neutral-200"
      title="Course Curriculums"
      subtitle="One Destination for English Certification Exams, Global Languages, Soft Skills, and Handwriting Excellence. Covered across our academic branches."
      onFooterButtonClick={() => openModal()}
      tiers={[
        {
          name: "Spoken English & Soft Skills",
          description: "Practical English training for students, job seekers, employees, and homemakers — from spelling and reading to confident speaking, accent clarity, public speaking, and vocabulary growth.",
          buttonText: "Enquire Now",
          onClick: () => openModal("Spoken English & Soft Skills"),
          features: [
            { text: "Spoken English Fluency" },
            { text: "Foundation Reading & Spelling" },
            { text: "Accent Clarity & Pronunciation" },
            { text: "Confidence & Public Speaking" },
            { text: "Vocabulary Growth & Grammar" },
            { text: "Soft Skills & Interviews" },
          ],
          featuresTitle: "Course Focus Areas:",
        },
        {
          name: "IELTS & Languages",
          description: "Build confidence and score higher in global English exams, and master a wide range of Indian and Foreign languages.",
          buttonText: "Enquire Now",
          isPrimary: true,
          onClick: () => openModal("IELTS & Languages"),
          features: [
            { text: "IELTS, TOEFL, PTE, CELPIP, Duolingo" },
            { text: "French, German, Spanish, Italian" },
            { text: "Mandarin, Japanese, Arabic" },
            { text: "Hindi, Telugu, Tamil" },
            { text: "Kannada, Malayalam" },
            { text: "Urdu, Bengali" },
          ],
          featuresTitle: "Offered Exams & Languages:",
        },
        {
          name: "Handwriting Classes",
          description: "Handwriting & creative Handwriting skills handwriting courses through cursive..... for all ages",
          buttonText: "Enquire Now",
          onClick: () => openModal("Handwriting Classes"),
          features: [
            { text: "Cursive Handwriting" },
            { text: "Print Writing & Lucida" },
            { text: "Calligraphy & Creative Strokes" },
            { text: "Posture & Pen Grip Tuning" },
            { text: "Spacing & Neatness Focus" },
            { text: "Courses for All Ages" },
          ],
          featuresTitle: "Offered Styles & Lessons:",
        },
      ]}
      footerTitle="Need Placement Guidance?"
      footerDescription="Not sure which level or curriculum fits your current skills? Talk to our academic advisors today."
      footerButtonText="Book a Consultation"
    />
  );
}


