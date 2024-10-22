import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Water } from 'three/examples/jsm/objects/Water.js'; // 模拟海水
import { Sky } from 'three/examples/jsm/objects/Sky.js'; // 添加天空

function IndexPage() {
  const [showTransition, setShowTransition] = useState(false);
  const mountRef = useRef(null); // 用于 Three.js 渲染

  useEffect(() => {
    // 初始化 Three.js 场景
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 创建水面效果
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    const water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load('/textures/waternormals.jpg', function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
    });
    water.rotation.x = - Math.PI / 2;
    scene.add(water);

    // 创建天空背景
    const sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);

    const sun = new THREE.Vector3();
    sun.x = 1;
    sun.y = 1;
    sun.z = -1;
    sky.material.uniforms['sunPosition'].value.copy(sun);
    water.material.uniforms['sunDirection'].value.copy(sun);

    // 加载鱼的3D模型
    const loader = new GLTFLoader();
    loader.load('/models/fish.glb', function (gltf) {
      const fish = gltf.scene;
      fish.scale.set(2.5, 2.5, 2.5);
      scene.add(fish);

      const animate = function () {
        requestAnimationFrame(animate);

        // 动画让鱼游动
        fish.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    });

    camera.position.z = 5;

    // 3秒后过渡到文字显示
    const timer = setTimeout(() => {
      setShowTransition(true);
      setTimeout(() => {
        window.location.href = '/company'; // 3秒后跳转到公司页面
      }, 2000);
    }, 3000);

    return () => {
      clearTimeout(timer);
      mountRef.current.removeChild(renderer.domElement); // 清理场景
    };
  }, []);

  return (
    <div className={`container ${showTransition ? 'fade-out' : ''}`}>
      <div className="threejs-container" ref={mountRef}></div>
      <div className={`company-name ${showTransition ? 'page-transition' : ''}`}>
        <span>Ocean Commerce</span> <span>大洋商贸</span>
      </div>
    </div>
  );
}

// React 根元素渲染
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<IndexPage />);

