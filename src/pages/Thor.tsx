import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Mjolnir } from '../components/models/Mjolnir';
import { motion } from 'framer-motion';

export function Thor() {
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
            <Mjolnir />
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
        <h1 className="text-4xl font-bold text-white">Thor</h1>
        <div className="prose prose-invert">
          <p className="text-lg text-gray-300">
            Thor Odinson, the God of Thunder, wields the mighty Mjolnir with the power 
            to command lightning and storms. As both an Asgardian prince and an Avenger, 
            he bridges the gap between Earth and the cosmic realms.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mjolnir</h2>
          <p className="text-gray-300">
            Forged by dwarven blacksmiths in the heart of a dying star, Mjolnir is 
            enchanted by Odin himself. Only those who are worthy can lift this 
            legendary weapon.
          </p>
          
          <div className="mt-6 bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Mjolnir Specifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Material: Uru Metal</li>
              <li>Weight: Immeasurable</li>
              <li>Powers: Weather Control, Flight</li>
              <li>Enchantment: Worthiness Spell</li>
              <li>Age: Over 1500 years</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}