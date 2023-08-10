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
  return geometry;
}

const h1 = getHeart();

// Create a texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("./texture.jpg");

// Create a MeshPhongMaterial with the texture and lighting
const material = new THREE.MeshPhongMaterial({
  map: texture,
  color: 0xffffff,
});

const heartMesh = new THREE.Mesh(h1, material);

const scaleFactor = 0.1;
heartMesh.scale.set(-scaleFactor, -scaleFactor, scaleFactor);

scene.add(heartMesh);

// Create lighting
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white ambient light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1); // Set the direction of the light
scene.add(directionalLight);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  heartMesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
