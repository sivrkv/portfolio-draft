"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Globe2, BrainCircuit, Layers, Award, Terminal } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { GlassCard } from "@/components/ui/GlassCard";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono-tech uppercase tracking-wider mb-2">
            <UserCheck className="w-4 h-4" />
            <span>Executive Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100">
            Pioneering Enterprise AI & Global Digital Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Column 1: Profile Bio Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {PROFILE_DATA.executiveSummary.map((paragraph, index) => (
              <GlassCard key={index} className="p-6 md:p-8">
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  {paragraph}
                </p>
              </GlassCard>
            ))}
          </motion.div>

          {/* Column 2: Stat & Skill Visual Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            {/* Global Reach Card */}
            <GlassCard className="p-6 bg-gradient-to-br from-slate-900/90 to-blue-950/40 border-blue-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 text-lg">Global CXO Trusted Advisor</h3>
                  <p className="text-xs text-slate-400 font-mono-tech">UK • EU • USA • INDIA</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Trusted advisor to C-level executives in top-tier global financial institutions, translating complex business constraints into production-ready AI & automation roadmaps.
              </p>
            </GlassCard>

            {/* AI CoE Card */}
            <GlassCard className="p-6 bg-gradient-to-br from-slate-900/90 to-violet-950/40 border-violet-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-violet-500/20 text-violet-400">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 text-lg">AI Centre of Excellence</h3>
                  <p className="text-xs text-violet-400 font-mono-tech">GenAI • LLMs • RAG • Agents</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Spearheaded enterprise AI CoEs establishing coding standards, reusable multi-agent assets, vector search pipelines, and cloud data sovereignty governance.
              </p>
            </GlassCard>

            {/* Core Domain Grid */}
            <GlassCard className="p-6">
              <h4 className="text-xs font-mono-tech uppercase text-slate-400 mb-4 tracking-wider">
                Banking & FS Domain Leadership
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono-tech font-semibold">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Retail & Cards</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Corporate Banking</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  <span>Payments & Lending</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>Regulatory KYC</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
