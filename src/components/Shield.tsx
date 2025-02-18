import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Shape, ExtrudeGeometry } from 'three';

export function Shield() {
  const shieldRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.y += delta * 0.5;
    }
  });

  // Create a star shape
  const createStarShape = () => {
    const shape = new Shape();
    const points = 5;
    const outerRadius = 0.25;
    const innerRadius = 0.15;

    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / points;
      const x = Math.sin(angle) * radius;
      const y = Math.cos(angle) * radius;
      
      if (i === 0) {
        shape.moveTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    }
    shape.closePath();

    return new ExtrudeGeometry(shape, {
      depth: 0.05,
      bevelEnabled: false
    });
  };

  return (
    <group>
      {/* Base shield - outer red ring */}
      <mesh ref={shieldRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.15, 64]} />
        <meshStandardMaterial color="#C4161C" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* First silver ring */}
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[1.6, 1.6, 0.1, 64]} />
        <meshStandardMaterial color="#E6E6E6" metalness={1} roughness={0.1} />
      </mesh>

      {/* Second red ring */}
      <mesh position={[0, 0.09, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.1, 64]} />
        <meshStandardMaterial color="#C4161C" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Second silver ring */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 64]} />
        <meshStandardMaterial color="#E6E6E6" metalness={1} roughness={0.1} />
      </mesh>

      {/* Inner red ring */}
      <mesh position={[0, 0.11, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 64]} />
        <meshStandardMaterial color="#C4161C" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Blue center */}
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.1, 64]} />
        <meshStandardMaterial color="#004B87" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Star */}
      <mesh position={[0, 0.13, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={createStarShape()} />
        <meshStandardMaterial 
          color="#E6E6E6" 
          metalness={1} 
          roughness={0.1} 
          emissive="#FFFFFF" 
          emissiveIntensity={0.5} 
        />
      </mesh>

      {/* Shield glow */}
      <mesh position={[0, 0, -0.1]}>
        <cylinderGeometry args={[2.2, 2.2, 0.05, 64]} />
        <meshStandardMaterial
          color="#4B9FE1"
          transparent={true}
          opacity={0.2}
          emissive="#4B9FE1"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}