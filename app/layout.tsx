import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0931A7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Polyglot Academy | Best Language Learning Institute & Training Center",
  description: "Accelerate your language learning journey with Polyglot Academy. We offer comprehensive, immersive courses and expert training in French, German, Spanish, Spoken English, and IELTS preparation.",
  keywords: [
    "Polyglot Academy",
    "Language Institute Hyderabad",
    "Spoken English courses",
    "IELTS preparation coaching",
    "Learn French online",
    "Learn German online",
    "Learn Spanish classes",
    "Foreign language training",
    "Handwriting classes",
    "Language academy"
  ],
  authors: [{ name: "Polyglot Academy", url: "https://www.thepolyglot.co.in" }],
  creator: "Polyglot Academy",
  publisher: "Polyglot Academy",
  icons: {
    icon: [
      {
        url: "https://ik.imagekit.io/dypkhqxip/polyglot?updatedAt=1780238904683",
        href: "https://ik.imagekit.io/dypkhqxip/polyglot?updatedAt=1780238904683",
      }
    ],
    shortcut: "https://ik.imagekit.io/dypkhqxip/polyglot?updatedAt=1780238904683",
    apple: "https://ik.imagekit.io/dypkhqxip/polyglot?updatedAt=1780238904683",
  },
  openGraph: {
    title: "Polyglot Academy | Best Language Learning Institute",
    description: "Accelerate your language learning journey with Polyglot Academy. We offer comprehensive, immersive courses and expert training in French, German, Spanish, Spoken English, and IELTS preparation.",
    url: "https://www.thepolyglot.co.in",
    siteName: "Polyglot Academy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/dypkhqxip/polyglot?updatedAt=1780238904683",
        width: 1200,
        height: 630,
        alt: "Polyglot Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polyglot Academy | Best Language Learning Institute",
    description: "Accelerate your language learning journey with Polyglot Academy. We offer comprehensive, immersive courses and expert training in French, German, Spanish, Spoken English, and IELTS preparation.",
    images: ["https://ik.imagekit.io/dypkhqxip/polyglot?updatedAt=1780238904683"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.thepolyglot.co.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
