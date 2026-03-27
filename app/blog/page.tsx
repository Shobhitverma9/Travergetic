"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "How AI is Changing Hotel Revenue Management in 2026",
    excerpt:
      "From dynamic pricing algorithms to demand forecasting models — here's how AI is reshaping how independent hotels compete with big chains.",
    category: "AI & Technology",
    readTime: "7 min read",
    date: "March 10, 2026",
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
  },
  {
    id: 2,
    title: "Reducing OTA Dependency: A 2026 Guide for Independent Hotels",
    excerpt:
      "Step-by-step playbook for boosting direct bookings, building loyalty, and reclaiming margin from Booking.com and Expedia.",
    category: "Direct Bookings",
    readTime: "9 min read",
    date: "March 5, 2026",
    gradient: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
  },
  {
    id: 3,
    title: "WhatsApp Marketing for Hotels: The Ultimate Guide",
    excerpt:
      "Why WhatsApp has become the highest-converting marketing channel for hospitality brands and how to set it up in under a week.",
    category: "Digital Marketing",
    readTime: "6 min read",
    date: "Feb 28, 2026",
    gradient: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/20",
  },
  {
    id: 4,
    title: "Building a Guest Loyalty Program That Actually Works",
    excerpt:
      "Not all loyalty programs are created equal. Here's the framework we use to build programs that drive repeat visits and genuine brand love.",
    category: "Guest Experience",
    readTime: "8 min read",
    date: "Feb 20, 2026",
    gradient: "from-rose-500/20 to-pink-500/10",
    border: "border-rose-500/20",
  },
  {
    id: 5,
    title: "The PWA Advantage: Why Hotels Should Skip Native Apps",
    excerpt:
      "Progressive Web Apps offer 80% of the native app experience at 20% of the cost. Here's why we recommend PWAs for most hotels.",
    category: "App Development",
    readTime: "5 min read",
    date: "Feb 15, 2026",
    gradient: "from-cyan-500/20 to-teal-500/10",
    border: "border-cyan-500/20",
  },
  {
    id: 6,
    title: "Google Ads for Travel Agencies: Avoiding the 5 Biggest Mistakes",
    excerpt:
      "Most travel agencies waste 60% of their Google Ads budget on the wrong keywords and structures. Here's how to fix it.",
    category: "Digital Marketing",
    readTime: "7 min read",
    date: "Feb 8, 2026",
    gradient: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/20",
  },
];

export default function BlogPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-primary relative overflow-hidden">
        <div className="hero-orb absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600/15" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="section-eyebrow justify-center">Blog & Insights</div>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-white mt-4 mb-6">
            Travel Tech{" "}
            <span className="gradient-text">Intelligence</span>
          </h1>
          <p className="text-text-muted text-xl max-w-2xl mx-auto">
            Actionable insights, industry trends, and tech strategies for hospitality professionals.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-[#060610] py-20 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-2xl p-8 bg-gradient-to-br ${post.gradient} border ${post.border} flex flex-col cursor-pointer group transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="tech-badge flex items-center gap-1">
                  <Tag size={11} />
                  {post.category}
                </span>
                <span className="text-text-muted text-xs flex items-center gap-1">
                  <Clock size={11} />
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-heading font-bold text-white text-xl mb-3 leading-snug group-hover:text-blue-300 transition-colors flex-1">
                {post.title}
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-text-muted text-xs">{post.date}</span>
                <Link
                  href="#"
                  className="flex items-center gap-1 text-blue-400 text-sm font-semibold group-hover:gap-2 transition-all"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-light py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-black text-3xl text-[#080810] mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-gray-500 mb-8">
            Get weekly travel tech insights delivered to your inbox. No spam — just actionable intelligence.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="form-input bg-white border-gray-200 text-[#080810] placeholder:text-gray-400 flex-1"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}
