"use client"

import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqItems = [
  {
    question: "What language programs do you offer?",
    answer: "We offer specialized courses in Spoken English (via Shraddha Spoken English Institute), IELTS Preparation (via The FLI), and Handwriting Improvement (via Shraddha Handwriting), along with structured tracks in Spanish, Mandarin, French, Japanese, German, and Arabic."
  },
  {
    question: "Are classes conducted online or on-campus?",
    answer: "We support multiple learning paths, including standard on-campus lectures, interactive hybrid courses, and flexible online sessions designed to accommodate student and professional schedules."
  },
  {
    question: "How do I determine which level or course is right for me?",
    answer: "We offer a free initial consultation and placement assessment with our advisors. During this session, we evaluate your current fluency level and recommend a tailored path to achieve your specific goals."
  },
  {
    question: "What is the duration of the courses?",
    answer: "Our standard courses run on a semester-length schedule (typically 3 to 4 months). We also run intensive summer institutes, quick weekend labs, and custom bootcamps for business professionals."
  },
  {
    question: "Who are the instructors at Polyglot Academy?",
    answer: "Our faculty consists of certified language professors, industry communication specialists, and native speakers who bring real-world fluency and classroom rigor together."
  },
  {
    question: "Do you provide preparation for international exams?",
    answer: "Yes! Our IELTS Preparation track at The FLI is specifically designed for high-band scores (Academic and General) and includes weekly mock testing, structured writing evaluation, and 1-on-1 interview practice."
  },
  {
    question: "Do you offer group or family discounts?",
    answer: "Yes, we support learning together! We offer up to a 25% discount for family package sign-ups or group enrollments of three or more students."
  },
  {
    question: "How do I get started?",
    answer: "Simply click 'Book a free consultation' or scroll to our Admissions Enquiry form, share your goals, and a counselor will get back to you within one business day."
  }
];

function FAQ() {
  return (
    <div id="faq" className="w-full py-16 md:py-24 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex gap-6 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <span className="text-xs font-medium uppercase tracking-wider text-[#0931A7]">
                  Got Questions?
                </span>
                <h4 className="mt-2 text-3xl md:text-4xl font-medium tracking-tight text-left text-neutral-900 leading-tight">
                  Frequently Asked{" "}
                  <span className="text-[#0931A7] underline decoration-[#0931A7] decoration-2 underline-offset-8">
                    Questions
                  </span>
                </h4>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-600 text-left font-medium">
                  Have questions about our curriculums, schedules, or admissions process? Browse our common queries or reach out directly to our support team.
                </p>
              </div>
              <div className="mt-4">
                <Link href="#consultation">
                  <Button className="gap-2 bg-transparent text-[#0931A7] border border-[#0931A7] hover:bg-[#0931A7]/5 font-medium transition-colors" variant="outline">
                    Reach out to us <PhoneCall className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={"index-" + index}>
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium py-3.5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm leading-relaxed font-medium pb-4 text-neutral-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
