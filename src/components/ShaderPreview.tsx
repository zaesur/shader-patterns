import { FunctionComponent } from "react";

interface PreviewProps {
    name: string;
    code: string;
}

const Preview: FunctionComponent<PreviewProps> = ({ name, code }) => {
  return (
    <>
      <h1>{name}</h1>
      <code>
        <pre>{code}</pre>
      </code>
    </>
  );
};

export default Preview;
