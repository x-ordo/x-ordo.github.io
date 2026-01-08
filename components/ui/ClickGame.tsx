"use client";

import { useState, useCallback, useRef, useEffect } from "react";

type GameState = "idle" | "waiting" | "ready" | "clicked" | "too_early";

export default function ClickGame() {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const startTimeRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearTimeouts();
  }, [clearTimeouts]);

  const startGame = useCallback(() => {
    clearTimeouts();
    setGameState("waiting");
    setReactionTime(null);

    // Random delay between 1.5s and 4s
    const delay = 1500 + Math.random() * 2500;

    timeoutRef.current = setTimeout(() => {
      setGameState("ready");
      startTimeRef.current = Date.now();
    }, delay);
  }, [clearTimeouts]);

  const handleClick = useCallback(() => {
    if (gameState === "idle") {
      startGame();
      return;
    }

    if (gameState === "waiting") {
      // Clicked too early
      clearTimeouts();
      setGameState("too_early");
      return;
    }

    if (gameState === "ready") {
      const time = Date.now() - startTimeRef.current;
      setReactionTime(time);
      setAttempts((a) => a + 1);

      if (bestTime === null || time < bestTime) {
        setBestTime(time);
      }

      setGameState("clicked");
      return;
    }

    if (gameState === "clicked" || gameState === "too_early") {
      startGame();
      return;
    }
  }, [gameState, bestTime, startGame, clearTimeouts]);

  const getBackgroundColor = () => {
    switch (gameState) {
      case "idle":
        return "bg-[#171a20]";
      case "waiting":
        return "bg-[#dc2626]";
      case "ready":
        return "bg-[#00ff00]";
      case "clicked":
        return "bg-[#171a20]";
      case "too_early":
        return "bg-[#f97316]";
      default:
        return "bg-[#171a20]";
    }
  };

  const getMessage = () => {
    switch (gameState) {
      case "idle":
        return { title: "REACTION", subtitle: "Click to Start" };
      case "waiting":
        return { title: "WAIT...", subtitle: "Wait for green" };
      case "ready":
        return { title: "CLICK!", subtitle: "NOW!" };
      case "clicked":
        return {
          title: `${reactionTime}ms`,
          subtitle: reactionTime && reactionTime < 200 ? "Excellent!" : reactionTime && reactionTime < 300 ? "Good!" : "Try again",
        };
      case "too_early":
        return { title: "TOO EARLY!", subtitle: "Click to retry" };
      default:
        return { title: "", subtitle: "" };
    }
  };

  const message = getMessage();

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Score Display */}
      <div className="flex items-center justify-between w-full font-mono text-xs">
        <span className="text-[#00cc00] font-bold">
          {bestTime ? `BEST: ${bestTime}ms` : "BEST: ---"}
        </span>
        <span className="text-[#5c5e62]">TRIES: {attempts}</span>
      </div>

      {/* Game Board */}
      <div
        onClick={handleClick}
        className={`relative w-full aspect-[16/9] rounded-lg cursor-pointer transition-colors duration-100 flex flex-col items-center justify-center select-none ${getBackgroundColor()}`}
        style={{ minHeight: "140px", maxHeight: "180px" }}
      >
        <span
          className={`font-mono text-2xl md:text-3xl font-black tracking-tight ${
            gameState === "ready" ? "text-[#0a0a0a]" : "text-white"
          }`}
        >
          {message.title}
        </span>
        <span
          className={`font-mono text-xs mt-1 ${
            gameState === "ready" ? "text-[#0a0a0a]/70" : "text-white/60"
          }`}
        >
          {message.subtitle}
        </span>

        {/* Decorative corners */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-current opacity-30" />
        <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-current opacity-30" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-current opacity-30" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-current opacity-30" />
      </div>

      {/* Instructions */}
      <p className="text-[10px] font-mono text-[#9ca3af] text-center">
        Wait for green, then click as fast as you can
      </p>
    </div>
  );
}
