"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTABanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-[#060610] py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.25) 0%, rgba(6,182,212,0.15) 50%, rgba(37,99,235,0.1) 100%)",
            border: "1px solid rgba(37,99,235,0.3)",
          }}
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="section-eyebrow justify-center mb-4">Ready to Transform?</div>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 leading-tight">
              Let&apos;s Build Your{" "}
              <span className="gradient-text">Digital Future</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10">
              Schedule a free 30-minute consultation with our travel tech experts. No sales pitch —
              just a deep dive into your business challenges and opportunities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                <Calendar size={18} />
                Schedule Free Consultation
              </Link>
              <Link href="/services" className="btn-outline text-base px-8 py-4">
                Explore Services
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust bullets */}
            <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm text-text-muted">
              {["No obligation", "30 min session", "Industry experts", "Response within 24h"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
