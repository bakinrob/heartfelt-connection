import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 32;

function useNodes() {
  return useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    nodes.push(new THREE.Vector3(0, 0, 0));
    for (let i = 1; i < NODE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.6 + Math.random() * 2.8;
      nodes.push(new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta) * 0.55,
        r * Math.cos(phi)
      ));
    }
    return nodes;
  }, []);
}

function buildEdges(nodes: THREE.Vector3[]) {
  const edges: [number, number][] = [];
  for (let i = 1; i < nodes.length; i++) edges.push([0, i]);
  for (let i = 1; i < nodes.length; i++)
    for (let j = i + 1; j < nodes.length; j++)
      if (nodes[i].distanceTo(nodes[j]) < 1.8) edges.push([i, j]);
  return edges;
}

function Scene({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const hubRef = useRef<THREE.Mesh>(null);
  const nodes = useNodes();
  const edges = useMemo(() => buildEdges(nodes), [nodes]);

  const PARTICLE_COUNT = 55;
  const hubEdges = useMemo(() => edges.filter(([a]) => a === 0).slice(0, PARTICLE_COUNT), [edges]);
  const pPos = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);
  const pOff = useMemo(() => Array.from({ length: PARTICLE_COUNT }, () => Math.random()), []);
  const pRef = useRef<THREE.Points>(null);

  const lineGeos = useMemo(() => edges.map(([a, b]) =>
    new THREE.BufferGeometry().setFromPoints([nodes[a], nodes[b]])
  ), [edges, nodes]);

  const starPositions = useMemo(() => {
    const p = new Float32Array(1800);
    for (let i = 0; i < 600; i++) {
      p[i * 3] = (Math.random() - 0.5) * 18;
      p[i * 3 + 1] = (Math.random() - 0.5) * 12;
      p[i * 3 + 2] = (Math.random() - 0.5) * 14 - 5;
    }
    return p;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mx = mouse.current.x;
    const my = mouse.current.y;

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05 + mx * 0.22;
      groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.07 + my * 0.09;
    }
    if (hubRef.current) {
      hubRef.current.scale.setScalar(1 + Math.sin(t * 1.6) * 0.1);
    }
    if (pRef.current && hubEdges.length) {
      const attr = pRef.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < Math.min(PARTICLE_COUNT, hubEdges.length); i++) {
        const [a, b] = hubEdges[i];
        const prog = ((pOff[i] + t * 0.2) % 1);
        const s = nodes[a], e = nodes[b];
        pPos[i * 3] = s.x + (e.x - s.x) * prog;
        pPos[i * 3 + 1] = s.y + (e.y - s.y) * prog;
        pPos[i * 3 + 2] = s.z + (e.z - s.z) * prog;
      }
      attr.set(pPos);
      attr.needsUpdate = true;
      pRef.current.rotation.y = t * 0.05 + mx * 0.22;
      pRef.current.rotation.x = Math.sin(t * 0.15) * 0.07 + my * 0.09;
    }
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 0, 0]} intensity={2.5} color="#EA7600" distance={8} decay={2} />
      <pointLight position={[5, 3, -2]} intensity={0.5} color="#FF9A3C" distance={12} />
      <pointLight position={[-4, -2, 3]} intensity={0.3} color="#ffffff" distance={10} />

      {/* Star dust */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[starPositions, 3]} count={600} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#94A3B8" transparent opacity={0.4} sizeAttenuation />
      </points>

      {/* Data particles */}
      <points ref={pRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pPos, 3]} count={PARTICLE_COUNT} />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#FF9A3C" transparent opacity={0.9} sizeAttenuation />
      </points>

      <group ref={groupRef}>
        {/* Connection lines */}
        {lineGeos.map((geo, i) => (
          <line key={i} geometry={geo}>
            <lineBasicMaterial color="#EA7600" transparent opacity={0.12} />
          </line>
        ))}
        {/* Hub node */}
        <mesh ref={hubRef} position={[0, 0, 0]}>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color="#EA7600" emissive="#EA7600" emissiveIntensity={1.5} />
        </mesh>
        {/* Outer nodes */}
        {nodes.slice(1).map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.055, 12, 12]} />
            <meshStandardMaterial color="#94A3B8" emissive="#EA7600" emissiveIntensity={0.2} transparent opacity={0.7} />
          </mesh>
        ))}
      </group>
    </>
  );
}

export default function FinanceScene() {
  const mouse = useRef({ x: 0, y: 0 });
  return (
    <div
      className="absolute inset-0 z-0"
      onMouseMove={(e) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}
