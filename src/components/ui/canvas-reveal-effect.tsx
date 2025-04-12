
"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, memo } from "react";

export const CanvasRevealEffect = memo(
  ({
    colors = [
      [59, 130, 246], // blue
      [139, 92, 246], // purple
    ],
    waveScale = 25,
    colorSpace = "rgb" as "rgb" | "oklch" | "hsl", 
    dotSize = 30,
    animationSpeed = 1,
    containerClassName,
  }: {
    colors?: number[][];
    waveScale?: number;
    colorSpace?: "rgb" | "oklch" | "hsl";
    dotSize?: number;
    animationSpeed?: number;
    containerClassName?: string;
  }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);

      const SPEED = animationSpeed;
      let time = 0;

      // eslint-disable-next-line react-hooks/exhaustive-deps
      const getColor = (x: number, y: number, time: number) => {
        const phase = waveScale;
        const powScale = 0.1;
        const transx = 0.3;
        const transy = 0.7;
        const power = powScale;
        let xw = x;
        let yw = y;

        let xpower = 1;
        let ypower = 1;

        if (power !== undefined) {
          xpower = Math.sign(x) * Math.pow(Math.abs(x), power);
          ypower = Math.sign(y) * Math.pow(Math.abs(y), power);
        }

        const cx = transx;
        const cy = transy;
        const tx = Math.abs(cx - xpower) / phase;
        const ty = Math.abs(cy - ypower) / phase;
        const angle = (tx + ty) * Math.PI * 2 + (time * Math.PI) / 1000;
        const amp = 0.5 + 0.5 * Math.cos(angle);

        const colorIndex = Math.floor(amp * colors.length);
        const nextColorIndex = (colorIndex + 1) % colors.length;
        const colorAmp = amp * colors.length - colorIndex;

        const r =
          colors[colorIndex][0] +
          colorAmp * (colors[nextColorIndex][0] - colors[colorIndex][0]);
        const g =
          colors[colorIndex][1] +
          colorAmp * (colors[nextColorIndex][1] - colors[colorIndex][1]);
        const b =
          colors[colorIndex][2] +
          colorAmp * (colors[nextColorIndex][2] - colors[colorIndex][2]);

        switch (colorSpace) {
          case "oklch":
            return `oklch(${r}% ${g} ${b})`;
          case "hsl":
            return `hsl(${r}, ${g}%, ${b}%)`;
          default:
            return `rgb(${r}, ${g}, ${b})`;
        }
      };

      const drawDot = (x: number, y: number, radius: number, fillColor: string) => {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = fillColor;
        ctx.fill();
      };

      const draw = () => {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

        const step = dotSize;
        const halfHeight = canvas.offsetHeight / 2;
        const halfWidth = canvas.offsetWidth / 2;

        for (let x = step / 2; x < canvas.offsetWidth; x += step) {
          for (let y = step / 2; y < canvas.offsetHeight; y += step) {
            const normX = (x - halfWidth) / halfWidth;
            const normY = (y - halfHeight) / halfHeight;
            const color = getColor(normX, normY, time);
            drawDot(x, y, step / 2, color);
          }
        }

        time += SPEED;
        requestAnimationFrame(draw);
      };

      draw();
      setLoaded(true);
    }, [animationSpeed, colorSpace, colors, dotSize, waveScale]);

    return (
      <div className={cn("relative overflow-hidden", containerClassName)}>
        <canvas
          ref={canvasRef}
          style={{ opacity: loaded ? 1 : 0 }}
          className="h-full w-full transition-opacity duration-[1500ms]"
        />
      </div>
    );
  }
);

CanvasRevealEffect.displayName = "CanvasRevealEffect";
