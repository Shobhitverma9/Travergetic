"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Calendar } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const services = [
  "Digital Transformation Consulting",
  "Mobile & Web App Development",
  "Digital Marketing & Growth",
  "AI & Emerging Tech",
  "Full Package",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          company: data.company,
          service: data.service,
          message: data.message,
          to_email: "hello@travergetic.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      setSubmitted(true);
      reset();
    } catch {
      setError("Something went wrong. Please try WhatsApp or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 bg-primary relative overflow-hidden">
        <div className="hero-orb absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-blue-600/15" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="section-eyebrow justify-center">Get In Touch</div>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-white mt-4 mb-6">
            Let&apos;s Start Your{" "}
            <span className="gradient-text">Digital Journey</span>
          </h1>
          <p className="text-text-muted text-xl max-w-2xl mx-auto">
            Schedule a free 30-minute consultation or drop us a message. Our travel tech experts
            will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-[#060610] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — info + Calendly */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-7"
            >
              <h2 className="font-heading font-bold text-white text-xl mb-6">Contact Details</h2>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "hello@travergetic.com", href: "mailto:hello@travergetic.com" },
                  { icon: Phone, label: "Phone / WhatsApp", value: "+91 99999 99999", href: "tel:+919999999999" },
                  { icon: MapPin, label: "Location", value: "India", href: "#" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-white text-sm group-hover:text-blue-400 transition-colors">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Calendly embed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <Calendar size={20} className="text-blue-400" />
                <h2 className="font-heading font-bold text-white text-lg">Schedule a Call</h2>
              </div>
              <p className="text-text-muted text-sm mb-5">
                Book a free 30-minute strategy session directly in our calendar.
              </p>
              {/* Calendly inline embed */}
              <div
                className="calendly-inline-widget rounded-xl overflow-hidden"
                data-url="https://calendly.com/travergetic/consultation"
                style={{ minWidth: "280px", height: "500px" }}
              />
              <script
                async
                src="https://assets.calendly.com/assets/external/widget.js"
                typeof="text/javascript"
              />
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="font-heading font-bold text-white text-2xl mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle2 size={56} className="text-green-400 mx-auto mb-5" />
                  <h3 className="font-heading font-bold text-white text-2xl mb-3">
                    Message Received!
                  </h3>
                  <p className="text-text-muted">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    <br />
                    Or{" "}
                    <a
                      href="https://wa.me/919999999999"
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener"
                    >
                      chat on WhatsApp
                    </a>{" "}
                    for instant response.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-text-muted hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className="form-input"
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                        })}
                        className="form-input"
                        placeholder="john@yourhotel.com"
                        type="email"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        {...register("phone")}
                        className="form-input"
                        placeholder="+91 98765 43210"
                        type="tel"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Company / Brand
                      </label>
                      <input
                        {...register("company")}
                        className="form-input"
                        placeholder="Your Hotel / Agency Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Service Interested In *
                    </label>
                    <select
                      {...register("service", { required: "Please select a service" })}
                      className="form-input"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      {...register("message", { required: "Please describe your project" })}
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Describe your current challenges, goals, and what you'd like to achieve..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-text-muted text-xs text-center">
                    We respond within 24 hours. For urgent inquiries, WhatsApp us directly.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-primary py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden h-64 glass-card border border-card-border flex items-center justify-center">
            <div className="text-center">
              <MapPin size={36} className="text-blue-400 mx-auto mb-3" />
              <p className="text-white font-heading font-semibold">Travergetic Innovations Pvt. Ltd.</p>
              <p className="text-text-muted text-sm mt-1">India</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-blue-400 text-sm mt-3 hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
