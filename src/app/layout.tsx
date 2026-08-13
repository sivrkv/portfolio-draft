import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Dr. Selvaraj Shanmugam | AI & Intelligent Automation Leader",
  description:
    "Official portfolio of Dr. Selvaraj Shanmugam (Selva) — Technology Head with 25+ years driving Enterprise AI, GenAI CoE, Agentic Systems, and Banking Intelligent Automation.",
  keywords: [
    "Dr. Selvaraj Shanmugam",
    "AI Leader",
    "Intelligent Automation",
    "GenAI",
    "Agentic AI",
    "Banking Technology",
    "Digital Transformation",
    "LLMOps",
    "Multi-Agent Architecture",
  ],
  authors: [{ name: "Dr. Selvaraj Shanmugam" }],
  openGraph: {
    title: "Dr. Selvaraj Shanmugam | AI & Intelligent Automation Leader",
    description:
      "25+ years turning enterprise AI ambition into production reality for global banking & financial services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
