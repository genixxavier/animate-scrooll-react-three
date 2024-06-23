import { useGLTF, useScroll } from "@react-three/drei";
import { LoadAnimations, GenerateInitMaterials , LoadTextures } from "./Utils";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import gsap, { Power4 } from "gsap";

export function Bottle(props) {
  const { nodes } = useGLTF("/Bottle.glb");
  const scene = useThree((state) => state.scene);
  const timeline = gsap.timeline({
    defaults: { duration: 2, ease: Power4.easeInOut },
  });

  const colorsMaterial = {
    cristal: "#8C8C8C",
    soda: "#000"
  }

  const scroll = useScroll();


  const { cristalMaterial, sodaMaterial, brandMaterial } =
  GenerateInitMaterials(colorsMaterial);

  useLayoutEffect(() => {
    const textures = LoadTextures(["FalloutBoy","Classic","Quantum","Sunset"]);
    const animations = LoadAnimations(scene, colorsMaterial, cristalMaterial, sodaMaterial, brandMaterial, textures);
    animations.forEach((animation) => {
      timeline.to(animation.target, animation.animationsProperties, animation.pointTime);
    });

   /*  const bottleGroup = scene.getObjectByName("BottleGroup");
    console.log(bottleGroup);
    timeline.to(
      bottleGroup?.rotation,
      {
        y: Math.PI * 2,
      },
      2
    );

    timeline.to(
      bottleGroup?.rotation,
      {
        y: -Math.PI * 2,
      },
      4
    );

    timeline.to(
      bottleGroup?.rotation,
      {
        y: Math.PI * 2,
      },
      6
    ); */
  }, []);

  useFrame(() => {
    timeline.seek(scroll.offset * timeline.duration());
  });

  return (
    <group name="BottleGroup" {...props} dispose={null}>
      <mesh
        name="Bottle"
        receiveShadow
        geometry={nodes.Bottle.geometry}
        material={cristalMaterial}
      />
      <mesh
        name="Soda"
        receiveShadow
        geometry={nodes.Soda.geometry}
        material={sodaMaterial}
      />
      <mesh
        name="Brand"
        receiveShadow
        geometry={nodes.Brand.geometry}
        material={brandMaterial}
      />
      <mesh
        name="Cap"
        receiveShadow
        geometry={nodes.Cap.geometry}
        material={nodes.Cap.material}
      />
    </group>
  );
}

useGLTF.preload("/Bottle.glb");
