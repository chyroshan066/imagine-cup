import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Float, Environment } from "@react-three/drei";
import { CategoryType } from "@/store/gameStore";

interface Model3DViewerProps {
  item: string;
  category: CategoryType;
  onClose: () => void;
}

const Item3D = ({ category }: { item: string; category: CategoryType }) => {
  // Color based on category
  const colorValues = {
    numbers: "#FF6B6B",
    letters: "#4D96FF",
    objects: "#6BCB77",
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center>
        <mesh>
          <boxGeometry args={[3, 3, 0.5]} />
          <meshStandardMaterial
            color={colorValues[category]}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      </Center>
    </Float>
  );
};

export const Model3DViewer = ({
  item,
  category,
  onClose,
}: Model3DViewerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 backdrop-blur-md transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl h-[60vh] bg-card rounded-3xl overflow-hidden shadow-2xl mx-4 animate-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-card to-transparent">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-bold text-card-foreground">
              {category === "objects"
                ? item
                : `${category === "numbers" ? "Number" : "Letter"} ${item}`}
            </h3>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* 3D Canvas */}
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            <Item3D item={item} category={category} />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={4}
            />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>

        {/* Instructions */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-sm text-muted-foreground">
            Drag to rotate • Tap anywhere to continue
          </p>
        </div>
      </div>
    </div>
  );
};
