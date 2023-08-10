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
function getSphere() {
  const gs = new THREE.SphereGeometry(1, 32);
  const se = new THREE.EdgesGeometry(gs);
  const s = new THREE.LineSegments(
    se,
    new THREE.LineBasicMaterial({ color: 0xccff00 })
  );
  return s;
}
function getCube() {
  const gb = new THREE.BoxGeometry(2, 2, 2);
  const be = new THREE.EdgesGeometry(gb);
  const b = new THREE.LineSegments(
    be,
    new THREE.LineBasicMaterial({ color: 0xff5e00 })
  );
  return b;
}
const sp1 = getSphere();
scene.add(sp1);
const bx1 = getCube();
scene.add(bx1);
camera.position.z = 5;
function animate() {
  requestAnimationFrame(animate);
  sp1.rotation.y += 0.01;
  bx1.rotation.x += 0.01;
  bx1.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
