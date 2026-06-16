"use client";

import { useState } from "react";
import { useEnquiry } from "@/components/providers/enquiry-provider";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Check,
  Globe,
  ArrowRight,
  Sparkles,
  Laptop,
  PenTool,
  GraduationCap,
  MessageSquare
} from "lucide-react";

interface LanguageDetail {
  name: string;
  intro: string;
  usefulFor: { title: string; desc: string }[];
}

function FlagIcon({ name, size = "sm" }: { name: string; size?: "sm" | "lg" }) {
  const sizeClasses = size === "lg" 
    ? "w-8 h-5.5 shrink-0 rounded-sm shadow-xs border border-neutral-200/60" 
    : "w-5.5 h-4 shrink-0 rounded-[2px] shadow-2xs border border-neutral-200/50";

  switch (name) {
    case "Hindi":
    case "Telugu":
    case "Tamil":
    case "Kannada":
    case "Malayalam":
    case "Bengali":
      // India Flag SVG
      return (
        <svg viewBox="0 0 3 2" className={sizeClasses}>
          <rect width="3" height="0.67" fill="#FF9933" />
          <rect y="0.67" width="3" height="0.66" fill="#FFFFFF" />
          <rect y="1.33" width="3" height="0.67" fill="#138808" />
          <circle cx="1.5" cy="1" r="0.22" fill="none" stroke="#000080" strokeWidth="0.03" />
          <circle cx="1.5" cy="1" r="0.05" fill="#000080" />
        </svg>
      );
    case "Urdu":
      // Clean crescent and star green background (representing Urdu heritage)
      return (
        <svg viewBox="0 0 3 2" className={sizeClasses}>
          <rect width="3" height="2" fill="#01411C" />
          <rect width="0.75" height="2" fill="#FFFFFF" />
          <circle cx="1.85" cy="1" r="0.45" fill="#FFFFFF" />
          <circle cx="1.97" cy="0.9" r="0.45" fill="#01411C" />
          <polygon points="2.1,0.7 2.14,0.82 2.25,0.82 2.16,0.9 2.19,1.02 2.1,0.94 2.01,1.02 2.04,0.9 1.95,0.82 2.06,0.82" fill="#FFFFFF" />
        </svg>
      );
    case "French":
      return (
        <svg viewBox="0 0 3 2" className={sizeClasses}>
          <rect width="1" height="2" fill="#002395" />
          <rect x="1" width="1" height="2" fill="#FFFFFF" />
          <rect x="2" width="1" height="2" fill="#ED2939" />
        </svg>
      );
    case "German":
      return (
        <svg viewBox="0 0 5 3" className={sizeClasses}>
          <rect width="5" height="1" fill="#000000" />
          <rect y="1" width="5" height="1" fill="#DD0000" />
          <rect y="2" width="5" height="1" fill="#FFCC00" />
        </svg>
      );
    case "Spanish":
      return (
        <svg viewBox="0 0 3 2" className={sizeClasses}>
          <rect width="3" height="0.5" fill="#C11B17" />
          <rect y="0.5" width="3" height="1" fill="#F4D03F" />
          <rect y="1.5" width="3" height="0.5" fill="#C11B17" />
          <circle cx="0.8" cy="1" r="0.18" fill="#C11B17" />
        </svg>
      );
    case "Mandarin":
      return (
        <svg viewBox="0 0 3 2" className={sizeClasses}>
          <rect width="3" height="2" fill="#DE2910" />
          <polygon points="0.5,0.4 0.53,0.5 0.63,0.5 0.55,0.56 0.58,0.66 0.5,0.6 0.42,0.66 0.45,0.56 0.37,0.5 0.47,0.5" fill="#FFDE00" />
        </svg>
      );
    case "Japanese":
      return (
        <svg viewBox="0 0 3 2" className={sizeClasses}>
          <rect width="3" height="2" fill="#FFFFFF" />
          <circle cx="1.5" cy="1" r="0.55" fill="#BC002D" />
        </svg>
      );
    case "Italian":
      return (
        <svg viewBox="0 0 3 2" className={sizeClasses}>
          <rect width="1" height="2" fill="#009246" />
          <rect x="1" width="1" height="2" fill="#FFFFFF" />
          <rect x="2" width="1" height="2" fill="#CE2B37" />
        </svg>
      );
    case "Arabic":
      return (
        <svg viewBox="0 0 3 2" className={sizeClasses}>
          <rect width="3" height="2" fill="#006C35" />
          <path d="M 0.5,1.2 L 2.5,1.2" stroke="#FFFFFF" strokeWidth="0.08" />
          <polygon points="1.5,0.6 1.55,0.7 1.65,0.7 1.57,0.76 1.6,0.86 1.5,0.8 1.4,0.86 1.43,0.76 1.35,0.7 1.45,0.7" fill="#FFFFFF" />
        </svg>
      );
    default:
      return <Globe className="w-4 h-4 text-neutral-500 shrink-0" />;
  }
}

