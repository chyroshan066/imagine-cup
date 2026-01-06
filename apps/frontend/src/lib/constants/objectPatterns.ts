// Simple object patterns for kids
import { PatternData, Point } from "./numberPatterns";

// Helper to create simple shapes
function createSimpleShape(points: Point[]): PatternData {
  return {
    points,
    strokes: [[...Array(points.length).keys()]],
  };
}

function generateCircle(
  cx: number,
  cy: number,
  r: number,
  numPoints: number
): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI;
    points.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    });
  }
  return points;
}

const createObjectPatterns = (): Record<string, PatternData> => {
  const patterns: Record<string, PatternData> = {};

  // Apple - Simple circle with stem
  patterns["Apple"] = {
    points: [
      ...generateCircle(50, 55, 30, 16),
      { x: 50, y: 22 },
      { x: 50, y: 15 },
      { x: 55, y: 10 },
    ],
    strokes: [[...Array(16).keys()], [16, 17, 18]],
  };

  // Ball - Circle
  patterns["Ball"] = createSimpleShape(generateCircle(50, 50, 35, 20));

  // Cat - Simple face
  patterns["Cat"] = {
    points: [
      // Face circle
      ...generateCircle(50, 55, 28, 14),
      // Left ear
      { x: 28, y: 35 },
      { x: 22, y: 18 },
      { x: 32, y: 28 },
      // Right ear
      { x: 72, y: 35 },
      { x: 78, y: 18 },
      { x: 68, y: 28 },
    ],
    strokes: [[...Array(14).keys()], [14, 15, 16], [17, 18, 19]],
  };

  // Dog - Simple face with ears
  patterns["Dog"] = {
    points: [
      ...generateCircle(50, 55, 28, 14),
      // Left ear (floppy)
      { x: 22, y: 45 },
      { x: 15, y: 55 },
      { x: 20, y: 68 },
      // Right ear (floppy)
      { x: 78, y: 45 },
      { x: 85, y: 55 },
      { x: 80, y: 68 },
    ],
    strokes: [[...Array(14).keys()], [14, 15, 16], [17, 18, 19]],
  };

  // Elephant - Big ears
  patterns["Elephant"] = {
    points: [
      ...generateCircle(50, 50, 25, 12),
      // Left ear
      { x: 25, y: 40 },
      { x: 10, y: 50 },
      { x: 25, y: 60 },
      // Right ear
      { x: 75, y: 40 },
      { x: 90, y: 50 },
      { x: 75, y: 60 },
      // Trunk
      { x: 50, y: 75 },
      { x: 52, y: 88 },
      { x: 58, y: 92 },
    ],
    strokes: [[...Array(12).keys()], [12, 13, 14], [15, 16, 17], [18, 19, 20]],
  };

  // Fish
  patterns["Fish"] = {
    points: [
      { x: 20, y: 50 },
      { x: 35, y: 35 },
      { x: 55, y: 30 },
      { x: 70, y: 40 },
      { x: 75, y: 50 },
      { x: 70, y: 60 },
      { x: 55, y: 70 },
      { x: 35, y: 65 },
      { x: 20, y: 50 },
      // Tail
      { x: 80, y: 50 },
      { x: 95, y: 35 },
      { x: 95, y: 65 },
      { x: 80, y: 50 },
    ],
    strokes: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
  };

  // Giraffe (simplified - just head/neck)
  patterns["Giraffe"] = {
    points: [
      { x: 40, y: 90 },
      { x: 40, y: 70 },
      { x: 38, y: 50 },
      { x: 35, y: 30 },
      { x: 40, y: 20 },
      { x: 55, y: 18 },
      { x: 65, y: 25 },
      { x: 68, y: 38 },
      { x: 60, y: 48 },
      { x: 52, y: 55 },
      { x: 55, y: 70 },
      { x: 55, y: 90 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
  };

  // House
  patterns["House"] = {
    points: [
      // Roof
      { x: 50, y: 15 },
      { x: 20, y: 40 },
      { x: 80, y: 40 },
      // Walls
      { x: 25, y: 40 },
      { x: 25, y: 85 },
      { x: 75, y: 85 },
      { x: 75, y: 40 },
      // Door
      { x: 42, y: 85 },
      { x: 42, y: 60 },
      { x: 58, y: 60 },
      { x: 58, y: 85 },
    ],
    strokes: [
      [0, 1, 2, 0],
      [3, 4, 5, 6, 3],
      [7, 8, 9, 10],
    ],
  };

  // Ice cream (cone)
  patterns["Ice Cream"] = {
    points: [
      // Cone
      { x: 35, y: 45 },
      { x: 50, y: 90 },
      { x: 65, y: 45 },
      // Scoop
      ...generateCircle(50, 35, 18, 12),
    ],
    strokes: [[0, 1, 2], [...Array(12).keys()].map((i) => i + 3)],
  };

  // Jug
  patterns["Jug"] = {
    points: [
      { x: 35, y: 20 },
      { x: 65, y: 20 },
      { x: 70, y: 35 },
      { x: 72, y: 55 },
      { x: 68, y: 75 },
      { x: 55, y: 85 },
      { x: 45, y: 85 },
      { x: 32, y: 75 },
      { x: 28, y: 55 },
      { x: 30, y: 35 },
      { x: 35, y: 20 },
      // Handle
      { x: 70, y: 40 },
      { x: 85, y: 50 },
      { x: 82, y: 65 },
      { x: 70, y: 70 },
    ],
    strokes: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [11, 12, 13, 14],
    ],
  };

  // Kite
  patterns["Kite"] = {
    points: [
      { x: 50, y: 10 },
      { x: 25, y: 40 },
      { x: 50, y: 70 },
      { x: 75, y: 40 },
      { x: 50, y: 10 },
      // Tail
      { x: 50, y: 70 },
      { x: 45, y: 80 },
      { x: 55, y: 88 },
      { x: 48, y: 95 },
    ],
    strokes: [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8],
    ],
  };

  // Lion (face)
  patterns["Lion"] = {
    points: [
      // Mane (larger circle)
      ...generateCircle(50, 50, 38, 16),
      // Face (smaller circle)
      ...generateCircle(50, 52, 22, 12),
    ],
    strokes: [[...Array(16).keys()], [...Array(12).keys()].map((i) => i + 16)],
  };

  // Moon (crescent)
  patterns["Moon"] = {
    points: [
      { x: 70, y: 20 },
      { x: 55, y: 15 },
      { x: 38, y: 20 },
      { x: 25, y: 35 },
      { x: 22, y: 50 },
      { x: 25, y: 65 },
      { x: 38, y: 80 },
      { x: 55, y: 85 },
      { x: 70, y: 80 },
      { x: 60, y: 68 },
      { x: 55, y: 50 },
      { x: 60, y: 32 },
      { x: 70, y: 20 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],
  };

  // Nest (bowl shape)
  patterns["Nest"] = {
    points: [
      { x: 20, y: 40 },
      { x: 25, y: 55 },
      { x: 35, y: 70 },
      { x: 50, y: 78 },
      { x: 65, y: 70 },
      { x: 75, y: 55 },
      { x: 80, y: 40 },
      // Eggs
      ...generateCircle(40, 55, 10, 8),
      ...generateCircle(60, 55, 10, 8),
    ],
    strokes: [
      [0, 1, 2, 3, 4, 5, 6],
      [...Array(8).keys()].map((i) => i + 7),
      [...Array(8).keys()].map((i) => i + 15),
    ],
  };

  // Orange (simple circle)
  patterns["Orange"] = createSimpleShape(generateCircle(50, 50, 32, 18));

  // Pen
  patterns["Pen"] = {
    points: [
      { x: 30, y: 15 },
      { x: 35, y: 12 },
      { x: 38, y: 15 },
      { x: 42, y: 70 },
      { x: 48, y: 85 },
      { x: 35, y: 90 },
      { x: 28, y: 75 },
      { x: 30, y: 15 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7]],
  };

  // Queen (crown)
  patterns["Queen"] = {
    points: [
      { x: 20, y: 80 },
      { x: 20, y: 50 },
      { x: 25, y: 25 },
      { x: 35, y: 40 },
      { x: 50, y: 20 },
      { x: 65, y: 40 },
      { x: 75, y: 25 },
      { x: 80, y: 50 },
      { x: 80, y: 80 },
      { x: 20, y: 80 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
  };

  // Rainbow (arcs)
  patterns["Rainbow"] = {
    points: [
      // Outer arc
      { x: 10, y: 80 },
      { x: 15, y: 55 },
      { x: 28, y: 35 },
      { x: 50, y: 25 },
      { x: 72, y: 35 },
      { x: 85, y: 55 },
      { x: 90, y: 80 },
      // Inner arc
      { x: 75, y: 80 },
      { x: 70, y: 60 },
      { x: 50, y: 48 },
      { x: 30, y: 60 },
      { x: 25, y: 80 },
    ],
    strokes: [
      [0, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11],
    ],
  };

  // Sun
  patterns["Sun"] = {
    points: [
      ...generateCircle(50, 50, 20, 12),
      // Rays
      { x: 50, y: 15 },
      { x: 50, y: 5 },
      { x: 75, y: 25 },
      { x: 85, y: 15 },
      { x: 85, y: 50 },
      { x: 95, y: 50 },
      { x: 75, y: 75 },
      { x: 85, y: 85 },
      { x: 50, y: 85 },
      { x: 50, y: 95 },
      { x: 25, y: 75 },
      { x: 15, y: 85 },
      { x: 15, y: 50 },
      { x: 5, y: 50 },
      { x: 25, y: 25 },
      { x: 15, y: 15 },
    ],
    strokes: [
      [...Array(12).keys()],
      [12, 13],
      [14, 15],
      [16, 17],
      [18, 19],
      [20, 21],
      [22, 23],
      [24, 25],
      [26, 27],
    ],
  };

  // Tree
  patterns["Tree"] = {
    points: [
      // Trunk
      { x: 45, y: 90 },
      { x: 45, y: 60 },
      { x: 55, y: 60 },
      { x: 55, y: 90 },
      // Crown (triangle-ish)
      { x: 50, y: 10 },
      { x: 25, y: 45 },
      { x: 35, y: 45 },
      { x: 20, y: 65 },
      { x: 80, y: 65 },
      { x: 65, y: 45 },
      { x: 75, y: 45 },
      { x: 50, y: 10 },
    ],
    strokes: [
      [0, 1, 2, 3],
      [4, 5, 6, 7, 8, 9, 10, 11],
    ],
  };

  // Umbrella
  patterns["Umbrella"] = {
    points: [
      { x: 15, y: 40 },
      { x: 25, y: 25 },
      { x: 40, y: 18 },
      { x: 50, y: 15 },
      { x: 60, y: 18 },
      { x: 75, y: 25 },
      { x: 85, y: 40 },
      { x: 70, y: 35 },
      { x: 50, y: 40 },
      { x: 30, y: 35 },
      { x: 15, y: 40 },
      // Handle
      { x: 50, y: 40 },
      { x: 50, y: 75 },
      { x: 45, y: 85 },
      { x: 38, y: 82 },
    ],
    strokes: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [11, 12, 13, 14],
    ],
  };

  // Van
  patterns["Van"] = {
    points: [
      { x: 15, y: 60 },
      { x: 15, y: 40 },
      { x: 55, y: 40 },
      { x: 55, y: 30 },
      { x: 85, y: 30 },
      { x: 85, y: 60 },
      // Wheels
      ...generateCircle(30, 70, 10, 8),
      ...generateCircle(70, 70, 10, 8),
    ],
    strokes: [
      [0, 1, 2, 3, 4, 5],
      [...Array(8).keys()].map((i) => i + 6),
      [...Array(8).keys()].map((i) => i + 14),
    ],
  };

  // Watch
  patterns["Watch"] = {
    points: [
      ...generateCircle(50, 50, 30, 16),
      // Hands
      { x: 50, y: 50 },
      { x: 50, y: 28 },
      { x: 50, y: 50 },
      { x: 65, y: 50 },
      // Strap top
      { x: 40, y: 20 },
      { x: 40, y: 5 },
      { x: 60, y: 5 },
      { x: 60, y: 20 },
      // Strap bottom
      { x: 40, y: 80 },
      { x: 40, y: 95 },
      { x: 60, y: 95 },
      { x: 60, y: 80 },
    ],
    strokes: [
      [...Array(16).keys()],
      [16, 17],
      [18, 19],
      [20, 21, 22, 23],
      [24, 25, 26, 27],
    ],
  };

  // Xylophone
  patterns["Xylophone"] = {
    points: [
      // Bars
      { x: 15, y: 30 },
      { x: 15, y: 50 },
      { x: 28, y: 25 },
      { x: 28, y: 55 },
      { x: 41, y: 22 },
      { x: 41, y: 58 },
      { x: 54, y: 20 },
      { x: 54, y: 60 },
      { x: 67, y: 22 },
      { x: 67, y: 58 },
      { x: 80, y: 25 },
      { x: 80, y: 55 },
      // Base
      { x: 10, y: 70 },
      { x: 85, y: 70 },
      { x: 10, y: 80 },
      { x: 85, y: 80 },
    ],
    strokes: [
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [10, 11],
      [12, 13],
      [14, 15],
    ],
  };

  // Yacht
  patterns["Yacht"] = {
    points: [
      // Hull
      { x: 15, y: 70 },
      { x: 25, y: 85 },
      { x: 75, y: 85 },
      { x: 85, y: 70 },
      // Sail
      { x: 50, y: 15 },
      { x: 50, y: 70 },
      { x: 80, y: 70 },
      { x: 50, y: 15 },
    ],
    strokes: [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
    ],
  };

  // Zebra (stripes pattern - simplified)
  patterns["Zebra"] = {
    points: [
      // Body outline
      ...generateCircle(45, 50, 25, 12),
      // Head
      { x: 70, y: 45 },
      { x: 80, y: 35 },
      { x: 88, y: 40 },
      { x: 85, y: 52 },
      { x: 75, y: 55 },
      // Legs
      { x: 30, y: 75 },
      { x: 30, y: 92 },
      { x: 60, y: 75 },
      { x: 60, y: 92 },
    ],
    strokes: [[...Array(12).keys()], [12, 13, 14, 15, 16], [17, 18], [19, 20]],
  };

  return patterns;
};

export const OBJECT_PATTERNS = createObjectPatterns();
