"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalData } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { LinkedInIcon } from "./ui/Icons";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  MessageSquare
} from "lucide-react";
import confetti from "canvas-confetti";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission & trigger confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Fire celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#c8cb6d", "#10b981", "#e2e58c", "#e69832", "#ffffff"],
      });

      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-grid-pattern scroll-mt-20">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#c8cb6d]/10 via-[#7e8a42]/10 to-transparent rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something"
          gradientText="Extraordinary"
          description="Have a new project, an enterprise initiative, or a front-end position in mind? Let's connect and discuss how we can build it together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <h3 className="text-2xl font-bold dark:text-white text-stone-900 mb-2">
              Contact Channels
            </h3>
            <p className="text-sm dark:text-stone-400 text-stone-600 mb-4 leading-relaxed font-normal">
              Feel free to reach out directly through any of the channels below. I respond within 24 hours.
            </p>

            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl border dark:border-white/10 border-stone-200 hover:border-[#c8cb6d]/40 transition-all flex items-center justify-between group shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl dark:bg-[#c8cb6d]/15 bg-[#5c6b2f]/15 border dark:border-[#c8cb6d]/30 border-[#5c6b2f]/30 flex items-center justify-center dark:text-[#c8cb6d] text-[#5c6b2f] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono dark:text-stone-400 text-stone-600 uppercase font-semibold">Email Address</p>
                  <a
                    href={`mailto:${personalData.contact.email}`}
                    className="text-sm font-bold dark:text-white text-stone-900 hover:text-[#c8cb6d] transition-colors"
                  >
                    {personalData.contact.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalData.contact.email, "email")}
                className="p-2 rounded-xl dark:bg-white/[0.05] bg-stone-100 hover:dark:bg-white/[0.1] hover:bg-stone-200 dark:text-stone-400 text-stone-600 hover:dark:text-white hover:text-stone-900 transition-colors cursor-pointer border dark:border-transparent border-stone-200"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#c8cb6d]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border dark:border-white/10 border-stone-200 hover:border-[#c8cb6d]/40 transition-all flex items-center justify-between group shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl dark:bg-[#7e8a42]/15 bg-[#5c6b2f]/15 border dark:border-[#7e8a42]/30 border-[#5c6b2f]/30 flex items-center justify-center dark:text-[#e2e58c] text-[#5c6b2f] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono dark:text-stone-400 text-stone-600 uppercase font-semibold">Phone & WhatsApp</p>
                  <a
                    href={`tel:${personalData.contact.phone}`}
                    className="text-sm font-bold dark:text-white text-stone-900 hover:text-[#c8cb6d] transition-colors"
                  >
                    +91 {personalData.contact.displayPhone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalData.contact.displayPhone, "phone")}
                className="p-2 rounded-xl dark:bg-white/[0.05] bg-stone-100 hover:dark:bg-white/[0.1] hover:bg-stone-200 dark:text-stone-400 text-stone-600 hover:dark:text-white hover:text-stone-900 transition-colors cursor-pointer border dark:border-transparent border-stone-200"
                title="Copy Phone"
                aria-label="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-[#c8cb6d]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border dark:border-white/10 border-stone-200 flex items-center gap-4 shadow-sm">
              <div className="w-11 h-11 rounded-xl dark:bg-[#e69832]/15 bg-[#d97706]/15 border dark:border-[#e69832]/30 border-[#d97706]/30 flex items-center justify-center text-[#e69832] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono dark:text-stone-400 text-stone-600 uppercase font-semibold">Location</p>
                <p className="text-sm font-bold dark:text-white text-stone-900">{personalData.contact.location}</p>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl border dark:border-white/10 border-stone-200 hover:border-[#c8cb6d]/40 transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl dark:bg-[#c8cb6d]/15 bg-[#5c6b2f]/15 border dark:border-[#c8cb6d]/30 border-[#5c6b2f]/30 flex items-center justify-center dark:text-[#c8cb6d] text-[#5c6b2f] shrink-0">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono dark:text-stone-400 text-stone-600 uppercase font-semibold">LinkedIn Profile</p>
                  <p className="text-sm font-bold dark:text-white text-stone-900 group-hover:text-[#c8cb6d] transition-colors">
                    {personalData.contact.linkedinDisplay}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 dark:text-stone-500 text-stone-600 group-hover:text-stone-950 transition-colors mr-1" />
            </a>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-3xl border dark:border-white/10 border-stone-200 relative shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#7e8a42] to-[#c8cb6d] flex items-center justify-center text-stone-950 font-bold shrink-0 shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold dark:text-white text-stone-900">Send a Direct Message</h4>
                  <p className="text-xs dark:text-stone-400 text-stone-600 font-medium">Fill in the details below</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#c8cb6d]/20 border border-[#c8cb6d]/40 text-[#c8cb6d] flex items-center justify-center animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold dark:text-white text-stone-900">Message Received!</h4>
                  <p className="text-sm dark:text-stone-400 text-stone-600 max-w-md font-medium">
                    Thank you for reaching out, Hari Prasath will get back to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-mono dark:text-stone-400 text-stone-700 uppercase tracking-wider mb-2 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl dark:bg-white/[0.04] bg-stone-50 border dark:border-white/10 border-stone-300 dark:text-white text-stone-900 placeholder:dark:text-stone-600 placeholder:text-stone-400 focus:outline-none focus:border-[#c8cb6d] focus:ring-1 focus:ring-[#c8cb6d] transition-all text-base sm:text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono dark:text-stone-400 text-stone-700 uppercase tracking-wider mb-2 font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl dark:bg-white/[0.04] bg-stone-50 border dark:border-white/10 border-stone-300 dark:text-white text-stone-900 placeholder:dark:text-stone-600 placeholder:text-stone-400 focus:outline-none focus:border-[#c8cb6d] focus:ring-1 focus:ring-[#c8cb6d] transition-all text-base sm:text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono dark:text-stone-400 text-stone-700 uppercase tracking-wider mb-2 font-semibold">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Frontend Development Collaboration"
                      className="w-full px-4 py-3 rounded-xl dark:bg-white/[0.04] bg-stone-50 border dark:border-white/10 border-stone-300 dark:text-white text-stone-900 placeholder:dark:text-stone-600 placeholder:text-stone-400 focus:outline-none focus:border-[#c8cb6d] focus:ring-1 focus:ring-[#c8cb6d] transition-all text-base sm:text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono dark:text-stone-400 text-stone-700 uppercase tracking-wider mb-2 font-semibold">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Hari, I'd like to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl dark:bg-white/[0.04] bg-stone-50 border dark:border-white/10 border-stone-300 dark:text-white text-stone-900 placeholder:dark:text-stone-600 placeholder:text-stone-400 focus:outline-none focus:border-[#c8cb6d] focus:ring-1 focus:ring-[#c8cb6d] transition-all text-base sm:text-sm resize-none font-medium"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    isLoading={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
