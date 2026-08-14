"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { GlassCard } from "@/components/ui/GlassCard";

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono-tech uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)]">
            Education & Academic Excellence
          </h2>
        </div>

        {/* 3-Card Degree Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PROFILE_DATA.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6 border-t-4 border-t-cyan-400">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono-tech px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {edu.year}
                    </span>
                    <GraduationCap className="w-5 h-5 text-[var(--text-secondary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] font-mono-tech mb-4">
                    {edu.field}
                  </p>
                </div>
                {edu.highlight && (
                  <div className="pt-3 border-t border-[var(--border-color)] text-xs text-[var(--text-secondary)] flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{edu.highlight}</span>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Credentials Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 pt-4"
        >
          {PROFILE_DATA.quickBadges.map((badge, idx) => (
            <div
              key={idx}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl glass-card border border-slate-700/80 text-xs font-mono-tech font-bold text-[var(--text-secondary)] shadow-sm hover:border-cyan-400/50 transition-colors"
            >
              <Award className="w-4 h-4 text-cyan-400" />
              <span>{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
