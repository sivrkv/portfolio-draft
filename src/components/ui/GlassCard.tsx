"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassCard({
  children,
  className = "",
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={clsx(
        "glass-card rounded-2xl p-6 relative overflow-hidden",
        glow && "glow-border",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
