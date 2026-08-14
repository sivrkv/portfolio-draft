"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Cloud, TrendingUp } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { GlassCard } from "@/components/ui/GlassCard";

const AWARD_ICONS: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-8 h-8 text-amber-400" />,
  Award: <Award className="w-8 h-8 text-blue-400" />,
  Cloud: <Cloud className="w-8 h-8 text-cyan-400" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-violet-400" />,
  Star: <Star className="w-8 h-8 text-purple-400" />,
};

export function Awards() {
  return (
    <section id="awards" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono-tech uppercase tracking-wider mb-2">
            <Trophy className="w-4 h-4" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)]">
            Awards & Executive Recognition
          </h2>
        </div>

        {/* Awards Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROFILE_DATA.awards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
            >
              <GlassCard className="h-full flex flex-col items-center text-center p-6 border-t-2 border-t-cyan-400">
                <div className="p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] mb-4 shadow-inner">
                  {AWARD_ICONS[item.icon] || <Trophy className="w-8 h-8 text-cyan-400" />}
                </div>

                <h3 className="font-bold text-[var(--text-primary)] text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-cyan-400 font-semibold mb-3">
                  {item.organization}
                </p>

                {item.badge && (
                  <span className="mt-auto text-[10px] font-mono-tech uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-[var(--text-secondary)] border border-blue-500/20">
                    {item.badge}
                  </span>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
