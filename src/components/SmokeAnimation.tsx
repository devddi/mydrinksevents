
import React, { useEffect, useState } from 'react';

interface SmokeParticle {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const SmokeAnimation: React.FC = () => {
  const [particles, setParticles] = useState<SmokeParticle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: SmokeParticle[] = [];
      for (let i = 0; i < 8; i++) {
        newParticles.push({
          id: i,
          size: Math.random() * 60 + 40,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 4,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="smoke-particle animate-smoke-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      
      {/* Drift particles */}
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={`drift-${index}`}
          className="smoke-particle animate-smoke-drift"
          style={{
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 3}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SmokeAnimation;
