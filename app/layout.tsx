import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PixelDog from "../components/PixelDog";
import GridBackground from "../components/ui/GridBackground";
import FloatingParticles from "../components/ui/FloatingParticles";

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
        <GridBackground />
        <FloatingParticles />
        <Navigation />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />
        <PixelDog />
      </body>
    </html>
  );
}
