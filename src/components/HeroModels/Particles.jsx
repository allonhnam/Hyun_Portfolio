import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const Particles = ({ count = 120 }) => {
  const pointsRef = useRef()
  const speeds = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    const s = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = Math.random() * 10 + 5
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
      s[i] = 0.4 + Math.random() * 0.2
    }
    speeds.current = s
    return arr
  }, [count])

  const frameStep = useRef(0)

  useFrame((_, delta) => {
    frameStep.current++
    if (frameStep.current % 2 !== 0) return

    const pos = pointsRef.current.geometry.attributes.position.array
    const s = speeds.current
    const len = s.length
    const dy = 6 * delta

    for (let i = 0; i < len; i++) {
      let y = pos[i * 3 + 1]
      y -= s[i] * dy
      if (y < -2) y = Math.random() * 10 + 5
      pos[i * 3 + 1] = y
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef} frustumCulled>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={positions.length / 3}
          array={positions}
          usage={THREE.DynamicDrawUsage}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color='#ffffff'
        size={0.045}
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  )
}

export default Particles
