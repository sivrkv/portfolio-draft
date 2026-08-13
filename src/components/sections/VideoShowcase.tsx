"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, Video, ExternalLink } from "lucide-react";
import { MEDIA_DATA, ReelItem } from "@/data/media";
import { GlassCard } from "@/components/ui/GlassCard";
import { InstagramIcon } from "@/components/ui/BrandIcons";

export function VideoShowcase() {
  const [instagramScriptLoaded, setInstagramScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Instagram embed script once globally if any item has an instagramUrl
    if (MEDIA_DATA.reels.some((r) => r.instagramUrl)) {
      if (!document.getElementById("instagram-embed-script")) {
        const script = document.createElement("script");
        script.id = "instagram-embed-script";
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => setInstagramScriptLoaded(true);
        document.body.appendChild(script);
      } else {
        setInstagramScriptLoaded(true);
      }
    }
  }, []);

  return (
    <section id="reels" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono-tech uppercase tracking-wider mb-2">
            <Video className="w-4 h-4" />
            <span>{MEDIA_DATA.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 mb-2">
            {MEDIA_DATA.sectionSubtitle}
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl">
            Short keynotes, enterprise AI demos, and leadership talks. Paste your Instagram Reel or video links into <code className="text-cyan-400 font-mono-tech">/data/media.ts</code> to update.
          </p>
        </div>

        {/* 4-Card Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MEDIA_DATA.reels.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-5 border-slate-800 hover:border-cyan-500/40 group">
                <div>
                  {/* Video Slot Aspect 9:16 */}
                  <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 mb-4 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                    {reel.instagramUrl ? (
                      /* Instagram Embed Blockquote */
                      <blockquote
                        className="instagram-media w-full h-full"
                        data-instgrm-permalink={reel.instagramUrl}
                        data-instgrm-version="14"
                      />
                    ) : reel.videoUrl ? (
                      /* Direct Video or iFrame fallback */
                      <iframe
                        src={reel.videoUrl}
                        className="w-full h-full border-0"
                        allowFullScreen
                      />
                    ) : (
                      /* Stylish Video Card Placeholder */
                      <div className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                        <div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-cyan-400 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-cyan-400 ml-0.5" />
                        </div>
                        <span className="font-mono-tech text-xs text-slate-400 font-medium">
                          Video Slot #{idx + 1}
                        </span>
                        <span className="text-[11px] text-slate-500 mt-1 font-mono-tech">
                          // Add Reel URL in media.ts
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Reel Info */}
                  <h3 className="font-bold text-slate-100 text-base mb-1 group-hover:text-cyan-300 transition-colors">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {reel.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {reel.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono-tech px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Follow on Instagram CTA */}
        <div className="flex justify-center">
          <a
            href={MEDIA_DATA.instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-mono-tech font-bold text-slate-200 px-6 py-3 rounded-xl glass-card border border-purple-500/30 hover:border-purple-500 hover:text-white transition-all shadow-md"
          >
            <InstagramIcon className="w-4 h-4 text-purple-400" />
            <span>Follow Dr. Selvaraj on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
