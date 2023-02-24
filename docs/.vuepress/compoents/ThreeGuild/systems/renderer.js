import { WebGLRenderer } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.useLegacyLights;
  return renderer;
}

export { createRenderer };
