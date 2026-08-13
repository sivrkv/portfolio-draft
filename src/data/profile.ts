export interface StatChip {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  field: string;
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface AwardItem {
  title: string;
  organization: string;
  badge?: string;
  icon: string;
}

export const PROFILE_DATA = {
  name: "Dr. Selvaraj Shanmugam",
  shortName: "Selva",
  title: "AI & Intelligent Automation Leader",
  tagline: "Technology Head | GenAI & Enterprise Automation Specialist",
  typewriterTitles: [
    "Technology Head",
    "AI & Intelligent Automation Leader",
    "Digital Transformation Leader",
    "GenAI & Multi-Agent Architect"
  ],
  heroHook: "25+ years turning enterprise AI ambition into production reality for global banking & financial services.",
  
  heroStats: [
    { label: "Years Experience", value: "25", suffix: "+", description: "Global Leadership" },
    { label: "Revenue Delivered", value: "10", suffix: "M+", description: "AI & Digital Services" },
    { label: "Engineers Upskilled", value: "1000", suffix: "+", description: "In GenAI & Agentic Systems" },
    { label: "AI Research Papers", value: "10", suffix: "+", description: "Published & Cited" },
  ] as StatChip[],

  executiveSummary: [
    "Innovative, results-driven technology leader with 25+ years of experience driving global transformation programs, including 10+ years in Banking and Financial Services across Retail Banking, Corporate Banking, Payments, Lending, Cards, and Regulatory Compliance.",
    "Extensive experience leading Intelligent Automation initiatives — BPM, Workflow Automation, RPA, AI/ML, OCR, IDP, and Generative AI — to modernize banking operations and improve customer experiences. Worked across the UK, EU, USA, and India as a trusted advisor to CXOs, translating complex constraints into actionable AI, automation, and digital transformation roadmaps.",
    "Spearheaded an AI Centre of Excellence — code standards, architectural best practices, reusable agentic AI assets — and governed enterprise adoption of GenAI, LLMs, vector search, and RAG pipelines. Hands-on engineering manager fluent in agentic system design, Python development, multi-agent orchestration, LLMOps, and production SDLC — and a proven people leader who mentors high-performing teams."
  ],

  quickBadges: [
    "25+ IT Certifications",
    "10+ AI Research Papers",
    "Ph.D. in AI",
    "Executive MBA",
    "Google Cloud Partner All-Star"
  ],

  education: [
    {
      degree: "Ph.D. in AI",
      institution: "Vinayaka Mission Research Foundation",
      year: "Completed Feb 2026",
      field: "Artificial Intelligence & Intelligent Automation",
      highlight: "Doctoral Thesis on Enterprise AI & Intelligent Automation Architecture"
    },
    {
      degree: "Executive MBA",
      institution: "Ural Russian University",
      year: "2015",
      field: "Business Leadership & Strategic Management",
      highlight: "Global Business Operations & Executive Strategy"
    },
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "University of Madras",
      year: "2000",
      field: "Computer Science & Software Engineering",
      highlight: "Advanced Algorithms & Systems Design"
    }
  ] as EducationItem[],

  skillCategories: [
    {
      category: "AI & Data Science",
      iconName: "BrainCircuit",
      skills: ["RAG Pipelines", "LLMOps", "Multi-Agent Systems", "ReAct Framework", "Tool-Calling", "Vector Search", "GenAI", "Agentic AI"]
    },
    {
      category: "Intelligent Automation",
      iconName: "Cpu",
      skills: ["BPM Architecture", "RPA", "OCR", "IDP", "Pega Systems", "Appian", "UiPath", "Blue Prism", "ABBYY FineReader"]
    },
    {
      category: "Programming & Engineering",
      iconName: "Code2",
      skills: ["Python (LangChain, FastAPI)", "Microservices Architecture", "Pega PRPC", "SQL & Vector DBs", "REST APIs", "CI/CD Pipelines"]
    },
    {
      category: "Cloud Infrastructure",
      iconName: "Cloud",
      skills: ["Google Cloud (Vertex AI, BigQuery, GKE, Cloud Run)", "Azure (Azure ML, AKS, Data Factory)", "Data Sovereignty & Governance"]
    },
    {
      category: "Leadership & Governance",
      iconName: "UserCheck",
      skills: ["Customer Focus", "C-Level Executive Advisory", "Team Building & Mentoring", "Enterprise Innovation", "Continuous Learning", "Problem-Solving Mindset"]
    }
  ] as SkillCategory[],

  awards: [
    {
      title: "Next 100 CIO Award",
      organization: "ITNext",
      badge: "Industry Leader",
      icon: "Trophy"
    },
    {
      title: "Future CIO 500 Award",
      organization: "Enterprise IT World",
      badge: "Top 500 CIO",
      icon: "Award"
    },
    {
      title: "Partner All-Star Award",
      organization: "Google Cloud",
      badge: "Excellence in AI",
      icon: "Cloud"
    },
    {
      title: "Fast Growing Practice Award",
      organization: "Tata Consultancy Services (TCS)",
      badge: "Scale & Impact",
      icon: "TrendingUp"
    },
    {
      title: "Star Team Award",
      organization: "XBP Global",
      badge: "Engineering Excellence",
      icon: "Star"
    }
  ] as AwardItem[],

  contactInfo: {
    email: "dr.sha.selvaraj@gmail.com",
    phone: "+91-9047593020",
    location: "Chennai, India — Open for Relocation",
    linkedin: "https://linkedin.com/in/selvaraj-shanmugam",
    github: "https://github.com",
    resumeUrl: "#contact"
  }
};
