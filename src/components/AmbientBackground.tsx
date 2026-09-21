import React, { useEffect, useRef } from 'react';
import { ASSETS } from '../constants';

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    const particles = Array.from({ length: 24 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.3 + 0.5,
      speed: Math.random() * 0.0003 + 0.0001,
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = document.documentElement.scrollHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        if (particle.y < -0.02) particle.y = 1.02;
        particle.phase += 0.018;
        ctx.fillStyle = `rgba(229, 199, 122, ${0.06 + Math.sin(particle.phase) * 0.03})`;
        ctx.beginPath();
        ctx.arc(particle.x * width, particle.y * height, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      frame = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('load', resize, { once: true });
    render();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#07110D]" aria-hidden="true">
      <div
        className="absolute inset-x-0 top-0 min-h-full bg-[position:top_center] bg-no-repeat"
        style={{
          backgroundImage: `url(${ASSETS.portalBackground})`,
          backgroundSize: '100% auto',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07110D]/25" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50" />
    </div>
  );
};
