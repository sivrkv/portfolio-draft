"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { GlassCard } from "@/components/ui/GlassCard";
import { LinkedinIcon, GithubIcon } from "@/components/ui/BrandIcons";

export function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <footer id="contact" className="pt-24 pb-12 relative overflow-hidden bg-slate-950">
      {/* Glow Orbs background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-gradient-to-b from-blue-600/10 via-violet-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Container */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border-blue-500/30 mb-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono-tech uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight">
            Let&apos;s build something intelligent together.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you are looking to scale an enterprise AI Centre of Excellence, design multi-agent workflows, or modernize core banking platforms — let&apos;s connect.
          </p>

          {/* Mailto CTA Button */}
          <div className="flex justify-center mb-12">
            <a
              href={`mailto:${PROFILE_DATA.contactInfo.email}`}
              className="inline-flex items-center space-x-3 text-base font-mono-tech font-bold text-white px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-400 hover:opacity-95 shadow-xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-5 h-5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border-t border-slate-800/80 pt-8">
            {/* Email Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono-tech text-slate-400">EMAIL</div>
                  <div className="text-xs font-semibold text-slate-200 truncate">
                    {PROFILE_DATA.contactInfo.email}
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PROFILE_DATA.contactInfo.email, "email")}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech text-slate-400">PHONE</div>
                  <div className="text-xs font-semibold text-slate-200">
                    {PROFILE_DATA.contactInfo.phone}
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PROFILE_DATA.contactInfo.phone, "phone")}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono-tech text-slate-400">LOCATION</div>
                <div className="text-xs font-semibold text-slate-200">
                  {PROFILE_DATA.contactInfo.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800/60 text-xs text-slate-400 font-mono-tech gap-4">
          <div>
            © {new Date().getFullYear()} Dr. Selvaraj Shanmugam. All rights reserved.
          </div>

          {/* Social Links Row */}
          <div className="flex items-center space-x-4">
            <a
              href={PROFILE_DATA.contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
