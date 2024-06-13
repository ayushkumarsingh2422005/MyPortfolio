import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { degToRad } from 'three/src/math/MathUtils.js';

export default function Computer() {
    const { scene } = useGLTF('/desktop_pc/scene.gltf');
    const meshRef = useRef(null);

    // useEffect(() => {
    //     if (meshRef.current) {
    //         // Log the rotation for debugging
    //         console.log(meshRef.current.rotation);

    //         // Use gsap to animate the rotation smoothly
    //         gsap.to(meshRef.current.rotation, {
    //             y: degToRad(30),
    //             duration: 3,
    //             ease: "power2.inOut"
    //         });
    //     }
    // }, []);

    return (
        <>
            <PerspectiveCamera makeDefault position={[10, 0, 0]} args={[35]} />
            <OrbitControls enableZoom={false} maxPolarAngle={degToRad(80)} minPolarAngle={degToRad(80)} />
            <pointLight args={["#ffffff", 10]} position={[2, 2.5, -1.5]} />
            
            <mesh rotation={[0, 0, -degToRad(10)]}>
                <directionalLight intensity={2} position={[0, 3, 0]} castShadow/>
            </mesh>



            <mesh ref={meshRef} receiveShadow castShadow>
                <primitive object={scene} position={[0, -1, -1.5]} scale={0.75}/>
            </mesh>
            {/* <axesHelper args={[10]} /> */}
        </>
    );
}
