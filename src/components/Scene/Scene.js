import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';
import Cactus from '../3D/Cactus';
import Box from '../3D/Box';
import ForestHouse from '../3D/ForestHouse';
import Cottage from '../3D/Cottage';



export default function Scene() {
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 90, position: [0, 0, 8] }}>
      <color attach="background" args={['#e0b7ff']} />
      <ambientLight />
      <PresentationControls global zoom={1} rotation={[0, -Math.PI / 2, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <group position-y={-0.75} dispose={null}>
          {/* <Cactus /> */}
          {/* <Box position={[-1.2, 0, 0]} /> */}
          <Suspense fallback={null}>
            <Cottage />
          </Suspense>
        </group>
      </PresentationControls>
    </Canvas>
  )
}
