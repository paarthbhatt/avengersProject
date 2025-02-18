import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function Bow() {
  const bowRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (bowRef.current) {
      bowRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={bowRef}>
      {/* Main Bow Structure */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.1, 32, 64, Math.PI]} />
        <meshStandardMaterial color="#404040" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Bow Limbs */}
      {[-1, 1].map((y) => (
        <mesh key={y} position={[0, y * 0.8, 0]} rotation={[0, 0, y * Math.PI / 6]}>
          <boxGeometry args={[0.2, 1, 0.1]} />
          <meshStandardMaterial color="#202020" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}

      {/* Grip */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 32]} />
        <meshStandardMaterial color="#4A3520" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* String */}
      <mesh position={[0.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 4, 8]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Tech Enhancements */}
      {[-0.5, 0, 0.5].map((y, i) => (
        <mesh key={i} position={[0.1, y, 0.1]}>
          <boxGeometry args={[0.2, 0.2, 0.1]} />
          <meshStandardMaterial
            color="#00B2FF"
            emissive="#00B2FF"
            emissiveIntensity={1}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* Arrow */}
      <mesh position={[0.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 3, 8]} />
        <meshStandardMaterial color="#303030" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Arrowhead */}
      <mesh position={[1.7, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <coneGeometry args={[0.06, 0.2, 8]} />
        <meshStandardMaterial color="#303030" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Energy Glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshStandardMaterial
          color="#00B2FF"
          transparent={true}
          opacity={0.1}
          emissive="#00B2FF"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}