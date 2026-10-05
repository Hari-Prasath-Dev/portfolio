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

const siteUrl = "https://hari-prasath-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hari Prasath | Senior Frontend Developer | React.js & Next.js Specialist",
    template: "%s | Hari Prasath",
  },
  description:
    "Official portfolio of Hari Prasath — Frontend Developer specializing in React.js, Next.js, TypeScript, and high-performance enterprise web applications (Syncraze). 3+ years experience engineering modern scalable UI architectures.",
  keywords: [
    "Hari Prasath",
    "Hari Prasath Portfolio",
    "Hari Prasath Frontend Developer",
    "Hari Prasath React Developer",
    "Hari Prasath Next.js Developer",
    "Hari Prasath Web Developer",
    "Hari Prasath Software Engineer",
    "V Hari Prasath",
    "Hari Prasath V",
    "Frontend Developer Chennai",
    "React Developer Chennai",
    "Next.js Developer India",
    "Senior Frontend Developer",
    "TypeScript Developer",
    "Syncraze ERP Developer",
    "Full Stack Developer Chennai",
    "UI UX Frontend Engineer",
    "Tailwind CSS Expert",
    "JavaScript Developer",
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
    canonical: siteUrl,
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
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    title: "Hari Prasath | Senior Frontend Developer | React.js & Next.js Specialist",
    description:
      "Explore the portfolio of Hari Prasath — 3+ years of experience delivering scalable enterprise applications with React, Next.js, TypeScript, and state-of-the-art UI architectures.",
    siteName: "Hari Prasath Portfolio",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Hari Prasath - Frontend Developer",
      },
      {
        url: "/assets/syncraze.jpg",
        width: 1200,
        height: 630,
        alt: "Syncraze Enterprise Platform by Hari Prasath",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Prasath | Senior Frontend Developer | React.js & Next.js Specialist",
    description:
      "Frontend Developer with 3+ years experience engineering dynamic, high-performance web applications with React.js & Next.js.",
    images: ["/assets/profile.jpg"],
    creator: "@hariprasath",
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "google16096d9fc91fafae",
  },
};

// Comprehensive JSON-LD Structured Data for Google Knowledge Graph & Top Ranking
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Hari Prasath",
      alternateName: ["Hari Prasath V", "V Hari Prasath", "HariPrasath"],
      givenName: "Hari",
      familyName: "Prasath",
      jobTitle: "Senior Frontend Developer",
      gender: "Male",
      url: siteUrl,
      image: `${siteUrl}/assets/profile.jpg`,
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
        "Performance Optimization",
        "UI/UX Engineering",
      ],
      email: "hariprasath26.dev@gmail.com",
      telephone: "+91-8825418298",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      description:
        "Senior Frontend Developer with 3+ years of experience engineering high-performance web applications, enterprise ERP platforms (Syncraze), React.js, Next.js, and TypeScript architectures.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Hari Prasath Portfolio",
      alternateName: "Hari Prasath - Frontend Developer Portfolio",
      description: "Personal portfolio and enterprise project showcase of Hari Prasath.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Hari Prasath - Frontend Developer Profile",
      description: "Professional profile and portfolio of Hari Prasath.",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Featured Projects by Hari Prasath",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "Syncraze Enterprise ERP",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Flagship enterprise ERP ecosystem engineered for a Dubai client featuring 9+ high-performance modules including HRMS, Fleet Management, and Analytics.",
          creator: {
            "@id": `${siteUrl}/#person`,
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "Melloplex Streaming Platform",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Web",
          description:
            "Cinematic streaming platform with live stream broadcasting, interactive chat, and dynamic UI animations.",
          creator: {
            "@id": `${siteUrl}/#person`,
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "ChitApp Financial Management",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          description:
            "Modern FinTech chit fund auction & collection management platform.",
          creator: {
            "@id": `${siteUrl}/#person`,
          },
        },
      ],
    },
  ],
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { HangingThemeCord } from "@/components/ui/HangingThemeCord";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="google16096d9fc91fafae" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen selection:bg-[#c8cb6d]/30 selection:text-white antialiased font-sans`}
      >
        <ThemeProvider>
          <div className="noise-overlay" />
          <HangingThemeCord />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

