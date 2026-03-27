"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Mehta",
    role: "Owner, The Palm Boutique Resort",
    text: "Travergetic transformed our digital presence completely. Our direct bookings went up by 40% in just 6 months. Their understanding of the hospitality industry is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohit Sharma",
    role: "Director, WanderPeak Travels",
    text: "The AI chatbot they built for us handles 70% of guest inquiries automatically. Our staff can now focus on delivering exceptional in-person service.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjali Nair",
    role: "GM, SunCoast Resorts",
    text: "Finally a tech company that speaks our language. Travergetic understands seasonal demand, OTA dynamics, and guest expectations. Highly recommended.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-light py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="section-eyebrow justify-center"
            style={{ color: "#2563eb" }}
          >
            Client Stories
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#080810] mt-2">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[active].id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 text-center relative"
          >
            <Quote
              size={48}
              className="text-blue-100 absolute top-8 left-8"
            />
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array(testimonials[active].rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
            </div>
            <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-3xl mx-auto italic">
              &ldquo;{testimonials[active].text}&rdquo;
            </p>
            <div>
              <p className="font-heading font-bold text-[#080810] text-lg">
                {testimonials[active].name}
              </p>
              <p className="text-gray-400 text-sm">{testimonials[active].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1))}
            className="w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === active ? "bg-blue-500 w-8" : "bg-gray-200 hover:bg-gray-400"
              }`}
            />
          ))}
          <button
            onClick={() => setActive((p) => (p + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
