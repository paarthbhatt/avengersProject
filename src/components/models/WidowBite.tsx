import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function WidowBite() {
  const biteRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (biteRef.current) {
      biteRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={biteRef}>
      {/* Main Gauntlet */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 1.5, 32]} />
        <meshStandardMaterial color="#202020" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Energy Cells */}
      {[-0.2, 0, 0.2].map((x, i) => (
        <mesh key={i} position={[x, 0, 0.3]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#00B2FF"
            emissive="#00B2FF"
            emissiveIntensity={2}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* Weapon Details */}
      <mesh position={[0, 0, 0.4]}>
        <boxGeometry args={[0.8, 0.3, 0.1]} />
        <meshStandardMaterial color="#303030" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}