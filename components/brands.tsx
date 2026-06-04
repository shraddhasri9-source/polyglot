"use client";

export default function BrandsSection() {
  const brandLogos = [
    {
      url: "https://ik.imagekit.io/dypkhqxip/WhatsApp_Image_2026-05-22_at_16.50.47-removebg-preview.png?updatedAt=1779609492931",
      alt: "Partner Brand 1",
    },
    {
      url: "https://ik.imagekit.io/dypkhqxip/fliredlix?updatedAt=1780134353885",
      alt: "Partner Brand 2",
    },
    {
      url: "https://ik.imagekit.io/dypkhqxip/Shraddha_Institute_Logo-handwriting%201%20(2)%20(1).png",
      alt: "Partner Brand 3",
    },
  ];

  return (
    <section
      id="brands"
      className="w-full bg-neutral-50/50 py-6 md:py-8 border-b border-neutral-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Centered Header */}
        <div className="max-w-3xl mx-auto mb-6 md:mb-8">
          <h2 className="text-2xl font-medium text-neutral-900">
            Our{" "}
            <span className="text-[#0931A7] underline decoration-[#0931A7] decoration-2 underline-offset-8">
              Brands
            </span>
          </h2>
        </div>

        {/* 3 Large Color Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {brandLogos.map((logo, idx) => (
            <div key={idx} className="transition-transform duration-300 hover:scale-105">
              <img
                src={logo.url}
                alt={logo.alt}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
