import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PixelDog from "../components/PixelDog";
import DockNavigation from "../components/DockNavigation";
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
  title: "Haseong Park | Sovereign Hacker",
  description:
    "Sovereign Hacker · Software Engineer · Business-Oriented Builder. I identify leverage points and push them forward.",
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
          <DockNavigation />
        </I18nProvider>
      </body>
    </html>
  );
}