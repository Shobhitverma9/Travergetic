"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Target, Eye, Heart, Zap, Globe, Users, ArrowRight } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

const values = [
  { icon: Target, title: "Niche Expertise", desc: "100% focused on travel & hospitality — we speak your industry language." },
  { icon: Zap, title: "Speed to Market", desc: "Agile delivery with measurable milestones and transparent communication." },
  { icon: Heart, title: "Client Success", desc: "We measure our success by your ROI — not just delivery." },
  { icon: Globe, title: "Global Mindset", desc: "Solutions built for Indian and global travel markets with multi-currency and multilingual support." },
];

const whyUs = [
  "Seasonal demand fluctuations expertise",
  "High cart abandonment reduction strategies",
  "Multilingual & multi-currency support",
  "Guest experience personalization",
  "OTA dependency reduction programs",
];

const process = [
  { step: "01", title: "Discovery", desc: "We deep-dive into your business, guests, and current tech stack." },
  { step: "02", title: "Strategy", desc: "Custom roadmap aligned with your revenue goals." },
  { step: "03", title: "Build", desc: "Agile sprints with weekly demos and full transparency." },
  { step: "04", title: "Launch & Grow", desc: "Go-live support, analytics, and ongoing optimization." },
];

export default function AboutPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-primary relative overflow-hidden">
        <div className="hero-orb absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-blue-600/15" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-eyebrow">About Travergetic</div>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-white mt-4 mb-6 max-w-3xl leading-tight">
            The Only Tech Partner Built{" "}
            <span className="gradient-text">for Travel</span>
          </h1>
          <p className="text-text-muted text-xl max-w-2xl leading-relaxed">
            Founded in 2023, Travergetic Innovations is a specialized technology company dedicated
            to empowering travel, hotel, and hospitality businesses with intelligent digital solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-light py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To deliver niche-focused, high-impact tech solutions that make travel businesses future-ready — from AI-powered personalization to mobile-first booking platforms and performance-driven digital marketing.",
              color: "text-blue-500",
              bg: "bg-blue-50 border-blue-100",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "Become the go-to digital partner for the Indian and global travel & hospitality ecosystem — recognized for our deep expertise, measurable impact, and long-term client relationships.",
              color: "text-cyan-600",
              bg: "bg-cyan-50 border-cyan-100",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`rounded-2xl p-10 border ${item.bg}`}
              >
                <Icon size={32} className={`${item.color} mb-5`} />
                <h2 className="font-heading font-bold text-2xl text-[#080810] mb-4">{item.title}</h2>
                <p className="text-gray-500 leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Travel Only */}
      <section className="bg-[#060610] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-eyebrow">Why Only Travel?</div>
            <h2 className="font-heading font-black text-4xl text-white mt-3 mb-6">
              Laser Focus = Deeper Value
            </h2>
            <p className="text-text-muted mb-8 leading-relaxed">
              We deeply understand industry-specific challenges that generalist agencies overlook.
              This laser focus allows us to deliver deeper value than any generic tech agency.
            </p>
            <ul className="space-y-4">
              {whyUs.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="glass-card rounded-2xl p-6 hover-card">
                  <Icon size={24} className="text-blue-400 mb-4" />
                  <h3 className="font-heading font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-light py-20 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-eyebrow justify-center" style={{ color: "#2563eb" }}>Our Process</div>
            <h2 className="font-heading font-black text-4xl text-[#080810] mt-2">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <span className="font-heading font-black text-5xl gradient-text">{step.step}</span>
                  <h3 className="font-heading font-bold text-xl text-[#080810] mt-3 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={20} className="text-blue-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 mx-auto mb-6 flex items-center justify-center">
              <Users size={36} className="text-white" />
            </div>
            <div className="section-eyebrow justify-center mb-4">Founded With Purpose</div>
            <h2 className="font-heading font-black text-4xl text-white mb-6">
              Built by Travel Industry Insiders
            </h2>
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Travergetic was born from a simple observation: travel and hospitality businesses were
              being underserved by generalist tech companies. We set out to change that — building
              a team that combines deep hospitality domain knowledge with world-class engineering.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4">
              Work With Us
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
