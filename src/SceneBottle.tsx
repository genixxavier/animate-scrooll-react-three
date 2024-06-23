import { Canvas } from "@react-three/fiber";
import { Bottle } from "./components/Bottle";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";

const SceneBottle = () => {
  return (
    <div className="container-3d">
      <Canvas className="canvas" camera={{ fov: 35, position: [0, 2, 10] }}>
        <ScrollControls pages={4}>
          <Bottle />
        </ScrollControls>
        <ambientLight intensity={0.8} color={0xffffff} />
        <OrbitControls
          target={[0, 2, 0]}
          enableZoom={false}
          enableRotate={false}
        />
        <Environment files={"./snowy_park_01_1k.hdr"} blur={0.5} />
      </Canvas>
    </div>
  );
};

export default SceneBottle;
