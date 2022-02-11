import { useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';
import Cactus from '../3D/Cactus';
import Box from '../3D/Box';
import ForestHouse from '../3D/ForestHouse';
import Cottage from '../3D/Cottage';
import { OctahedronGeometry } from 'three';



export default function Scene() {

    const cameraProps = {
        fov: 60,
        position: [0, 1.5, 2],
    };

    return (
        <Canvas camera={cameraProps}>
            <ambientLight />
            <pointLight position={[0, 0, 10]} />
            <Suspense fallback={null}>
                <Cactus />
            </Suspense>
        </Canvas>
    )
}

function Fallback() {
    useEffect(() => {
        console.error("Model Loading failed");
    }, []);

    return (
        <mesh 
        position={[0, 0, 0]} 
        rotation={[0.2, 1, 0]}
        onPointerMove={(e) => console.log("move")}
        >
            <octahedronGeometry args={[1, 2]} />
            <meshStandardMaterial color="hotpink" transparent />
        </mesh>
    );
}