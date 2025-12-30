"use client";

import { useEffect, useRef } from "react";

interface GridBackgroundProps {
  className?: string;
}

export default function GridBackground({ className = "" }: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      const gridSize = 40;
      ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawGlowingOrbs = () => {
      const orbs = [
        { x: 0.2, y: 0.3, color: "rgba(0, 255, 0, 0.08)", size: 400 },
        { x: 0.8, y: 0.2, color: "rgba(0, 255, 255, 0.06)", size: 350 },
        { x: 0.5, y: 0.7, color: "rgba(255, 0, 255, 0.05)", size: 300 },
      ];

      orbs.forEach((orb, i) => {
        const offsetX = Math.sin(time * 0.001 + i) * 50;
        const offsetY = Math.cos(time * 0.0015 + i) * 30;
        const x = orb.x * canvas.width + offsetX;
        const y = orb.y * canvas.height + offsetY;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.size);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    const animate = () => {
      time += 16;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGlowingOrbs();
      drawGrid();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity: 0.8 }}
    />
  );
}
