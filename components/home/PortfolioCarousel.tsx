"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, TrendingUp, Cpu, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Booking Engine for Boutique Hotel Chain",
    client: "Horizon Stays Group",
    category: "AI & App Development",
    metric1: { value: "42%", label: "Direct Booking Increase" },
    metric2: { value: "3.2x", label: "Revenue per Room" },
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    tags: ["React Native", "Node.js", "OpenAI API", "AWS"],
    description:
      "Built an AI-powered mobile booking app with personalized room recommendations, dynamic pricing, and a 24/7 virtual concierge for a chain of boutique hotels.",
    bg: "from-blue-900/30 to-cyan-900/20",
  },
  {
    id: 2,
    title: "OTA Dependency Reduction — Direct Booking Platform",
    client: "SunCoast Resorts",
    category: "Digital Transformation",
    metric1: { value: "58%", label: "OTA Commission Saved" },
    metric2: { value: "2.1x", label: "Direct Booking Growth" },
    icon: Globe,
    color: "from-violet-500 to-purple-500",
    tags: ["Next.js", "Channel Manager API", "Stripe", "Azure"],
    description:
      "Designed a fully custom direct booking platform integrated with existing PMS and channel managers, reducing OTA dependency by 58% in 8 months.",
    bg: "from-violet-900/30 to-purple-900/20",
  },
  {
    id: 3,
    title: "Revenue Management Dashboard for Tour Operator",
    client: "WanderPeak Travels",
    category: "Digital Marketing & Analytics",
    metric1: { value: "67%", label: "Marketing ROI Boost" },
    metric2: { value: "4.5x", label: "Paid Media ROAS" },
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
    tags: ["Google Ads", "Meta Ads", "Tableau", "Python"],
    description:
      "Implemented a data analytics dashboard with real-time revenue insights, predictive demand forecasting, and automated Google/Meta ad optimization.",
    bg: "from-emerald-900/30 to-teal-900/20",
  },
];

export default function PortfolioCarousel() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const prev = () => setActive((p) => (p === 0 ? projects.length - 1 : p - 1));
  const next = () => setActive((p) => (p + 1) % projects.length);
  const project = projects[active];
  const Icon = project.icon;

  return (
    <section className="bg-primary py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-eyebrow">Case Studies</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white">
              Innovation, Engineered<br />
              <span className="gradient-text">by Travergetic.</span>
            </h2>
            {/* Nav buttons */}
            <div className="flex items-center gap-3">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? "bg-blue-500 w-8" : "bg-card-border hover:bg-gray-500"
                  }`}
                />
              ))}
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-card-border text-white hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-all ml-2"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-card-border text-white hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            onMouseMove={handleMouseMove}
            className={`glass-card rounded-3xl p-8 md:p-12 bg-gradient-to-br ${project.bg} relative overflow-hidden group`}
          >
            {/* Spotlight hover effect */}
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.05), transparent 40%)`,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center relative z-10">
              {/* Left content */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-medium uppercase tracking-wider">
                      {project.category}
                    </p>
                    <p className="text-sm text-gray-400">{project.client}</p>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-8">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
                <a href="/portfolio" className="btn-primary inline-flex">
                  View Case Study →
                </a>
              </div>

              {/* Right metrics */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                {[project.metric1, project.metric2].map((m) => (
                  <div key={m.label} className="glass-card rounded-2xl p-6 text-center">
                    <div
                      className={`font-heading font-black text-4xl mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                    >
                      {m.value}
                    </div>
                    <p className="text-text-muted text-sm">{m.label}</p>
                  </div>
                ))}
                <div className="col-span-2 glass-card rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">Project Delivered Successfully</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
