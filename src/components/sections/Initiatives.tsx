"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Bot, FileCheck, ShieldAlert, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { INITIATIVES_DATA, InitiativeItem } from "@/data/initiatives";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechPill } from "@/components/ui/TechPill";
import { InitiativeModal } from "@/components/ui/InitiativeModal";

const ICON_MAP: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-6 h-6 text-blue-400" />,
  FileCheck: <FileCheck className="w-6 h-6 text-cyan-400" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-violet-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-indigo-400" />,
};

export function Initiatives() {
  const [selectedInitiative, setSelectedInitiative] = useState<InitiativeItem | null>(null);

  return (
    <section id="initiatives" className="py-24 relative overflow-hidden bg-[var(--bg-dark)]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono-tech uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Showcase & Proof Points</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] mb-2">
            Strategic AI & Automation Initiatives
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-2xl">
            Enterprise-grade platforms and intelligent agentic systems designed, architected, and deployed for global financial institutions. Click any card for detailed specs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {INITIATIVES_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={item.gridSpan || "lg:col-span-6"}
              onClick={() => setSelectedInitiative(item)}
            >
              <GlassCard
                glow
                className="h-full flex flex-col justify-between p-6 md:p-8 cursor-pointer group border-[var(--border-color)]/80 hover:border-cyan-500/40"
              >
                <div>
                  {/* Top Category & Icon Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] group-hover:border-cyan-500/30 transition-colors">
                        {ICON_MAP[item.iconName] || <Sparkles className="w-6 h-6 text-cyan-400" />}
                      </div>
                      <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-2 rounded-full text-[var(--text-secondary)] group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Role Tag */}
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="inline-flex items-center space-x-1.5 text-xs font-mono-tech text-blue-400 mb-4 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{item.roleTag}</span>
                  </div>

                  {/* Short Description */}
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                    {item.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Impact Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 pt-4 border-t border-[var(--border-color)]/80">
                    {item.impactStats.map((stat, sIdx) => (
                      <div key={sIdx} className="bg-[var(--bg-card)]/90 rounded-lg p-2.5 text-center">
                        <div className="text-lg md:text-xl font-bold font-mono-tech gradient-text">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-[var(--text-secondary)] font-medium truncate">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills (First 4) */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.slice(0, 4).map((tech, tIdx) => (
                      <TechPill key={tIdx} label={tech} variant="primary" />
                    ))}
                    {item.techStack.length > 4 && (
                      <span className="text-[11px] font-mono-tech text-[var(--text-secondary)] self-center pl-1">
                        +{item.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <InitiativeModal
        item={selectedInitiative}
        onClose={() => setSelectedInitiative(null)}
      />
    </section>
  );
}
