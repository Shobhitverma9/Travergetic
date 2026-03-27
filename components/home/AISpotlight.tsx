"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const aiFeatures = [
  {
    title: "AI Chatbot & Virtual Concierge",
    items: ["24/7 Guest Support", "Multi-language", "Booking Assistance"],
  },
  {
    title: "Recommendation Engine",
    items: ["Personalized Packages", "Upsell Automation", "Guest Profiling"],
  },
  {
    title: "Predictive Analytics",
    items: ["Demand Forecasting", "Dynamic Pricing", "Occupancy Optimization"],
  },
];

export default function AISpotlight() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="bg-[#060610] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Geometric shape */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-blue-500/20"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    duration: 3,
                    delay: i * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    margin: `${i * 10}%`,
                    width: `${80 - i * 10}%`,
                    height: `${80 - i * 10}%`,
                    top: `${i * 5}%`,
                    left: `${i * 5}%`,
                  }}
                />
              ))}

              {/* Center glow graphic */}
              <div className="absolute inset-[20%] rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 glow-blue flex items-center justify-center">
                <div className="text-center">
                  <div className="font-heading font-black text-5xl text-white mb-2">AI</div>
                  <div className="text-cyan-400 text-sm font-semibold tracking-wider">
                    TRAVEL INTELLIGENCE
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              {[
                { label: "Predictive Pricing", position: "top-4 right-8", delay: 0 },
                { label: "Smart Concierge", position: "bottom-12 left-4", delay: 0.5 },
                { label: "Auto-Upsell", position: "bottom-4 right-4", delay: 1 },
              ].map((chip) => (
                <motion.div
                  key={chip.label}
                  className={`absolute ${chip.position} glass-card px-3 py-2 rounded-lg text-xs text-cyan-300 font-medium border border-cyan-500/30`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, delay: chip.delay, repeat: Infinity }}
                >
                  {chip.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-eyebrow">AI Ecosystem for Travel</div>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mt-3 mb-5 leading-tight">
              Building Intelligent{" "}
              <span className="gradient-text">Travel Experiences</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              We integrate cutting-edge AI into your hospitality operations — from chatbots that
              delight guests to predictive engines that maximize your revenue per available room.
            </p>

            {/* Feature grid */}
            <div className="space-y-6 mb-10">
              {aiFeatures.map((feature) => (
                <div key={feature.title} className="glass-card rounded-xl p-5">
                  <h4 className="font-heading font-semibold text-white mb-3">{feature.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {feature.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-text-muted">
                        <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book AI Advisory Session
                <ArrowRight size={16} />
              </Link>
              <Link href="/services#ai-tech" className="btn-outline">
                Discover AI Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
