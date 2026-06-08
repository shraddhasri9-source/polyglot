"use client";

export default function BrandsSection() {
  const brandLogos = [
    {
      url: "https://ik.imagekit.io/dypkhqxip/Polyglot%20logo%20new%20(1).png",
      alt: "Polyglot Academy",
    },
    {
      url: "https://ik.imagekit.io/dypkhqxip/WhatsApp_Image_2026-05-22_at_16.50.47-removebg-preview.png?updatedAt=1779609492931",
      alt: "Shraddha Spoken English Institute",
    },
    {
      url: "https://ik.imagekit.io/dypkhqxip/fliredlix?updatedAt=1780134353885",
      alt: "THEFLI IELTS Institute",
    },
    {
      url: "https://ik.imagekit.io/dypkhqxip/Shraddha_Institute_Logo-handwriting%201%20(2)%20(1).png",
      alt: "Shraddha Handwriting",
    },
  ];

  return (
    <section
      id="brands"
      className="w-full bg-neutral-50/50 py-6 md:py-8 border-b border-neutral-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-6 md:mb-8 text-center">
          <h2 className="text-xl md:text-2xl font-medium text-neutral-900">
            Our{" "}
            <span className="text-[#0931A7] underline decoration-[#0931A7] decoration-2 underline-offset-8">
              Learning Wings
            </span>
          </h2>
        </div>

        {/* Logos in one single line */}
        <div className="flex flex-row flex-nowrap justify-center items-center gap-4 sm:gap-10 md:gap-16 overflow-hidden">
          {brandLogos.map((logo, idx) => (
            <div key={idx} className="transition-transform duration-300 hover:scale-105 shrink">
              <img
                src={logo.url}
                alt={logo.alt}
                className="h-8 sm:h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
