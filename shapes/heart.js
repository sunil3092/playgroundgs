// heart.js

import * as THREE from "../three.module.min.js";

export function getHeart() {
  const h = new THREE.Shape();
  const x = -2.5;
  const y = -5;
  h.moveTo(x + 2.5, y + 2.5);
  h.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  h.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  h.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
  h.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
  h.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  h.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

  const extSettings = {
    steps: 17,
    depth: 1.0,
    bevelEnabled: true,
    bevelThickness: 0.74,
    bevelSize: 1.06,
    bevelSegments: 8,
  };

  const geometry = new THREE.ExtrudeGeometry(h, extSettings);

  return geometry;
}
