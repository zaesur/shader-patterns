import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

import "./App.css";
import vertexShader from "./shaders/pattern_15/vertex.glsl";
import fragmentShader from "./shaders/pattern_15/fragment.glsl";

const current = {
  vertexShader,
  fragmentShader,
};

function App() {
  return (
    <Canvas>
      <color attach="background" args={["black"]} />
      <PerspectiveCamera
        makeDefault
        fov={75}
        far={100}
        near={0.01}
        position={[0.25, -0.25, 1]}
      />
      <OrbitControls enableDamping />
      <Experience {...current} />
    </Canvas>
  );
}

export default App;
