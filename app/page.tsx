import { Preloader } from "@/components/Preloader";
import { CodeBackground } from "@/components/CodeBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300">
      {/* Intro Preloader with Curtain Fall Reveal */}
      <Preloader />

      {/* Interactive Cyber & Syntax Code Canvas Background */}
      <CodeBackground />

      {/* Custom Mouse Cursor with Ambient Glow */}
      <CursorGlow />

      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Work Experience Section */}
      <Experience />

      {/* Featured Projects & Case Studies */}
      <Projects />

      {/* Academic Education Section */}
      <Education />

      {/* Contact & Inquiry Section */}
      <Contact />

      {/* Minimal Footer */}
      <Footer />

      {/* Floating Scroll To Top Action */}
      <ScrollToTop />
    </main>
  );
}
