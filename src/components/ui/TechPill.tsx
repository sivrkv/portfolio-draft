"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechPillProps {
  label: string;
  variant?: "primary" | "secondary" | "accent";
}

export function TechPill({ label, variant = "primary" }: TechPillProps) {
  const variantStyles = {
    primary:
      "bg-slate-950/60 dark:bg-slate-900/60 text-slate-200 border-slate-700/60 hover:border-blue-500/50 hover:bg-blue-500/10",
    secondary:
      "bg-purple-950/30 dark:bg-purple-900/20 text-purple-200 border-purple-800/40 hover:border-purple-500/60",
    accent:
      "bg-cyan-950/30 dark:bg-cyan-900/20 text-cyan-200 border-cyan-800/40 hover:border-cyan-500/60",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center text-xs font-mono-tech px-3 py-1.5 rounded-full border transition-all duration-200 ${variantStyles[variant]}`}
    >
      {label}
    </motion.span>
  );
}
