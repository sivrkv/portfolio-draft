"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, CheckCircle2, Sparkles } from "lucide-react";
import { InitiativeItem } from "@/data/initiatives";
import { TechPill } from "./TechPill";

interface InitiativeModalProps {
  item: InitiativeItem | null;
  onClose: () => void;
}

export function InitiativeModal({ item, onClose }: InitiativeModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card border border-blue-500/30 rounded-2xl p-6 md:p-8 z-10 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono-tech uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>{item.category}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
            {item.title}
          </h3>

          <div className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-6">
            <Cpu className="w-4 h-4" />
            <span>Role: {item.roleTag}</span>
          </div>

          {/* Impact Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {item.impactStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold font-mono-tech gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--text-secondary)] mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Architecture Breakdown */}
          <div className="mb-6">
            <h4 className="text-sm uppercase font-mono-tech text-[var(--text-secondary)] mb-2 tracking-wider">
              Architecture & System Overview
            </h4>
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
              {item.fullDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm uppercase font-mono-tech text-[var(--text-secondary)] mb-3 tracking-wider">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech, idx) => (
                <TechPill key={idx} label={tech} variant={idx % 2 === 0 ? "primary" : "accent"} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
