import { useState } from "react";
import Experience from "./components/Experience";
import shaders, { shaderNames } from "./shaders/shaders";
import Model from "./components/Model";
import ShaderCodePreview from "./components/ShaderCodePreview";
import ShaderSelect from "./components/ShaderSelect";
import styles from "./App.module.css";

function App() {
  const [shaderChoice, setShaderChoice] = useState("test");

  return (
    <div className={styles.gui}>
      <div className={styles.control}>
        <ShaderSelect
          label="Select a shader: "
          values={shaderNames}
          initialValue={shaderChoice}
          onSelect={setShaderChoice}
        />

        <ShaderCodePreview
          name="Vertex shader"
          code={shaders[shaderChoice].vertexShader}
        />
        <ShaderCodePreview
          name="Fragment shader"
          code={shaders[shaderChoice].fragmentShader}
        />
      </div>

      <div className={styles.experience}>
        <Experience>
          <Model shaderChoice={shaderChoice} />
        </Experience>
      </div>
    </div>
  );
}

export default App;
