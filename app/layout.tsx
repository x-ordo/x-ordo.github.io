import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PixelDog from "../components/PixelDog";
import ClickSpark from "../components/ui/ClickSpark";
import { I18nProvider } from "../lib/i18n";

// TDS Style Sans-Serif for Readability
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Hacker Identity Monospace
const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "박하성 | Full-Stack Engineer · 3년 엔지니어링 + 2년 창업 운영",
  description:
    "국가사업 2건, 4개 사업체 운영, 36개+ 프로젝트 경험. AI/LLM, Go, Rust, Python, Next.js, React 전문. 문제를 정의하고 구조를 설계하며 실행까지 책임지는 엔지니어.",
  keywords: ["풀스택 개발자", "소프트웨어 엔지니어", "AI 개발자", "LLM", "Go", "Rust", "Next.js", "React", "TypeScript", "박하성"],
  authors: [{ name: "박하성", url: "https://x-ordo.github.io" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "박하성 | Full-Stack Engineer · 비즈니스 지향 빌더",
    description: "국가사업 2건, 4개 사업체 운영, 36개+ 프로젝트 경험. 문제를 정의하고 구조를 설계하며 실행까지 책임지는 엔지니어.",
    url: "https://x-ordo.github.io",
    siteName: "박하성 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-white`}>
        <I18nProvider>
          <ClickSpark sparkColor="#00ff00" sparkSize={12} sparkRadius={25} sparkCount={10}>
            <Navigation />
            <main className="min-h-screen main-content">{children}</main>
            <Footer />
          </ClickSpark>
          <PixelDog />
        </I18nProvider>
      </body>
    </html>
  );
}