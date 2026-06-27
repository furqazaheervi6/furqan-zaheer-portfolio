"use client";

import { useEffect, useRef } from "react";

interface InterestVisualProps {
  mode: "architecture" | "manga" | "history" | "mathematics";
  className?: string;
}

export function InterestVisual({ mode, className = "" }: InterestVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * 2;
        canvas.height = rect.height * 2;
        canvas.style.width = rect.width + "px";
        canvas.style.height = rect.height + "px";
        ctx.scale(2, 2);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    function drawArchitecture(w: number, h: number) {
      // Arch + geometric pattern
      const cx = w / 2;
      const cy = h / 2 + 20;

      // Arch outline
      ctx.beginPath();
      ctx.moveTo(20, h - 20);
      ctx.lineTo(20, 40);
      ctx.quadraticCurveTo(cx, -10, w - 20, 40);
      ctx.lineTo(w - 20, h - 20);
      ctx.strokeStyle = "rgba(220, 38, 38, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner arch
      ctx.beginPath();
      ctx.moveTo(40, h - 40);
      ctx.lineTo(40, 55);
      ctx.quadraticCurveTo(cx, 15, w - 40, 55);
      ctx.lineTo(w - 40, h - 40);
      ctx.strokeStyle = "rgba(220, 38, 38, 0.06)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Columns
      ctx.fillStyle = "rgba(220, 38, 38, 0.03)";
      ctx.fillRect(18, 50, 4, h - 70);
      ctx.fillRect(w - 22, 50, 4, h - 70);

      // Geometric grid within
      const gridSize = 12;
      for (let x = 50; x < w - 50; x += gridSize) {
        for (let y = 50; y < h - 50; y += gridSize) {
          const v = Math.sin(x * 0.05 + time) * Math.cos(y * 0.05 + time * 0.7);
          if (v > 0.6) {
            ctx.fillStyle = `rgba(220, 38, 38, ${(v - 0.6) * 0.06})`;
            ctx.fillRect(x, y, gridSize - 1, gridSize - 1);
          }
        }
      }
    }

    function drawManga(w: number, h: number) {
      const cx = w / 2;
      const cy = h / 2;

      // Dark atmospheric rays
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12 + time * 0.02;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        const ex = cx + Math.cos(angle) * w;
        const ey = cy + Math.sin(angle) * h;
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = `rgba(220, 38, 38, ${0.02 + Math.sin(time * 0.5 + i) * 0.01})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Grip marks (cross-hatch)
      for (let i = 0; i < 20; i++) {
        const x = 20 + Math.random() * (w - 40);
        const y = 20 + Math.random() * (h - 40);
        const len = 4 + Math.random() * 8;
        const angle = Math.random() * Math.PI;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
        ctx.strokeStyle = `rgba(220, 38, 38, ${0.03 + Math.random() * 0.04})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Orbiting dark eclipse ring
      ctx.beginPath();
      ctx.ellipse(cx, cy, 40, 15, time * 0.1, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(220, 38, 38, 0.08)";
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }

    function drawHistory(w: number, h: number) {
      // Timeline + empire markers
      const y = h / 2;

      // Timeline axis
      ctx.beginPath();
      ctx.moveTo(20, y);
      ctx.lineTo(w - 20, y);
      ctx.strokeStyle = "rgba(220, 38, 38, 0.1)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Era markers
      const eras = [
        { label: "ROM", x: 0.15 },
        { label: "GRK", x: 0.08 },
        { label: "ISL", x: 0.28 },
        { label: "MOD", x: 0.7 },
      ];

      eras.forEach((era, i) => {
        const ex = 20 + (w - 40) * era.x + Math.sin(time * 0.3 + i) * 5;
        ctx.beginPath();
        ctx.moveTo(ex, y - 8);
        ctx.lineTo(ex, y + 8);
        ctx.strokeStyle = "rgba(220, 38, 38, 0.2)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.font = "7px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(220, 38, 38, 0.15)";
        ctx.fillText(era.label, ex, y + 20);
      });

      // Animated sweep dot
      const sweepX = 20 + (w - 40) * ((Math.sin(time * 0.15) + 1) / 2);
      ctx.beginPath();
      ctx.arc(sweepX, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(220, 38, 38, 0.2)";
      ctx.fill();

      // Aux lines
      for (let i = 0; i < 3; i++) {
        const ly = y + (i + 1) * 20;
        ctx.beginPath();
        ctx.moveTo(20, ly);
        ctx.lineTo(w - 20, ly);
        ctx.strokeStyle = `rgba(220, 38, 38, ${0.02 + Math.sin(time + i) * 0.01})`;
        ctx.lineWidth = 0.3;
        ctx.setLineDash([3, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    function drawMathematics(w: number, h: number) {
      const cx = w / 2;
      const cy = h / 2;

      // Algebraic grid (3D projected)
      const spacing = 20;
      for (let i = -5; i <= 5; i++) {
        const x = cx + i * spacing;
        ctx.beginPath();
        ctx.moveTo(x, cy - 60);
        ctx.lineTo(x, cy + 60);
        ctx.strokeStyle = `rgba(220, 38, 38, ${0.04 - Math.abs(i) * 0.005})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      for (let i = -3; i <= 3; i++) {
        const y = cy + i * spacing;
        ctx.beginPath();
        ctx.moveTo(cx - 60, y);
        ctx.lineTo(cx + 60, y);
        ctx.strokeStyle = `rgba(220, 38, 38, ${0.04 - Math.abs(i) * 0.008})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Animated waveforms (biophysical)
      ctx.beginPath();
      for (let x = -50; x <= 50; x++) {
        const v =
          Math.sin(x * 0.08 + time * 1.2) * 15 +
          Math.sin(x * 0.15 + time * 0.8) * 8;
        const px = cx + x;
        const py = cy + v;
        if (x === -50) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = "rgba(220, 38, 38, 0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Second waveform
      ctx.beginPath();
      for (let x = -50; x <= 50; x++) {
        const v =
          Math.cos(x * 0.12 + time * 1.5) * 10 +
          Math.sin(x * 0.2 + time) * 5;
        const px = cx + x;
        const py = cy + v - 30;
        if (x === -50) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = "rgba(220, 38, 38, 0.06)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Eigenvalue markers
      for (let i = 0; i < 4; i++) {
        const angle = Math.PI * 2 * i / 4 + time * 0.1;
        const dx = Math.cos(angle) * 35;
        const dy = Math.sin(angle) * 35;
        ctx.beginPath();
        ctx.arc(cx + dx, cy + dy, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(220, 38, 38, 0.12)";
        ctx.fill();
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      time += 0.03;

      const w = canvas.width / 2;
      const h = canvas.height / 2;

      ctx.clearRect(0, 0, w, h);

      switch (mode) {
        case "architecture":
          drawArchitecture(w, h);
          break;
        case "manga":
          drawManga(w, h);
          break;
        case "history":
          drawHistory(w, h);
          break;
        case "mathematics":
          drawMathematics(w, h);
          break;
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
    />
  );
}

