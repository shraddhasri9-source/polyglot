"use client";

export default function EcosystemSection() {
  const ecosystemItems = [
    {
      title: "Digital Portal",
      description:
        "Access our proprietary LMS platform featuring interactive speaking exercises, customized grammar drills, and progress tracking dashboards.",
      icon: "devices",
      color: "text-blue-200 bg-white/10 border-white/10",
      hoverBg: "hover:bg-white/15 hover:border-white/25",
    },
    {
      title: "Speaking Clubs & Cafés",
      description:
        "Participate in host-guided debate circles, local coffee meetups, and language exchanges with native speakers in an informal setting.",
      icon: "forum",
      color: "text-emerald-200 bg-white/10 border-white/10",
      hoverBg: "hover:bg-white/15 hover:border-white/25",
    },
    {
      title: "Global Partner Network",
      description:
        "Unlock opportunities for academic credit, semester-abroad tracks, and certificate options with our linked partner institutions worldwide.",
      icon: "flight_takeoff",
      color: "text-amber-200 bg-white/10 border-white/10",
      hoverBg: "hover:bg-white/15 hover:border-white/25",
    },
    {
      title: "Career Placement Labs",
      description:
        "Excel in global markets with resume review workshops, corporate interview preparation, and specialized business terminology courses.",
      icon: "work",
      color: "text-indigo-200 bg-white/10 border-white/10",
      hoverBg: "hover:bg-white/15 hover:border-white/25",
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
            Interconnected Learning
          </span>
          <h2 className="mt-2 text-2xl font-medium text-white">
            The Polyglot Ecosystem
          </h2>
          <p className="mt-3 text-lg text-white/80 font-medium">
            Education extends far beyond the classroom. Our ecosystem integrates
            digital tools, student gatherings, and global academic linkages to
            fully surround you with language.
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
                <span>Learn more</span>
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
