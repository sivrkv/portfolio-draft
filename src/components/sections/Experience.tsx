"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { EXPERIENCE_DATA } from "@/data/experience";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechPill } from "@/components/ui/TechPill";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono-tech uppercase tracking-wider mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100">
            Leadership & Executive Experience
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
          {EXPERIENCE_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Animated Timeline Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-200 shadow-md shadow-cyan-500/20">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {item.isCondensed ? (
                /* Condensed Timeline Entry for early career */
                <GlassCard className="p-4 md:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-100">
                        {item.role}{" "}
                        <span className="text-blue-400 font-semibold">
                          @ {item.company}
                        </span>
                      </h3>
                    </div>
                    <span className="text-xs font-mono-tech px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">
                    {item.bullets[0]}
                  </p>
                </GlassCard>
              ) : (
                /* Detailed Timeline Card */
                <GlassCard className="p-6 md:p-8 border-l-4 border-l-cyan-400">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-400 font-semibold font-mono-tech">
                        <span>{item.company}</span>
                        {item.location && (
                          <span className="flex items-center text-slate-400 text-xs font-normal">
                            <MapPin className="w-3.5 h-3.5 mr-1" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-mono-tech font-bold px-3 py-1.5 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6">
                    {item.bullets.map((bullet, bulletIdx) => (
                      <li
                        key={bulletIdx}
                        className="flex items-start text-sm text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mr-2.5 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Key Metrics Stat Callouts Row */}
                  {item.metrics && item.metrics.length > 0 && (
                    <div className="pt-4 border-t border-slate-800/80 mb-5">
                      <div className="text-xs uppercase font-mono-tech text-slate-400 mb-3 tracking-wider flex items-center space-x-1.5">
                        <TrendingUp className="w-4 h-4 text-cyan-400" />
                        <span>Quantified Business Results</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {item.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 text-center"
                          >
                            <div className="text-xl md:text-2xl font-bold font-mono-tech gradient-text">
                              {metric.value}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies row */}
                  {item.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, tIdx) => (
                        <TechPill key={tIdx} label={tech} variant="primary" />
                      ))}
                    </div>
                  )}
                </GlassCard>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
