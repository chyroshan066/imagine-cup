// import { useEffect, useRef, useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { useGameStore } from "@/store/gameStore";
// import { CelebrationOverlay } from "@/components/CelebrationOverlay";
// import { Model3DViewer } from "@/components/Model3DViewer";
// import { ArrowLeft, RotateCcw } from "lucide-react";
// import {
//   LETTER_PATTERNS,
//   NUMBER_PATTERNS,
//   OBJECT_PATTERNS,
// } from "@/lib/constants";
// import { calculateAccuracy } from "@/lib/utils/drawingUtils";
// import { Button } from "@/components/ui/Button";

// interface Point {
//   x: number;
//   y: number;
// }

// const PracticePage = () => {
//   const navigate = useNavigate();
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [userPoints, setUserPoints] = useState<Point[]>([]);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [accuracy, setAccuracy] = useState<number | null>(null);
//   const [showCelebration, setShowCelebration] = useState(false);
//   const [show3DModel, setShow3DModel] = useState(false);
//   const [countdown, setCountdown] = useState<number | null>(null);

//   const { currentCategory, getCurrentItem, incrementProgress, progress } =
//     useGameStore();

//   const currentItem = getCurrentItem();

//   const getPattern = useCallback(() => {
//     if (!currentCategory || !currentItem) return null;
//     switch (currentCategory) {
//       case "numbers":
//         return NUMBER_PATTERNS[currentItem];
//       case "letters":
//         return LETTER_PATTERNS[currentItem];
//       case "objects":
//         return OBJECT_PATTERNS[currentItem];
//       default:
//         return null;
//     }
//   }, [currentCategory, currentItem]);

//   const pattern = getPattern();

//   // Draw dotted pattern
//   const drawPattern = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas || !pattern) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw dotted pattern
//     const dotRadius = 8;
//     ctx.fillStyle = "hsl(var(--muted-foreground))";

//     pattern.points.forEach((point) => {
//       const x = (point.x / 100) * canvas.width;
//       const y = (point.y / 100) * canvas.height;

//       ctx.beginPath();
//       ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
//       ctx.fill();
//     });

//     // Draw user path
//     if (userPoints.length > 1) {
//       ctx.strokeStyle =
//         currentCategory === "numbers"
//           ? "hsl(15, 90%, 60%)"
//           : currentCategory === "letters"
//           ? "hsl(200, 85%, 60%)"
//           : "hsl(160, 70%, 50%)";
//       ctx.lineWidth = 6;
//       ctx.lineCap = "round";
//       ctx.lineJoin = "round";

//       ctx.beginPath();
//       ctx.moveTo(userPoints[0].x, userPoints[0].y);
//       userPoints.forEach((point) => ctx.lineTo(point.x, point.y));
//       ctx.stroke();
//     }
//   }, [pattern, userPoints, currentCategory]);

//   useEffect(() => {
//     if (!currentCategory) {
//       navigate("/");
//       return;
//     }

//     const canvas = canvasRef.current;
//     if (canvas) {
//       canvas.width = Math.min(500, window.innerWidth - 40);
//       canvas.height = Math.min(500, window.innerWidth - 40);
//       drawPattern();
//     }
//   }, [currentCategory, navigate, drawPattern]);

//   useEffect(() => {
//     drawPattern();
//   }, [drawPattern]);

//   const handlePointerDown = (e: React.PointerEvent) => {
//     setIsDrawing(true);
//     const rect = canvasRef.current?.getBoundingClientRect();
//     if (rect) {
//       setUserPoints([{ x: e.clientX - rect.left, y: e.clientY - rect.top }]);
//     }
//   };

//   const handlePointerMove = (e: React.PointerEvent) => {
//     if (!isDrawing) return;
//     const rect = canvasRef.current?.getBoundingClientRect();
//     if (rect) {
//       setUserPoints((prev) => [
//         ...prev,
//         { x: e.clientX - rect.left, y: e.clientY - rect.top },
//       ]);
//     }
//   };

//   const handlePointerUp = () => {
//     setIsDrawing(false);
//     if (userPoints.length > 10 && pattern && canvasRef.current) {
//       const acc = calculateAccuracy(
//         userPoints,
//         pattern,
//         canvasRef.current.width,
//         canvasRef.current.height
//       );
//       setAccuracy(acc);

//       if (acc >= 70) {
//         setShowCelebration(true);
//       } else {
//         setCountdown(3);
//       }
//     }
//   };

//   // Countdown for reset
//   useEffect(() => {
//     if (countdown === null) return;
//     if (countdown > 0) {
//       const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setUserPoints([]);
//       setAccuracy(null);
//       setCountdown(null);
//     }
//   }, [countdown]);

//   const handleCelebrationComplete = () => {
//     setShowCelebration(false);
//     setShow3DModel(true);
//   };

