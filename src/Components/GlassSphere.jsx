import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { MeshTransmissionMaterial, OrbitControls, Environment, Float, Center } from "@react-three/drei";
import * as THREE from "three";
import artistImg from "../assets/artists.png";

const ArtistRing = ({ count = 6, radius = 5 }) => {
  const group = useRef();
  const texture = useLoader(THREE.TextureLoader, artistImg);

  useFrame((state) => {
    group.current.rotation.y += 0.005; // Revolve around the sphere
  });

  const artists = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2;
      return {
        position: [Math.cos(angle) * radius, (Math.random() - 0.5) * 2, Math.sin(angle) * radius],
        rotation: [0, -angle + Math.PI / 2, 0],
      };
    });
  }, [count, radius]);

  return (
    <group ref={group}>
      {artists.map((props, i) => (
        <mesh key={i} position={props.position} rotation={props.rotation}>
          <planeGeometry args={[2, 2]} />
          <meshBasicMaterial 
            map={texture} 
            transparent 
            opacity={0.6} 
            side={THREE.DoubleSide}
            // We'll use a portion of the collage for each plane if we wanted to be fancy,
            // but for now, showing the whole collage revolving will create the "shadow/reflection" effect nicely.
          />
        </mesh>
      ))}
    </group>
  );
};

const Sphere = () => {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(time / 4) * 0.2;
    mesh.current.rotation.y = Math.cos(time / 4) * 0.2;
  });

  return (
    <mesh ref={mesh} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={512}
        transmission={1}
        roughness={0.0}
        thickness={0.5}
        ior={1.5}
        chromaticAberration={0.06}
        anisotropy={0.1}
        distortion={0.1}
        distortionScale={0.3}
        temporalDistortion={0.5}
        clearcoat={1}
        attenuationDistance={0.5}
        attenuationColor="#ffffff"
        color="#ffffff"
      />
    </mesh>
  );
};

const GlassSphere = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        {/* We use a studio environment map for clean lighting, but the reflections come from our ArtistRing */}
        <Environment preset="studio" blur={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere />
        </Float>
        
        <ArtistRing />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default GlassSphere;
