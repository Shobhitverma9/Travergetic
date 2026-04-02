"use client";

import { motion } from "framer-motion";
import { Gavel, Globe, Info, Scale, ShieldCheck } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-36 pb-20 bg-primary">
      {/* Hero Section */}
      <section className="px-6 mb-16 relative overflow-hidden">
        <div className="hero-orb absolute top-0 left-1/4 w-80 h-80 rounded-full bg-cyan-600/10" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-eyebrow justify-center">Legal</div>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white mt-4 mb-6 leading-tight text-center">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using our services. Last updated: April 2, 2026.
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
            {/* Agreement */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cyan-400 mb-2">
                <Gavel size={24} />
                <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                By accessing or using our services at <strong>travergetic.com</strong>, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using or accessing our site and services.
              </p>
            </div>

            {/* Use License */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cyan-400 mb-2">
                <Globe size={24} />
                <h2 className="text-2xl font-bold text-white">2. Use License</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on Travergetic Innovations's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                <li>Modify or copy the materials.</li>
                <li>Use the materials for any commercial purpose.</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                <li>Remove any copyright or other proprietary notations from the materials.</li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cyan-400 mb-2">
                <ShieldCheck size={24} />
                <h2 className="text-2xl font-bold text-white">3. Disclaimer</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                The materials on Travergetic Innovations's website are provided on an 'as is' basis. Travergetic Innovations makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties of merchantability or fitness for a particular purpose.
              </p>
            </div>

            {/* Limitations */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cyan-400 mb-2">
                <Scale size={24} />
                <h2 className="text-2xl font-bold text-white">4. Limitations</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                In no event shall Travergetic Innovations or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Travergetic Innovations's website.
              </p>
            </div>

            {/* Accuracy */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cyan-400 mb-2">
                <Info size={24} />
                <h2 className="text-2xl font-bold text-white">5. Governing Law</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                Any claim relating to Travergetic Innovations's website shall be governed by the laws of India, without regard to its conflict of law provisions. General Terms and Conditions applicable to Use of a Web Site.
              </p>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-card-border">
              <p className="text-text-muted text-sm text-center">
                Questions about the Terms of Service? Contact us at <strong>sales@travergetic.com</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
