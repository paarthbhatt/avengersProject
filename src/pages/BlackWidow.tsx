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
            Natasha Romanoff, known as the Black Widow, is a formidable spy, assassin, and Avenger. 
            Trained from childhood in the Red Room's brutal program, she became one of the world's 
            most lethal operatives. Despite her dark past, Natasha chose to dedicate her skills to 
            protecting others as a S.H.I.E.L.D. agent and eventually as a core member of the Avengers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Combat Expertise</h2>
          <p className="text-gray-300">
            A master in multiple martial arts forms, expert marksman, and tactical genius. Her 
            enhanced physiology grants her peak human strength, agility, and extraordinary resilience.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Equipment & Arsenal</h2>
          <ul className="text-gray-300 list-disc pl-6 space-y-2">
            <li>Widow's Bite: Electroshock weapons capable of delivering powerful stunning blasts</li>
            <li>Batons: Extendable combat sticks for close-quarters combat</li>
            <li>Grappling Hook: For tactical mobility and scaling buildings</li>
            <li>Widow's Line: High-tension wire for traversal and combat</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Widow's Bite</h2>
          <p className="text-gray-300">
            The Widow's Bite is a specializ ed weapon that delivers powerful electrical 
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

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Strategic Value</h2>
          <p className="text-gray-300">
            Beyond her combat abilities, Natasha excels in espionage, infiltration, and 
            psychological warfare. Her strategic mind and adaptability make her invaluable in both 
            covert operations and frontline battles alongside the Avengers.
          </p>
        </div>
      </motion.div>
    </div>
  );
}