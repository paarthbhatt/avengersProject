import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { HulkFist } from '../components/models/Hulk';
import { motion } from 'framer-motion';

export function Hulk() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="h-[600px] bg-blue-900/20 rounded-lg overflow-hidden"
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <HulkFist />
            <Environment preset="forest" />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold text-white">Hulk</h1>
        <div className="prose prose-invert">
          <p className="text-lg text-gray-300">
            Dr. Bruce Banner, transformed by gamma radiation, becomes the incredible 
            Hulk - a being of pure strength and unstoppable rage. Despite his 
            fearsome appearance, he fights alongside the Avengers to protect Earth.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Gamma Power</h2>
          <p className="text-gray-300">
            The Hulk's strength is virtually limitless, increasing with his anger. 
            His durability and healing factor make him nearly indestructible.
          </p>
          
          <div className="mt-6 bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Hulk Specifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Base Strength: 100+ tons</li>
              <li>Healing Factor: Instantaneous</li>
              <li>Jump Height: 3+ miles</li>
              <li>Durability: Nearly infinite</li>
              <li>Gamma Radiation Level: Off the charts</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}