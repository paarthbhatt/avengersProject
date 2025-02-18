import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Shield } from '../components/Shield';

export function CaptainAmerica() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* 3D Shield */}
      <div className="h-[600px] bg-blue-900/20 rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <Shield />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white">Captain America</h1>
        <div className="prose prose-invert">
          <p className="text-lg text-gray-300">
            Steve Rogers, known as Captain America, embodies the very best of humanity. 
            Enhanced to the peak of human potential by an experimental serum, he leads 
            the Avengers with unwavering courage and tactical brilliance.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Shield</h2>
          <p className="text-gray-300">
            Captain America's iconic shield is his primary weapon and defense. Made from 
            Vibranium, the rarest metal on Earth, it's virtually indestructible and can 
            absorb any impact without transferring kinetic energy.
          </p>
          
          <div className="mt-6 bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Shield Specifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Diameter: 2.5 feet</li>
              <li>Weight: 12 pounds</li>
              <li>Material: Pure Vibranium</li>
              <li>Tensile Strength: Virtually indestructible</li>
              <li>Energy Absorption: 100% kinetic energy absorption</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}