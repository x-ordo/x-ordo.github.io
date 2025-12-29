"use client";

import { CSSProperties } from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = "",
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  const shinyStyle: CSSProperties = {
    backgroundImage:
      "linear-gradient(120deg, rgba(0,255,0,0) 40%, rgba(0,255,0,0.8) 50%, rgba(0,255,0,0) 60%)",
    backgroundSize: "200% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    display: "inline-block",
    animation: disabled ? "none" : `shiny-text ${animationDuration} linear infinite`,
  };

  return (
    <span className={className} style={shinyStyle}>
      {text}
    </span>
  );
}
