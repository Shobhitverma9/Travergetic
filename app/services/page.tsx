"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Smartphone, BarChart3, Brain, CheckCircle2, ChevronDown } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import Link from "next/link";

const services = [
  {
    id: "digital-transformation",
    icon: Server,
    title: "Digital Transformation",
    subtitle: "Consulting & Implementation",
    desc: "We help hospitality brands modernize their technology stack, migrate to the cloud, and implement data-driven operations that unlock revenue and efficiency.",
    features: [
      "Legacy system modernization & migration",
      "Cloud migration (AWS, Azure, Google Cloud)",
      "API Development & Integrations (PMS, Channel Managers)",
      "Payment Gateway Integration",
      "Data analytics dashboards for revenue & occupancy insights",
      "Technology audit & roadmap planning",
    ],
    techStack: ["AWS", "Azure", "GCP", "Node.js", "Python", "REST APIs", "GraphQL"],
    useCases: ["Boutique hotel chain migrating from legacy PMS", "Resort group consolidating data across properties"],
    color: "from-blue-600 to-blue-800",
    accentColor: "blue",
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "Mobile & Web App Development",
    subtitle: "Custom Software Engineering",
    desc: "End-to-end development of guest-facing booking apps, staff management portals, and immersive digital experiences that delight modern travelers.",
    features: [
      "Guest-facing booking & loyalty apps (iOS + Android)",
      "Staff management & operations portals",
      "Virtual tour & AR experiences",
      "Progressive Web Apps (PWAs) for faster bookings",
      "Multi-language & multi-currency support",
      "Offline-capable mobile apps for remote resorts",
    ],
    techStack: ["React Native", "Next.js", "Flutter", "Node.js", "Firebase", "MongoDB", "TypeScript"],
    useCases: ["Loyalty app for resort chain", "PWA for boutique travel agency"],
    color: "from-cyan-600 to-cyan-800",
    accentColor: "cyan",
  },
  {
    id: "digital-marketing",
    icon: BarChart3,
    title: "Digital Marketing & Growth",
    subtitle: "Performance-Driven Marketing",
    desc: "Data-led marketing strategies that reduce OTA dependency, boost direct bookings, and fill your funnel with high-intent travelers year-round.",
    features: [
      "SEO & content strategy for travel keywords",
      "Paid media management (Google Ads, Meta, TripAdvisor)",
      "Email & WhatsApp marketing automation",
      "Social media management with travel UGC focus",
      "Conversion rate optimization (CRO) for booking funnels",
      "Influencer & partnership marketing",
    ],
    techStack: ["Google Ads", "Meta Ads", "HubSpot", "Klaviyo", "WhatsApp API", "SEMrush", "Hotjar"],
    useCases: ["Travel agency 3x ROAS on Google Ads", "Hotel blog driving 60% of organic bookings"],
    color: "from-violet-600 to-violet-800",
    accentColor: "violet",
  },
  {
    id: "ai-tech",
    icon: Brain,
    title: "AI & Emerging Tech",
    subtitle: "Intelligent Hotel Operations",
    desc: "Leverage the power of AI to personalize guest experiences, automate operations, and predict revenue opportunities before your competitors do.",
    features: [
      "AI chatbots & virtual concierges (24/7 multilingual)",
      "Personalized recommendation engines",
      "Predictive pricing & demand forecasting",
      "Sentiment analysis from guest reviews",
      "Revenue management AI integration",
      "Computer vision for property virtual tours",
    ],
    techStack: ["OpenAI GPT-4", "LangChain", "Python", "TensorFlow", "AWS SageMaker", "Pinecone"],
    useCases: ["AI concierge handling 70% of guest queries", "Predictive pricing boosting RevPAR by 22%"],
    color: "from-emerald-600 to-emerald-800",
    accentColor: "emerald",
  },
];

export default function ServicesPage() {
  const [open, setOpen] = useState<string>("digital-transformation");

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-primary relative overflow-hidden">
        <div className="hero-orb absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-blue-600/10" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="section-eyebrow justify-center">Our Services</div>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-white mt-4 mb-6">
            Everything Your Travel Business{" "}
            <span className="gradient-text">Needs to Grow</span>
          </h1>
          <p className="text-text-muted text-xl max-w-2xl mx-auto">
            Four core service pillars — purpose-built for the travel & hospitality ecosystem.
          </p>
        </div>
      </section>

      {/* Services accordion */}
      <section className="bg-[#050510] py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isOpen = open === service.id;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-blue-500/30" : "border-card-border"}`}
              >
                <button
                  className="w-full flex items-center justify-between p-8 text-left"
                  onClick={() => setOpen(isOpen ? "" : service.id)}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-1">{service.subtitle}</p>
                      <h2 className="font-heading font-bold text-xl text-white">{service.title}</h2>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-text-muted transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-blue-400" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 border-t border-card-border pt-8">
                        <p className="text-text-muted mb-8 leading-relaxed text-lg">{service.desc}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div>
                            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">What&apos;s Included</h3>
                            <ul className="space-y-3">
                              {service.features.map((f) => (
                                <li key={f} className="flex items-start gap-3 text-gray-300 text-sm">
                                  <CheckCircle2 size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                              {service.techStack.map((t) => (
                                <span key={t} className="tech-badge">{t}</span>
                              ))}
                            </div>
                            <h3 className="font-heading font-semibold text-white mb-3 text-sm uppercase tracking-wider">Industry Use Cases</h3>
                            <ul className="space-y-2">
                              {service.useCases.map((u) => (
                                <li key={u} className="text-text-muted text-sm flex items-start gap-2">
                                  <span className="text-blue-400 mt-1">→</span> {u}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-8">
                          <Link href="/contact" className="btn-primary inline-flex">
                            Get a Quote for {service.title}
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
