"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    sub: [
      { label: "Digital Transformation", href: "/services#digital-transformation" },
      { label: "App Development", href: "/services#app-development" },
      { label: "Digital Marketing", href: "/services#digital-marketing" },
      { label: "AI & Emerging Tech", href: "/services#ai-tech" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-heading font-black text-white text-sm shadow-lg group-hover:shadow-blue-500/40 transition-shadow">
            T
          </div>
          <span className="font-heading font-bold text-xl text-white">
            Trav<span className="gradient-text">ergetic</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.sub && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 pb-1 ${
                  pathname === link.href
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {link.sub && <ChevronDown size={14} />}
              </Link>

              {/* Dropdown */}
              {link.sub && activeDropdown === link.label && (
                <div className="absolute top-full left-0 mt-3 w-56 glass-card rounded-xl overflow-hidden shadow-2xl">
                  {link.sub.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-blue-600/10 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact" className="btn-primary text-sm py-3 px-6">
            <Phone size={15} />
            Contact Us
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-card border-t border-card-border">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-sm font-medium py-2 transition-colors ${
                    pathname === link.href ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
                {link.sub && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block text-xs text-gray-400 hover:text-blue-400 py-1 transition-colors"
                      >
                        — {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="btn-primary w-full justify-center mt-4">
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
