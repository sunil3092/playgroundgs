import * as THREE from "./three.module.min.js";
import { getSphereWithTexture } from "./sphere.js";

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

// Create a sphere with the same texture
const sphereTexturePath = "../assets/earth.jpg"; // Replace with the actual path to the texture
const sphere = getSphereWithTexture(sphereTexturePath);
sphere.position.set(0, 0, 0); // Adjust the position as needed
scene.add(sphere);

// Create lighting
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white ambient light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1); // Set the direction of the light
scene.add(directionalLight);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
