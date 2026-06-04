"use client";

export default function EcosystemSection() {
  const ecosystemItems = [
    {
      title: "Language Learning Hub",
      description:
        "Learn Indian and foreign languages through simple, practical, and purpose-based training. Our courses help you speak confidently for study, career, travel, immigration, business, and everyday communication.",
      icon: "translate",
      color: "text-blue-200 bg-white/10 border-white/10",
      hoverBg: "hover:bg-white/15 hover:border-white/25",
      cta: "Explore Languages",
    },
    {
      title: "Communication & Soft Skills Studio",
      description:
        "Improve spoken English, fluency, pronunciation, grammar, vocabulary, interview skills, presentation skills, and workplace communication. Designed for students, professionals, homemakers, job seekers, and anyone who wants to speak with confidence.",
      icon: "forum",
      color: "text-emerald-200 bg-white/10 border-white/10",
      hoverBg: "hover:bg-white/15 hover:border-white/25",
      cta: "Build your career with Confidence",
    },
    {
      title: "Global Exam Preparation Centre",
      description:
        "Prepare for IELTS, PTE, TOEFL, CELPIP, and Duolingo with focused coaching, practice tests, speaking correction, writing guidance, and score-oriented strategies. Perfect for learners planning study abroad, immigration, global careers, or international opportunities.",
      icon: "school",
      color: "text-amber-200 bg-white/10 border-white/10",
      hoverBg: "hover:bg-white/15 hover:border-white/25",
      cta: "Start Test Prep",
    },
    {
      title: "Handwriting & Creative Writing Academy",
      description:
        "Develop neat, beautiful, and impressive handwriting through Cursive, Print, Lucida, Calligraphy, and decorative writing courses. Helpful for children, students, teachers, professionals, and creative learners.",
      icon: "history_edu",
      color: "text-indigo-200 bg-white/10 border-white/10",
      hoverBg: "hover:bg-white/15 hover:border-white/25",
      cta: "Improve Handwriting",
    },
  ];

  return (
    <section
      id="ecosystem"
      className="relative w-full bg-[#0931A7] py-10 md:py-14 overflow-hidden border-b border-[#072889]"
    >
      {/* Soft background light glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <span className="text-xs font-medium uppercase tracking-wider text-amber-300">
            Our Learning Wings
          </span>
          <h2 className="mt-2 text-2xl font-medium text-white">
            The Polyglot Ecosystem
          </h2>
          <p className="mt-3 text-lg text-white/80 font-medium">
            Four specialized wings designed to help you build language fluency, professional communication, global exam readiness, and creative handwriting skills.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemItems.map((item, idx) => (
            <div
              key={idx}
              className={`group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${item.hoverBg}`}
            >
              <div>
                {/* Icon Box */}
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                >
                  <span className="material-symbols-outlined text-[22px] select-none">
                    {item.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-medium text-white group-hover:text-amber-300 transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-white/70 font-medium">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-6 flex items-center gap-1 text-xs font-medium text-white/80 group-hover:text-amber-300 cursor-pointer transition-colors duration-200">
                <span>{item.cta}</span>
                <span className="material-symbols-outlined text-[14px] translate-y-[0.5px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
