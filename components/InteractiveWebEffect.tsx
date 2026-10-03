"use client";

import React, { useEffect, useRef } from "react";

interface WebSpoke {
  angle: number;
  length: number;
  maxLength: number;
  speed: number;
}

interface WebRing {
  radius: number;
  targetRadius: number;
  opacity: number;
  tension: number;
}

interface WebParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

interface SpiderWebBurst {
  id: number;
  x: number;
  y: number;
  progress: number;
  spokes: WebSpoke[];
  rings: WebRing[];
  particles: WebParticle[];
  maxRadius: number;
  color: string;
  accentColor: string;
  alpha: number;
  decayRate: number;
}

interface FloatingNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export function InteractiveWebEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Color palettes (Sage Gold, Emerald Neon, Cyan Neon, Amber)
    const colorPalettes = [
      { main: "200, 203, 109", accent: "16, 185, 129" }, // Sage & Emerald
      { main: "16, 185, 129", accent: "56, 189, 248" }, // Emerald & Cyan
      { main: "226, 229, 140", accent: "230, 152, 50" }, // Sage Light & Amber
      { main: "56, 189, 248", accent: "200, 203, 109" }, // Cyan & Sage
    ];

    const bursts: SpiderWebBurst[] = [];
    let burstId = 0;

    // Background floating constellation nodes for ambient web
    const ambientNodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    const nodes: FloatingNode[] = [];

    for (let i = 0; i < ambientNodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.4 + 0.2,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    // Trigger Spider Web Burst on click
    const createWebBurst = (clickX: number, clickY: number) => {
      const palette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
      const numSpokes = Math.floor(Math.random() * 4) + 10; // 10 to 14 spokes
      const maxRadius = Math.min(Math.max(width, height) * 0.28, 260) + Math.random() * 60;
      const numRings = Math.floor(Math.random() * 3) + 4; // 4 to 6 concentric rings

      const spokes: WebSpoke[] = [];
      for (let i = 0; i < numSpokes; i++) {
        const baseAngle = (i / numSpokes) * Math.PI * 2;
        const angleJitter = (Math.random() - 0.5) * 0.15;
        spokes.push({
          angle: baseAngle + angleJitter,
          length: 0,
          maxLength: maxRadius * (0.8 + Math.random() * 0.35),
          speed: 8 + Math.random() * 6,
        });
      }

      const rings: WebRing[] = [];
      for (let r = 1; r <= numRings; r++) {
        const ringFraction = r / numRings;
        rings.push({
          radius: 0,
          targetRadius: maxRadius * ringFraction,
          opacity: 0,
          tension: 0.12 + ringFraction * 0.08,
        });
      }

      // Small glowing sparks shooting along web lines
      const particles: WebParticle[] = [];
      const particleCount = 20 + Math.floor(Math.random() * 15);
      for (let p = 0; p < particleCount; p++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.5 + 1,
          color: Math.random() > 0.5 ? palette.main : palette.accent,
          alpha: 1,
          life: 0,
          maxLife: 40 + Math.random() * 30,
        });
      }

      bursts.push({
        id: burstId++,
        x: clickX,
        y: clickY,
        progress: 0,
        spokes,
        rings,
        particles,
        maxRadius,
        color: palette.main,
        accentColor: palette.accent,
        alpha: 1,
        decayRate: 0.008,
      });

      // Keep maximum bursts under control for 60fps performance
      if (bursts.length > 8) {
        bursts.shift();
      }
    };

    const handlePointerDown = (e: MouseEvent | PointerEvent) => {
      createWebBurst(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("pointerdown", handlePointerDown);

    // Main render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Render ambient spider-mesh connecting nodes & mouse
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 203, 109, ${nodeA.baseAlpha * 0.6})`;
        ctx.fill();

        // Connect node to nearby nodes (ambient spider web thread)
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.14;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(200, 203, 109, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor if within reach
        if (isHovering) {
          const mdx = nodeA.x - mouseX;
          const mdy = nodeA.y - mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 140) {
            const mAlpha = (1 - mdist / 140) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(16, 185, 129, ${mAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.shadowColor = "#10b981";
            ctx.shadowBlur = 4;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }

      // 2. Render expanding Spider Web Bursts
      for (let bIndex = bursts.length - 1; bIndex >= 0; bIndex--) {
        const burst = bursts[bIndex];
        burst.progress += 0.025;

        // Fade out over time
        if (burst.progress > 0.4) {
          burst.alpha -= burst.decayRate * 2.2;
        }

        if (burst.alpha <= 0) {
          bursts.splice(bIndex, 1);
          continue;
        }

        const { x, y, color, accentColor, alpha } = burst;

        // Animate Spokes (Radial web threads)
        burst.spokes.forEach((spoke) => {
          if (spoke.length < spoke.maxLength) {
            spoke.length += spoke.speed;
            if (spoke.length > spoke.maxLength) spoke.length = spoke.maxLength;
          }

          const endX = x + Math.cos(spoke.angle) * spoke.length;
          const endY = y + Math.sin(spoke.angle) * spoke.length;

          // Draw main spoke thread
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = `rgba(${color}, ${alpha * 0.7})`;
          ctx.lineWidth = 1.2;
          ctx.shadowColor = `rgba(${color}, 0.8)`;
          ctx.shadowBlur = 6;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Spoke tip glowing anchor dot
          ctx.beginPath();
          ctx.arc(endX, endY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${accentColor}, ${alpha * 0.9})`;
          ctx.fill();
        });

        // Animate Concentric Rings (Web polygon connectors)
        burst.rings.forEach((ring) => {
          if (ring.radius < ring.targetRadius) {
            ring.radius += (ring.targetRadius - ring.radius) * ring.tension + 2.5;
            if (ring.radius > ring.targetRadius) ring.radius = ring.targetRadius;
          }
          ring.opacity = Math.min(ring.opacity + 0.08, 1) * alpha;

          if (ring.radius > 5 && ring.opacity > 0.01) {
            ctx.beginPath();

            // Connect spoke intersection points to form the polygon spider-web ring
            for (let i = 0; i < burst.spokes.length; i++) {
              const spoke = burst.spokes[i];
              const actualR = Math.min(ring.radius, spoke.length);
              // Slight organic curve / sag between spokes
              const ptX = x + Math.cos(spoke.angle) * actualR;
              const ptY = y + Math.sin(spoke.angle) * actualR;

              if (i === 0) {
                ctx.moveTo(ptX, ptY);
              } else {
                // Subtle quadratic curve for authentic web sag
                const prevSpoke = burst.spokes[i - 1];
                const prevR = Math.min(ring.radius, prevSpoke.length);
                const prevX = x + Math.cos(prevSpoke.angle) * prevR;
                const prevY = y + Math.sin(prevSpoke.angle) * prevR;

                const midAngle = (prevSpoke.angle + spoke.angle) / 2;
                const sagFactor = actualR * 0.94; // slightly pulled towards center
                const cpX = x + Math.cos(midAngle) * sagFactor;
                const cpY = y + Math.sin(midAngle) * sagFactor;

                ctx.quadraticCurveTo(cpX, cpY, ptX, ptY);
              }

              // Glowing joint dewdrop / node at each web crossing
              if (actualR > 10) {
                ctx.save();
                ctx.beginPath();
                ctx.arc(ptX, ptY, 1.8, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${accentColor}, ${ring.opacity * 0.9})`;
                ctx.shadowColor = `rgba(${accentColor}, 0.9)`;
                ctx.shadowBlur = 5;
                ctx.fill();
                ctx.restore();
              }
            }

            // Close the loop
            if (burst.spokes.length > 0) {
              const lastSpoke = burst.spokes[burst.spokes.length - 1];
              const firstSpoke = burst.spokes[0];
              const lastR = Math.min(ring.radius, lastSpoke.length);
              const firstR = Math.min(ring.radius, firstSpoke.length);
              const firstX = x + Math.cos(firstSpoke.angle) * firstR;
              const firstY = y + Math.sin(firstSpoke.angle) * firstR;

              const midAngle = (lastSpoke.angle + firstSpoke.angle + Math.PI * 2) / 2;
              const sagFactor = lastR * 0.94;
              const cpX = x + Math.cos(midAngle) * sagFactor;
              const cpY = y + Math.sin(midAngle) * sagFactor;

              ctx.quadraticCurveTo(cpX, cpY, firstX, firstY);
            }

            ctx.strokeStyle = `rgba(${color}, ${ring.opacity * 0.65})`;
            ctx.lineWidth = 1;
            ctx.shadowColor = `rgba(${color}, 0.6)`;
            ctx.shadowBlur = 4;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        });

        // Center glowing node at click epicenter
        ctx.beginPath();
        ctx.arc(x, y, 4 * alpha, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
        ctx.shadowColor = `rgba(${accentColor}, 1)`;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Expanding center ripple shockwave
        const shockRadius = burst.progress * burst.maxRadius * 0.65;
        if (shockRadius < burst.maxRadius) {
          const shockAlpha = (1 - shockRadius / burst.maxRadius) * alpha * 0.5;
          ctx.beginPath();
          ctx.arc(x, y, shockRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${accentColor}, ${shockAlpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Animate Sparks / Dew particles shooting along web
        burst.particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.96;
          p.vy *= 0.96;
          p.life += 1;
          const pAlpha = (1 - p.life / p.maxLife) * alpha;

          if (pAlpha > 0) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color}, ${pAlpha})`;
            ctx.shadowColor = `rgba(${p.color}, 0.8)`;
            ctx.shadowBlur = 4;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[999] opacity-90"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
