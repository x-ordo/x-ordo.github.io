"use client";

import { useState, useEffect } from "react";

const skills = {
  Languages: ["Python", "TypeScript", "JavaScript"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Vite"],
  Backend: ["FastAPI", "Node.js"],
  "AI / ML": ["OpenAI", "LangChain", "LangGraph", "Gemini", "LlamaIndex"],
  "Database & Cloud": ["Supabase", "MongoDB", "Google Cloud", "Vercel"],
};

const projects = [
  {
    title: "CareGuide",
    description: "AI 기반 만성콩팥병 환자 맞춤형 건강관리 플랫폼",
    tech: ["Python", "FastAPI", "React", "MongoDB", "LangGraph"],
    github: "https://github.com/Prometheus-P/careguide-ckd-platform",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "TripKit",
    description: "AI 여행 플래너 플랫폼",
    tech: ["Next.js", "Python", "LangGraph", "Google Cloud", "Gemini"],
    github: "https://github.com/Prometheus-P/tripkit-travel-platform",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "면접코치",
    description: "AI 기반 실시간 모의 면접 및 피드백 플랫폼",
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    github: "https://github.com/Prometheus-P/interview-service",
    color: "from-red-600 to-red-400",
  },
  {
    title: "SatiaChat",
    description: "AI 식단 코칭 챗봇",
    tech: ["React", "TypeScript", "Supabase", "OpenAI", "LlamaIndex"],
    github: "https://github.com/Prometheus-P/satiachat-diet-coach",
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Study Assistant",
    description: "LLM 기반 학습 보조 챗봇",
    tech: ["Python", "FastAPI", "Streamlit", "OpenAI"],
    github: "https://github.com/Prometheus-P/study-assistant-chatbot",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Keyword Radar",
    description: "키워드 소싱 및 제품명 추천 서비스",
    tech: ["Next.js", "TypeScript", "Supabase", "Groq"],
    github: "https://github.com/Prometheus-P/coupang-keyword-radar",
    color: "from-orange-600 to-red-600",
  },
];

function TypeWriter({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="text-red-500">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-red-500">
          P
        </a>
        <div className="flex gap-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Prometheus-P
          </span>
        </h1>
        <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-10">
          <TypeWriter
            texts={[
              "Developer & Entrepreneur",
              "Building AI Solutions",
              "LLM & RAG Specialist",
            ]}
          />
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          AI/ML 기반 솔루션을 개발하는 개발자이자 사업가입니다.
          <br />
          기술과 비즈니스의 교차점에서 가치를 창출합니다.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-full font-medium transition-all hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full font-medium transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <pre className="font-mono text-sm md:text-base overflow-x-auto">
            <code className="text-gray-300">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">prometheus</span> = {"{"}
              {"\n"}
              {"  "}
              <span className="text-red-400">role</span>:{" "}
              <span className="text-green-400">
                [&quot;Developer&quot;, &quot;Entrepreneur&quot;]
              </span>
              ,{"\n"}
              {"  "}
              <span className="text-red-400">focus</span>:{" "}
              <span className="text-green-400">
                [&quot;AI/ML Solutions&quot;, &quot;LLM Applications&quot;,
                &quot;Business Innovation&quot;]
              </span>
              ,{"\n"}
              {"  "}
              <span className="text-red-400">interests</span>:{" "}
              <span className="text-green-400">
                [&quot;Ancient Wisdom&quot;, &quot;Esoteric Knowledge&quot;,
                &quot;Consciousness&quot;]
              </span>
              ,{"\n"}
              {"  "}
              <span className="text-red-400">philosophy</span>:{" "}
              <span className="text-green-400">
                &quot;Bridging the mystical with the technological&quot;
              </span>
              ,{"\n"}
              {"  "}
              <span className="text-red-400">currentlyBuilding</span>:{" "}
              <span className="text-green-400">
                &quot;AI-powered products that matter&quot;
              </span>
              {"\n"}
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-red-400 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-gray-900/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-gray-400 mb-12">
          프로젝트 협업이나 문의사항이 있으시면 연락해주세요.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:parkdavid31@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full font-medium transition-all hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Email
          </a>
          <a
            href="https://github.com/Prometheus-P"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-red-500 rounded-full font-medium transition-all hover:text-red-400"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center text-gray-500">
        <p>&copy; 2025 Prometheus-P. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
