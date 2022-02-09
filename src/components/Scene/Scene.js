import { Canvas } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';
import Cactus from '../3D/Cactus';
import Box from '../3D/Box';


export default function Scene() {
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
      <color attach="background" args={['#e0b7ff']} />
      <ambientLight />
      <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <group position-y={-0.75} dispose={null}>
          <Cactus />
          <Box position={[-1.2, 0, 0]} />
        </group>
      </PresentationControls>
    </Canvas>
  )
}
