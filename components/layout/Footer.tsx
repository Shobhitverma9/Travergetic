import Link from "next/link";
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Digital Transformation", href: "/services#digital-transformation" },
    { label: "App Development", href: "/services#app-development" },
    { label: "Digital Marketing", href: "/services#digital-marketing" },
    { label: "AI & Emerging Tech", href: "/services#ai-tech" },
  ],
  Industries: [
    { label: "Hotels & Resorts", href: "/services" },
    { label: "Travel Agencies", href: "/services" },
    { label: "Tour Operators", href: "/services" },
    { label: "OTA Platforms", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-card-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/Travergetic_Final_Logo.png"
                alt="Travergetic Logo"
                width={160}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-xs">
              Specialized technology company empowering travel, hotel & hospitality businesses with intelligent digital solutions since 2023.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://twitter.com" target="_blank" rel="noopener" className="w-9 h-9 rounded-lg bg-card border border-card-border flex items-center justify-center text-text-muted hover:text-white hover:border-blue-500 transition-all">
                <Twitter size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="w-9 h-9 rounded-lg bg-card border border-card-border flex items-center justify-center text-text-muted hover:text-white hover:border-blue-500 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="w-9 h-9 rounded-lg bg-card border border-card-border flex items-center justify-center text-text-muted hover:text-white hover:border-blue-500 transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-muted text-sm hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-card-border grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <Mail size={16} className="text-blue-400 flex-shrink-0" />
            <a href="mailto:sales@travergetic.com" className="hover:text-white transition-colors">
              sales@travergetic.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <Phone size={16} className="text-blue-400 flex-shrink-0" />
            <a href="tel:+918588910062" className="hover:text-white transition-colors">
              +91 85889 10062
            </a>
          </div>
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <MapPin size={16} className="text-blue-400 flex-shrink-0" />
            <span>Noida, UP, India</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-card-border py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Travergetic Innovations Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
