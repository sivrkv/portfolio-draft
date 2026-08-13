export interface ReelItem {
  id: string;
  title: string;
  subtitle: string;
  instagramUrl?: string; // e.g. "https://www.instagram.com/reel/Cxxxxxx/"
  videoUrl?: string;     // fallback video file or YouTube embed
  thumbnailUrl?: string; // poster preview image
  tags: string[];
}

export const MEDIA_DATA = {
  sectionTitle: "In Motion",
  sectionSubtitle: "Talks, Keynotes & Executive AI Insights",
  instagramProfileUrl: "https://www.instagram.com", // User can paste real profile URL
  reels: [
    {
      id: "reel-1",
      title: "Enterprise GenAI Architecture",
      subtitle: "Navigating RAG pipelines, data sovereignty, & multi-agent systems for Tier-1 banks.",
      // add reel URL here: paste Instagram reel link e.g. "https://www.instagram.com/p/C..."
      instagramUrl: "", 
      videoUrl: "", 
      thumbnailUrl: "",
      tags: ["GenAI", "Banking Tech", "Keynote"]
    },
    {
      id: "reel-2",
      title: "Scaling Intelligent Automation",
      subtitle: "Bridging BPM, RPA, and Agentic AI into high-velocity operational workflows.",
      // add reel URL here
      instagramUrl: "",
      videoUrl: "",
      thumbnailUrl: "",
      tags: ["Intelligent Automation", "RPA", "BPM"]
    },
    {
      id: "reel-3",
      title: "Upskilling 1000+ Engineers in AI",
      subtitle: "Building an enterprise AI Centre of Excellence and modernizing engineering culture.",
      // add reel URL here
      instagramUrl: "",
      videoUrl: "",
      thumbnailUrl: "",
      tags: ["Leadership", "Upskilling", "CoE"]
    },
    {
      id: "reel-4",
      title: "Future of Agentic Systems in Financial Services",
      subtitle: "Autonomous ticket triaging, dispute resolution, and continuous AI governance.",
      // add reel URL here
      instagramUrl: "",
      videoUrl: "",
      thumbnailUrl: "",
      tags: ["Agentic AI", "Financial Services", "Strategy"]
    }
  ] as ReelItem[]
};
