/**
 * 3d的入口
 */

import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/light.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
/**loop23 */
import { Loop } from "./systems/loop.js";

let camera, renderer, scene, loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();

    loop = new Loop(camera, scene, renderer);

    container.append(renderer.domElement);

    const cube = createCube();
    loop.updatables.push(cube);
    const light = createLights();
    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);
    // resizer.onResize = () => {
    //   this.render();
    // };
  }
  render() {
    renderer.render(scene, camera);
    // console.log(123);
  }
  start() {
    loop.start();
  }
  stop() {
    loop.stop();
  }
}

export { World };
