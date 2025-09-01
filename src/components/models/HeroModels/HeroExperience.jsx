import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, AdaptiveDpr, Preload } from '@react-three/drei'
import { EffectComposer, SelectiveBloom, Selection } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useMediaQuery } from 'react-responsive'
import HeroLights from './HeroLights'
import Particles from './Particles'
import { Robo } from './Robo'

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 15], fov: 45 }}
      shadows={false}
    >
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <AdaptiveDpr />

      <Selection>
        <Suspense fallback={null}>
          <HeroLights />
          <Particles count={isMobile ? 10 : 15} />
          <group
            scale={isMobile ? 5 : 7}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Robo />
          </group>
          <Preload all />
        </Suspense>

        <EffectComposer>
          <SelectiveBloom
            intensity={0.8}
            luminanceThreshold={0.92}
            luminanceSmoothing={0.25}
            blendFunction={BlendFunction.ADD}
          />
        </EffectComposer>
      </Selection>
    </Canvas>
  )
}

export default HeroExperience
