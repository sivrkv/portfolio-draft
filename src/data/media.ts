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
  instagramProfileUrl: "https://www.instagram.com/shaskool_lift4life/", // User can paste real profile URL
  reels: [
    {
      id: "reel-1",
      title: "How GenAI can help for society?",
      // add reel URL here: paste Instagram reel link e.g. "https://www.instagram.com/p/C..."
      instagramUrl: "https://www.instagram.com/reel/DGNK7FoTGoS/?igsh=eHN3N3ZycjZsZTJo", 
      videoUrl: "", 
      thumbnailUrl: "/media/socialcause.png",
      tags: ["GenAI", "Keynote", "promptengineering", "socialcause "]
    },
    {
      id: "reel-2",
      title: "The future isn’t AI vs. Humans. It’s AI with Humans.",
      // add reel URL here
      instagramUrl: "https://www.instagram.com/reels/DGYunCBTDko/",
      videoUrl: "",
      thumbnailUrl: "/media/AIwithhuman.png",
      tags: ["AI", "GenAI", "HumanTouch", "Healthcare"]
    },
    {
      id: "reel-3",
      title: "Is GenAI too risky?",
      // add reel URL here
      instagramUrl: "https://www.instagram.com/reels/DGI2bOzzV0t/",
      videoUrl: "",
      thumbnailUrl: "/media/GenAIrisky.png",
      tags: ["ai", "genai", "risk", "promptengineering"]
    },
    {
      id: "reel-4",
      title: "My funny experience with GenAI",  
      // add reel URL here
      instagramUrl: "https://www.instagram.com/reels/DGFcN_bT690/",
      videoUrl: "",
      thumbnailUrl: "/media/funnyexp.png",
      tags: ["genai", "funny", "promptengineering"]
    }
  ] as ReelItem[]
};
