import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { WidowBite } from '../components/models/WidowBite';
import { motion } from 'framer-motion';

export function BlackWidow() {
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
            <WidowBite />
            <Environment preset="night" />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold text-white">Black Widow</h1>
        <div className="prose prose-invert">
          <p className="text-lg text-gray-300">
            Natasha Romanoff, trained in the Red Room, is a master spy and one of 
            S.H.I.E.L.D.'s most skilled operatives. Her expertise in combat and 
            espionage makes her an invaluable member of the Avengers.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Widow's Bite</h2>
          <p className="text-gray-300">
            The Widow's Bite is a specialized weapon that delivers powerful electrical 
            discharges, capable of incapacitating enemies and bypassing most armor.
          </p>
          
          <div className="mt-6 bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Equipment Specifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Voltage Output: 30,000V</li>
              <li>Range: 20 feet</li>
              <li>Charge Capacity: 100 shots</li>
              <li>Recharge Time: 1 minute</li>
              <li>Special Features: EMP capability</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}