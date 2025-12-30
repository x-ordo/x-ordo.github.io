"use client";

import { useRef, useEffect, useState } from "react";

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  speed?: number;
  colors?: string[];
  noiseOpacity?: number;
}

export default function PixelCard({
  children,
  className = "",
  gap = 6,
  speed = 30,
  colors = ["#00ff00", "#00ffff", "#ff00ff"],
  noiseOpacity = 0.08,
}: PixelCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let frame = 0;

    const drawPixels = () => {
      if (!isHovered) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / gap);
      const rows = Math.ceil(canvas.height / gap);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() > 0.92) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            ctx.fillStyle = color;
            ctx.globalAlpha = Math.random() * noiseOpacity + 0.02;
            ctx.fillRect(i * gap, j * gap, gap - 1, gap - 1);
          }
        }
      }

      ctx.globalAlpha = 1;
      frame++;
    };

    const animate = () => {
      drawPixels();
      animationRef.current = setTimeout(() => {
        requestAnimationFrame(animate);
      }, 1000 / speed);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, [isHovered, gap, speed, colors, noiseOpacity]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ mixBlendMode: "screen" }}
      />
      {children}
    </div>
  );
}
