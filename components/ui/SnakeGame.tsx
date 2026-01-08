"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

const GRID_SIZE = 20;
const CELL_SIZE = 15;
const INITIAL_SPEED = 150;

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 10 });
  const [direction, setDirection] = useState<Position>({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const gameRef = useRef<HTMLDivElement>(null);

  const generateFood = useCallback((): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (snake.some((s) => s.x === newFood.x && s.y === newFood.y));
    return newFood;
  }, [snake]);

  const resetGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 10 });
    setDirection({ x: 1, y: 0 });
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isPlaying && !gameOver && e.key === " ") {
        resetGame();
        return;
      }

      if (gameOver && e.key === " ") {
        resetGame();
        return;
      }

      if (!isPlaying) return;

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
        case "s":
        case "S":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
        case "d":
        case "D":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    },
    [direction, isPlaying, gameOver, resetGame]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        // Wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          setIsPlaying(false);
          if (score > highScore) setHighScore(score);
          return prevSnake;
        }

        // Self collision
        if (prevSnake.some((s) => s.x === newHead.x && s.y === newHead.y)) {
          setGameOver(true);
          setIsPlaying(false);
          if (score > highScore) setHighScore(score);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, INITIAL_SPEED - Math.min(score, 100));
    return () => clearInterval(interval);
  }, [direction, food, isPlaying, gameOver, score, highScore, generateFood]);

  // Touch controls
  const handleTouch = (dir: "up" | "down" | "left" | "right") => {
    if (!isPlaying && !gameOver) {
      resetGame();
      return;
    }
    if (gameOver) {
      resetGame();
      return;
    }

    switch (dir) {
      case "up":
        if (direction.y !== 1) setDirection({ x: 0, y: -1 });
        break;
      case "down":
        if (direction.y !== -1) setDirection({ x: 0, y: 1 });
        break;
      case "left":
        if (direction.x !== 1) setDirection({ x: -1, y: 0 });
        break;
      case "right":
        if (direction.x !== -1) setDirection({ x: 1, y: 0 });
        break;
    }
  };

  return (
    <div className="flex flex-col items-center gap-4" ref={gameRef}>
      {/* Score Display */}
      <div className="flex items-center justify-between w-full max-w-[300px] font-mono text-xs">
        <span className="text-[#00cc00]">SCORE: {score}</span>
        <span className="text-[#5c5e62]">HIGH: {highScore}</span>
      </div>

      {/* Game Board */}
      <div
        className="relative bg-[#0a0a0a] border-2 border-[#00ff00]/30 rounded-lg overflow-hidden"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {/* Grid Lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00ff00 1px, transparent 1px),
              linear-gradient(to bottom, #00ff00 1px, transparent 1px)
            `,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          }}
        />

        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute rounded-sm transition-all duration-75"
            style={{
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE - 1,
              height: CELL_SIZE - 1,
              backgroundColor: index === 0 ? "#00ff00" : "#00cc00",
              boxShadow: index === 0 ? "0 0 8px #00ff00" : "none",
            }}
          />
        ))}

        {/* Food */}
        <div
          className="absolute rounded-full animate-pulse"
          style={{
            left: food.x * CELL_SIZE + 2,
            top: food.y * CELL_SIZE + 2,
            width: CELL_SIZE - 5,
            height: CELL_SIZE - 5,
            backgroundColor: "#ff0066",
            boxShadow: "0 0 10px #ff0066",
          }}
        />

        {/* Overlay Messages */}
        {!isPlaying && !gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-center">
            <span className="text-[#00ff00] font-mono text-sm font-bold mb-2">
              SNAKE GAME
            </span>
            <span className="text-[#5c5e62] font-mono text-xs">
              Press SPACE or tap to start
            </span>
            <span className="text-[#5c5e62] font-mono text-[10px] mt-1">
              WASD / Arrows to move
            </span>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-center">
            <span className="text-[#ff0066] font-mono text-sm font-bold mb-1">
              GAME OVER
            </span>
            <span className="text-[#00ff00] font-mono text-lg font-bold mb-2">
              {score} pts
            </span>
            <span className="text-[#5c5e62] font-mono text-xs">
              Press SPACE to restart
            </span>
          </div>
        )}
      </div>

      {/* Touch Controls (Mobile) */}
      <div className="grid grid-cols-3 gap-1 md:hidden mt-2">
        <div />
        <button
          type="button"
          onClick={() => handleTouch("up")}
          className="w-12 h-12 bg-[#171a20] text-[#00ff00] rounded-lg flex items-center justify-center active:bg-[#00ff00] active:text-[#171a20] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <div />
        <button
          type="button"
          onClick={() => handleTouch("left")}
          className="w-12 h-12 bg-[#171a20] text-[#00ff00] rounded-lg flex items-center justify-center active:bg-[#00ff00] active:text-[#171a20] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => handleTouch("down")}
          className="w-12 h-12 bg-[#171a20] text-[#00ff00] rounded-lg flex items-center justify-center active:bg-[#00ff00] active:text-[#171a20] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => handleTouch("right")}
          className="w-12 h-12 bg-[#171a20] text-[#00ff00] rounded-lg flex items-center justify-center active:bg-[#00ff00] active:text-[#171a20] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
