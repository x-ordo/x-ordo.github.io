"use client";

import { useI18n } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useI18n();

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1 px-2 py-1 rounded-md font-mono text-xs font-semibold tracking-wider transition-colors hover:bg-[#f0f0f0]"
      aria-label={`Switch to ${locale === "en" ? "Korean" : "English"}`}
    >
      <span className={locale === "en" ? "text-[#00cc00]" : "text-[#9ca3af]"}>
        EN
      </span>
      <span className="text-[#d1d5db]">|</span>
      <span className={locale === "ko" ? "text-[#00cc00]" : "text-[#9ca3af]"}>
        KO
      </span>
    </button>
  );
}
