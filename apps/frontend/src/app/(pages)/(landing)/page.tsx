"use client";

import { CategoryCards } from "@/components/CategoryCards";
import { Button } from "@/components/ui/Button";
import { useGameStore } from "@/store/gameStore";
import { Sparkles, RotateCcw } from "lucide-react";

const Index = () => {
  const { resetGame, progress } = useGameStore();
  const hasProgress =
    progress.numbers > 0 || progress.letters > 0 || progress.objects > 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 gradient-numbers rounded-2xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Air Canvas
          </h1>
        </div>
        {hasProgress && (
          <Button
            variant="outline"
            size="sm"
            onClick={resetGame}
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Reset Progress
          </Button>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        {/* Hero section */}
        <div className="text-center mb-12 max-w-2xl">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 text-shadow-fun">
            Learn to Draw! ✨
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Draw letters, numbers, and objects with your finger.
            <br className="hidden md:block" />
            Trace the dots and watch them come to life!
          </p>
        </div>

        {/* Category cards */}
        <CategoryCards />

        {/* Instructions */}
        <div className="mt-12 text-center max-w-md">
          <div className="bg-card p-6 rounded-3xl border-2 border-border shadow-soft">
            <h3 className="font-display text-xl font-bold mb-3 text-card-foreground">
              How to Play
            </h3>
            <ol className="text-left text-muted-foreground space-y-2">
              <li className="flex gap-3">
                <span className="w-6 h-6 gradient-numbers rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                  1
                </span>
                Choose Numbers, Letters, or Objects
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 gradient-letters rounded-full flex items-center justify-center text-secondary-foreground text-sm font-bold shrink-0">
                  2
                </span>
                Trace the dotted pattern on screen
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 gradient-objects rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold shrink-0">
                  3
                </span>
                Get 70%+ accuracy to see a 3D surprise!
              </li>
            </ol>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-muted-foreground">
        Made with ❤️ for little learners
      </footer>
    </div>
  );
};

export default Index;
