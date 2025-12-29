"use client";

import { useEffect, useState } from "react";

type TypeWriterProps = {
  texts: string[];
};

export default function TypeWriter({ texts }: TypeWriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = fullText.substring(0, currentText.length + 1);
          setCurrentText(nextText);
          if (nextText === fullText) {
            setTimeout(() => setIsDeleting(true), 1600);
          }
        } else {
          const nextText = fullText.substring(0, currentText.length - 1);
          setCurrentText(nextText);
          if (nextText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 90
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="font-medium text-black">
      {currentText}
      <span className="ml-0.5 animate-blink text-[#22c55e]">|</span>
    </span>
  );
}
