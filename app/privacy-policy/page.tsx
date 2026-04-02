"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-36 pb-20 bg-primary">
      {/* Hero Section */}
      <section className="px-6 mb-16 relative overflow-hidden">
        <div className="hero-orb absolute top-0 right-1/4 w-80 h-80 rounded-full bg-blue-600/10" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-eyebrow justify-center">Legal</div>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white mt-4 mb-6 leading-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Last Updated: April 2, 2026. This policy describes how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-12 space-y-10"
          >
            {/* Intro */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400 mb-2">
                <Shield size={24} />
                <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                Travergetic Innovations Private Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the <strong>travergetic.com</strong> website. We are committed to protecting your personal information and your right to privacy. This Privacy Policy applies to all information collected through our website, and/or any related services, sales, marketing or events.
              </p>
            </div>

            {/* Information Collection */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400 mb-2">
                <Eye size={24} />
                <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us and the website, and include:
              </p>
              <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                <li>Name and Contact Data (Email address, phone number)</li>
                <li>Professional Information (Company name, job title)</li>
                <li>Usage Data (IP address, browser type, pages visited)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* Use of Data */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400 mb-2">
                <Lock size={24} />
                <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                We use personal information collected via our website for a variety of business purposes described below:
              </p>
              <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                <li>To facilitate account creation and logon process.</li>
                <li>To send administrative information to you.</li>
                <li>To fulfill and manage your requests for services.</li>
                <li>To post testimonials with your consent.</li>
                <li>To deliver targeted advertising and marketing.</li>
                <li>To protect our Services and for legal reasons.</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400 mb-2">
                <FileText size={24} />
                <h2 className="text-2xl font-bold text-white">4. Disclosure of Your Information</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell or rent your personal information to third parties.
              </p>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-card-border space-y-6">
              <div className="flex items-center gap-3 text-blue-400">
                <Mail size={24} />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                If you have questions or comments about this policy, you may email us at:
              </p>
              <div className="bg-card/50 border border-card-border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-white font-semibold">Travergetic Support Team</p>
                  <p className="text-text-muted text-sm">sales@travergetic.com</p>
                </div>
                <a href="mailto:sales@travergetic.com" className="btn-primary py-3 px-6 text-sm">
                  Send an Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
