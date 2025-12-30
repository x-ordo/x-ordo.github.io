"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  animateOn?: "hover" | "view" | "both";
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  onComplete?: () => void;
}

export default function DecryptedText({
  text,
  speed = 50,
  sequential = true,
  revealDirection = "start",
  animateOn = "hover",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*",
  className = "",
  encryptedClassName = "text-[#00ff00]",
  onComplete,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomChar = () =>
    characters[Math.floor(Math.random() * characters.length)];

  const scrambleText = () => {
    return text
      .split("")
      .map((char) => (char === " " ? " " : getRandomChar()))
      .join("");
  };

  const decrypt = () => {
    if (isDecrypting) return;
    setIsDecrypting(true);

    let revealedCount = 0;
    const totalChars = text.replace(/ /g, "").length;
    const revealOrder = getRevealOrder();

    intervalRef.current = setInterval(() => {
      if (revealedCount >= totalChars) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsDecrypting(false);
        setHasAnimated(true);
        onComplete?.();
        return;
      }

      setDisplayText((prev) => {
        const chars = prev.split("");
        const textChars = text.split("");
        let revealed = 0;

        for (let i = 0; i < chars.length; i++) {
          if (textChars[i] === " ") continue;
          if (chars[i] === textChars[i]) {
            revealed++;
            continue;
          }

          const shouldReveal = sequential
            ? revealOrder.indexOf(i) <= revealedCount
            : Math.random() > 0.7;

          if (shouldReveal && revealOrder.indexOf(i) <= revealedCount) {
            chars[i] = textChars[i];
          } else {
            chars[i] = getRandomChar();
          }
        }

        return chars.join("");
      });

      revealedCount++;
    }, speed);
  };

  const getRevealOrder = (): number[] => {
    const indices = text
      .split("")
      .map((char, i) => (char !== " " ? i : -1))
      .filter((i) => i !== -1);

    switch (revealDirection) {
      case "end":
        return indices.reverse();
      case "center":
        const mid = Math.floor(indices.length / 2);
        const result: number[] = [];
        for (let i = 0; i <= mid; i++) {
          if (indices[mid - i] !== undefined) result.push(indices[mid - i]);
          if (i !== 0 && indices[mid + i] !== undefined)
            result.push(indices[mid + i]);
        }
        return result;
      default:
        return indices;
    }
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(scrambleText());
    setIsDecrypting(false);
  };

  useEffect(() => {
    if (animateOn === "view" || animateOn === "both") {
      setDisplayText(scrambleText());
    }
  }, []);

  useEffect(() => {
    if (animateOn === "view" || animateOn === "both") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            decrypt();
          }
        },
        { threshold: 0.5 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
  }, [hasAnimated, animateOn]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleHover = () => {
    if (animateOn === "hover" || animateOn === "both") {
      reset();
      setTimeout(decrypt, 100);
    }
  };

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block font-mono ${className}`}
      onMouseEnter={handleHover}
      aria-label={text}
    >
      {displayText.split("").map((char, i) => (
        <span
          key={i}
          className={char !== text[i] ? encryptedClassName : ""}
        >
          {char}
        </span>
      ))}
    </motion.span>
  );
}
