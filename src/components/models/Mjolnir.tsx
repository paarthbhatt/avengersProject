import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function Mjolnir() {
  const hammerRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (hammerRef.current) {
      hammerRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={hammerRef}>
      {/* Hammer Head */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1, 1.2]} />
        <meshStandardMaterial color="#B0B0B0" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Handle */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 3, 32]} />
        <meshStandardMaterial color="#4A3520" metalness={0.3} roughness={0.8} />
      </mesh>

      {/* Norse Runes */}
      <mesh position={[0, 0.5, 0.61]}>
        <boxGeometry args={[1.8, 0.8, 0.01]} />
        <meshStandardMaterial color="#303030" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Strap */}
      <mesh position={[0, -2.4, 0]}>
        <torusGeometry args={[0.3, 0.05, 16, 32]} />
        <meshStandardMaterial color="#4A3520" metalness={0.3} roughness={0.8} />
      </mesh>
    </group>
  );
}