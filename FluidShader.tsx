import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, shaderMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Create a custom shader material for the Hologram effect
const HologramMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color('#a855f7'), // Purple-500
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    uniform float uTime;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      
      // Dynamic wobble / distortion
      vec3 pos = position;
      float warp = sin(pos.y * 3.0 + uTime) * 0.1 + cos(pos.z * 2.0 + uTime * 1.5) * 0.1;
      pos += normal * warp * 0.5;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  // Fragment Shader
  `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    uniform float uTime;
    uniform vec3 uColor;

    // Pseudo-random noise
    float random(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // Fresnel effect for edge glow
      float fresnel = dot(viewDir, normal);
      fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
      fresnel = pow(fresnel, 2.0);

      // High frequency noise for "digital entropy" look
      float noise = random(vUv * 100.0 + uTime);
      
      // Horizontal scanlines
      float scanline = sin(vUv.y * 200.0 + uTime * 2.0) * 0.05;

      // Base color with noise
      vec3 finalColor = uColor + vec3(noise * 0.2);
      
      // Alpha calculation: transparent center, opaque edges (fresnel), plus noise
      float alpha = fresnel * 0.8 + noise * 0.15 + 0.1;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `
);

// Register the material so it can be used as a JSX element
extend({ HologramMaterial });

// Add type definition for the new material
declare module '@react-three/fiber' {
  interface ThreeElements {
    hologramMaterial: any;
  }
}

const HologramSphere = () => {
  const materialRef = useRef<any>(null);
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={2.2}>
      {/* High segment count for smooth shader distortion */}
      <sphereGeometry args={[1, 128, 128]} /> 
      <hologramMaterial 
        ref={materialRef} 
        transparent 
        side={THREE.DoubleSide}
        depthWrite={false} // Important for transparency
        blending={THREE.AdditiveBlending} // Glowy look
      />
    </mesh>
  );
};

export const HeroScene: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        
        {/* Subtle stars for depth */}
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
        
        <HologramSphere />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};