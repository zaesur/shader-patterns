import { FunctionComponent } from "react";
import { DoubleSide } from "three";

interface ExperienceProps {
    fragmentShader: string;
    vertexShader: string;
}

const Experience: FunctionComponent<ExperienceProps> = (props) => {
  return (
    <mesh>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial side={DoubleSide} {...props} />
    </mesh>
  );
};

export default Experience;