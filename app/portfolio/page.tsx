"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Cpu, Globe, Users, ExternalLink } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

const caseStudies = [
  {
    id: 1,
    title: "AI Booking Engine for Boutique Hotel Chain",
    client: "Horizon Stays Group",
    category: "AI & App Development",
    result1: { val: "42%", label: "Direct Booking Increase" },
    result2: { val: "3.2x", label: "Revenue per Room" },
    icon: Cpu,
    tags: ["React Native", "OpenAI", "AWS", "Node.js"],
    desc: "Designed and built an AI-powered mobile booking app with personalized room recommendations, dynamic pricing, and a 24/7 virtual concierge for a 6-property boutique hotel chain.",
    bg: "from-blue-900/40 to-blue-800/20",
    accent: "blue",
  },
  {
    id: 2,
    title: "OTA Dependency Reduction Platform",
    client: "SunCoast Resorts",
    category: "Digital Transformation",
    result1: { val: "58%", label: "OTA Commission Saved" },
    result2: { val: "2.1x", label: "Direct Bookings" },
    icon: Globe,
    tags: ["Next.js", "Channel Manager API", "Stripe", "Azure"],
    desc: "Built a fully custom direct booking platform integrated with existing PMS and channel managers, dramatically reducing OTA dependency in 8 months.",
    bg: "from-violet-900/40 to-violet-800/20",
    accent: "violet",
  },
  {
    id: 3,
    title: "Revenue Management Dashboard",
    client: "WanderPeak Travels",
    category: "Analytics & Marketing",
    result1: { val: "67%", label: "Marketing ROI Boost" },
    result2: { val: "4.5x", label: "Paid Media ROAS" },
    icon: TrendingUp,
    tags: ["Google Ads", "Meta Ads", "Tableau", "Python"],
    desc: "Implemented a real-time revenue analytics dashboard with demand forecasting and automated ad campaign optimization across Google and Meta.",
    bg: "from-emerald-900/40 to-emerald-800/20",
    accent: "emerald",
  },
  {
    id: 4,
    title: "Guest Experience App for Resort Chain",
    client: "Palm & Palms Resorts",
    category: "Mobile App Development",
    result1: { val: "4.9★", label: "App Store Rating" },
    result2: { val: "89%", label: "Guest Engagement" },
    icon: Users,
    tags: ["Flutter", "Firebase", "Node.js", "Stripe"],
    desc: "Created a comprehensive guest experience app enabling digital check-in, room service ordering, spa bookings, and real-time concierge chat.",
    bg: "from-cyan-900/40 to-cyan-800/20",
    accent: "cyan",
  },
  {
    id: 5,
    title: "SEO & Content Growth for Tour Operator",
    client: "HimalayaQuest",
    category: "Digital Marketing",
    result1: { val: "312%", label: "Organic Traffic Growth" },
    result2: { val: "5.8x", label: "Booking from SEO" },
    icon: TrendingUp,
    tags: ["SEO", "Content Strategy", "CRO", "WhatsApp API"],
    desc: "Executed a comprehensive travel SEO strategy with long-form content, technical SEO fixes, and a WhatsApp booking funnel for a Himalayan tour operator.",
    bg: "from-orange-900/40 to-amber-800/20",
    accent: "orange",
  },
  {
    id: 6,
    title: "AI Sentiment Analysis for Hotel Reviews",
    client: "SkylineHotels Group",
    category: "AI & Emerging Tech",
    result1: { val: "78%", label: "Negative Review Reduction" },
    result2: { val: "23%", label: "RevPAR Improvement" },
    icon: Cpu,
    tags: ["Python", "NLP", "GPT-4", "Dashboard"],
    desc: "Built an AI pipeline that aggregates reviews from OTAs, analyzes sentiment, and generates automated response drafts and operational action items.",
    bg: "from-rose-900/40 to-pink-800/20",
    accent: "rose",
  },
];

export default function PortfolioPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-primary relative overflow-hidden">
        <div className="hero-orb absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-600/15" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="section-eyebrow justify-center">Portfolio</div>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-white mt-4 mb-6">
            Results That{" "}
            <span className="gradient-text">Speak for Themselves</span>
          </h1>
          <p className="text-text-muted text-xl max-w-2xl mx-auto">
            Real projects. Real metrics. Real transformations in the travel & hospitality space.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#060610] py-20 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => {
            const Icon = cs.icon;
            return (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`glass-card rounded-2xl p-7 bg-gradient-to-br ${cs.bg} flex flex-col cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted font-medium uppercase tracking-wider">{cs.category}</p>
                      <p className="text-xs text-gray-400">{cs.client}</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-text-muted group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3 leading-snug">{cs.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1 mb-6">{cs.desc}</p>
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[cs.result1, cs.result2].map((m) => (
                    <div key={m.label} className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="font-heading font-black text-2xl text-white">{m.val}</div>
                      <p className="text-text-muted text-xs mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((t) => (
                    <span key={t} className="tech-badge text-[11px]">{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
