import * as THREE from "./three.module.min.js";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function getHeart() {
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
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
}

const h1 = getHeart();
const scaleFactors = new THREE.Vector3(0.1, 0.1, 0.1);
h1.scale.copy(scaleFactors);

if (
  scaleFactors.x === 0.1 &&
  scaleFactors.y === 0.1 &&
  scaleFactors.z === 0.1
) {
  h1.scale.set(-scaleFactors.x, -scaleFactors.y, -scaleFactors.z);
}

const edges = new THREE.EdgesGeometry(h1.geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

// Create line segments (borders) using the edges geometry and material
const borderLines = new THREE.LineSegments(edges, lineMaterial);
h1.add(borderLines);

scene.add(h1);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  h1.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
