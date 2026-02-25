"use client";

import { useEffect, useRef } from "react";

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

export function BlobCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<PointerState>({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let width = 0;
    let height = 0;
    let frameId = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (timeMs: number) => {
      const t = timeMs * 0.001;
      const { x: px, y: py, active } = pointerRef.current;
      const cx = width * 0.5;
      const cy = height * 0.5;
      const minSize = Math.min(width, height);
      const pointerPullX = (px - 0.5) * minSize * 0.22;
      const pointerPullY = (py - 0.5) * minSize * 0.22;
      const targetX = active ? cx + pointerPullX : cx;
      const targetY = active ? cy + pointerPullY : cy;

      context.clearRect(0, 0, width, height);

      const halo = context.createRadialGradient(targetX, targetY, minSize * 0.12, targetX, targetY, minSize * 0.6);
      halo.addColorStop(0, "rgba(255, 216, 77, 0.18)");
      halo.addColorStop(0.4, "rgba(255, 122, 0, 0.16)");
      halo.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = halo;
      context.fillRect(0, 0, width, height);

      const radius = minSize * (0.28 + Math.sin(t * 0.7) * 0.015);
      context.beginPath();
      const points = 96;
      for (let i = 0; i <= points; i += 1) {
        const a = (i / points) * Math.PI * 2;
        const warpA = Math.sin(a * 3 + t * 1.1) * 0.06;
        const warpB = Math.sin(a * 5 - t * 0.8) * 0.04;
        const pull = active ? Math.cos(a - Math.atan2(pointerPullY, pointerPullX || 0.0001)) * 0.07 : 0;
        const r = radius * (1 + warpA + warpB + pull);
        const x = targetX + Math.cos(a) * r;
        const y = targetY + Math.sin(a) * r;
        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }
      context.closePath();

      const fill = context.createRadialGradient(
        targetX - radius * 0.25,
        targetY - radius * 0.35,
        radius * 0.25,
        targetX,
        targetY,
        radius * 1.2
      );
      fill.addColorStop(0, "rgba(255, 216, 77, 0.95)");
      fill.addColorStop(0.45, "rgba(255, 152, 30, 0.92)");
      fill.addColorStop(1, "rgba(255, 122, 0, 0.9)");

      context.fillStyle = fill;
      context.shadowColor = "rgba(255, 132, 30, 0.45)";
      context.shadowBlur = 30;
      context.fill();
      context.shadowBlur = 0;

      frameId = window.requestAnimationFrame(draw);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
        y: Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)),
        active: true
      };
    };

    const onLeave = () => {
      pointerRef.current.active = false;
    };

    resize();
    frameId = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}
