import '@/styles/global.css';
import '@/styles/index.css';
import * as THREE from 'three';
import { BlockRenderer } from '@dispenser/projector';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lights
const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

// Cube
const block = new BlockRenderer();
scene.add(block);

function animate() {
    requestAnimationFrame(animate);
    block.rotation.x += 0.01;
    block.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
