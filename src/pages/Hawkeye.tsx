import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Bow } from '../components/models/Bow';
import { motion } from 'framer-motion';

export function Hawkeye() {
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
            <Bow />
            <Environment preset="sunset" />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold text-white">Hawkeye</h1>
        <div className="prose prose-invert">
          <p className="text-lg text-gray-300">
            Clint Barton, known as Hawkeye, is the world's greatest marksman. His 
            exceptional skill with a bow and tactical expertise make him a crucial 
            member of the Avengers team.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Bow</h2>
          <p className="text-gray-300">
            Hawkeye's custom-designed compound bow is a marvel of modern engineering, 
            featuring cutting-edge technology and a variety of specialized arrows.
          </p>
          
          <div className="mt-6 bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Equipment Specifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Draw Weight: 250 lbs</li>
              <li>Range: 400+ yards</li>
              <li>Material: Carbon fiber composite</li>
              <li>Arrow Types: 32 varieties</li>
              <li>Special Features: Quick-collapse mechanism</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}