export default function PricingDemo() {
  const { openModal } = useEnquiry();
  const [activeTab, setActiveTab] = useState<"indian" | "foreign">("indian");
  const [activeLang, setActiveLang] = useState<string>("Hindi");

  const indianLanguages: LanguageDetail[] = [
    {
      name: "Hindi",
      intro: "Hindi is one of the most useful languages for communication across India. Our Hindi course is ideal for learners who want to speak, read, write, or improve Hindi for daily life, work, travel, school, or business.",
      usefulFor: [
        { title: "Students", desc: "For school curriculum, grammar, reading, writing, spelling, sentence formation, and exam preparation." },
        { title: "Working Professionals", desc: "For office communication, customer handling, workplace interaction, presentations, and professional confidence." },
        { title: "Relocators & Non-Hindi Speakers", desc: "For people moving to Hindi-speaking states for job, education, marriage, or business." },
        { title: "Business Owners & Sales Teams", desc: "For dealing with customers, clients, vendors, staff, and people from different parts of India." },
        { title: "Homemakers & Adults", desc: "For daily conversation, family communication, social confidence, and personal learning." },
        { title: "Children", desc: "For basic Hindi speaking, handwriting, vocabulary, reading practice, and school support." }
      ]
    },
    {
      name: "Telugu",
      intro: "Telugu is useful for people living, working, studying, or doing business in Telugu-speaking regions like Telangana and Andhra Pradesh.",
      usefulFor: [
        { title: "New Residents", desc: "For daily communication with neighbours, staff, drivers, shopkeepers, colleagues, and local people." },
        { title: "Professionals & Employees", desc: "For workplace communication, customer interaction, field work, official visits, and local coordination." },
        { title: "Business People", desc: "For speaking with customers, workers, vendors, clients, and local teams confidently." },
        { title: "School Students", desc: "For Telugu reading, writing, grammar, vocabulary, dictation, handwriting, and academic support." },
        { title: "Non-Telugu Families & Children", desc: "For basic Telugu speaking, understanding local language, and building comfort in the environment." }
      ]
    },
    {
      name: "Tamil",
      intro: "Tamil is helpful for learners who want to communicate confidently in Tamil-speaking places for work, family, travel, education, or relocation.",
      usefulFor: [
        { title: "Relocators to Tamil Nadu", desc: "For daily conversations, shopping, travel, local interaction, and social communication." },
        { title: "Professionals & Business People", desc: "For client handling, workplace interaction, sales, field work, and team communication." },
        { title: "Students", desc: "For school syllabus, reading, writing, grammar, vocabulary, and exam support." },
        { title: "Family & Personal", desc: "For people who want to connect with Tamil-speaking relatives, friends, or communities." }
      ]
    },
    {
      name: "Kannada",
      intro: "Kannada is very useful for people living, working, or studying in Karnataka, especially in cities like Bengaluru, Mysuru, Mangaluru, and Hubballi.",
      usefulFor: [
        { title: "Employees & IT Professionals", desc: "For workplace comfort, local communication, and better interaction with colleagues and people around." },
        { title: "Relocators to Karnataka", desc: "For daily needs, travel, shopping, housing, staff communication, and local confidence." },
        { title: "Business Owners & Staff", desc: "For speaking with local customers, vendors, workers, and clients." },
        { title: "Students & Children", desc: "For school curriculum, reading, writing, grammar, and exam preparation." }
      ]
    },
    {
      name: "Malayalam",
      intro: "Malayalam is useful for people connected with Kerala for work, family, travel, education, healthcare, business, or personal reasons.",
      usefulFor: [
        { title: "Relocators & Travellers", desc: "For basic conversations, local interaction, travel support, and daily communication." },
        { title: "Healthcare & Service", desc: "For better communication with Malayalam-speaking customers, patients, clients, and guests." },
        { title: "Business People", desc: "For dealing with local clients, vendors, workers, and customers." },
        { title: "Students & Children", desc: "For Malayalam reading, writing, grammar, vocabulary, and school support." }
      ]
    },
    {
      name: "Urdu",
      intro: "Urdu is useful for communication, literature, cultural learning, reading, writing, and personal interest.",
      usefulFor: [
        { title: "Language Lovers", desc: "For communication, literature, cultural learning, reading, writing, and personal interest." },
        { title: "Academic & Exam Support", desc: "For school curriculum support, grammar, and exam preparation." },
        { title: "Travel & Business", desc: "For speaking and coordinating effectively with Urdu-speaking communities." }
      ]
    },
    {
      name: "Bengali",
      intro: "Bengali is useful for learners connected with West Bengal, Bengali-speaking families, travel, culture, education, and communication.",
      usefulFor: [
        { title: "Communication", desc: "For daily conversation, family connection, and understanding local Bengali language." },
        { title: "Academic support", desc: "For school syllabus, reading, writing, vocabulary, and exam prep." },
        { title: "Travelers & Relocators", desc: "For travel, culture, relocation, and connecting with Bengali-speaking communities." }
      ]
    }
  ];

  const foreignLanguages: LanguageDetail[] = [
    {
      name: "French",
      intro: "French is one of the most valuable global languages for Canada immigration, study abroad, international careers, school curriculum, travel, and global communication.",
      usefulFor: [
        { title: "TEF / TCF French Learners", desc: "For Canada PR, immigration points, settlement, job opportunities, and global mobility." },
        { title: "DELF / DALF Aspirants", desc: "For international certification, higher education, career growth, and academic recognition." },
        { title: "School & College Students", desc: "For French curriculum, grammar, vocabulary, reading, writing, translation, and exam preparation." },
        { title: "Study Abroad Students", desc: "For learners planning education in France, Canada, Europe, or French-speaking countries." },
        { title: "Professionals & Job Seekers", desc: "For international job opportunities, corporate communication, hospitality, travel, teaching, and global business." },
        { title: "Spoken French Learners", desc: "For daily conversation, interviews, travel, pronunciation, fluency, and confidence." }
      ]
    },
    {
      name: "German",
      intro: "German is highly useful for students and professionals planning higher education, jobs, research, migration, and career growth in Germany and Europe.",
      usefulFor: [
        { title: "A1 to B2 Level Learners", desc: "Structured training from beginner to advanced levels with grammar, vocabulary, speaking, listening, reading, and writing." },
        { title: "Study in Germany", desc: "For university admission, visa preparation, academic life, and daily communication in Germany." },
        { title: "Engineers, IT & Healthcare", desc: "For career opportunities in German-speaking countries and multinational companies." },
        { title: "School & College Students", desc: "For curriculum support, grammar, writing, assignments, and exams." },
        { title: "Spoken German Learners", desc: "For travel, interviews, workplace communication, and practical daily conversations." }
      ]
    },
    {
      name: "Spanish",
      intro: "Spanish is one of the most widely spoken languages in the world and is useful for travel, career, education, business, and global communication.",
      usefulFor: [
        { title: "Beginners & Language Lovers", desc: "For simple and practical learning from basic words to confident conversations." },
        { title: "Students", desc: "For school and college curriculum, assignments, grammar, vocabulary, and exam preparation." },
        { title: "Travellers & Relocators", desc: "For communication in Spanish-speaking countries during travel, study, work, or settlement." },
        { title: "Professionals & Business People", desc: "For international clients, business communication, tourism, hospitality, sales, and global career growth." },
        { title: "Spoken Spanish Learners", desc: "For daily conversations, introductions, shopping, travel situations, and social communication." }
      ]
    },
    {
      name: "Mandarin",
      intro: "Mandarin Chinese is useful for business, trade, travel, international career opportunities, and communication with Chinese-speaking communities.",
      usefulFor: [
        { title: "Business & Trade", desc: "For dealing with customers, clients, vendors, staff, and manufacturers from China and global hubs." },
        { title: "Global Opportunities", desc: "For international careers, consulting, and trade relations." },
        { title: "Immigration & Travel", desc: "For confidence during travel, relocation, or business networking." }
      ]
    },
    {
      name: "Japanese",
      intro: "Helpful for students, IT professionals, job seekers, travellers, anime lovers, and learners interested in Japanese culture and basic Japanese levels.",
      usefulFor: [
        { title: "IT & Tech Professionals", desc: "For careers in Japanese MNCs, technological collaborations, and relocate jobs in Japan." },
        { title: "Anime & Culture Lovers", desc: "For deep appreciation of Japanese media, history, and linguistic features." },
        { title: "Personal Enrichment", desc: "To learn step by step, build custom conversational goals, or prepare for travel." }
      ]
    },
    {
      name: "Italian",
      intro: "Ideal for travel, culture, hospitality, fashion, arts, education, and personal interest.",
      usefulFor: [
        { title: "Fashion & Arts Professionals", desc: "Connect with design, culinary, art history, and cultural roots in Italy." },
        { title: "Travelers & Relocators", desc: "For confident communication during vacations, cultural study, or family trips." },
        { title: "Language Enthusiasts", desc: "For personal interest, accent refinement, and creative fluency." }
      ]
    },
    {
      name: "Arabic",
      intro: "Useful for Gulf job seekers, business professionals, travellers, religious learners, and people relocating to Middle Eastern countries.",
      usefulFor: [
        { title: "Gulf Job Seekers & Relocators", desc: "For jobs in aviation, oil and gas, healthcare, and engineering in the Middle East." },
        { title: "Business & Trade Relations", desc: "For handling clients, suppliers, local customers, and business coordinators." },
        { title: "Academic & Culture Support", desc: "For religious studies, translation projects, and linguistic interests." }
      ]
    }
  ];

  const activeLanguagesList = activeTab === "indian" ? indianLanguages : foreignLanguages;
  const currentLangDetails = activeLanguagesList.find((l) => l.name === activeLang) || activeLanguagesList[0];

  const handleTabChange = (tab: "indian" | "foreign") => {
    setActiveTab(tab);
    if (tab === "indian") {
      setActiveLang("Hindi");
    } else {
      setActiveLang("French");
    }
  };

  const specializedWings = [
    {
      name: "Spoken English & Soft Skills",
      provider: "Shraddha Spoken English Institute",
      description: "Practical English training for students, job seekers, employees, and homemakers — from spelling and reading to confident speaking, accent clarity, public speaking, and vocabulary growth.",
      features: [
        "Spoken English Fluency",
        "Foundation Reading & Spelling",
        "Accent Clarity & Pronunciation",
        "Confidence & Public Speaking",
        "Vocabulary Growth & Grammar",
        "Soft Skills & Interview Preparation"
      ],
      icon: <MessageSquare className="h-6 w-6 text-[#0931A7]" />
    },
    {
      name: "IELTS & Global Exams",
      provider: "The FLI",
      description: "Build confidence and score higher in global English certification exams with expert training and practice mock tests.",
      features: [
        "IELTS Academic & General Prep",
        "TOEFL, PTE, CELPIP, Duolingo",
        "Structured Weekly Mock Tests",
        "Speaking & Writing Corrections",
        "Focused Scoring Strategies",
        "Official Exam Material Support"
      ],
      icon: <GraduationCap className="h-6 w-6 text-[#0931A7]" />,
      isPrimary: true
    },
    {
      name: "Handwriting Classes",
      provider: "Shraddha Handwriting",
      description: "Develop neat, legible, and impressive writing styles including Cursive, Print, Lucida, and Calligraphy for all age groups.",
      features: [
        "Cursive Handwriting Skills",
        "Print Writing & Lucida Format",
        "Calligraphy & Creative Strokes",
        "Posture & Pen Grip Tuning",
        "Spacing & Alignment Neatness",
        "Interactive Lessons for All Ages"
      ],
      icon: <PenTool className="h-6 w-6 text-[#0931A7]" />
    }
  ];

  return (
    <div
      id="pricing"
      className="w-full bg-[#62dcdb]/10 border-b border-neutral-200 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0931A7]">
            Invest in Your Fluency
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-neutral-900 mb-4 text-balance">
            Course Curriculums
          </h2>
          <p className="text-neutral-600 text-sm md:text-base text-balance font-medium">
            One Destination for English Certification Exams, Global Languages, Soft Skills, and Handwriting Excellence. Covered across our academic branches.
          </p>
        </div>

        {/* PRIMARY WING: POLYGLOT ACADEMY LANGUAGE EXPLORER */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-xs overflow-hidden p-6 sm:p-8 lg:p-10 mb-14 relative">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12 mb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-5 w-5 text-[#0931A7]" />
                <span className="text-sm font-semibold text-[#0931A7] uppercase tracking-wider">
                  Polyglot Academy Offers
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                Indian & Foreign Languages Curriculum
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600 font-medium">
                Structured level-based learning focusing on practical communication, accent fluency, reading, writing, and professional vocabulary.
              </p>
            </div>
            
            {/* Tab Toggles */}
            <div className="flex bg-neutral-100 p-1 rounded-xl shrink-0 border border-neutral-200/50 w-full sm:w-auto">
              <button
                onClick={() => handleTabChange("indian")}
                className={`flex-1 sm:flex-initial px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  activeTab === "indian"
                    ? "bg-[#0931A7] text-white shadow-sm"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-200/60"
                }`}
              >
                Indian Languages
              </button>
              <button
                onClick={() => handleTabChange("foreign")}
                className={`flex-1 sm:flex-initial px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  activeTab === "foreign"
                    ? "bg-[#0931A7] text-white shadow-sm"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-200/60"
                }`}
              >
                Foreign Languages
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[460px]">
            {/* Left Side: Language Pills Selector */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                Select a Language
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                {activeLanguagesList.map((lang) => (
                  <button
                    key={lang.name}
                    onClick={() => setActiveLang(lang.name)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl border transition-all text-left cursor-pointer ${
                      activeLang === lang.name
                        ? "bg-[#0931A7]/5 border-[#0931A7] text-[#0931A7] font-semibold shadow-xs"
                        : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300"
                    }`}
                  >
                    <FlagIcon name={lang.name} />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Animated Language Details Panel */}
            <div className="lg:col-span-8 bg-neutral-50/70 border border-neutral-200/50 rounded-2xl p-5 sm:p-8 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLangDetails.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 flex flex-col"
                >
                  {/* Top Portion */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3.5 mb-3">
                      <FlagIcon name={currentLangDetails.name} size="lg" />
                      <h4 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                        {currentLangDetails.name} Language Training
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                      {currentLangDetails.intro}
                    </p>
                  </div>

                  <hr className="border-neutral-200 mb-6" />

                  {/* Useful For Section */}
                  <div className="flex-1">
                    <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                      Ideal & Useful For:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {currentLangDetails.usefulFor.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 bg-white border border-neutral-100 p-3.5 rounded-xl shadow-2xs hover:shadow-xs transition-shadow duration-300"
                        >
                          <div className="mt-0.5 rounded-full bg-[#0931A7]/10 p-0.5 shrink-0">
                            <Check className="h-3.5 w-3.5 text-[#0931A7]" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-neutral-900 leading-tight">
                              {item.title}
                            </p>
                            <p className="mt-1 text-[11px] leading-normal text-neutral-500 font-medium">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Enquiry Trigger */}
                  <div className="pt-4 border-t border-neutral-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-neutral-500 font-medium">
                      Interested? Talk to our advisors today to check schedules and fee structures.
                    </p>
                    <button
                      onClick={() => openModal(`${currentLangDetails.name} Language Training`)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0931A7] px-5 py-3 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#072889] cursor-pointer shrink-0"
                    >
                      <span>Enquire {currentLangDetails.name} Course</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* SECTION: OTHER ACADEMIC WINGS */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Specialized Wings Curriculums
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm mt-2 font-medium">
              Check out the structured curriculums of our specialized support wings:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedWings.map((wing, index) => (
              <div
                key={index}
                className={`rounded-3xl border bg-white p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                  wing.isPrimary
                    ? "border-[#0931A7] ring-2 ring-[#0931A7]/30 shadow-sm"
                    : "border-neutral-200 shadow-2xs"
                }`}
              >
                <div>
                  {/* Title & Icon Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-[#c27613] uppercase tracking-wider">
                        {wing.provider}
                      </span>
                      <h4 className="text-lg font-semibold text-neutral-900 leading-snug mt-1">
                        {wing.name}
                      </h4>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0931A7]/5 border border-neutral-100">
                      {wing.icon}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                    {wing.description}
                  </p>

                  <hr className="border-neutral-100 mb-6" />

                  {/* Checklist */}
                  <h5 className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                    Syllabus Focus Areas:
                  </h5>
                  <div className="space-y-2.5 mb-8">
                    {wing.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#0931A7] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-neutral-600 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openModal(wing.name)}
                  className={`w-full py-3 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    wing.isPrimary
                      ? "bg-[#0931A7] hover:bg-[#072889] text-white font-medium"
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200/60"
                  }`}
                >
                  Enquire Wing Course
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CONSULTATION BANNER */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Need Placement Guidance?
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm font-medium">
              Not sure which level or curriculum fits your current skills? Talk to our academic advisors today.
            </p>
          </div>
          <button
            onClick={() => openModal("Book a Consultation")}
            className="px-6 py-3 rounded-xl border border-neutral-300 text-neutral-800 text-xs font-semibold hover:bg-neutral-50 shadow-3xs cursor-pointer whitespace-nowrap"
          >
            Book a Consultation
          </button>
        </div>

      </div>
    </div>
  );
}
