import { PatternData } from "../constants";

interface Point {
  x: number;
  y: number;
}

// Calculate the accuracy of user drawing compared to the template pattern
export function calculateAccuracy(
  userPoints: Point[],
  pattern: PatternData,
  canvasWidth: number,
  canvasHeight: number
): number {
  if (userPoints.length < 5) return 0;

  // Scale pattern points to canvas size
  const scaledPattern = pattern.points.map((p) => ({
    x: (p.x / 100) * canvasWidth,
    y: (p.y / 100) * canvasHeight,
  }));

  let totalDistance = 0;
  let matchedPoints = 0;
  const threshold = Math.max(canvasWidth, canvasHeight) * 0.08; // 8% of canvas size as threshold

  // For each user point, find the closest pattern point
  for (const userPoint of userPoints) {
    let minDist = Infinity;

    for (const patternPoint of scaledPattern) {
      const dist = Math.sqrt(
        Math.pow(userPoint.x - patternPoint.x, 2) +
          Math.pow(userPoint.y - patternPoint.y, 2)
      );
      minDist = Math.min(minDist, dist);
    }

    totalDistance += minDist;
    if (minDist < threshold) {
      matchedPoints++;
    }
  }

  // Also check pattern coverage - how many pattern points were touched
  let coveredPatternPoints = 0;
  const coverageThreshold = threshold * 1.5;

  for (const patternPoint of scaledPattern) {
    for (const userPoint of userPoints) {
      const dist = Math.sqrt(
        Math.pow(userPoint.x - patternPoint.x, 2) +
          Math.pow(userPoint.y - patternPoint.y, 2)
      );
      if (dist < coverageThreshold) {
        coveredPatternPoints++;
        break;
      }
    }
  }

  // Calculate accuracy based on both matching and coverage
  const matchRatio = matchedPoints / userPoints.length;
  const coverageRatio = coveredPatternPoints / scaledPattern.length;

  // Weight both factors
  const accuracy = (matchRatio * 0.4 + coverageRatio * 0.6) * 100;

  return Math.min(100, Math.max(0, Math.round(accuracy)));
}

// Simplify points by removing close neighbors
export function simplifyPoints(
  points: Point[],
  minDistance: number = 5
): Point[] {
  if (points.length < 2) return points;

  const simplified: Point[] = [points[0]];

  for (let i = 1; i < points.length; i++) {
    const lastPoint = simplified[simplified.length - 1];
    const dist = Math.sqrt(
      Math.pow(points[i].x - lastPoint.x, 2) +
        Math.pow(points[i].y - lastPoint.y, 2)
    );

    if (dist >= minDistance) {
      simplified.push(points[i]);
    }
  }

  return simplified;
}

// Smooth points using moving average
export function smoothPoints(points: Point[], windowSize: number = 3): Point[] {
  if (points.length < windowSize) return points;

  const smoothed: Point[] = [];

  for (let i = 0; i < points.length; i++) {
    let sumX = 0;
    let sumY = 0;
    let count = 0;

    for (
      let j = Math.max(0, i - Math.floor(windowSize / 2));
      j <= Math.min(points.length - 1, i + Math.floor(windowSize / 2));
      j++
    ) {
      sumX += points[j].x;
      sumY += points[j].y;
      count++;
    }

    smoothed.push({
      x: sumX / count,
      y: sumY / count,
    });
  }

  return smoothed;
}
