import Experience from "./components/Experience";
import shaders from "./shaders/shaders";
import Model from "./components/Model";

import "./App.css";
import { useState } from "react";

function App() {
  const [shaderChoice, setShaderChoice] = useState("test");

  return (
    <div className="gui">
      <div className="control">
        <label>
          {"Select a shader: "}
          <select
            value={shaderChoice}
            onChange={(event) => setShaderChoice(event.target.value)}
          >
            {Object.keys(shaders).map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>
      
      <Experience>
        <Model shaderChoice={shaderChoice} />
      </Experience>
    </div>
  );
}

export default App;
