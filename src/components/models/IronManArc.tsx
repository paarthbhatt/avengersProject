import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function IronManArc() {
  const arcRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (arcRef.current) {
      arcRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group>
      {/* Main Arc Reactor Core */}
      <mesh ref={arcRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.2, 32]} />
        <meshStandardMaterial color="#00B2FF" emissive="#00B2FF" emissiveIntensity={2} metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Outer Ring */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.1, 16, 32]} />
        <meshStandardMaterial color="#404040" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Inner Details */}
      <mesh position={[0, 0.11, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 8]} />
        <meshStandardMaterial color="#303030" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Energy Glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial
          color="#00B2FF"
          transparent={true}
          opacity={0.2}
          emissive="#00B2FF"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}