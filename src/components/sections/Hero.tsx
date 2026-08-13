"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Terminal, ShieldCheck } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { StatCard } from "@/components/ui/StatCard";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = PROFILE_DATA.typewriterTitles;

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentTitle) {
      typingSpeed = 2200; // Pause at end
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayText !== currentTitle) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText !== "") {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText === currentTitle) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Subtle Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-violet-600/15 to-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Chip */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono-tech mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>AI Engineering & Digital Transformation Leader</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-100 mb-3">
              Dr. Selvaraj Shanmugam{" "}
              <span className="text-xl sm:text-2xl text-slate-400 font-normal font-mono-tech">
                ({PROFILE_DATA.shortName})
              </span>
            </h1>

            {/* Typewriter Title */}
            <div className="h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono-tech gradient-text">
                {displayText}
              </span>
              <span className="w-0.5 h-7 bg-cyan-400 ml-1 animate-ping" />
            </div>

            {/* One-Line Hook */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
              {PROFILE_DATA.heroHook}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#experience"
                className="inline-flex items-center space-x-2 text-sm font-mono-tech font-bold text-white px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 text-sm font-mono-tech font-semibold text-slate-200 px-6 py-3.5 rounded-xl glass-card hover:text-cyan-400 border border-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Profile Picture Frame with Animated Gradient Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-400 opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />

              {/* Hexagonal/Circular Frame Wrapper */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400">
                <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden relative flex items-center justify-center border-4 border-slate-900 shadow-2xl">
                  {/* Photo Visual / Avatar Graphic */}
                  <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 mb-3">
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                        <Terminal className="w-12 h-12 text-cyan-400" />
                      </div>
                    </div>
                    <span className="font-bold text-slate-100 text-lg">Dr. Selvaraj S.</span>
                    <span className="text-xs text-cyan-400 font-mono-tech mt-1">Ph.D. in Artificial Intelligence</span>
                    <span className="text-[11px] text-slate-400 mt-1">Global AI Leader • Banking & FS</span>
                  </div>
                </div>
              </div>

              {/* Floating Shield Badge */}
              <div className="absolute bottom-2 -left-4 glass-card px-3 py-2 rounded-xl flex items-center space-x-2 border border-blue-500/30 shadow-lg">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <div className="flex flex-col text-[11px]">
                  <span className="font-bold text-slate-100">Enterprise GenAI</span>
                  <span className="text-slate-400 font-mono-tech">CoE Director</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Stat Chips Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {PROFILE_DATA.heroStats.map((stat, idx) => (
            <StatCard
              key={idx}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              description={stat.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
