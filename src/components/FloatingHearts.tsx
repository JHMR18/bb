import { useMemo } from 'react';

interface FloatingHeartsProps {
  count?: number;
  subtle?: boolean;
}

export function FloatingHearts({ count = 15, subtle = false }: FloatingHeartsProps) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 4,
      size: subtle ? 12 + Math.random() * 8 : 16 + Math.random() * 12,
      opacity: subtle ? 0.3 + Math.random() * 0.2 : 0.4 + Math.random() * 0.3,
    }));
  }, [count, subtle]);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
          }}
        >
          {Math.random() > 0.5 ? '💕' : '💗'}
        </span>
      ))}
    </div>
  );
}
