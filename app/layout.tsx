import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PixelDog from "../components/PixelDog";
import DockNavigation from "../components/DockNavigation";
import GridScan from "../components/ui/GridScan";
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
        {/* Cyberpunk Grid Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.08}
            scanColor="#00ff00"
            scanOpacity={0.3}
            enablePost
            bloomIntensity={0.4}
            chromaticAberration={0.001}
            noiseIntensity={0.008}
          />
        </div>
        <ClickSpark sparkColor="#00ff00" sparkSize={12} sparkRadius={25} sparkCount={10}>
          <Navigation />
          <main className="min-h-screen relative z-10 main-content">{children}</main>
          <Footer />
        </ClickSpark>
        <PixelDog />
        <DockNavigation />
      </body>
    </html>
  );
}