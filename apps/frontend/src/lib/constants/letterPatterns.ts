// Dotted patterns for letters A-Z

import { Point, PatternData } from "./numberPatterns";

const createLetterPatterns = (): Record<string, PatternData> => {
  const patterns: Record<string, PatternData> = {};

  // Letter A
  patterns["A"] = {
    points: [
      { x: 20, y: 85 },
      { x: 30, y: 65 },
      { x: 40, y: 45 },
      { x: 50, y: 25 },
      { x: 60, y: 45 },
      { x: 70, y: 65 },
      { x: 80, y: 85 },
      { x: 30, y: 65 },
      { x: 50, y: 65 },
      { x: 70, y: 65 },
    ],
    strokes: [
      [0, 1, 2, 3, 4, 5, 6],
      [7, 8, 9],
    ],
  };

  // Letter B
  patterns["B"] = {
    points: [
      { x: 25, y: 15 },
      { x: 25, y: 30 },
      { x: 25, y: 45 },
      { x: 25, y: 60 },
      { x: 25, y: 75 },
      { x: 25, y: 85 },
      { x: 40, y: 15 },
      { x: 55, y: 20 },
      { x: 60, y: 32 },
      { x: 50, y: 45 },
      { x: 55, y: 55 },
      { x: 65, y: 68 },
      { x: 55, y: 82 },
      { x: 40, y: 85 },
    ],
    strokes: [
      [0, 1, 2, 3, 4, 5],
      [0, 6, 7, 8, 9, 2, 10, 11, 12, 13, 5],
    ],
  };

  // Letter C
  patterns["C"] = {
    points: [
      { x: 70, y: 25 },
      { x: 55, y: 15 },
      { x: 40, y: 15 },
      { x: 28, y: 25 },
      { x: 22, y: 40 },
      { x: 22, y: 55 },
      { x: 28, y: 70 },
      { x: 40, y: 82 },
      { x: 55, y: 85 },
      { x: 70, y: 78 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
  };

  // Letter D
  patterns["D"] = {
    points: [
      { x: 25, y: 15 },
      { x: 25, y: 30 },
      { x: 25, y: 50 },
      { x: 25, y: 70 },
      { x: 25, y: 85 },
      { x: 40, y: 15 },
      { x: 55, y: 20 },
      { x: 68, y: 35 },
      { x: 72, y: 50 },
      { x: 68, y: 65 },
      { x: 55, y: 80 },
      { x: 40, y: 85 },
    ],
    strokes: [
      [0, 1, 2, 3, 4],
      [0, 5, 6, 7, 8, 9, 10, 11, 4],
    ],
  };

  // Letter E
  patterns["E"] = {
    points: [
      { x: 65, y: 15 },
      { x: 45, y: 15 },
      { x: 25, y: 15 },
      { x: 25, y: 30 },
      { x: 25, y: 45 },
      { x: 40, y: 45 },
      { x: 55, y: 45 },
      { x: 25, y: 60 },
      { x: 25, y: 75 },
      { x: 25, y: 85 },
      { x: 45, y: 85 },
      { x: 65, y: 85 },
    ],
    strokes: [
      [0, 1, 2, 3, 4, 7, 8, 9, 10, 11],
      [4, 5, 6],
    ],
  };

  // Letter F
  patterns["F"] = {
    points: [
      { x: 65, y: 15 },
      { x: 45, y: 15 },
      { x: 25, y: 15 },
      { x: 25, y: 30 },
      { x: 25, y: 45 },
      { x: 40, y: 45 },
      { x: 55, y: 45 },
      { x: 25, y: 60 },
      { x: 25, y: 75 },
      { x: 25, y: 85 },
    ],
    strokes: [
      [0, 1, 2, 3, 4, 7, 8, 9],
      [4, 5, 6],
    ],
  };

  // Simplified patterns for remaining letters
  patterns["G"] = createCurvedLetter([
    { x: 70, y: 25 },
    { x: 55, y: 15 },
    { x: 40, y: 15 },
    { x: 28, y: 25 },
    { x: 22, y: 40 },
    { x: 22, y: 55 },
    { x: 28, y: 70 },
    { x: 40, y: 82 },
    { x: 55, y: 85 },
    { x: 70, y: 78 },
    { x: 70, y: 60 },
    { x: 55, y: 55 },
  ]);

  patterns["H"] = {
    points: [
      { x: 25, y: 15 },
      { x: 25, y: 35 },
      { x: 25, y: 50 },
      { x: 25, y: 70 },
      { x: 25, y: 85 },
      { x: 40, y: 50 },
      { x: 55, y: 50 },
      { x: 70, y: 15 },
      { x: 70, y: 35 },
      { x: 70, y: 50 },
      { x: 70, y: 70 },
      { x: 70, y: 85 },
    ],
    strokes: [
      [0, 1, 2, 3, 4],
      [2, 5, 6, 9],
      [7, 8, 9, 10, 11],
    ],
  };

  patterns["I"] = {
    points: [
      { x: 35, y: 15 },
      { x: 50, y: 15 },
      { x: 65, y: 15 },
      { x: 50, y: 30 },
      { x: 50, y: 50 },
      { x: 50, y: 70 },
      { x: 35, y: 85 },
      { x: 50, y: 85 },
      { x: 65, y: 85 },
    ],
    strokes: [
      [0, 1, 2],
      [1, 3, 4, 5, 7],
      [6, 7, 8],
    ],
  };

  patterns["J"] = {
    points: [
      { x: 35, y: 15 },
      { x: 55, y: 15 },
      { x: 70, y: 15 },
      { x: 55, y: 30 },
      { x: 55, y: 45 },
      { x: 55, y: 60 },
      { x: 50, y: 75 },
      { x: 38, y: 82 },
      { x: 28, y: 72 },
    ],
    strokes: [
      [0, 1, 2],
      [1, 3, 4, 5, 6, 7, 8],
    ],
  };

  patterns["K"] = {
    points: [
      { x: 25, y: 15 },
      { x: 25, y: 35 },
      { x: 25, y: 50 },
      { x: 25, y: 70 },
      { x: 25, y: 85 },
      { x: 70, y: 15 },
      { x: 55, y: 30 },
      { x: 40, y: 45 },
      { x: 55, y: 65 },
      { x: 70, y: 85 },
    ],
    strokes: [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 2],
      [7, 8, 9],
    ],
  };

  patterns["L"] = {
    points: [
      { x: 25, y: 15 },
      { x: 25, y: 35 },
      { x: 25, y: 50 },
      { x: 25, y: 70 },
      { x: 25, y: 85 },
      { x: 40, y: 85 },
      { x: 55, y: 85 },
      { x: 70, y: 85 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7]],
  };

  patterns["M"] = {
    points: [
      { x: 15, y: 85 },
      { x: 15, y: 60 },
      { x: 15, y: 35 },
      { x: 15, y: 15 },
      { x: 30, y: 35 },
      { x: 45, y: 55 },
      { x: 60, y: 35 },
      { x: 75, y: 15 },
      { x: 75, y: 35 },
      { x: 75, y: 60 },
      { x: 75, y: 85 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  };

  patterns["N"] = {
    points: [
      { x: 25, y: 85 },
      { x: 25, y: 60 },
      { x: 25, y: 35 },
      { x: 25, y: 15 },
      { x: 40, y: 35 },
      { x: 55, y: 55 },
      { x: 70, y: 15 },
      { x: 70, y: 35 },
      { x: 70, y: 60 },
      { x: 70, y: 85 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
  };

  patterns["O"] = createOvalLetter(50, 50, 28, 35);

  patterns["P"] = {
    points: [
      { x: 25, y: 85 },
      { x: 25, y: 65 },
      { x: 25, y: 45 },
      { x: 25, y: 25 },
      { x: 25, y: 15 },
      { x: 40, y: 15 },
      { x: 55, y: 18 },
      { x: 65, y: 28 },
      { x: 60, y: 42 },
      { x: 45, y: 48 },
      { x: 25, y: 45 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  };

  patterns["Q"] = {
    points: [
      ...generateOvalPoints(50, 48, 28, 32, 14),
      { x: 55, y: 65 },
      { x: 65, y: 78 },
      { x: 78, y: 88 },
    ],
    strokes: [[...Array(14).keys()], [14, 15, 16]],
  };

  patterns["R"] = {
    points: [
      { x: 25, y: 85 },
      { x: 25, y: 65 },
      { x: 25, y: 45 },
      { x: 25, y: 25 },
      { x: 25, y: 15 },
      { x: 40, y: 15 },
      { x: 55, y: 18 },
      { x: 65, y: 28 },
      { x: 60, y: 42 },
      { x: 45, y: 48 },
      { x: 55, y: 62 },
      { x: 68, y: 78 },
      { x: 75, y: 88 },
    ],
    strokes: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2],
      [9, 10, 11, 12],
    ],
  };

  patterns["S"] = {
    points: [
      { x: 68, y: 22 },
      { x: 55, y: 15 },
      { x: 40, y: 15 },
      { x: 28, y: 22 },
      { x: 25, y: 35 },
      { x: 35, y: 45 },
      { x: 50, y: 50 },
      { x: 65, y: 55 },
      { x: 72, y: 68 },
      { x: 65, y: 80 },
      { x: 50, y: 85 },
      { x: 35, y: 85 },
      { x: 25, y: 78 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],
  };

  patterns["T"] = {
    points: [
      { x: 15, y: 15 },
      { x: 35, y: 15 },
      { x: 50, y: 15 },
      { x: 65, y: 15 },
      { x: 85, y: 15 },
      { x: 50, y: 30 },
      { x: 50, y: 50 },
      { x: 50, y: 70 },
      { x: 50, y: 85 },
    ],
    strokes: [
      [0, 1, 2, 3, 4],
      [2, 5, 6, 7, 8],
    ],
  };

  patterns["U"] = {
    points: [
      { x: 25, y: 15 },
      { x: 25, y: 35 },
      { x: 25, y: 55 },
      { x: 30, y: 72 },
      { x: 42, y: 82 },
      { x: 58, y: 82 },
      { x: 70, y: 72 },
      { x: 75, y: 55 },
      { x: 75, y: 35 },
      { x: 75, y: 15 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
  };

  patterns["V"] = {
    points: [
      { x: 15, y: 15 },
      { x: 25, y: 35 },
      { x: 38, y: 55 },
      { x: 50, y: 85 },
      { x: 62, y: 55 },
      { x: 75, y: 35 },
      { x: 85, y: 15 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6]],
  };

  patterns["W"] = {
    points: [
      { x: 10, y: 15 },
      { x: 18, y: 45 },
      { x: 28, y: 85 },
      { x: 40, y: 55 },
      { x: 50, y: 35 },
      { x: 60, y: 55 },
      { x: 72, y: 85 },
      { x: 82, y: 45 },
      { x: 90, y: 15 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8]],
  };

  patterns["X"] = {
    points: [
      { x: 20, y: 15 },
      { x: 35, y: 35 },
      { x: 50, y: 50 },
      { x: 65, y: 65 },
      { x: 80, y: 85 },
      { x: 80, y: 15 },
      { x: 65, y: 35 },
      { x: 35, y: 65 },
      { x: 20, y: 85 },
    ],
    strokes: [
      [0, 1, 2, 3, 4],
      [5, 6, 2, 7, 8],
    ],
  };

  patterns["Y"] = {
    points: [
      { x: 20, y: 15 },
      { x: 32, y: 32 },
      { x: 50, y: 50 },
      { x: 68, y: 32 },
      { x: 80, y: 15 },
      { x: 50, y: 65 },
      { x: 50, y: 85 },
    ],
    strokes: [
      [0, 1, 2],
      [4, 3, 2, 5, 6],
    ],
  };

  patterns["Z"] = {
    points: [
      { x: 20, y: 15 },
      { x: 40, y: 15 },
      { x: 60, y: 15 },
      { x: 80, y: 15 },
      { x: 65, y: 35 },
      { x: 50, y: 50 },
      { x: 35, y: 65 },
      { x: 20, y: 85 },
      { x: 40, y: 85 },
      { x: 60, y: 85 },
      { x: 80, y: 85 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  };

  return patterns;
};

function createCurvedLetter(points: Point[]): PatternData {
  return {
    points,
    strokes: [[...Array(points.length).keys()]],
  };
}

function createOvalLetter(
  cx: number,
  cy: number,
  rx: number,
  ry: number
): PatternData {
  return {
    points: generateOvalPoints(cx, cy, rx, ry, 16),
    strokes: [[...Array(16).keys()]],
  };
}

function generateOvalPoints(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  numPoints: number
): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI - Math.PI / 2;
    points.push({
      x: cx + rx * Math.cos(angle),
      y: cy + ry * Math.sin(angle),
    });
  }
  return points;
}

export const LETTER_PATTERNS = createLetterPatterns();
