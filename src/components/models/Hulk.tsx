import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function HulkFist() {
  const fistRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (fistRef.current) {
      fistRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={fistRef}>
      {/* Main Fist Structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.5, 1.5]} />
        <meshStandardMaterial color="#3D7A3D" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Knuckles */}
      {[-0.6, 0, 0.6].map((x, i) => (
        <mesh key={i} position={[x, 0.5, 0.6]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#2D5A2D" metalness={0.2} roughness={0.8} />
        </mesh>
      ))}

      {/* Thumb */}
      <mesh position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.2, 0.25, 0.8, 16]} />
        <meshStandardMaterial color="#3D7A3D" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Veins */}
      {[0, 0.5, -0.5].map((y, i) => (
        <mesh key={i} position={[0, y, 0.6]} rotation={[0, 0, Math.PI / 6]}>
          <torusGeometry args={[0.4, 0.05, 8, 32, Math.PI]} />
          <meshStandardMaterial color="#2D5A2D" metalness={0.3} roughness={0.7} emissive="#4AFF4A" emissiveIntensity={0.2} />
        </mesh>
      ))}

      {/* Gamma Glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial
          color="#4AFF4A"
          transparent={true}
          opacity={0.1}
          emissive="#4AFF4A"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}