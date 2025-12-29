import type { Metadata } from "next";
import { Newsreader, Syne } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PixelDog from "../components/PixelDog";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body
        className={`${syne.variable} ${newsreader.variable} antialiased`}
      >
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.18),rgba(239,68,68,0))]" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),rgba(245,158,11,0))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        </div>
        <Navigation />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
        <PixelDog />
      </body>
    </html>
  );
}
