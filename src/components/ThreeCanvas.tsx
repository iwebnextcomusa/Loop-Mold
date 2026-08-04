import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  interactive?: boolean;
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ interactive = true, className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState<boolean>(true);
  const [rotationSpeed, setRotationSpeed] = useState<number>(0.008);
  const [layerProgress, setLayerProgress] = useState<number>(100);

  useEffect(() => {
    const currentRef = mountRef.current;
    if (!currentRef) return;

    // Dimensions
    const width = currentRef.clientWidth || 600;
    const height = currentRef.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 3.5, 6);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    currentRef.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x00e5ff, 4, 20);
    blueLight.position.set(4, 5, 4);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x3b82f6, 3, 20);
    cyanLight.position.set(-4, -2, -2);
    scene.add(cyanLight);

    // Create 3D Printbed Grid Base
    const gridHelper = new THREE.GridHelper(6, 24, 0x00e5ff, 0x1e293b);
    gridHelper.position.y = -1.2;
    scene.add(gridHelper);

    // Group for object being "printed"
    const printGroup = new THREE.Group();
    scene.add(printGroup);

    // Central Object: Complex Mechanical Gear / Turbine
    const outerGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32, 2, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0b1329,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: wireframe,
      emissive: 0x00e5ff,
      emissiveIntensity: 0.2,
    });

    const mesh = new THREE.Mesh(outerGeo, material);
    printGroup.add(mesh);

    // Outer Orbiting Ring
    const ringGeo = new THREE.TorusGeometry(2.1, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    scene.add(ringMesh);

    // Laser nozzle beam representation
    const nozzleGroup = new THREE.Group();
    scene.add(nozzleGroup);

    const nozzleGeo = new THREE.ConeGeometry(0.2, 0.6, 16);
    const nozzleMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.9, roughness: 0.1 });
    const nozzleMesh = new THREE.Mesh(nozzleGeo, nozzleMat);
    nozzleMesh.position.set(0, 2, 0);
    nozzleMesh.rotation.x = Math.PI;
    nozzleGroup.add(nozzleMesh);

    // Glowing Laser Line
    const beamGeo = new THREE.CylinderGeometry(0.02, 0.02, 2.2, 8);
    const beamMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.8 });
    const beamMesh = new THREE.Mesh(beamGeo, beamMat);
    beamMesh.position.set(0, 0.9, 0);
    nozzleGroup.add(beamMesh);

    // Interaction mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = currentRef.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / width) * 2 - 1;
      mouseY = -(y / height) * 2 + 1;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Window Resize Listener
    const handleResize = () => {
      if (!currentRef) return;
      const w = currentRef.clientWidth;
      const h = currentRef.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let reqId: number;
    let time = 0;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      time += 0.02;

      // Rotate central gear
      printGroup.rotation.y += rotationSpeed;
      printGroup.rotation.x = Math.sin(time * 0.5) * 0.15;

      ringMesh.rotation.z += 0.005;

      // Move laser nozzle in circular pattern above part
      const nozzleX = Math.cos(time * 1.5) * 1.2;
      const nozzleZ = Math.sin(time * 1.5) * 1.2;
      nozzleGroup.position.set(nozzleX, 0, nozzleZ);

      // Mouse camera sway
      if (interactive) {
        camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.8 + 3.5 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (currentRef && renderer.domElement) {
        currentRef.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive, rotationSpeed, wireframe]);

  return (
    <div className={`relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden bg-slate-950/80 border border-slate-800/80 backdrop-blur-md shadow-2xl ${className}`}>
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Control Overlay Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-900/90 border border-cyan-500/30 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-400 backdrop-blur-md shadow-md">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>3D SIMULATION ONLINE</span>
      </div>

      {/* Interactive Controls */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl text-xs text-slate-300 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setWireframe(!wireframe)}
            className={`px-3 py-1 rounded-lg border text-xs font-medium transition-all ${
              wireframe
                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-[0_0_10px_rgba(0,229,255,0.2)]'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
          >
            {wireframe ? 'Wireframe Mode' : 'Solid Shaded'}
          </button>

          <button
            type="button"
            onClick={() => setRotationSpeed(rotationSpeed === 0 ? 0.008 : 0)}
            className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all"
          >
            {rotationSpeed === 0 ? '▶ Resume Rotation' : '⏸ Pause'}
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span>Tolerance: ±0.025mm</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="hidden sm:inline">Drag to Inspect</span>
        </div>
      </div>
    </div>
  );
};
