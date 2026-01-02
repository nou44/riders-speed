import { useEffect } from "react";
import * as THREE from "three";

const ThreeDBackground = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";
    renderer.domElement.style.pointerEvents = "none";

    const container = document.getElementById("three-container");
    container.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const cubes = [];

    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.BoxGeometry(
        1 + Math.random() * 1.5,
        1 + Math.random() * 1.5,
        1 + Math.random() * 1.5
      );

      const material = new THREE.MeshStandardMaterial({
        color: Math.random() > 0.5 ? 0xff0000 : 0x000000,
        transparent: true,
        opacity: 0,
        metalness: 0.6,
        roughness: 0.4,
      });

      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      const birthDelay = Math.random() * 5000;
      const lifeSpan = 2000 + Math.random() * 3000;

      cube.userData = { startTime: Date.now() + birthDelay, lifeSpan };

      randomizeMesh(cube);
      cubes.push(cube);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      const now = Date.now();

      cubes.forEach((cube) => {
        const { startTime, lifeSpan } = cube.userData;
        const timeElapsed = now - startTime;

        if (timeElapsed < 0) {
          cube.material.opacity = 0;
          return;
        }

        if (timeElapsed < lifeSpan / 2) {
          cube.material.opacity = timeElapsed / (lifeSpan / 2);
        } else if (timeElapsed < lifeSpan) {
          cube.material.opacity = 1 - (timeElapsed - lifeSpan / 2) / (lifeSpan / 2);
        } else {
          cube.userData.startTime = now + Math.random() * 5000;
          cube.userData.lifeSpan = 2000 + Math.random() * 3000;
          cube.material.opacity = 0;
          randomizeMesh(cube);
          return;
        }

        cube.rotation.x += 0.02;
        cube.rotation.y += 0.01;
        cube.position.z -= 0.03;

        if (cube.position.z < -20) cube.position.z = 10;
      });

      renderer.render(scene, camera);
    };

    animate();

    function randomizeMesh(mesh) {
      mesh.position.x = (Math.random() - 0.5) * 30;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 20;
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
    }

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="three-container"></div>;
};

export default ThreeDBackground;






