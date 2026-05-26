
import React, { useEffect, useRef } from 'react';

export const SplashCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const splashesRef = useRef<Array<{ x: number; y: number; size: number; opacity: number; life: number }>>([]);
  const animationRef = useRef<number>();
  const gold = { r: 198, g: 161, b: 91 };

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
      
      // Add new splash - 100% bigger (was 20 + 15, now 40 + 30)
      splashesRef.current.push({
        x,
        y,
        size: Math.random() * 40 + 30,
        opacity: 0.5, // 50% less opacity (was 1.0)
        life: 1.0
      });

      // Limit number of splashes
      if (splashesRef.current.length > 30) {
        splashesRef.current.shift();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = splashesRef.current.length - 1; i >= 0; i--) {
        const splash = splashesRef.current[i];
        
        // Update splash - 30% slower (was 0.015, now ~0.0105)
        splash.life -= 0.0105;
        splash.size += 1.12; // 100% bigger growth (was 0.56, now 1.12)
        splash.opacity = splash.life * 0.5; // 50% less opacity

        if (splash.life <= 0) {
          splashesRef.current.splice(i, 1);
          continue;
        }

        // Draw splash with orange gradient
        const gradient = ctx.createRadialGradient(
          splash.x, splash.y, 0,
          splash.x, splash.y, splash.size
        );
        gradient.addColorStop(0, `rgba(${gold.r}, ${gold.g}, ${gold.b}, ${splash.opacity * 0.18})`);
        gradient.addColorStop(0.4, `rgba(${gold.r}, ${gold.g}, ${gold.b}, ${splash.opacity * 0.08})`);
        gradient.addColorStop(1, `rgba(${gold.r}, ${gold.g}, ${gold.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(splash.x, splash.y, splash.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Add event listener to document instead of canvas to capture all mouse movements
    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
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
