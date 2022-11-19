const shaders = Object.entries<{ default: string }>(
  import.meta.glob("./**/*.glsl", { eager: true })
).reduce<Record<string, { vertexShader: string; fragmentShader: string }>>(
  (shaders, [moduleName, moduleContent]) => {
    const match = moduleName.match(/(\w+)\/(\w+)\.glsl/);

    if (match) {
      const [, key, type] = match;

      return {
        ...shaders,
        [key]: {
          ...shaders[key],
          [`${type}Shader`]: moduleContent.default,
        },
      };
    } else {
      return shaders;
    }
  },
  {}
);

export const shaderNames = Object.keys(shaders);
export default shaders;
