import type { Translations } from "@/types/i18n";

const en: Translations = {
  hero: {
    badge: "Sovereign Hacker",
    title: "Sovereign",
    titleAccent: "Hacker.",
    subtitle: "Software Engineer · Business-Oriented Builder",
    valueProposition: "3 years engineering + 2 years startup operations. 2 government projects, 4 ventures, and 36+ products as a Full-Stack Engineer",
    executiveSummary: "I define problems, design systems, and take responsibility through execution. Technology is my thinking tool, not the end goal.",
    ctaPrimary: "View Resume",
    ctaPortfolio: "Portfolio",
    ctaSecondary: "Let's Connect",
    highlightsLabel: "Key Experience",
    highlight1: "2 Government Projects (Digital Signage, Cadastral Data)",
    highlight2: "Operated 4 ventures over 2 years (planning→dev→ops)",
    highlight3: "Built multiple AI/LLM automation systems",
    statusLabel: "Status",
    statusValue: "Seeking Team",
  },
  strengths: {
    badge: "Core Strengths",
    title: "What I Bring",
    items: [
      {
        title: "Full-Stack Engineering",
        description: "System-level thinking across the entire stack",
      },
      {
        title: "Rapid Prototyping",
        description: "MVP execution under real constraints",
      },
      {
        title: "AI-Assisted Development",
        description: "High-velocity development with Claude, Gemini, GPT",
      },
      {
        title: "Product Thinking (PM/PO)",
        description: "Ask 'why build this' before implementation",
      },
      {
        title: "Ownership Mentality",
        description: "Comfortable owning problems beyond job descriptions",
      },
    ],
  },
  techStack: {
    badge: "Problem-Driven",
    title: "Technical Stack",
    categories: [
      {
        category: "System Architecture",
        items: ["Event-driven (NATS JetStream)", "CQRS", "Merkle Trees", "Multi-cloud Failover"],
      },
      {
        category: "Backend / Infra",
        items: ["Go", "Rust", "Python/FastAPI", "Node.js", "AWS", "Cloudflare Workers", "Fly.io"],
      },
      {
        category: "Frontend / Mobile",
        items: ["Next.js", "React", "TypeScript", "Flutter", "Kotlin", "Android"],
      },
      {
        category: "Data & Analytics",
        items: ["TimescaleDB", "PostgreSQL", "Qdrant", "Redis", "Walk-Forward Backtest"],
      },
      {
        category: "AI / LLM",
        items: ["LangChain", "RAG", "MCP Server", "Multi-Agent", "PII Detection"],
      },
      {
        category: "DevOps & Security",
        items: ["CI/CD", "Dependabot", "CVE Monitoring", "Semantic Versioning", "80%+ Coverage"],
      },
      {
        category: "Risk Management",
        items: ["Kelly Criterion", "Almgren-Chriss", "Z-Score Signals", "Correlation Risk"],
      },
    ],
  },
  lookingFor: {
    badge: "What I Seek",
    title: "Ideal Environment",
    subtitle: "After 2 years solo, I learned the value of growing together with teammates",
    items: [
      {
        title: "Founder-led Teams",
        description: "High-trust environments where initiative is allowed and rewarded",
      },
      {
        title: "Growth Culture",
        description: "Teams that learn from each other and exchange feedback",
      },
      {
        title: "Execution Energy",
        description: "Teams with loyalty, conviction, and bias toward action",
      },
    ],
  },
  manifesto: {
    badge: "Value Proposition",
    title: "Problem Domains",
    subtitle: "Market inefficiency is opportunity. I enter high-complexity domains and build solutions that create real value.",
    sectors: [
      {
        zone: "Financial Services",
        problem: "Complex processes designed to hide extraction fees and create barriers.",
        solution: "Transparent Fintech",
      },
      {
        zone: "Regulatory Tech",
        problem: "Manual compliance nightmares and fear-driven bureaucratic overhead.",
        solution: "AI Compliance Automation",
      },
      {
        zone: "Legacy Industries",
        problem: "Static workflows. Paper-based systems in a digital era.",
        solution: "Digital Transformation",
      },
      {
        zone: "Platform Economy",
        problem: "High fees and locked gates preventing direct customer access.",
        solution: "Direct-to-Consumer",
      },
    ],
  },
  metrics: {
    projects: "Projects Completed",
    engineering: "Engineering Years",
    startup: "Startup Operations",
    ventures: "Ventures Operated",
  },
  timeline: {
    badge: "Journey",
    title: "Experience",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume",
  },
  footer: {
    bio: "Sovereign Hacker building AI-powered products that solve real problems.",
    navigation: "Navigation",
    connect: "Connect",
    copyright: "Haseong Park",
    builtWith: "Built with Next.js & Tailwind",
    status: "All Systems Operational",
  },
  projects: {
    badge: "Selected Works",
    title: "Economic Machines",
    subtitle: "AI products, automation systems, and enterprise workflows.",
    viewAll: "View All",
    sectionTitle: "The Intelligence Base",
    sectionSubtitle: "From AI/ML to SaaS, automation to analytics — products built for real business impact.",
  },
  about: {
    badge: "Profile",
    title: "Sovereign Hacker",
    subtitle: "Full-Stack Engineer · 3 Years Engineering + 2 Years Startup Ops",
    titleDescription: "An engineer who understands systems end-to-end and translates that into execution",
    executiveSummary: "2 government projects delivered, 4 ventures founded/operated, 39 products shipped. A Full-Stack Engineer with end-to-end experience from technical implementation to business operations. I don't just write code—I identify leverage points across technical, operational, and market dimensions, and execute.",
    keyMetrics: [
      { label: "Engineering", value: "3 yrs", detail: "Full-Stack Dev" },
      { label: "Startup Ops", value: "2 yrs", detail: "4 Ventures" },
      { label: "Projects", value: "39+", detail: "Design→Ship→Operate" },
      { label: "Gov Projects", value: "2", detail: "Delivered" },
    ],
    capabilitiesTitle: "Core Capabilities",
    toolsetTitle: "Tech Stack",
    philosophyTitle: "Engineering Philosophy",
    philosophySubtitle: "How I approach building",
    philosophyItems: [
      {
        principle: "No Stack Loyalty",
        description: "The problem chooses the tools",
      },
      {
        principle: "Speed > Perfection",
        description: "Ship fast, iterate faster",
      },
      {
        principle: "Systems Compound",
        description: "Features decay, systems endure",
      },
      {
        principle: "Markets Test",
        description: "Markets are the final test suite",
      },
    ],
    vibeCodingTitle: "Vibe Coding Routine",
    vibeCodingSubtitle: "My development methodology combining TDD + SDD + AI Agents",
    vibeCodingDescription: "I operate a development routine that blends TDD (Test-Driven Development) and SDD (Schema-Driven Development) using Claude Code's Skills and Agents. I continuously update custom templates to achieve both development speed and quality.",
    vibeCodingSteps: [
      {
        step: "01. Schema First",
        description: "Define data schemas with Zod/TypeScript → Ensure type safety",
      },
      {
        step: "02. Test Skeleton",
        description: "Write failing test cases → Specify requirements",
      },
      {
        step: "03. AI Agent Delegation",
        description: "Delegate implementation to Claude Code Agent → Context-based code generation",
      },
      {
        step: "04. Skill Invocation",
        description: "Automate repetitive tasks with custom Skills (lint, test, deploy)",
      },
      {
        step: "05. Template Evolution",
        description: "Convert patterns to templates → Reuse in next projects",
      },
    ],
    failureTitle: "Failure & Verification",
    failureSubtitle: "I have experienced real failure, not theoretical lessons",
    failureLessons: [
      {
        title: "Seafood Manufacturing",
        story: "Legal setup, branding, packaging, cold storage completed — production halted due to factory owner's death and line failure.",
        lesson: "Exited early instead of chasing sunk cost",
      },
      {
        title: "Blockchain Investment",
        story: "Invested KRW 20M in a close acquaintance's blockchain company.",
        lesson: "Fraud. Trust but verify.",
      },
      {
        title: "Japan Apparel Import",
        story: "Months of execution, zero market signal.",
        lesson: "Exit when signal is absent",
      },
    ],
    failureRule: "Nothing is real until execution verifies it. Observation alone is worthless.",
    leadershipTitle: "Leadership & Conflict",
    leadershipSubtitle: "How I handle team dynamics",
    leadershipItems: [
      "I have let people go: Autonomy, measurable timelines, and runway were provided. No execution followed. Action is non-negotiable.",
      "I have been let go: Expressed uncertainty about a team's vision due to lack of verification. Intent was neutrality; perception was disloyalty.",
      "Lesson: Intent doesn't matter. Interpretation does. I now communicate with precision.",
      "There is no 'cutting off' for me. Conflict produces results. I value loyalty highly.",
    ],
    rhythmTitle: "Operating Rhythm",
    rhythmSubtitle: "I run on discipline, not inspiration",
    rhythmItems: [
      "Early morning monitoring",
      "Physical training",
      "Service & data checks before coding",
      "AI-delegated tasks where leverage exists",
      "News, economics, geopolitics scanning",
      "Execution until close",
      "Reflection or personal projects at night",
    ],
    finalNote: "I create value in early-stage 0→1 builds, growth-phase tech leadership, and complex system design. If you need an engineer who bridges technology and business, let's connect.",
  },
};

export default en;
