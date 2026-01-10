"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResumePage() {
  const router = useRouter();

  useEffect(() => {
    // Check saved locale preference
    const savedLocale = localStorage.getItem("portfolio-locale");

    // Check browser language
    const browserKorean = navigator.language.startsWith("ko");

    // Determine target locale: saved preference > browser language > default (en)
    const targetLocale = savedLocale || (browserKorean ? "ko" : "en");

    // Redirect to the appropriate resume page
    router.replace(`/resume/${targetLocale}`);
  }, [router]);

  // Loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        <div className="relative flex h-4 w-4 mx-auto mb-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00cc00]"></span>
        </div>
        <p className="text-[#00cc00] font-mono text-sm">Redirecting...</p>
      </div>
    </div>
  );
}
