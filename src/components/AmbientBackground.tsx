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
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.00035 + 0.0001,
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
        ctx.fillStyle = `rgba(229, 199, 122, ${0.08 + Math.sin(particle.phase) * 0.04})`;
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
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen"
        style={{ backgroundImage: `url(${ASSETS.apothecary})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_8%,rgba(75,91,47,.38),transparent_34%),linear-gradient(180deg,rgba(4,9,6,.46),#07110D_48%,#050806_100%)]" />
      <div className="absolute -left-24 top-0 h-[42rem] w-72 rotate-[-14deg] rounded-full bg-[#183523]/50 blur-3xl" />
      <div className="absolute -right-24 top-10 h-[38rem] w-72 rotate-[14deg] rounded-full bg-[#102719]/60 blur-3xl" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,.72)_100%)]" />
    </div>
  );
};
