import { useEffect, useState, useMemo } from "react";
import confetti from "canvas-confetti";
import { playClapSound } from "@/lib/utils/soundUtils";

interface CelebrationOverlayProps {
  onComplete: () => void;
}

export const CelebrationOverlay = ({ onComplete }: CelebrationOverlayProps) => {
  const [showClap, setShowClap] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const starPositions = useMemo(
    () =>
      Array.from({ length: 12 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 0.5,
      })),
    []
  );

  useEffect(() => {
    setIsVisible(true);

    // Play clapping sound
    playClapSound();

    // Fire confetti
    const duration = 2000;
    const end = Date.now() + duration;

    const colors = ["#FFD93D", "#6BCB77", "#4D96FF", "#FF6B6B", "#C9B1FF"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Hide clapping hands after animation
    const timer = setTimeout(() => {
      setShowClap(false);
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {showClap && (
        <div className="text-center animate-pop">
          {/* Clapping hands emoji */}
          <div className="text-[120px] md:text-[180px] mb-4 animate-clap">
            👏
          </div>

          {/* Congratulations text */}
          <h2
            className="font-display text-4xl md:text-6xl font-bold text-card drop-shadow-lg animate-float"
            style={{
              textShadow:
                "2px 2px 0 hsl(var(--primary)), -2px -2px 0 hsl(var(--secondary))",
            }}
          >
            Great Job! 🌟
          </h2>

          {/* Stars animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {starPositions.map((pos, i) => (
              <div
                key={i}
                className="absolute text-4xl animate-pop"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  animationDelay: `${pos.delay}s`,
                }}
              >
                ⭐
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
