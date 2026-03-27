"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";
import TextReveal from "@/components/shared/TextReveal";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Use px instead of massive % to prevent layout height fluttering causing a scroll loop
  const yText = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);
  const yCards = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
    >
      {/* Animated gradient orbs with parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="hero-orb absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/20" />
        <div
          className="hero-orb absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/15"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="hero-orb absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-blue-800/20"
          style={{ animationDelay: "4s" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 pt-40"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6">
            <TextReveal delay={0.1} className="section-eyebrow">
              Travel & Hospitality Tech Specialists
            </TextReveal>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            <TextReveal delay={0.3}>Transforming Travel</TextReveal>
            <TextReveal delay={0.4} className="gradient-text">
              with Intelligent
            </TextReveal>
            <TextReveal delay={0.5}>Digital Solutions</TextReveal>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            We help hotels, travel agencies, resorts & tour operators achieve seamless digital
            transformation — from AI-powered booking to performance-driven growth marketing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Schedule Free Consultation
                <ArrowRight size={18} />
              </Link>
            </MagneticButton>
            
            <MagneticButton>
              <Link href="/portfolio" className="btn-outline text-base px-8 py-4">
                View Our Work
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Trust strip with different parallax speed */}
          <motion.div
            style={{ y: yCards }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center gap-8"
          >
            {[
              { num: "50+", label: "Hotels Transformed" },
              { num: "3x", label: "Avg Booking Growth" },
              { num: "100%", label: "Travel Niche Focus" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="font-heading font-bold text-2xl gradient-text">{item.num}</span>
                <span className="text-text-muted text-sm">{item.label}</span>
                <span className="w-px h-6 bg-card-border last:hidden" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
