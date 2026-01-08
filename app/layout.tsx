import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PixelDog from "../components/PixelDog";
import DockNavigation from "../components/DockNavigation";
import Squares from "../components/ui/Squares";
import FloatingParticles from "../components/ui/FloatingParticles";
import ClickSpark from "../components/ui/ClickSpark";

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
  title: "Jed Park | Sovereign Hacker",
  description:
    "AI/ML 기반 솔루션을 설계하고 비즈니스 가치를 구현하는 풀스택 개발자.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        <Squares
          direction="diagonal"
          speed={0.3}
          borderColor="rgba(0, 0, 0, 0.02)"
          squareSize={60}
          hoverFillColor="rgba(0, 102, 255, 0.03)"
        />
        <FloatingParticles />
        <ClickSpark sparkColor="#0066ff" sparkSize={12} sparkRadius={25} sparkCount={10}>
          <Navigation />
          <main className="min-h-screen relative z-10 pt-24 md:pt-32">{children}</main>
          <Footer />
        </ClickSpark>
        <PixelDog />
        <DockNavigation />
      </body>
    </html>
  );
}