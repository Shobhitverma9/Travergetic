"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Server,
  Smartphone,
  BarChart3,
  Brain,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Digital Transformation",
    short: "Consulting & Implementation",
    description:
      "Legacy modernization, cloud migration (AWS/Azure/GCP), API integrations with PMS & Channel Managers, and data analytics dashboards.",
    href: "/services#digital-transformation",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Apps",
    short: "Custom Development",
    description:
      "Guest-facing booking & loyalty apps (iOS + Android), staff portals, virtual tour experiences, and PWAs for faster hotel bookings.",
    href: "/services#app-development",
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    short: "Growth Solutions",
    description:
      "SEO for travel keywords, Google Ads & Meta campaigns, WhatsApp/email automation, and CRO for booking funnels.",
    href: "/services#digital-marketing",
    color: "from-violet-500/20 to-violet-600/10",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Brain,
    title: "AI & Emerging Tech",
    short: "Intelligent Solutions",
    description:
      "AI chatbots & virtual concierges, personalized recommendation engines, predictive pricing & demand forecasting.",
    href: "/services#ai-tech",
    color: "from-emerald-500/20 to-emerald-600/10",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="section-light py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center" style={{ color: "#2563eb" }}>
            What We Do
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#080810] mt-2 mb-4">
            We Deliver Transformation.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Four core pillars of expertise — purpose-built for the travel & hospitality ecosystem.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                onMouseMove={handleMouseMove}
                className={`group bg-white rounded-2xl p-8 border ${service.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden`}
              >
                {/* Spotlight hover effect */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(37, 99, 235, 0.08), transparent 40%)`,
                  }}
                />

                <div
                  className={`relative z-10 service-icon bg-gradient-to-br ${service.color} border ${service.border} ${service.iconColor}`}
                >
                  <Icon size={26} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  {service.short}
                </p>
                <h3 className="font-heading font-bold text-xl text-[#080810] mb-3">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gray-500 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className={`relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold ${service.iconColor} group-hover:gap-3 transition-all`}
                >
                  Learn More <ArrowRight size={15} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 px-8 py-3 rounded-full text-sm font-semibold transition-all"
          >
            View All Services <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
