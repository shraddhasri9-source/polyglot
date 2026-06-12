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
    answer: "We offer Spoken English, Indian languages, foreign languages, IELTS/PTE/TOEFL/Duolingo/CELPIP preparation, soft skills, handwriting and calligraphy programs."
  },
  {
    question: "How do I know which Spoken English course is right for me?",
    answer: "We check your present English level and suggest the right course, from basic spelling and reading to advanced speaking and communication."
  },
  {
    question: "How do you correct messy handwriting in children?",
    answer: "We improve handwriting step by step through proper letter formation, spacing, line control, pencil grip, writing posture and regular practice sheets."
  },
  {
    question: "Can I join IELTS if I am from Telugu medium and weak in English?",
    answer: "Yes. We build your basic English foundation first, then train you for IELTS Listening, Reading, Writing and Speaking step by step."
  },
  {
    question: "What soft skills do you teach in the course?",
    answer: "We teach confidence building, communication skills, public speaking, interview skills, presentation skills, workplace behaviour and personality development."
  },
  {
    question: "Do you offer French coaching for TEF/TCF and Canada immigration goals?",
    answer: "Yes. We provide French training for beginners and advanced learners, including TEF/TCF preparation for Canada immigration and global opportunities."
  },
  {
    question: "Do you offer Spoken Hindi for relocation and daily communication?",
    answer: "Yes. We teach practical Spoken Hindi for daily life, work, travel, relocation and smooth communication in Hindi-speaking places."
  },
  {
    question: "Are classes conducted online or on-campus?",
    answer: "Yes. We provide online, offline and flexible learning options based on the course and learner’s requirement."
  },
  {
    question: "Who are the instructors at Polyglot Academy?",
    answer: "Our courses are handled by experienced trainers who guide learners with practical teaching, personal attention and goal-based training."
  },
  {
    question: "How do I get started?",
    answer: "You can contact us for counselling or a demo session. We will understand your goal and suggest the most suitable course plan."
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
