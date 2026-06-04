"use client"

import { Pricing } from "@/components/ui/pricing-table"

export default function PricingDemo() {
  return (
    <Pricing
      className="bg-[#62dcdb]/10 border-b border-neutral-200"
      title="Course Curriculums"
      subtitle="Explore the subjects, languages, and writing styles covered across our academic branches."
      tiers={[
        {
          name: "Spoken English & Skills",
          description: "Offered by Shraddha Spoken English Institute. Comprehensive foundational communication and regional language training.",
          buttonText: "Enquire Now",
          features: [
            { text: "Spoken English" },
            { text: "Foundation English" },
            { text: "Softskills" },
            { text: "Hindi" },
            { text: "Telugu" },
            { text: "Tamil" },
            { text: "Kannada" },
            { text: "Malyalam" },
          ],
          featuresTitle: "Offered Subjects & Languages:",
        },
        {
          name: "Foreign Languages & IELTS",
          description: "Offered by The FLI. Target global fluency and international test credentials.",
          buttonText: "Enquire Now",
          isPrimary: true,
          features: [
            { text: "IELTS Preparation" },
            { text: "French" },
            { text: "German" },
            { text: "Spanish" },
          ],
          featuresTitle: "Offered Programs & Languages:",
        },
        {
          name: "Handwriting Classes",
          description: "Offered by Shraddha Handwriting. Refine penmanship, writing style, and pen stroke neatness.",
          buttonText: "Enquire Now",
          features: [
            { text: "Cursive" },
            { text: "Print" },
            { text: "Lucida" },
            { text: "Calligraphy" },
          ],
          featuresTitle: "Offered Styles & Lessons:",
        },
      ]}
      footerTitle="Need Placement Guidance?"
      footerDescription="Not sure which level or curriculum fits your current skills? Talk to our academic advisors today."
      footerButtonText="Book a Consultation"
    />
  )
}