//   const handle3DClose = () => {
//     setShow3DModel(false);
//     setUserPoints([]);
//     setAccuracy(null);
//     incrementProgress();
//   };

//   const handleReset = () => {
//     setUserPoints([]);
//     setAccuracy(null);
//     setCountdown(null);
//   };

//   const categoryColors = {
//     numbers: "bg-numbers",
//     letters: "bg-letters",
//     objects: "bg-objects",
//   };

//   const maxProgress = currentCategory === "numbers" ? 10 : 26;
//   const currentProgress = progress[currentCategory || "numbers"];

//   return (
//     <div className="min-h-screen bg-background p-4">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
//           <ArrowLeft className="w-5 h-5" /> Back
//         </Button>
//         <div className="text-center">
//           <span className="font-display text-2xl font-bold capitalize">
//             {currentCategory}
//           </span>
//           <div className="text-sm text-muted-foreground">
//             {currentProgress + 1} / {maxProgress}
//           </div>
//         </div>
//         <Button variant="ghost" onClick={handleReset} className="gap-2">
//           <RotateCcw className="w-5 h-5" /> Reset
//         </Button>
//       </div>

//       {/* Progress bar */}
//       <div className="w-full max-w-md mx-auto h-3 bg-muted rounded-full mb-8 overflow-hidden">
//         <div
//           className={`h-full ${
//             categoryColors[currentCategory || "numbers"]
//           } transition-all duration-500`}
//           style={{ width: `${(currentProgress / maxProgress) * 100}%` }}
//         />
//       </div>

//       {/* Current item display */}
//       <div className="text-center mb-6">
//         <span className="font-display text-6xl font-bold text-foreground">
//           {currentItem}
//         </span>
//       </div>

//       {/* Canvas */}
//       <div className="flex justify-center mb-6">
//         <canvas
//           ref={canvasRef}
//           className="border-4 border-muted rounded-3xl bg-card shadow-lg touch-none"
//           onPointerDown={handlePointerDown}
//           onPointerMove={handlePointerMove}
//           onPointerUp={handlePointerUp}
//           onPointerLeave={handlePointerUp}
//         />
//       </div>

//       {/* Hidden video for hand tracking */}
//       <video ref={videoRef} className="hidden" />

//       {/* Accuracy display */}
//       {accuracy !== null && (
//         <div className="text-center">
//           <div
//             className={`font-display text-4xl font-bold ${
//               accuracy >= 70 ? "text-success" : "text-destructive"
//             }`}
//           >
//             {accuracy}% Accurate
//           </div>
//           {accuracy < 70 && countdown !== null && (
//             <div className="text-muted-foreground mt-2">
//               Resetting in {countdown}...
//             </div>
//           )}
//         </div>
//       )}

//       {/* Instructions */}
//       {accuracy === null && (
//         <p className="text-center text-muted-foreground">
//           Draw on the canvas following the dots
//         </p>
//       )}

//       {/* Celebration */}
//       {showCelebration && (
//         <CelebrationOverlay onComplete={handleCelebrationComplete} />
//       )}

//       {/* 3D Model */}
//       {show3DModel && currentCategory && (
//         <Model3DViewer
//           item={currentItem}
//           category={currentCategory}
//           onClose={handle3DClose}
//         />
//       )}
//     </div>
//   );
// };

// export default PracticePage;

"use client"; // Required for hooks, refs, and event listeners

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation"; // Next.js App Router hook
import { useGameStore } from "@/store/gameStore";
import { CelebrationOverlay } from "@/components/CelebrationOverlay";
import { Model3DViewer } from "@/components/Model3DViewer";
import { ArrowLeft, RotateCcw } from "lucide-react";
import {
  LETTER_PATTERNS,
  NUMBER_PATTERNS,
  OBJECT_PATTERNS,
} from "@/lib/constants";
import { calculateAccuracy } from "@/lib/utils/drawingUtils";
import { Button } from "@/components/ui/Button";

interface Point {
  x: number;
  y: number;
}

