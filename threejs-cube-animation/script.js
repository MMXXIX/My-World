import * as THREE from "three";

// Dimensions du canvas
const canvas = document.getElementById("canvas");
const iw = window.innerWidth;
const ih = window.innerHeight;
canvas.width = iw;
canvas.height = ih;

// Création de la scène
const scene = new THREE.Scene();

// Création de la caméra
const camera = new THREE.PerspectiveCamera(70, iw / ih, 0.1, 1000);
camera.position.z = 3;

// Création de la lumière
const light = new THREE.PointLight(0xeeeeee, 30);
scene.add(light);
light.position.z = 3;

// Création du renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(iw, ih);

// Création d'une texture
const texture = new THREE.TextureLoader().load("diam.jpg");

// Création d'un cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Fonction d'animation
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// Démarrage de l'animation
animate();
