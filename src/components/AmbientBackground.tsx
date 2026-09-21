import React, { useEffect, useRef } from 'react';

/**
 * Atmospheric background reproduction:
 * - Deep emerald-black vignette
 * - Botanical leaf silhouettes framing the upper viewport
 * - Subtle floating gold dust particles (lightweight canvas, 60fps, low CPU)
 */
export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Create 24 lightweight subtle golden specks
    const particleCount = 22;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.6,
      speedY: -(Math.random() * 0.25 + 0.08),
      speedX: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.4 + 0.15,
      pulse: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += 0.02;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        const currentOpacity = p.opacity + Math.sin(p.pulse) * 0.1;
        ctx.fillStyle = `rgba(229, 199, 122, ${Math.max(0.05, currentOpacity)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 w-full max-w-full h-full" aria-hidden="true">
      {/* Base Deep Emerald / Obsidian gradient */}
      <div 
        className="absolute inset-0 bg-[#07110D]" 
      />

      {/* Warm botanical and sunlight glow from top center */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-radial from-[#263F2E]/40 via-[#10231A]/25 to-transparent blur-3xl pointer-events-none" 
      />
      
      {/* Warm amber apothecary lamp glow top left */}
      <div 
        className="absolute top-10 -left-20 w-72 h-72 bg-[#C9A45A]/10 rounded-full blur-3xl pointer-events-none" 
      />

      {/* Warm library glow top right */}
      <div 
        className="absolute top-14 -right-20 w-72 h-72 bg-[#E5C77A]/10 rounded-full blur-3xl pointer-events-none" 
      />

      {/* Decorative botanical leaf corner silhouettes */}
      <svg 
        className="absolute top-0 left-0 w-28 sm:w-44 h-28 sm:h-44 opacity-25 text-[#10231A] pointer-events-none"
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M0,0 Q30,10 40,40 Q10,30 0,0 Z" />
        <path d="M0,20 Q45,25 60,65 Q25,45 0,20 Z" />
        <path d="M15,0 Q25,45 65,60 Q45,25 15,0 Z" />
      </svg>

      <svg 
        className="absolute top-0 right-0 w-28 sm:w-44 h-28 sm:h-44 opacity-25 text-[#10231A] scale-x-[-1] origin-top-right pointer-events-none"
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M0,0 Q30,10 40,40 Q10,30 0,0 Z" />
        <path d="M0,20 Q45,25 60,65 Q25,45 0,20 Z" />
        <path d="M15,0 Q25,45 65,60 Q45,25 15,0 Z" />
      </svg>

      {/* Canvas for fine golden dust particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" />

      {/* Heavy cinematic vignette border */}
      <div 
        className="absolute inset-0 bg-radial from-transparent via-[#07110D]/30 to-[#050605]/95 pointer-events-none" 
      />
    </div>
  );
};
