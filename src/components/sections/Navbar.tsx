"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Download, Terminal } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { PROFILE_DATA } from "@/data/profile";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Initiatives", href: "#initiatives" },
  { name: "Awards", href: "#awards" },
  { name: "In Motion", href: "#reels" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-xl" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Initials */}
        <a
          href="#"
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-violet-600 to-cyan-400 p-[1.5px] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10.5px] flex items-center justify-center">
              <span className="font-mono-tech font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-lg">
                SS
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-base leading-tight group-hover:text-cyan-400 transition-colors">
              Dr. Selvaraj S.
            </span>
            <span className="text-[10px] font-mono-tech text-slate-400 tracking-wider">
              AI TECH LEADER
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase font-mono-tech tracking-wider text-slate-300 hover:text-cyan-400 transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Resume Download CTA */}
          <a
            href={PROFILE_DATA.contactInfo.resumeUrl}
            className="inline-flex items-center space-x-2 text-xs font-mono-tech font-semibold text-white px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-200 shadow-md shadow-blue-500/20 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-200 hover:text-white"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden glass-nav border-t border-slate-800/80 px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono-tech uppercase tracking-wider text-slate-200 hover:text-cyan-400 py-1"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
                <a
                  href={PROFILE_DATA.contactInfo.resumeUrl}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 text-xs font-mono-tech font-semibold text-white py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
