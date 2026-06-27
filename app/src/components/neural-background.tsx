"use client";

import { useEffect, useRef } from "react";

export function NeuralBackground() {
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
    resize();
    window.addEventListener("resize", resize);

    // Signal lines — oscilloscope-style traces
    const signalCount = 4;
    const signals = Array.from({ length: signalCount }, (_, i) => ({
      y: 0.15 + (i / (signalCount - 1)) * 0.55,
      speed: 0.4 + Math.random() * 0.3,
      amplitude: 8 + Math.random() * 12,
      frequency: 0.008 + Math.random() * 0.012,
      phase: Math.random() * Math.PI * 2,
      opacity: 0.08 + Math.random() * 0.06,
    }));

    // Nodes — pulsing dots at grid intersections
    const nodeCount = 18;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: 1 + Math.random() * 2,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.3 + Math.random() * 0.4,
      opacity: 0.04 + Math.random() * 0.08,
    }));

    // Particles — slow drifting
    const particleCount = 30;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * (canvas?.width ?? 1920),
      y: Math.random() * (canvas?.height ?? 1080),
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: 0.5 + Math.random() * 1.0,
      opacity: 0.02 + Math.random() * 0.04,
    }));

    function draw() {
      if (!canvas || !ctx) return;
      time += 0.016;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Subtle grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 2. Signal traces
      for (const sig of signals) {
        ctx.strokeStyle = `rgba(220, 38, 38, ${sig.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 2) {
          const t = x * sig.frequency + time * sig.speed + sig.phase;
          const y =
            canvas.height * sig.y + Math.sin(t) * sig.amplitude + Math.sin(t * 2.3) * sig.amplitude * 0.4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // 3. Signal envelope — subtle glow behind traces
      for (const sig of signals) {
        const gradient = ctx.createLinearGradient(0, canvas.height * sig.y - 20, 0, canvas.height * sig.y + 20);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, `rgba(220, 38, 38, ${sig.opacity * 0.3})`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, canvas.height * sig.y - 20, canvas.width, 40);
      }

      // 4. Pulsing nodes
      for (const node of nodes) {
        const pulse = Math.sin(time * node.pulseSpeed + node.pulsePhase) * 0.5 + 0.5;
        const x = node.x * canvas.width;
        const y = node.y * canvas.height;
        const r = node.size + pulse * 1.5;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${node.opacity + pulse * 0.04})`;
        ctx.fill();

        // node halo
        ctx.beginPath();
        ctx.arc(x, y, r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${(node.opacity + pulse * 0.04) * 0.15})`;
        ctx.fill();
      }

      // 5. Particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{ opacity: 0.7 }}
    />
  );
}

