
import React, { useEffect, useRef } from 'react';

export const SplashCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const splashesRef = useRef<Array<{ x: number; y: number; size: number; opacity: number; life: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create splash effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Add new splash
      splashesRef.current.push({
        x,
        y,
        size: Math.random() * 30 + 10,
        opacity: 0.8,
        life: 1.0
      });

      // Limit number of splashes
      if (splashesRef.current.length > 20) {
        splashesRef.current.shift();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      splashesRef.current.forEach((splash, index) => {
        // Update splash
        splash.life -= 0.02;
        splash.size += 0.5;
        splash.opacity = splash.life * 0.8;

        if (splash.life <= 0) {
          splashesRef.current.splice(index, 1);
          return;
        }

        // Draw splash with orange gradient
        const gradient = ctx.createRadialGradient(
          splash.x, splash.y, 0,
          splash.x, splash.y, splash.size
        );
        gradient.addColorStop(0, `rgba(255, 84, 0, ${splash.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 84, 0, ${splash.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(255, 84, 0, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(splash.x, splash.y, splash.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};
