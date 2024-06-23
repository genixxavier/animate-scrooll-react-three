import { Html, useGLTF } from "@react-three/drei";
import Page from "./Page";

export function Laptop(props) {
  const { nodes, materials } = useGLTF("/Laptop.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      />
      <mesh
        castShadow
        receiveShadow
        /* geometry={nodes.Screen.geometry}
        material={materials.Screen} */
      >
        <Html
          position={[0, 12.851, -5.38028]}
          transform
          occlude
          style={{ backgroundColor: "red", width: "914px", height: "652px" }}
        >
          <Page /> 
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.grey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_1.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.grey}
      />
    </group>
  );
}

useGLTF.preload("/Laptop.glb");
