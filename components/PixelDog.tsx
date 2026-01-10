"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export default function PixelDog() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isMoving, setIsMoving] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const targetPositionRef = useRef({ x: 100, y: 100 });
  const positionRef = useRef({ x: 100, y: 100 });
  const rafRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Animation loop using RAF
  const animate = useCallback(() => {
    if (!isVisibleRef.current || prefersReducedMotion) {
      rafRef.current = null;
      return;
    }

    const prev = positionRef.current;
    const target = targetPositionRef.current;

    const dx = target.x - prev.x - 20;
    const dy = target.y - prev.y - 20;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 5) {
      setIsMoving(true);
      if (dx > 0) setDirection("right");
      else if (dx < 0) setDirection("left");

      const newPos = {
        x: prev.x + dx * 0.08,
        y: prev.y + dy * 0.08,
      };
      positionRef.current = newPos;
      setPosition(newPos);
    } else {
      setIsMoving(false);
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [prefersReducedMotion]);

  // Throttled mouse move handler using RAF
  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number | null = null;
    let lastMouseEvent: MouseEvent | null = null;

    const updateTarget = () => {
      if (lastMouseEvent) {
        targetPositionRef.current = {
          x: lastMouseEvent.clientX,
          y: lastMouseEvent.clientY
        };
        lastMouseEvent = null;
      }
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMouseEvent = e;
      if (!rafId) {
        rafId = requestAnimationFrame(updateTarget);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  // Start/stop animation based on visibility
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisibleRef.current = false;
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      } else {
        isVisibleRef.current = true;
        if (!rafRef.current) {
          rafRef.current = requestAnimationFrame(animate);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animate, prefersReducedMotion]);

  // Don't render if reduced motion is preferred
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed z-50"
      style={{
        left: position.x,
        top: position.y,
        transform: `scaleX(${direction === "left" ? -1 : 1})`,
        willChange: "transform, left, top",
      }}
    >
      <div className={`pixel-dog ${isMoving ? "running" : "idle"}`}>
        {/* Pixel Dog - Black Shiba style */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 16 16"
          style={{ imageRendering: "pixelated" }}
        >
          {/* Ears */}
          <rect x="2" y="1" width="2" height="2" fill="#1a1a1a" />
          <rect x="12" y="1" width="2" height="2" fill="#1a1a1a" />

          {/* Head */}
          <rect x="3" y="2" width="10" height="6" fill="#2a2a2a" />
          <rect x="2" y="3" width="1" height="4" fill="#2a2a2a" />
          <rect x="13" y="3" width="1" height="4" fill="#2a2a2a" />

          {/* Eyes */}
          <rect x="5" y="4" width="2" height="2" fill="#fff" />
          <rect x="9" y="4" width="2" height="2" fill="#fff" />
          <rect x="6" y="5" width="1" height="1" fill="#000" />
          <rect x="10" y="5" width="1" height="1" fill="#000" />

          {/* Nose */}
          <rect x="7" y="6" width="2" height="1" fill="#ff6b6b" />

          {/* Body */}
          <rect x="4" y="8" width="8" height="5" fill="#2a2a2a" />
          <rect x="3" y="9" width="1" height="3" fill="#2a2a2a" />
          <rect x="12" y="9" width="1" height="3" fill="#2a2a2a" />

          {/* Legs */}
          <rect x="4" y="13" width="2" height="2" fill="#1a1a1a" className="leg-left" />
          <rect x="10" y="13" width="2" height="2" fill="#1a1a1a" className="leg-right" />

          {/* Tail */}
          <rect x="12" y="8" width="2" height="1" fill="#2a2a2a" className="tail" />
          <rect x="13" y="7" width="2" height="1" fill="#2a2a2a" className="tail" />
        </svg>
      </div>

      <style jsx>{`
        .pixel-dog {
          filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.3));
        }

        .pixel-dog.running {
          animation: bounce 0.2s ease-in-out infinite;
        }

        .pixel-dog.idle {
          animation: breathe 1s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes breathe {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-1px);
          }
        }

        .pixel-dog.running .leg-left {
          animation: leg-move 0.1s ease-in-out infinite;
        }

        .pixel-dog.running .leg-right {
          animation: leg-move 0.1s ease-in-out infinite 0.05s;
        }

        .pixel-dog .tail {
          animation: wag 0.3s ease-in-out infinite;
          transform-origin: left center;
        }

        @keyframes leg-move {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes wag {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }
      `}</style>
    </div>
  );
}
