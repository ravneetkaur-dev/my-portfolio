'use client';

import React, { useEffect, useRef } from 'react';

interface ActiveScrollPetal {
  id: number;
  spriteIndex: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  rotation: number;
  vRot: number;
  opacity: number;
  maxLife: number;
  life: number;
}

interface ScrollFlyingPetalsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const ScrollFlyingPetals: React.FC<ScrollFlyingPetalsProps> = ({ containerRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activePetalsRef = useRef<ActiveScrollPetal[]>([]);
  const lastScrollRef = useRef<{ left: number; top: number; time: number }>({
    left: 0,
    top: 0,
    time: performance.now(),
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Preload 4 authentic rose petal sprites
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

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener('resize', resize);

    let nextPetalId = 0;

    // Spawn 1-2 scroll transition petals
    const spawnScrollPetals = (direction: 'right' | 'left' | 'down' | 'up', speedFactor: number) => {
      const count = speedFactor > 25 ? 2 : 1; // 1 to 2 petals based on scroll speed

      for (let i = 0; i < count; i++) {
        let startX = 0;
        let startY = 0;
        let vx = 0;
        let vy = 0;

        if (direction === 'right') {
          startX = width * 0.1 + Math.random() * (width * 0.2);
          startY = height * 0.15 + Math.random() * (height * 0.7);
          vx = 4.5 + Math.random() * 4.5 + speedFactor * 0.12;
          vy = (Math.random() - 0.5) * 2.2;
        } else if (direction === 'left') {
          startX = width * 0.8 + Math.random() * (width * 0.15);
          startY = height * 0.15 + Math.random() * (height * 0.7);
          vx = -(4.5 + Math.random() * 4.5 + speedFactor * 0.12);
          vy = (Math.random() - 0.5) * 2.2;
        } else if (direction === 'down') {
          startX = width * 0.15 + Math.random() * (width * 0.7);
          startY = height * 0.1 + Math.random() * (height * 0.15);
          vx = (Math.random() - 0.5) * 2.2;
          vy = 4.5 + Math.random() * 4.5 + speedFactor * 0.12;
        } else {
          startX = width * 0.15 + Math.random() * (width * 0.7);
          startY = height * 0.85;
          vx = (Math.random() - 0.5) * 2.2;
          vy = -(4.5 + Math.random() * 4.5 + speedFactor * 0.12);
        }

        const petal: ActiveScrollPetal = {
          id: nextPetalId++,
          spriteIndex: Math.floor(Math.random() * 4),
          x: startX,
          y: startY,
          vx,
          vy,
          scale: 0.65 + Math.random() * 0.45,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.035,
          opacity: 0,
          maxLife: 85 + Math.random() * 45,
          life: 0,
        };

        // Cap maximum simultaneous active scroll petals to 8
        if (activePetalsRef.current.length < 8) {
          activePetalsRef.current.push(petal);
        }
      }
    };

    // Scroll listener on containerRef
    let lastSpawnTime = 0;
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const currentLeft = el.scrollLeft;
      const currentTop = el.scrollTop;
      const now = performance.now();

      const deltaLeft = currentLeft - lastScrollRef.current.left;
      const deltaTop = currentTop - lastScrollRef.current.top;

      const dist = Math.hypot(deltaLeft, deltaTop);
      const timeDiff = Math.max(1, now - lastScrollRef.current.time);
      const speed = (dist / timeDiff) * 16.67;

      lastScrollRef.current = { left: currentLeft, top: currentTop, time: now };

      // Throttle petal launches (min 200ms between launches unless fast scroll)
      if (speed > 3.5 && now - lastSpawnTime > 200) {
        lastSpawnTime = now;
        let dir: 'right' | 'left' | 'down' | 'up' = 'right';

        if (Math.abs(deltaLeft) > Math.abs(deltaTop)) {
          dir = deltaLeft > 0 ? 'right' : 'left';
        } else {
          dir = deltaTop > 0 ? 'down' : 'up';
        }

        spawnScrollPetals(dir, speed);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Animation Loop
    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      activePetalsRef.current.forEach((petal) => {
        petal.life++;

        // Calculate opacity fade-in (first 15 frames) and fade-out (last 25 frames)
        if (petal.life < 15) {
          petal.opacity = petal.life / 15.0;
        } else if (petal.life > petal.maxLife - 25) {
          petal.opacity = Math.max(0, (petal.maxLife - petal.life) / 25.0);
        } else {
          petal.opacity = 1.0;
        }

        // Move petal
        petal.x += petal.vx;
        petal.y += petal.vy + Math.sin(petal.life * 0.08) * 0.8; // wave sway
        petal.rotation += petal.vRot;

        // Render petal sprite
        const img = petalImgs[petal.spriteIndex];
        if (img && img.complete && petal.opacity > 0) {
          ctx.save();
          ctx.translate(petal.x, petal.y);
          ctx.rotate(petal.rotation);
          ctx.scale(petal.scale, petal.scale);
          ctx.globalAlpha = petal.opacity;

          // Crimson aura glow behind flying scroll petal
          const aura = ctx.createRadialGradient(0, 0, 5, 0, 0, 50);
          aura.addColorStop(0, 'rgba(244, 63, 94, 0.35)');
          aura.addColorStop(1, 'rgba(5, 4, 13, 0)');
          ctx.fillStyle = aura;
          ctx.beginPath();
          ctx.arc(0, 0, 50, 0, Math.PI * 2);
          ctx.fill();

          const w = img.width;
          const h = img.height;
          ctx.drawImage(img, -w / 2, -h / 2, w, h);

          ctx.restore();
          ctx.globalAlpha = 1;
        }
      });

      // Remove dead petals
      activePetalsRef.current = activePetalsRef.current.filter(
        (p) => p.life < p.maxLife && p.x >= -120 && p.x <= width + 120 && p.y >= -120 && p.y <= height + 120
      );

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-40"
    />
  );
};
