import { FunctionComponent } from "react";
import { DoubleSide } from "three";
import shaders from "../shaders/shaders";

interface ExperienceProps {
  shaderChoice: string;
}

const Model: FunctionComponent<ExperienceProps> = ({ shaderChoice }) => {

  return (
    <mesh>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        key={shaderChoice}
        side={DoubleSide}
        {...shaders[shaderChoice]}
        defines={{ PI: Math.PI }}
      />
    </mesh>
  );
};

export default Model;
