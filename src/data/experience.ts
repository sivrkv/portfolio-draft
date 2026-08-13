export interface MetricHighlight {
  value: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  isCondensed?: boolean;
  bullets: string[];
  metrics?: MetricHighlight[];
  technologies?: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "xbp-global",
    role: "Technology Head, AI Engineering",
    company: "XBP Global",
    period: "2024 - Present",
    location: "Global",
    isCondensed: false,
    bullets: [
      "Led Enterprise AI and Intelligent Automation transformation defining org-wide AI roadmap and governing GenAI/Agentic AI adoption on GCP & Azure.",
      "Designed enterprise AI & intelligent automation platforms for banking incorporating BPM, RPA, OCR, IDP, AI/ML, GenAI, and Agentic AI.",
      "Migrated legacy apps to cloud-native microservices on GCP/Azure while ensuring strict regulatory data sovereignty and security controls.",
      "Designed observable agentic workflows with comprehensive monitoring, automated logging, and real-time incident management.",
      "Ran C-suite discovery sessions translating business and compliance constraints into production-ready AI solutions."
    ],
    metrics: [
      { value: "1000+", label: "Engineers upskilled in GenAI, agentic systems, & LLMOps" },
      { value: "2X", label: "Revenue growth via AI product development" },
      { value: "60%", label: "Reduction in cloud spend via architecture optimization" }
    ],
    technologies: ["GenAI", "Agentic AI", "GCP Vertex AI", "Azure ML", "BPM", "RPA", "IDP", "Python", "Microservices"]
  },
  {
    id: "tcs",
    role: "Chief Technology Evangelist, GenAI Unit Head",
    company: "Tata Consultancy Services (TCS)",
    period: "2006 - 2024",
    location: "Global (UK, EU, USA, India)",
    isCondensed: false,
    bullets: [
      "Served as GenAI Unit Head leading elite AI/ML engineers building enterprise-grade GenAI solutions across banking, insurance, and operations.",
      "Partnered directly with sales & tech leadership on global AI opportunities, RFPs, and solution architecture design.",
      "Led enterprise transformation for Tier-1 global banks across Retail, Commercial, Cards, Payments, Lending, Wealth Management, and Regulatory Compliance.",
      "Delivered end-to-end intelligent automation for digital onboarding, KYC, dispute management, cheque processing, and regulatory compliance.",
      "Identified critical skill gaps and built structured enterprise-wide upskilling programs.",
      "Collaborated closely with product and engineering teams to establish long-term strategic platform roadmaps."
    ],
    metrics: [
      { value: "100%", label: "GenAI certification across the AI unit" },
      { value: "10+", label: "Unique AI solutions adopted across domains" },
      { value: "$10M+", label: "Revenue delivered through AI/GenAI services" }
    ],
    technologies: ["GenAI", "LLM", "RAG Pipelines", "Pega BPM", "Python", "OCR/IDP", "Azure", "GCP", "Banking Compliance"]
  },
  {
    id: "isoft",
    role: "Tech Lead",
    company: "iSoft R&D Limited (DXC Technology)",
    period: "2004 - 2006",
    isCondensed: true,
    bullets: [
      "Led core engineering modules and architectural upgrades for enterprise healthcare and information management systems."
    ],
    technologies: ["C++", "Java", "Database Design", "Software Architecture"]
  },
  {
    id: "psl",
    role: "Sr. Software Engineer",
    company: "PSL & Management Pvt Ltd",
    period: "2000 - 2004",
    isCondensed: true,
    bullets: [
      "Engineered enterprise software applications, database optimizations, and workflow automation systems."
    ],
    technologies: ["C/C++", "SQL Server", "Object-Oriented Design", "Enterprise Applications"]
  }
];
