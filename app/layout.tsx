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
  themeColor: "#0a0e0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hariprasath.dev"),
  title: {
    default: "Hari Prasath | Senior Frontend Developer | React.js & Next.js Specialist",
    template: "%s | Hari Prasath",
  },
  description:
    "Official portfolio of Hari Prasath — Senior Frontend Developer with 3+ years of experience engineering high-performance web applications, enterprise platforms (Syncraze), React.js, Next.js, and TypeScript architectures.",
  keywords: [
    "Hari Prasath",
    "Hari Prasath Frontend Developer",
    "Hari Prasath Portfolio",
    "Frontend Developer Chennai",
    "React Developer Chennai",
    "React.js Specialist",
    "Next.js Developer India",
    "Senior Frontend Engineer",
    "TypeScript Developer",
    "Syncraze ERP",
    "Web Application Developer",
    "UI/UX Frontend Engineer",
    "Full Stack Developer",
    "Tailwind CSS Specialist",
  ],
  authors: [{ name: "Hari Prasath", url: "https://linkedin.com/in/v-hariprasath" }],
  creator: "Hari Prasath",
  publisher: "Hari Prasath",
  applicationName: "Hari Prasath Portfolio",
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hariprasath.dev",
    title: "Hari Prasath | Senior Frontend Developer | React.js & Next.js Specialist",
    description:
      "Explore the portfolio of Hari Prasath — 3+ years of experience delivering scalable enterprise applications with React, Next.js, TypeScript, and state-of-the-art UI architectures.",
    siteName: "Hari Prasath — Frontend Developer Portfolio",
    images: [
      {
        url: "/assets/hari-avatar.jpg",
        width: 800,
        height: 1000,
        alt: "Hari Prasath - Frontend Developer",
      },
      {
        url: "/assets/syncraze.jpg",
        width: 1200,
        height: 630,
        alt: "Syncraze Enterprise Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Prasath | Senior Frontend Developer | React.js & Next.js Specialist",
    description:
      "Frontend Developer with 3+ years experience engineering dynamic, high-performance web applications with React.js & Next.js.",
    images: ["/assets/hari-avatar.jpg"],
    creator: "@hariprasath",
  },
  category: "technology",
};

// JSON-LD Structured Data for Google Knowledge Graph & Rich Search Results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://hariprasath.dev/#person",
      name: "Hari Prasath",
      givenName: "Hari",
      familyName: "Prasath",
      jobTitle: "Frontend Developer",
      gender: "Male",
      url: "https://hariprasath.dev",
      image: "https://hariprasath.dev/assets/hari-avatar.jpg",
      sameAs: [
        "https://linkedin.com/in/v-hariprasath",
        "https://github.com",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Oceansoftwares Private Limited",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Alpha College of Engineering and Technology",
      },
      knowsAbout: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux",
        "React Query",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Frontend Architecture",
        "Enterprise Web Applications",
      ],
      email: "hariprasath26.dev@gmail.com",
      telephone: "+91-8825418298",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://hariprasath.dev/#website",
      url: "https://hariprasath.dev",
      name: "Hari Prasath Portfolio",
      description: "Personal portfolio and enterprise project showcase of Hari Prasath.",
      publisher: {
        "@id": "https://hariprasath.dev/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://hariprasath.dev/#profilepage",
      url: "https://hariprasath.dev",
      name: "Hari Prasath - Frontend Developer Profile",
      mainEntity: {
        "@id": "https://hariprasath.dev/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0a0e0b] text-stone-100 min-h-screen selection:bg-[#c8cb6d]/30 selection:text-white antialiased font-sans`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
