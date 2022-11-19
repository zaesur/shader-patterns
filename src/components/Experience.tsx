import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FunctionComponent, ReactNode } from "react";

interface ExperienceProps {
  children?: ReactNode;
}

const Experience: FunctionComponent<ExperienceProps> = ({ children }) => {
  return (
    <Canvas className="experience">
      <color attach="background" args={["black"]} />
      <PerspectiveCamera
        makeDefault
        fov={75}
        far={100}
        near={0.01}
        position={[0.25, -0.25, 1]}
      />
      <OrbitControls enableDamping />
      {children}
    </Canvas>
  );
};

export default Experience;
