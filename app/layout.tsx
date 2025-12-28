import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prometheus-P | Developer & Entrepreneur",
  description: "AI/ML 기반 솔루션을 개발하는 개발자이자 사업가입니다.",
  keywords: ["Developer", "Entrepreneur", "AI", "ML", "LLM", "Full-Stack"],
  authors: [{ name: "Prometheus-P" }],
  openGraph: {
    title: "Prometheus-P | Developer & Entrepreneur",
    description: "AI/ML 기반 솔루션을 개발하는 개발자이자 사업가입니다.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
