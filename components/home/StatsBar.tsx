"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Hotels Transformed", description: "Hospitality brands modernized" },
  { value: 3, suffix: "+", label: "Years of Expertise", description: "Deep travel-tech specialization" },
  { value: 100, suffix: "%", label: "Niche Focused", description: "Only travel & hospitality" },
  { value: 42, suffix: "%", label: "Avg Booking Uplift", description: "Direct bookings increased" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#0a0a15] border-y border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-4 ${
                i < stats.length - 1 ? "lg:border-r lg:border-card-border" : ""
              }`}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="font-heading font-semibold text-white mt-2 mb-1">{stat.label}</p>
              <p className="text-text-muted text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
