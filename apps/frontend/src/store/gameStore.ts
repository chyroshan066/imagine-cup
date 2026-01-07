import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CategoryType = "numbers" | "letters" | "objects";

export interface Progress {
  numbers: number; // 0-9 (index of current number)
  letters: number; // 0-25 (index of current letter)
  objects: number; // 0-25 (index of current object)
  completedCategories: CategoryType[];
}

interface GameState {
  currentCategory: CategoryType | null;
  progress: Progress;
  isDrawing: boolean;
  accuracy: number;
  showCelebration: boolean;
  show3DModel: boolean;
  attempts: number;

  // Actions
  setCategory: (category: CategoryType) => void;
  setDrawing: (isDrawing: boolean) => void;
  setAccuracy: (accuracy: number) => void;
  setCelebration: (show: boolean) => void;
  set3DModel: (show: boolean) => void;
  incrementProgress: () => void;
  resetAttempts: () => void;
  incrementAttempts: () => void;
  canAccessCategory: (category: CategoryType) => boolean;
  getCurrentItem: () => string;
  resetGame: () => void;
}

const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const OBJECTS = [
  "Apple",
  "Ball",
  "Cat",
  "Dog",
  "Elephant",
  "Fish",
  "Giraffe",
  "House",
  "Ice Cream",
  "Jug",
  "Kite",
  "Lion",
  "Moon",
  "Nest",
  "Orange",
  "Pen",
  "Queen",
  "Rainbow",
  "Sun",
  "Tree",
  "Umbrella",
  "Van",
  "Watch",
  "Xylophone",
  "Yacht",
  "Zebra",
];

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      currentCategory: null,
      progress: {
        numbers: 0,
        letters: 0,
        objects: 0,
        completedCategories: [],
      },
      isDrawing: false,
      accuracy: 0,
      showCelebration: false,
      show3DModel: false,
      attempts: 0,

      setCategory: (category) => set({ currentCategory: category }),

      setDrawing: (isDrawing) => set({ isDrawing }),

      setAccuracy: (accuracy) => set({ accuracy }),

      setCelebration: (show) => set({ showCelebration: show }),

      set3DModel: (show) => set({ show3DModel: show }),

      incrementProgress: () => {
        const { currentCategory, progress } = get();
        if (!currentCategory) return;

        const newProgress = { ...progress };
        const maxIndex = currentCategory === "numbers" ? 9 : 25;

        if (newProgress[currentCategory] < maxIndex) {
          newProgress[currentCategory]++;
        } else {
          // Category completed
          if (!newProgress.completedCategories.includes(currentCategory)) {
            newProgress.completedCategories.push(currentCategory);
          }
        }

        set({ progress: newProgress, attempts: 0 });
      },

      resetAttempts: () => set({ attempts: 0 }),

      incrementAttempts: () =>
        set((state) => ({ attempts: state.attempts + 1 })),

      canAccessCategory: (category) => {
        const { progress, currentCategory } = get();

        // If no category is selected, all are accessible
        if (!currentCategory) return true;

        // If this is the current category, it's accessible
        if (category === currentCategory) return true;

        // Check if current category is completed
        return progress.completedCategories.includes(currentCategory);
      },

      getCurrentItem: () => {
        const { currentCategory, progress } = get();
        if (!currentCategory) return "";

        switch (currentCategory) {
          case "numbers":
            return NUMBERS[progress.numbers] || "";
          case "letters":
            return LETTERS[progress.letters] || "";
          case "objects":
            return OBJECTS[progress.objects] || "";
          default:
            return "";
        }
      },

      resetGame: () =>
        set({
          currentCategory: null,
          progress: {
            numbers: 0,
            letters: 0,
            objects: 0,
            completedCategories: [],
          },
          isDrawing: false,
          accuracy: 0,
          showCelebration: false,
          show3DModel: false,
          attempts: 0,
        }),
    }),
    {
      name: "air-canvas-game",
    }
  )
);

export { NUMBERS, LETTERS, OBJECTS };
