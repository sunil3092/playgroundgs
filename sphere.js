import * as THREE from "./three.module.min.js";

export function getSphereWithTexture(texturePath) {
  const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(texturePath);
  const material = new THREE.MeshPhongMaterial({
    map: texture,
    color: 0xffffff,
  });

  const sphereMesh = new THREE.Mesh(sphereGeometry, material);

  return sphereMesh;
}
