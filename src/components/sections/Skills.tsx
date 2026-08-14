"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Code2, Cloud, UserCheck, Wrench } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { TechPill } from "@/components/ui/TechPill";
import { GlassCard } from "@/components/ui/GlassCard";

const ICON_MAP: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-blue-400" />,
  Cpu: <Cpu className="w-5 h-5 text-violet-400" />,
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Cloud: <Cloud className="w-5 h-5 text-indigo-400" />,
  UserCheck: <UserCheck className="w-5 h-5 text-teal-400" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[var(--bg-dark)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono-tech uppercase tracking-wider mb-2">
            <Wrench className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)]">
            Skills & Enterprise Expertise
          </h2>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE_DATA.skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: catIdx * 0.08 }}
            >
              <GlassCard className="h-full p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-5 border-b border-[var(--border-color)] pb-4">
                    <div className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                      {ICON_MAP[cat.iconName] || <BrainCircuit className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <h3 className="font-bold text-[var(--text-primary)] text-lg">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, skillIdx) => (
                      <TechPill
                        key={skillIdx}
                        label={skill}
                        variant={catIdx % 2 === 0 ? "primary" : "accent"}
                      />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
