"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Why Kratex", href: "#why-kratex" },
    { name: "Testimonials", href: "#social-proof" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black/85 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white uppercase flex items-center gap-2">
          <span className="text-primary">Kratex</span> 
          <span>Academy</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#visit"
            className="text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-wider"
          >
            Visit Us
          </Link>
          <Link
            href="#apply"
            className="bg-primary hover:bg-white hover:text-black text-white px-7 py-2.5 rounded-sm font-black text-sm uppercase tracking-widest transition-all hover:scale-105"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center justify-center gap-8 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "h-screen py-10 opacity-100" : "h-0 opacity-0 py-0 border-transparent"}`}
      >
        {mobileMenuOpen && navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold text-gray-300 hover:text-white uppercase tracking-widest"
          >
            {link.name}
          </Link>
        ))}
        {mobileMenuOpen && (
          <Link
            href="#visit"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold text-gray-300 hover:text-white uppercase tracking-widest"
          >
            Visit Us
          </Link>
        )}
        {mobileMenuOpen && (
          <Link
            href="#apply"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-primary hover:bg-white hover:text-black text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest mt-4 transition-colors"
          >
            Apply Now
          </Link>
        )}
      </div>
    </header>
  );
}
