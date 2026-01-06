// Dotted patterns for numbers 0-9
// Each pattern is defined as a series of points that form the number

export interface Point {
  x: number;
  y: number;
}

export interface PatternData {
  points: Point[];
  strokes: number[][]; // Array of stroke indices (which points form continuous strokes)
}

const createNumberPatterns = (): Record<string, PatternData> => {
  const patterns: Record<string, PatternData> = {};

  // Number 0 - Oval shape
  patterns["0"] = {
    points: generateOval(50, 50, 30, 40, 20),
    strokes: [[...Array(20).keys()]],
  };

  // Number 1 - Vertical line with small top hook
  patterns["1"] = {
    points: [
      { x: 40, y: 20 },
      { x: 50, y: 15 },
      { x: 50, y: 25 },
      { x: 50, y: 35 },
      { x: 50, y: 45 },
      { x: 50, y: 55 },
      { x: 50, y: 65 },
      { x: 50, y: 75 },
      { x: 50, y: 85 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8]],
  };

  // Number 2 - Curved top, diagonal, horizontal bottom
  patterns["2"] = {
    points: [
      { x: 25, y: 30 },
      { x: 30, y: 20 },
      { x: 45, y: 15 },
      { x: 60, y: 20 },
      { x: 70, y: 30 },
      { x: 65, y: 45 },
      { x: 55, y: 55 },
      { x: 45, y: 65 },
      { x: 35, y: 75 },
      { x: 25, y: 85 },
      { x: 40, y: 85 },
      { x: 55, y: 85 },
      { x: 70, y: 85 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],
  };

  // Number 3 - Two curves
  patterns["3"] = {
    points: [
      { x: 25, y: 20 },
      { x: 40, y: 15 },
      { x: 55, y: 18 },
      { x: 65, y: 28 },
      { x: 60, y: 40 },
      { x: 45, y: 48 },
      { x: 60, y: 55 },
      { x: 70, y: 65 },
      { x: 65, y: 78 },
      { x: 50, y: 85 },
      { x: 30, y: 82 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  };

  // Number 4 - Angled lines
  patterns["4"] = {
    points: [
      { x: 55, y: 15 },
      { x: 50, y: 25 },
      { x: 45, y: 35 },
      { x: 40, y: 45 },
      { x: 35, y: 55 },
      { x: 25, y: 55 },
      { x: 45, y: 55 },
      { x: 65, y: 55 },
      { x: 55, y: 55 },
      { x: 55, y: 65 },
      { x: 55, y: 75 },
      { x: 55, y: 85 },
    ],
    strokes: [
      [0, 1, 2, 3, 4],
      [5, 6, 7],
      [8, 9, 10, 11],
    ],
  };

  // Number 5 - Horizontal top, vertical, curve bottom
  patterns["5"] = {
    points: [
      { x: 65, y: 15 },
      { x: 50, y: 15 },
      { x: 35, y: 15 },
      { x: 35, y: 25 },
      { x: 35, y: 35 },
      { x: 35, y: 45 },
      { x: 50, y: 42 },
      { x: 65, y: 50 },
      { x: 70, y: 65 },
      { x: 60, y: 80 },
      { x: 45, y: 85 },
      { x: 30, y: 78 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
  };

  // Number 6 - Curve with circle
  patterns["6"] = {
    points: [
      { x: 60, y: 20 },
      { x: 50, y: 15 },
      { x: 35, y: 25 },
      { x: 28, y: 40 },
      { x: 28, y: 55 },
      { x: 35, y: 70 },
      { x: 50, y: 80 },
      { x: 65, y: 70 },
      { x: 68, y: 55 },
      { x: 55, y: 45 },
      { x: 38, y: 50 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  };

  // Number 7 - Horizontal and diagonal
  patterns["7"] = {
    points: [
      { x: 25, y: 15 },
      { x: 40, y: 15 },
      { x: 55, y: 15 },
      { x: 70, y: 15 },
      { x: 65, y: 30 },
      { x: 58, y: 45 },
      { x: 52, y: 60 },
      { x: 46, y: 75 },
      { x: 40, y: 90 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8]],
  };

  // Number 8 - Two circles
  patterns["8"] = {
    points: [
      ...generateOval(50, 32, 18, 18, 12),
      ...generateOval(50, 68, 22, 20, 12),
    ],
    strokes: [[...Array(12).keys()], [...Array(12).keys()].map((i) => i + 12)],
  };

  // Number 9 - Circle with tail
  patterns["9"] = {
    points: [
      { x: 55, y: 45 },
      { x: 65, y: 35 },
      { x: 60, y: 20 },
      { x: 45, y: 15 },
      { x: 30, y: 25 },
      { x: 28, y: 40 },
      { x: 40, y: 50 },
      { x: 55, y: 45 },
      { x: 60, y: 55 },
      { x: 58, y: 70 },
      { x: 50, y: 85 },
      { x: 35, y: 88 },
    ],
    strokes: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
  };

  return patterns;
};

// Helper function to generate oval points
function generateOval(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  numPoints: number
): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI;
    points.push({
      x: cx + rx * Math.cos(angle),
      y: cy + ry * Math.sin(angle),
    });
  }
  return points;
}

export const NUMBER_PATTERNS = createNumberPatterns();
