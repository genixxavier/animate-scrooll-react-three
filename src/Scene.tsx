import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Laptop } from "./components/Lapto";
import * as THREE from 'three';

const Scene = () => {
  return (
    <Canvas camera={{position: [0,6,25], fov:65}}
        gl={{
            antialias: true,
            //outputEncoding: THREE.sRGBEncoding,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.5,
        }}
    >
      <Suspense fallback={null}>
        <Laptop />
      </Suspense>

    <directionalLight position={[0, 10, 0]} 
        color={'#fff'}
        intensity={2}
        />
    <ambientLight intensity={0.5}  color={'#fff'}/>
      <OrbitControls target={[0,5,1]} />
    </Canvas>
  );
};

export default Scene;
