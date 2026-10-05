"use client";

import React, { useEffect, useRef } from "react";

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Code symbols & syntax tokens
    const codeTokens = [
      "const", "let", "function", "=>", "import", "export",
      "<React.FC>", "useState()", "useEffect()", "useMemo()",
      "interface", "TypeScript", "Next.js", "{...props}",
      "async/await", "Redux", "ApexCharts", "Component",
      "01", "10", "</>", "{}", "[]", "git push", "yarn build",
      "200 OK", "Lighthouse: 99", "60fps", "Docker"
    ];

    interface Particle {
      x: number;
      y: number;
      text: string;
      speedY: number;
      opacity: number;
      color: string;
      size: number;
    }

    const colors = [
      "rgba(200, 203, 109, ",  // Sage Gold (#c8cb6d)
      "rgba(226, 229, 140, ",  // Light Sage (#e2e58c)
      "rgba(126, 138, 66, ",   // Olive Moss (#7e8a42)
      "rgba(230, 152, 50, ",   // Warm Amber (#e69832)
      "rgba(163, 178, 92, ",   // Golden Moss
    ];

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width / 35), 45);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: codeTokens[Math.floor(Math.random() * codeTokens.length)],
        speedY: 0.3 + Math.random() * 0.6,
        opacity: 0.08 + Math.random() * 0.18,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 11 + Math.floor(Math.random() * 4),
      });
    }

    // Grid lines configuration
    const gridSize = 60;

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle cyber grid
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Code Tokens with floating physics & subtle mouse reaction
      ctx.font = "12px 'Geist Mono', 'Fira Code', monospace";

      particles.forEach((p) => {
        p.y -= p.speedY;

        // Reset to bottom if off top screen
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
          p.text = codeTokens[Math.floor(Math.random() * codeTokens.length)];
        }

        // Distance from cursor
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Check if light mode is active
        const isLight = document.documentElement.classList.contains("light");

        let finalOpacity = isLight ? p.opacity * 0.25 : p.opacity;
        if (dist < 180) {
          finalOpacity = Math.min(finalOpacity + (1 - dist / 180) * (isLight ? 0.15 : 0.35), isLight ? 0.25 : 0.6);
        }

        const tokenColor = isLight ? "rgba(92, 107, 47, " : p.color;
        ctx.fillStyle = `${tokenColor}${finalOpacity})`;
        ctx.fillText(p.text, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
