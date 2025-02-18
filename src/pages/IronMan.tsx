import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { IronManArc } from '../components/models/IronManArc';
import { motion } from 'framer-motion';

export function IronMan() {
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
            <IronManArc />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold text-white">Iron Man</h1>
        <div className="prose prose-invert">
          <p className="text-lg text-gray-300">
            Tony Stark, the genius billionaire behind the Iron Man armor, revolutionized 
            superhero technology with his Arc Reactor technology and advanced AI systems.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Arc Reactor</h2>
          <p className="text-gray-300">
            The Arc Reactor is not just a power source - it's a testament to human 
            ingenuity and the cornerstone of Stark's greatest creation, the Iron Man suit.
          </p>
          
          <div className="mt-6 bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Arc Reactor Specifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Power Output: 3 GJ/s</li>
              <li>Core: Palladium (Mark I-III)</li>
              <li>New Element Core (Mark IV+)</li>
              <li>Energy Efficiency: 99.99%</li>
              <li>Auxiliary Systems: 14</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}