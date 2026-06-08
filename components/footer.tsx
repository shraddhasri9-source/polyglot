import Link from "next/link";

const socialLinks = [
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
        <path d="M18.9 2.25h3.68l-8.04 9.19L24 21.75h-7.38l-5.78-7.56-6.6 7.56H.96l8.6-9.83L0 2.25h7.56l5.22 6.9 6.12-6.9zm-1.29 17.52h2.04L6.49 4.41H4.3l13.31 15.36z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M12 2.2c2.67 0 2.99.01 4.04.06 1.05.05 1.77.22 2.4.47.64.25 1.18.58 1.72 1.12s.87 1.08 1.12 1.72c.25.63.42 1.35.47 2.4.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05 1.05-.22 1.77-.47 2.4a4.64 4.64 0 0 1-1.12 1.72 4.64 4.64 0 0 1-1.72 1.12c-.63.25-1.35.42-2.4.47-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-1.05-.05-1.77-.22-2.4-.47a4.64 4.64 0 0 1-1.72-1.12 4.64 4.64 0 0 1-1.12-1.72c-.25-.63-.42-1.35-.47-2.4C2.21 14.99 2.2 14.67 2.2 12s.01-2.99.06-4.04c.05-1.05.22-1.77.47-2.4.25-.64.58-1.18 1.12-1.72s1.08-.87 1.72-1.12c.63-.25 1.35-.42 2.4-.47C9.01 2.21 9.33 2.2 12 2.2zm0 1.8c-2.63 0-2.94.01-3.97.06-1 .05-1.54.21-1.9.35-.48.19-.82.41-1.18.77s-.58.7-.77 1.18c-.14.36-.3.9-.35 1.9-.05 1.03-.06 1.34-.06 3.97s.01 2.94.06 3.97c.05 1 .21 1.54.35 1.9.19.48.41.82.77 1.18s.7.58 1.18.77c.36.14.9.3 1.9.35 1.03.05 1.34.06 3.97.06s2.94-.01 3.97-.06c1-.05 1.54-.21 1.9-.35.48-.19.82-.41 1.18-.77s.58-.7.77-1.18c.14-.36.3-.9.35-1.9.05-1.03.06-1.34.06-3.97s-.01-2.94-.06-3.97c-.05-1-.21-1.54-.35-1.9a3.14 3.14 0 0 0-.77-1.18 3.14 3.14 0 0 0-1.18-.77c-.36-.14-.9-.3-1.9-.35-1.03-.05-1.34-.06-3.97-.06zM12 7.87A4.13 4.13 0 1 1 7.87 12 4.13 4.13 0 0 1 12 7.87zm0 6.8a2.67 2.67 0 1 0-2.67-2.67A2.67 2.67 0 0 0 12 14.67zm5.23-7.46a.97.97 0 1 1-.97-.97.97.97 0 0 1 .97.97z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.9v-8.41H7.08v-3.49h3.05V9.41c0-3.01 1.79-4.67 4.54-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87v2.25h3.32l-.53 3.49h-2.79v8.41C19.61 23.09 24 18.09 24 12.07z" />
      </svg>
    ),
  },
];

const linkGroups = [
  {
    sections: [
      {
        title: "Our Brands",
        links: [
          { label: "Spoken English Institute", href: "#offers" },
          { label: "The FLI (IELTS & Prep)", href: "#offers" },
          { label: "Shraddha Handwriting", href: "#offers" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Academy",
        links: [
          { label: "About Us", href: "#mission-vision" },
          { label: "Our Ecosystem", href: "#ecosystem" },
          { label: "Our Partners", href: "#brands" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Offerings",
        links: [
          { label: "Specialized Courses", href: "#offers" },
          { label: "Program Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Admissions",
        links: [
          { label: "Book a Consultation", href: "#consultation-cta" },
          { label: "Student Testimonials", href: "#testimonials" },
        ],
      },
    ],
  },
];




const legalLinks = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms and conditions", href: "#" },
  { label: "Refund policy", href: "#" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="mb-3 text-[11px] font-semibold tracking-wide text-white uppercase">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[13px] text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default function Footer() {
  return (
    <footer className="bg-[#121212] text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        {/* Section 1: Brand + link columns */}
        <div className="grid gap-10 lg:grid-cols-[minmax(220px,280px)_1fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center">
              <img
                src="https://ik.imagekit.io/dypkhqxip/Polyglot%20logo%20new%20(1).png"
                alt="Polyglot Academy Logo"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="mt-5 text-[11px] text-neutral-500">
              © {new Date().getFullYear()} Polyglot Academy. All rights reserved
            </p>
            <p className="mt-1 text-[11px] text-neutral-500">
              Built and Maintained by{" "}
              <a
                href="https://www.redlix.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-2 hover:text-white transition-colors"
              >
                Studio Redlix
              </a>
            </p>



            <div className="mt-6">
              <p className="text-[13px] font-medium text-white">Contact us</p>
              <ul className="mt-2 space-y-1.5 text-[12px] text-neutral-400">
                <li>
                  <a href="tel:+918143444110" className="transition-colors hover:text-white">
                    +91 81434 44110
                  </a>
                </li>
                <li>
                  <a href="tel:+919490937410" className="transition-colors hover:text-white">
                    +91 94909 37410
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/918143444110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    WhatsApp: +91 81434 44110
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:shraddhasri9@gmail.com"
                    className="transition-colors hover:text-white"
                  >
                    shraddhasri9@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {linkGroups.map((group, index) => (
              <div key={index}>
                {group.sections.map((section) => (
                  <FooterLinkColumn
                    key={section.title}
                    title={section.title}
                    links={section.links}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <hr className="my-10 border-neutral-800" />

        {/* Section 3: Office location & Map */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left side: Single location detail */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wide text-white uppercase">
              Institute Location
            </h3>
            <address className="text-sm leading-relaxed text-neutral-400 not-italic">
              <p className="font-medium text-neutral-200">Shraddha Spoken English Institute & Polyglot Academy</p>
              <p className="mt-1">40-180, Jawahar Nagar Colony,</p>
              <p>ECIL Extension,</p>
              <p>Hyderabad, Telangana - 500040</p>
            </address>
          </div>

          {/* Right side: Map iframe */}
          <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 h-[180px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.293836336592!2d78.5683933!3d17.4789069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bca2c219d3f%3A0xd68d7cd9a405fb79!2sJawahar%20Nagar%20Colony%2C%20ECIL%20Extension%2C%20Moula%20Ali%2C%20Secunderabad%2C%20Telangana%20500040!5e0!3m2!1sen!2sin!4v1717502400000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
              title="Polyglot Academy Location Map"
            />
          </div>
        </div>

        <hr className="my-10 border-neutral-800" />

        {/* Section 4: Legal links */}
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-[12px] text-neutral-400 sm:justify-around">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
