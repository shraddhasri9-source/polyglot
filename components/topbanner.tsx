import Link from "next/link";

const utilityLinks = [
  { href: "mailto:admissions@polyglot.academy", label: "admissions@polyglot.academy" },
];

export default function TopBanner() {
  return (
    <div className="w-full border-b border-neutral-300 bg-[#FBBB6B]">
      {/* py-2 has been changed to py-3 to increase the vertical height */}
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-normal text-neutral-800">
          <span className="text-black">Now enrolling</span>
          {" · "}
          Summer term applications open through June 1
        </p>

        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {utilityLinks.map((link, index) => (
            <li key={link.href} className="flex items-center gap-4">
              {index > 0 && (
                <span className="hidden text-neutral-500 sm:inline" aria-hidden>
                  |
                </span>
              )}
              <Link
                href={link.href}
                className="font-normal text-neutral-800 transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}