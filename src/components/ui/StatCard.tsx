"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export function StatCard({ label, value, suffix = "", description }: StatCardProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  // Parse numeric value if possible for count-up
  const numericVal = parseInt(value.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    if (!isInView || isNaN(numericVal)) return;

    let start = 0;
    const duration = 1200; // ms
    const increment = Math.max(1, Math.ceil(numericVal / (duration / 30)));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericVal) {
        setDisplayValue(numericVal);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, numericVal]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -3 }}
      className="glass-card rounded-xl p-4 flex flex-col justify-center items-start border-l-4 border-l-blue-500"
    >
      <div className="flex items-baseline space-x-1">
        <span className="text-3xl lg:text-4xl font-bold font-mono-tech gradient-text">
          {isNaN(numericVal) ? value : displayValue}
        </span>
        {suffix && (
          <span className="text-2xl font-bold text-cyan-400 font-mono-tech">
            {suffix}
          </span>
        )}
      </div>
      <div className="text-sm font-semibold text-slate-200 mt-1">{label}</div>
      {description && (
        <div className="text-xs text-slate-400 mt-0.5">{description}</div>
      )}
    </motion.div>
  );
}
