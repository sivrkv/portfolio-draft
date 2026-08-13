export interface ImpactStat {
  value: string;
  label: string;
}

export interface InitiativeItem {
  id: string;
  title: string;
  roleTag: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  impactStats: ImpactStat[];
  featured?: boolean;
  gridSpan?: string; // e.g. "col-span-12 md:col-span-8"
  category: string;
  iconName: string;
}

export const INITIATIVES_DATA: InitiativeItem[] = [
  {
    id: "clonex",
    title: "CloneX — Agentic AI Platform for Autonomous IT Operations",
    roleTag: "Lead Architect & Product Strategist",
    category: "Autonomous IT & GenAI",
    iconName: "Bot",
    featured: true,
    gridSpan: "lg:col-span-7",
    shortDescription: "GenAI-driven engineering ops platform automating ticket triaging, defect detection, and resolution workflows via autonomous multi-agent orchestration.",
    fullDescription: "GenAI-driven engineering ops platform automating ticket triaging, defect detection, and resolution workflows. AI-based ticket routing via NLP, automated defect logging through chat/log monitoring, and a GenAI assistant that analyzes historical incidents to recommend solutions — built on a cloud-native microservices architecture with a continuously learning knowledge layer.",
    techStack: [
      "GenAI / LLM",
      "NLP",
      "RAG Pipelines",
      "LLMOps",
      "Vector Search",
      "Python (LangChain, FastAPI)",
      "Multi-Agent Orchestration (ReAct)",
      "Tool-Calling",
      "Microservices",
      "Google Cloud Platform"
    ],
    impactStats: [
      { value: "70%", label: "Faster Ticket Triage" },
      { value: "50%", label: "Faster Resolution Time" },
      { value: "24/7", label: "Autonomous Healing" }
    ]
  },
  {
    id: "cheque-processing",
    title: "AI-Powered Cheque Processing System",
    roleTag: "Principal Solution Architect",
    category: "Intelligent Document Processing",
    iconName: "FileCheck",
    featured: true,
    gridSpan: "lg:col-span-5",
    shortDescription: "Automates cheque scanning, intelligent data extraction, and validation for banking and vendor settlement.",
    fullDescription: "Automates cheque scanning, data extraction, and validation for banking and vendor settlement. OCR + intelligent document processing captures account number, amount, cheque number, date — followed by automated validation and secure transmission to settlement systems.",
    techStack: [
      "OCR",
      "Intelligent Document Processing (IDP)",
      "Machine Learning",
      "Python",
      "Computer Vision / Image Processing",
      "Data Validation APIs",
      "Cloud Infrastructure"
    ],
    impactStats: [
      { value: "80%", label: "Reduction in Manual Effort" },
      { value: "99.4%", label: "Data Extraction Accuracy" }
    ]
  },
  {
    id: "dispute-management",
    title: "Smart Dispute Management System",
    roleTag: "Enterprise Transformation Lead",
    category: "Banking Operations & Automation",
    iconName: "ShieldAlert",
    featured: false,
    gridSpan: "lg:col-span-5",
    shortDescription: "AI-enabled platform streamlining financial dispute handling between banks, vendors, and customers with end-to-end lifecycle analytics.",
    fullDescription: "AI-enabled platform streamlining financial dispute handling between banks, vendors, and customers — intelligent case classification, automated document analysis, AI-assisted routing and resolution workflows, with analytics tracking the full dispute lifecycle.",
    techStack: [
      "RPA",
      "BPM Architecture",
      "Machine Learning",
      "NLP",
      "Python",
      "Data Analytics",
      "Microservices",
      "GCP / Azure",
      "Data Governance & Sovereignty Controls"
    ],
    impactStats: [
      { value: "50%", label: "Faster Dispute Resolution" },
      { value: "100%", label: "Regulatory Compliance Auditability" }
    ]
  },
  {
    id: "iva-agentic",
    title: "Intelligent Virtual Assistant — Enterprise Agentic AI",
    roleTag: "AI Centre of Excellence Lead",
    category: "Conversational & Agentic AI",
    iconName: "Sparkles",
    featured: true,
    gridSpan: "lg:col-span-7",
    shortDescription: "Enterprise-grade IVA leveraging LLMs and multi-agent frameworks to automate customer and employee interactions across banking, insurance, and ops.",
    fullDescription: "Enterprise-grade IVA using LLMs and agentic AI frameworks to automate customer and employee interactions across banking, insurance, operations. Multi-agent orchestration with ReAct patterns and tool-calling, RAG-based retrieval from enterprise knowledge bases, intelligent escalation to humans, integrated with CRM/ITSM/HR via secure API connectors on GCP with data sovereignty.",
    techStack: [
      "Google Vertex AI (Gemini)",
      "Cloud Run",
      "Pub/Sub",
      "Secret Manager",
      "Dialogue Management",
      "CRM & ITSM Integration",
      "Data Sovereignty Controls",
      "LangChain / LlamaIndex"
    ],
    impactStats: [
      { value: "65%", label: "Faster Query Resolution" },
      { value: "80%", label: "Tier-1 Support Automated" },
      { value: "70%", label: "Improved Self-Service Adoption" }
    ]
  }
];
