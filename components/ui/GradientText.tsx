"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#00ff00", "#00ffff", "#ff00ff", "#00ff00"],
  animationSpeed = 8,
}: GradientTextProps) {
  const gradientColors = colors.join(", ");

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${gradientColors})`,
    backgroundSize: "300% auto",
    animation: `gradient-shift ${animationSpeed}s ease infinite`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };

  return (
    <span className={className} style={gradientStyle}>
      {children}
    </span>
  );
}
