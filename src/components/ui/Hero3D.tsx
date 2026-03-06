"use client";

// components/Hero3D.jsx
import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

const mouse = { x: 0, y: 0 };

function GoldRing({ position, speed, scale = 1 }: { position: [number, number, number]; speed: number; scale?: number }) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const groupRef = useRef<THREE.Group>(null!);

    const geometry = useMemo(() => new THREE.TorusGeometry(0.55, 0.07, 32, 80), []);
    const material = useMemo(
        () =>
            new THREE.MeshStandardMaterial({
                color: "#C9A84C",
                metalness: 0.98,
                roughness: 0.04,
            }),
        []
    );

    useFrame((state) => {
        if (!meshRef.current || !groupRef.current) return;
        meshRef.current.rotation.x += speed * 0.008;
        meshRef.current.rotation.z += speed * 0.005;
        groupRef.current.position.x += (position[0] + mouse.x * scale * 0.4 - groupRef.current.position.x) * 0.05;
        groupRef.current.position.y += (position[1] + mouse.y * scale * 0.3 - groupRef.current.position.y) * 0.05;
    });

    return (
        <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.9} floatingRange={[-0.12, 0.12]}>
            <group ref={groupRef} position={[position[0], position[1], position[2]]}>
                <mesh ref={meshRef} scale={scale} geometry={geometry} material={material} />
            </group>
        </Float>
    );
}

function GoldDot({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const baseY = position[1];
    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.6 + position[0] * 2) * 0.25;
        meshRef.current.position.x = position[0] + mouse.x * 0.15;
    });
    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshStandardMaterial color="#C9A84C" metalness={0.9} roughness={0.1} />
        </mesh>
    );
}

const RINGS_DATA: { position: [number, number, number]; speed: number; scale: number }[] = [
    { position: [-3.8, 1.8, -3], speed: 0.35, scale: 1.1 },
    { position: [3.5, -1.2, -3.5], speed: 0.55, scale: 0.9 },
    { position: [1.2, 2.8, -2], speed: 0.28, scale: 0.75 },
    { position: [-1.8, -2.2, -1.5], speed: 0.48, scale: 0.85 },
    { position: [4, 2, -4], speed: 0.32, scale: 1.2 },
    { position: [-4, -0.5, -2.5], speed: 0.42, scale: 0.95 },
];

const DOTS_DATA: [number, number, number][] = [
    [-2, 0.5, -1],
    [2.5, 1.5, -2],
    [-1, -1, -1.5],
    [3, -0.5, -2.5],
    [-3, -0.8, -2],
    [0.5, 3, -2],
];

export function Hero3D() {
    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, []);

    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 55 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
            }}
        >
            <ambientLight intensity={0.45} />
            <pointLight position={[4, 6, 5]} intensity={1.6} color="#FFD166" />
            <pointLight position={[-5, -4, 3]} intensity={0.45} color="#FFA040" />
            <Environment preset="sunset" />
            {RINGS_DATA.map((ring, i) => (
                <GoldRing key={i} {...ring} />
            ))}
            {DOTS_DATA.map((pos, i) => (
                <GoldDot key={i} position={pos} />
            ))}
        </Canvas>
    );
}
