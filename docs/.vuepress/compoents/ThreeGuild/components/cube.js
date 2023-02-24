import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
/**
 * 创建Mesh 组件
 */
function createCube() {
  // create a geometry 空间体
  const geometry = new BoxGeometry(2, 2, 2);

  // create a default (white) Basic material 材质

  const material = new MeshStandardMaterial({ color: "purple" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);
  //添加tick方法
  cube.tick = () => {
    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  };
  //   cube.scale.set(0.5, 1, 2);

  return cube;
}

export { createCube };
