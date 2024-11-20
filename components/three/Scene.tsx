"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Suspense } from "react";

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <meshStandardMaterial
              color="#2a0845"
              wireframe
              transparent
              opacity={0.15}
            />
          </Sphere>
        </Suspense>
      </Canvas>
    </div>
  );
}