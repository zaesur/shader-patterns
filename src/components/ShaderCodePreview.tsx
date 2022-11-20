import { FunctionComponent } from "react";
import styles from "./ShaderCodePreview.module.css";

interface ShaderCodePreviewProps {
  name: string;
  code: string;
}

const ShaderCodePreview: FunctionComponent<ShaderCodePreviewProps> = ({
  name,
  code,
}) => {
  return (
    <>
      <h1>{name}</h1>
      <code>
        <pre className={styles.code}>{code}</pre>
      </code>
    </>
  );
};

export default ShaderCodePreview;
