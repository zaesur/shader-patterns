import { useState } from "react";
import Experience from "./components/Experience";
import shaders, { shaderNames } from "./shaders/shaders";
import Model from "./components/Model";
import "./App.css";
import Preview from "./components/ShaderPreview";
import ShaderControl from "./components/ShaderControl";

function App() {
  const [shaderChoice, setShaderChoice] = useState("test");

  return (
    <div className="gui">
      <div className="control">
        <ShaderControl
          label="Select a shader: "
          values={shaderNames}
          initialValue={shaderChoice}
          onSelect={setShaderChoice}
        />

        <section>
          <Preview
            name="Vertex shader"
            code={shaders[shaderChoice].vertexShader}
          />
          <Preview
            name="Fragment shader"
            code={shaders[shaderChoice].fragmentShader}
          />
        </section>
      </div>

      <Experience>
        <Model shaderChoice={shaderChoice} />
      </Experience>
    </div>
  );
}

export default App;
