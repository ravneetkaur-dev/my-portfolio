'use client';

import React, { useEffect, useRef } from 'react';

interface FlyingPetal {
  id: number;
  spriteIndex: number;
  angle: number;
  orbitX: number;
  orbitY: number;
  speed: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  width: number;
  height: number;
  opacity: number;
  phase: number;
  depth: number;
}

interface OrbitDot {
  id: number;
  baseAngle: number;
  speed: number;
  orbitX: number;
  orbitY: number;
  tilt: number;
  radius: number;
  color: string;
  glowColor: string;
  isGlowPulse: boolean;
  phase: number;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  phase: number;
}

export const InteractiveHeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: 0,
    targetY: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load backgroundless main rose visual from user reference image
    const roseImg = new Image();
    let roseLoaded = false;
    roseImg.src = '/images/user-rose-visual.png';
    roseImg.onload = () => {
      roseLoaded = true;
    };

    // Load actual backgroundless flying rose petal sprites extracted from user screenshot
    const petalImgs: HTMLImageElement[] = [];
    const petalSrcs = [
      '/images/petal-1.png',
      '/images/petal-2.png',
      '/images/petal-3.png',
      '/images/petal-4.png',
    ];

    petalSrcs.forEach((src) => {
      const img = new Image();
      img.src = src;
      petalImgs.push(img);
    });

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrame = 0;
    let previousTime = performance.now();

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = event.clientX - rect.left;
      const my = event.clientY - rect.top;

      mouseRef.current.x = mx;
      mouseRef.current.y = my;
      mouseRef.current.targetX = (mx / width - 0.5) * 35;
      mouseRef.current.targetY = (my / height - 0.5) * 35;
      mouseRef.current.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    canvas.addEventListener('pointermove', handlePointerMove, { passive: true });
    canvas.addEventListener('pointerenter', handlePointerMove, { passive: true });
    canvas.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    // Initialize 28 Luminous Glowing Dots Orbiting Randomly around the Rose
    const orbitDots: OrbitDot[] = Array.from({ length: 28 }, (_, i) => {
      const isGlowPulse = i % 3 === 0;
      return {
        id: i,
        baseAngle: Math.random() * Math.PI * 2,
        speed: (i % 2 === 0 ? 1 : -1) * (0.0002 + Math.random() * 0.0004),
        orbitX: 180 + Math.random() * 340,
        orbitY: 90 + Math.random() * 200,
        tilt: -Math.PI / 7 + (Math.random() - 0.5) * 0.35,
        radius: isGlowPulse ? 4.2 : 1.8 + Math.random() * 1.6,
        color: isGlowPulse ? '#fff5f7' : i % 2 === 0 ? '#ff9eaa' : '#fda4af',
        glowColor: isGlowPulse ? 'rgba(255, 158, 170, 0.95)' : 'rgba(251, 113, 133, 0.75)',
        isGlowPulse,
        phase: Math.random() * Math.PI * 2,
      };
    });

    // Initialize 22 Spread-Out Orbiting Flying Rose Petals using authentic reference petal sprites
    const flyingPetals: FlyingPetal[] = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      spriteIndex: i % 4,
      angle: (i / 22) * Math.PI * 2 + Math.random() * 0.4,
      orbitX: 250 + Math.random() * 260,
      orbitY: 130 + Math.random() * 180,
      speed: 0.00015 + Math.random() * 0.00022,
      x: -1000,
      y: -1000,
      vx: 0,
      vy: 0,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.015,
      width: 40 + Math.random() * 20,
      height: 45 + Math.random() * 25,
      opacity: 0.65 + Math.random() * 0.35,
      phase: Math.random() * Math.PI * 2,
      depth: Math.random(),
    }));

    // Initialize 60 Background Micro Light Stardust Particles
    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: 0.6 + Math.random() * 1.6,
      alpha: 0.14 + Math.random() * 0.32,
      phase: Math.random() * Math.PI * 2,
    }));

    const getRosePosition = () => ({
      x: width >= 1024 ? width * 0.76 : width * 0.5,
      y: width >= 1024 ? height * 0.5 : height * 0.72,
    });

    let currentMx = 0;
    let currentMy = 0;

    // Helper: Draw authentic 3D Orbiting Flying Rose Petal Sprite
    const drawFlyingPetal = (petal: FlyingPetal) => {
      const img = petalImgs[petal.spriteIndex];
      if (img && img.complete) {
        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate(petal.rotation);

        const scale = (0.5 + petal.depth * 0.6) * (width < 640 ? 0.75 : 1.0);
        ctx.scale(scale, scale);

        ctx.globalAlpha = petal.opacity;

        // Soft crimson aura behind floating petal
        const pAura = ctx.createRadialGradient(0, 0, 5, 0, 0, 45);
        pAura.addColorStop(0, 'rgba(244, 63, 94, 0.25)');
        pAura.addColorStop(1, 'rgba(5, 4, 13, 0)');
        ctx.fillStyle = pAura;
        ctx.beginPath();
        ctx.arc(0, 0, 45, 0, Math.PI * 2);
        ctx.fill();

        const w = img.width;
        const h = img.height;
        ctx.drawImage(img, -w / 2, -h / 2, w, h);

        ctx.restore();
        ctx.globalAlpha = 1;
      }
    };

    // Update Petal Physics & Interactive Mouse Deflection
    const updateFlyingPetal = (
      petal: FlyingPetal,
      cx: number,
      cy: number,
      delta: number
    ) => {
      petal.angle += petal.speed * delta;
      const wave = Math.sin(performance.now() * 0.0008 + petal.phase);

      const targetX = cx + Math.cos(petal.angle) * (petal.orbitX + wave * 20);
      const targetY = cy + Math.sin(petal.angle) * (petal.orbitY + wave * 14);

      // Spring pull towards orbit target
      petal.vx += (targetX - petal.x) * 0.0045;
      petal.vy += (targetY - petal.y) * 0.0045;

      // Mouse Hover Wind Interaction Physics
      const mouse = mouseRef.current;
      if (mouse.active) {
        const dx = petal.x - mouse.x;
        const dy = petal.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        const forceRadius = 180;

        if (dist > 0 && dist < forceRadius) {
          const force = Math.pow(1 - dist / forceRadius, 2) * 1.8;
          // Repulsive force + swirl vortex component
          petal.vx += (dx / dist) * force * 1.3 + (-dy / dist) * force * 0.45;
          petal.vy += (dy / dist) * force * 1.3 + (dx / dist) * force * 0.45;
          petal.rotationSpeed += (Math.random() - 0.5) * 0.006;
        }
      }

      // Damping
      petal.vx *= 0.92;
      petal.vy *= 0.92;

      petal.x += petal.vx * (delta / 16.67);
      petal.y += petal.vy * (delta / 16.67);
      petal.rotation += petal.rotationSpeed * (delta / 16.67);

      if (petal.x === -1000) {
        petal.x = targetX;
        petal.y = targetY;
      }
    };

    // Main Render Loop
    const render = (time: number) => {
      const delta = Math.min(time - previousTime, 32);
      previousTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse tilt damping
      currentMx += (mouseRef.current.targetX - currentMx) * 0.06;
      currentMy += (mouseRef.current.targetY - currentMy) * 0.06;

      const { x: roseX, y: roseY } = getRosePosition();
      const drawX = roseX + currentMx * 0.8;
      const drawY = roseY + currentMy * 0.8;

      // 1. Render Background Light Stardust
      particles.forEach((p) => {
        const pulse = 0.6 + Math.sin(time * 0.0012 + p.phase) * 0.4;
        ctx.globalAlpha = p.alpha * pulse;
        ctx.fillStyle = '#fecdd3';
        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // 2. Render Luminous Glowing Dots Revolving Randomly Around the Rose (Zero Ring Lines)
      orbitDots.forEach((dot) => {
        const angle = dot.baseAngle + time * dot.speed;
        const waveX = Math.sin(time * 0.001 + dot.phase) * 18;
        const waveY = Math.cos(time * 0.0013 + dot.phase) * 12;

        const localX = Math.cos(angle) * (dot.orbitX + waveX);
        const localY = Math.sin(angle) * (dot.orbitY + waveY);

        const cosTilt = Math.cos(dot.tilt);
        const sinTilt = Math.sin(dot.tilt);

        const worldX = drawX + (localX * cosTilt - localY * sinTilt);
        const worldY = drawY + (localX * sinTilt + localY * cosTilt);

        const pulse = 0.85 + Math.sin(time * 0.002 + dot.phase) * 0.35;
        const drawRadius = dot.radius * pulse;

        // Soft radial glow aura for pulsing dots
        if (dot.isGlowPulse) {
          const glowGrad = ctx.createRadialGradient(
            worldX,
            worldY,
            1,
            worldX,
            worldY,
            drawRadius * 4.5
          );
          glowGrad.addColorStop(0, dot.glowColor);
          glowGrad.addColorStop(1, 'rgba(5, 4, 13, 0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(worldX, worldY, drawRadius * 4.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Dot Core
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(worldX, worldY, drawRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Update Flying Petal Positions with Interactive Physics
      flyingPetals.forEach((petal) => updateFlyingPetal(petal, drawX, drawY, delta));

      // 5. Draw Background Petals (depth < 0.5 -> behind rose in 3D space)
      flyingPetals.forEach((petal) => {
        if (petal.depth < 0.5) drawFlyingPetal(petal);
      });

      // 6. Draw Backgroundless Rose Visual from User Image
      if (roseLoaded || roseImg.complete) {
        ctx.save();
        ctx.translate(drawX, drawY);

        // Living Floating Motion & Breathing Pulse
        const floatY = Math.sin(time * 0.0015) * 7;
        const pulse = 1 + Math.sin(time * 0.001) * 0.016;
        ctx.translate(0, floatY);
        ctx.scale(pulse, pulse);

        // Ambient Deep Radiant Crimson Aura behind Rose (Fades seamlessly to section theme #210a14)
        const backAura = ctx.createRadialGradient(0, 0, 20, 0, 0, 270);
        backAura.addColorStop(0, 'rgba(244, 63, 94, 0.38)');
        backAura.addColorStop(0.45, 'rgba(190, 18, 60, 0.18)');
        backAura.addColorStop(0.85, 'rgba(88, 7, 30, 0.08)');
        backAura.addColorStop(1, 'rgba(33, 10, 20, 0)');
        ctx.fillStyle = backAura;
        ctx.beginPath();
        ctx.arc(0, 0, 270, 0, Math.PI * 2);
        ctx.fill();

        // Fit image dynamically with responsive mobile scaling
        const maxVisualDim = Math.min(
          width * (width < 640 ? 0.65 : width < 1024 ? 0.75 : 0.88),
          height * (width < 640 ? 0.45 : width < 1024 ? 0.55 : 0.88),
          540
        );
        const scale = maxVisualDim / Math.max(roseImg.width, roseImg.height);
        const renderWidth = roseImg.width * scale;
        const renderHeight = roseImg.height * scale;

        ctx.drawImage(
          roseImg,
          -renderWidth / 2,
          -renderHeight / 2,
          renderWidth,
          renderHeight
        );

        ctx.restore();
      }

      // 7. Draw Foreground Petals (depth >= 0.5 -> revolving in front of rose!)
      flyingPetals.forEach((petal) => {
        if (petal.depth >= 0.5) drawFlyingPetal(petal);
      });

      // 8. Interactive Cursor Glow
      if (mouseRef.current.active) {
        const mGlow = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          95
        );
        mGlow.addColorStop(0, 'rgba(255, 158, 170, 0.18)');
        mGlow.addColorStop(1, 'rgba(225, 29, 72, 0)');
        ctx.fillStyle = mGlow;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 95, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerenter', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full select-none pointer-events-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-20 cursor-pointer pointer-events-auto" />
    </div>
  );
};