const PracticePage = () => {
  const router = useRouter(); // Changed from useNavigate
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userPoints, setUserPoints] = useState<Point[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [show3DModel, setShow3DModel] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const { currentCategory, getCurrentItem, incrementProgress, progress } =
    useGameStore();

  const currentItem = getCurrentItem();

  const getPattern = useCallback(() => {
    if (!currentCategory || !currentItem) return null;
    switch (currentCategory) {
      case "numbers":
        return NUMBER_PATTERNS[currentItem];
      case "letters":
        return LETTER_PATTERNS[currentItem];
      case "objects":
        return OBJECT_PATTERNS[currentItem];
      default:
        return null;
    }
  }, [currentCategory, currentItem]);

  const pattern = getPattern();

  // Draw dotted pattern
  const drawPattern = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !pattern) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw dotted pattern
    const dotRadius = 8;
    ctx.fillStyle = "hsl(var(--muted-foreground))";

    pattern.points.forEach((point) => {
      const x = (point.x / 100) * canvas.width;
      const y = (point.y / 100) * canvas.height;

      ctx.beginPath();
      ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw user path
    if (userPoints.length > 1) {
      ctx.strokeStyle =
        currentCategory === "numbers"
          ? "hsl(15, 90%, 60%)"
          : currentCategory === "letters"
          ? "hsl(200, 85%, 60%)"
          : "hsl(160, 70%, 50%)";
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      ctx.moveTo(userPoints[0].x, userPoints[0].y);
      userPoints.forEach((point) => ctx.lineTo(point.x, point.y));
      ctx.stroke();
    }
  }, [pattern, userPoints, currentCategory]);

  useEffect(() => {
    if (!currentCategory) {
      router.push("/"); // Changed from navigate("/")
      return;
    }

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = Math.min(500, window.innerWidth - 40);
      canvas.height = Math.min(500, window.innerWidth - 40);
      drawPattern();
    }
  }, [currentCategory, router, drawPattern]);

  useEffect(() => {
    drawPattern();
  }, [drawPattern]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDrawing(true);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setUserPoints([{ x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawing) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setUserPoints((prev) => [
        ...prev,
        { x: e.clientX - rect.left, y: e.clientY - rect.top },
      ]);
    }
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
    if (userPoints.length > 10 && pattern && canvasRef.current) {
      const acc = calculateAccuracy(
        userPoints,
        pattern,
        canvasRef.current.width,
        canvasRef.current.height
      );
      setAccuracy(acc);

      if (acc >= 70) {
        setShowCelebration(true);
      } else {
        setCountdown(3);
      }
    }
  };

  // Countdown for reset
  useEffect(() => {
    if (countdown === null) return;
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setUserPoints([]);
      setAccuracy(null);
      setCountdown(null);
    }
  }, [countdown]);

  const handleCelebrationComplete = () => {
    setShowCelebration(false);
    setShow3DModel(true);
  };

  const handle3DClose = () => {
    setShow3DModel(false);
    setUserPoints([]);
    setAccuracy(null);
    incrementProgress();
  };

  const handleReset = () => {
    setUserPoints([]);
    setAccuracy(null);
    setCountdown(null);
  };

  const categoryColors = {
    numbers: "bg-numbers",
    letters: "bg-letters",
    objects: "bg-objects",
  };

  const maxProgress = currentCategory === "numbers" ? 10 : 26;
  const currentProgress = progress[currentCategory || "numbers"];

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          onClick={() => router.push("/")}
          className="gap-2"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </Button>
        <div className="text-center">
          <span className="font-display text-2xl font-bold capitalize">
            {currentCategory}
          </span>
          <div className="text-sm text-muted-foreground">
            {currentProgress + 1} / {maxProgress}
          </div>
        </div>
        <Button variant="ghost" onClick={handleReset} className="gap-2">
          <RotateCcw className="w-5 h-5" /> Reset
        </Button>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-md mx-auto h-3 bg-muted rounded-full mb-8 overflow-hidden">
        <div
          className={`h-full ${
            categoryColors[currentCategory || "numbers"]
          } transition-all duration-500`}
          style={{ width: `${(currentProgress / maxProgress) * 100}%` }}
        />
      </div>

      {/* Current item display */}
      <div className="text-center mb-6">
        <span className="font-display text-6xl font-bold text-foreground">
          {currentItem}
        </span>
      </div>

      {/* Canvas */}
      <div className="flex justify-center mb-6">
        <canvas
          ref={canvasRef}
          className="border-4 border-muted rounded-3xl bg-card shadow-lg touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />
      </div>

      {/* Hidden video for hand tracking */}
      <video ref={videoRef} className="hidden" />

      {/* Accuracy display */}
      {accuracy !== null && (
        <div className="text-center">
          <div
            className={`font-display text-4xl font-bold ${
              accuracy >= 70 ? "text-success" : "text-destructive"
            }`}
          >
            {accuracy}% Accurate
          </div>
          {accuracy < 70 && countdown !== null && (
            <div className="text-muted-foreground mt-2">
              Resetting in {countdown}...
            </div>
          )}
        </div>
      )}

      {/* Instructions */}
      {accuracy === null && (
        <p className="text-center text-muted-foreground">
          Draw on the canvas following the dots
        </p>
      )}

      {/* Celebration */}
      {showCelebration && (
        <CelebrationOverlay onComplete={handleCelebrationComplete} />
      )}

      {/* 3D Model */}
      {show3DModel && currentCategory && (
        <Model3DViewer
          item={currentItem}
          category={currentCategory}
          onClose={handle3DClose}
        />
      )}
    </div>
  );
};

export default PracticePage;
