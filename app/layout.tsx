import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PixelDog from "../components/PixelDog";
import DockNavigation from "../components/DockNavigation";
import Squares from "../components/ui/Squares";
import FloatingParticles from "../components/ui/FloatingParticles";
import ClickSpark from "../components/ui/ClickSpark";

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jed Park | Developer & Entrepreneur",
  description:
    "AI/ML 기반 솔루션을 설계하고 비즈니스 가치를 구현하는 풀스택 개발자.",
  keywords: [
    "Developer",
    "Entrepreneur",
    "AI",
    "ML",
    "LLM",
    "Full-Stack",
    "RAG",
    "Go",
    "Java",
    "Kotlin",
    "Spring",
    "Gin",
    "PocketBase",
    "OracleDB",
    "Upstage",
  ],
  authors: [{ name: "Jed Park" }],
  openGraph: {
    title: "Jed Park | Developer & Entrepreneur",
    description:
      "AI/ML 기반 솔루션을 설계하고 비즈니스 가치를 구현하는 풀스택 개발자.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${jetbrains.variable} font-mono antialiased bg-[#fafafa]`}>
        <Squares
          direction="diagonal"
          speed={0.3}
          borderColor="rgba(0, 255, 0, 0.08)"
          squareSize={60}
          hoverFillColor="rgba(0, 255, 0, 0.15)"
        />
        <FloatingParticles />
        <ClickSpark sparkColor="#00ff00" sparkSize={12} sparkRadius={25} sparkCount={10}>
          <Navigation />
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
        </ClickSpark>
        <PixelDog />
        <DockNavigation />
      </body>
    </html>
  );
}
