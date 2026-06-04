"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Enquire Now button (visible on desktop/tablet, hidden on small mobile) */}
          <Link
            href="#consultation-cta"
            className="hidden sm:inline-flex rounded-md border border-[#0931A7] bg-[#0931A7] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#072889] hover:bg-[#072889]"
          >
            Enquire Now
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-[#0931A7] lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full z-30 border-b border-neutral-200 bg-white px-4 py-3 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-4 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Show Enquire Now button in mobile menu only on mobile viewport (< sm) */}
            <li className="mt-2 border-t border-neutral-100 pt-2 sm:hidden">
              <Link
                href="#consultation-cta"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-md bg-[#0931A7] px-4 py-2 text-center text-base font-medium text-white transition-colors hover:bg-[#072889]"
              >
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
