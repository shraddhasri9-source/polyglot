import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#mission-vision", label: "About" },
  { href: "#offers", label: "Offers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

const navUnderline =
  "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#0931A7] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";

const linkClassName = `relative inline-flex items-center px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black ${navUnderline}`;

const mobileLinkClassName =
  "block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-black";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-1.5 sm:py-2 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src="https://ik.imagekit.io/dypkhqxip/Polyglot%20logo%20new%20(1).png"
            alt="Polyglot Academy Logo"
            className="h-14 w-auto object-contain sm:h-18"
          />
        </Link>

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#consultation-cta"
            className="rounded-md border border-[#0931A7] bg-[#0931A7] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#072889] hover:bg-[#072889]"
          >
            Enquire Now
          </Link>

          <details className="relative lg:hidden">
            <summary className="list-none cursor-pointer rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-black marker:content-none [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <ul className="absolute right-0 z-50 mt-2 max-h-[70vh] min-w-52 overflow-y-auto rounded-lg border border-neutral-200 bg-white py-1 shadow-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={mobileLinkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-neutral-100">
                <Link
                  href="#consultation-cta"
                  className="block px-4 py-2 text-sm font-medium text-[#0931A7] hover:bg-neutral-50"
                >
                  Enquire Now
                </Link>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </nav>
  );
}
