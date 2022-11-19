import { FunctionComponent } from "react";

interface ShaderControlProps {
    label: string;
    initialValue: string;
    values: Array<string>;
    onSelect: (value: string) => void;
}

const ShaderControl: FunctionComponent<ShaderControlProps> = ({ label, initialValue, values, onSelect }) => {
    return <label>
    {label}
    <select
      value={initialValue}
      onChange={(event) => onSelect(event.target.value)}
    >
      {values.map((name) => (
        <option value={name} key={name}>
          {name}
        </option>
      ))}
    </select>
  </label>;
}

export default ShaderControl;