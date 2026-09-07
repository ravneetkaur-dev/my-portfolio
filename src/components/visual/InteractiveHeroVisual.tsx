'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  isAnchor: boolean;
  color: string;
  glowColor: string;
  phase: number;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  alpha: number;
  speedY: number;
}

export const InteractiveHeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseState, setMouseState] = useState({
    x: -1000,
    y: -1000,
    active: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouseState({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMouseState({ x: -1000, y: -1000, active: false });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // 1. Initialize Mysterious Dark Violet Living System Nodes (45 Nodes)
    const nodeCount = 45;
    const nodes: Node[] = [];
    const colors = ['#7c3aed', '#6b21a8', '#9333ea', '#5b21b6', '#a855f7'];

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      const rx = Math.random() * 220 + 50;
      const ry = Math.random() * 180 + 40;

      const bx = canvas.width / 2 + Math.cos(angle) * rx;
      const by = canvas.height / 2 + Math.sin(angle) * ry;
      const bz = (Math.random() - 0.5) * 160;

      const isAnchor = i % 5 === 0;

      nodes.push({
        id: i,
        x: bx,
        y: by,
        z: bz,
        baseX: bx,
        baseY: by,
        baseZ: bz,
        vx: 0,
        vy: 0,
        vz: 0,
        radius: isAnchor ? 4.8 : Math.random() * 2.2 + 1.4,
        isAnchor,
        color: isAnchor ? '#f3e8ff' : colors[i % colors.length],
        glowColor: isAnchor ? 'rgba(124, 58, 237, 0.95)' : 'rgba(91, 33, 182, 0.65)',
        phase: Math.random() * Math.PI * 2,
      });
    }

    // 2. Initialize Ambient Background Micro Particles (60 Particles)
    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: (Math.random() - 0.5) * 180,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.3 + 0.08,
      speedY: (Math.random() - 0.5) * 0.15 - 0.05,
    }));

    // Simulation Render Loop
    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);
      time += 0.012;

      const centerX = width / 2;
      const centerY = height / 2;

      // Dark Obsidian Violet Radial Aura
      const bgGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        30,
        centerX,
        centerY,
        240
      );
      bgGlow.addColorStop(0, 'rgba(91, 33, 182, 0.15)');
      bgGlow.addColorStop(0.6, 'rgba(15, 10, 30, 0.06)');
      bgGlow.addColorStop(1, 'rgba(5, 4, 13, 0)');
      ctx.fillStyle = bgGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 240, 0, Math.PI * 2);
      ctx.fill();

      // Render Floating Micro Particles
      particles.forEach((p) => {
        p.y += p.speedY;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pScale = 360 / (360 + p.z);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha * pScale})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * pScale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update Node Motion & Interaction Physics
      nodes.forEach((n) => {
        const driftX = Math.sin(time + n.phase) * 18 + Math.cos(time * 0.6 + n.id) * 10;
        const driftY = Math.cos(time * 0.7 + n.phase) * 16 + Math.sin(time * 0.4 + n.id) * 8;
        const driftZ = Math.sin(time * 0.5 + n.phase) * 20;

        const targetX = n.baseX + driftX;
        const targetY = n.baseY + driftY;
        const targetZ = n.baseZ + driftZ;

        // Cursor Disturbance Interaction Physics
        if (mouseState.active) {
          const distToMouse = Math.hypot(mouseState.x - n.x, mouseState.y - n.y);
          const maxDist = 160;

          if (distToMouse < maxDist) {
            const pullForce = (1 - distToMouse / maxDist) * 25;
            const angleToMouse = Math.atan2(mouseState.y - n.y, mouseState.x - n.x);

            n.vx += Math.cos(angleToMouse) * pullForce * 0.05;
            n.vy += Math.sin(angleToMouse) * pullForce * 0.05;
          }
        }

        n.x += (targetX - n.x) * 0.03 + n.vx;
        n.y += (targetY - n.y) * 0.03 + n.vy;
        n.z += (targetZ - n.z) * 0.03 + n.vz;

        n.vx *= 0.88;
        n.vy *= 0.88;
        n.vz *= 0.88;
      });

      // 3. Render Mysterious Violet-Black Laser Network Lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          const maxConnectDist = 145;

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.35;

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);

            const isAnchorConnection = n1.isAnchor || n2.isAnchor;
            if (isAnchorConnection) {
              ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha * 1.2})`;
              ctx.lineWidth = 1.1;
            } else {
              ctx.strokeStyle = `rgba(91, 33, 182, ${lineAlpha})`;
              ctx.lineWidth = 0.75;
            }
            ctx.stroke();
          }
        }
      }

      // 4. Render Temporary Cursor Laser Connection Lines
      if (mouseState.active) {
        const sortedByMouse = [...nodes].sort(
          (a, b) => Math.hypot(mouseState.x - a.x, mouseState.y - a.y) - Math.hypot(mouseState.x - b.x, mouseState.y - b.y)
        );

        sortedByMouse.slice(0, 4).forEach((nearestNode) => {
          const d = Math.hypot(mouseState.x - nearestNode.x, mouseState.y - nearestNode.y);
          if (d < 180) {
            const cursorAlpha = (1 - d / 180) * 0.6;
            ctx.beginPath();
            ctx.moveTo(mouseState.x, mouseState.y);
            ctx.lineTo(nearestNode.x, nearestNode.y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${cursorAlpha})`;
            ctx.lineWidth = 1.3;
            ctx.setLineDash([3, 3]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        });
      }

      // 5. Render Mysterious Living System Nodes
      nodes.forEach((n) => {
        const scale = 360 / (360 + n.z);
        const drawRadius = n.radius * scale;

        if (n.isAnchor) {
          const glowGrad = ctx.createRadialGradient(
            n.x,
            n.y,
            1,
            n.x,
            n.y,
            drawRadius * 4.8
          );
          glowGrad.addColorStop(0, n.glowColor);
          glowGrad.addColorStop(1, 'rgba(5, 4, 13, 0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(n.x, n.y, drawRadius * 4.8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = n.color;
        ctx.shadowBlur = n.isAnchor ? 16 : 6;
        ctx.shadowColor = n.glowColor;
        ctx.beginPath();
        ctx.arc(n.x, n.y, drawRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', updateSize);
    };
  }, [mouseState.active, mouseState.x, mouseState.y]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[420px] lg:h-[480px] xl:h-[520px] max-w-4xl mx-auto flex items-center justify-center select-none cursor-pointer group"
    >
      <canvas ref={canvasRef} className="w-full h-full object-contain pointer-events-none" />
    </div>
  );
};
