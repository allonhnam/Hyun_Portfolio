import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

const Particles = ({ count = 120, area = 10, height = 10, floor = -2 }) => {
  const pointsRef = useRef()
  const materialRef = useRef()
  const speeds = useRef()
  const baseX = useRef()
  const baseZ = useRef()
  const phase = useRef()
  const amp = useRef()
  const loomPhase = useRef(0)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const s = new Float32Array(count)
    const bx = new Float32Array(count)
    const bz = new Float32Array(count)
    const ph = new Float32Array(count)
    const am = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * area
      const y = Math.random() * height + 5
      const z = (Math.random() - 0.5) * area

      pos[i * 3 + 0] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z

      bx[i] = x
      bz[i] = z
      ph[i] = Math.random() * Math.PI * 2
      am[i] = 0.15 + Math.random() * 0.35

      s[i] = 0.4 + Math.random() * 0.2
    }

    speeds.current = s
    baseX.current = bx
    baseZ.current = bz
    phase.current = ph
    amp.current = am
    return pos
  }, [count, area, height])

  useEffect(() => {
    const obj = { t: 0 }
    const tween = gsap.to(obj, {
      t: Math.PI * 2,
      duration: 3,
      ease: 'none',
      repeat: -1,
      onUpdate: () => {
        loomPhase.current = obj.t
      }
    })

    const pulse = gsap.to(materialRef.current, {
      size: 0.07,
      opacity: 1,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    })

    return () => {
      tween.kill()
      pulse.kill()
    }
  }, [])

  const frameStep = useRef(0)

  useFrame((_, delta) => {
    frameStep.current++
    if (frameStep.current % 2 !== 0) return

    const geom = pointsRef.current.geometry
    const pos = geom.attributes.position.array
    const s = speeds.current
    const bx = baseX.current
    const bz = baseZ.current
    const ph = phase.current
    const am = amp.current

    const dy = 6 * delta
    const t = loomPhase.current
    const len = s.length

    for (let i = 0; i < len; i++) {
      const idx = i * 3

      // fall
      let y = pos[idx + 1]
      y -= s[i] * dy
      if (y < floor) y = Math.random() * height + 5
      pos[idx + 1] = y

      // loom sway
      const a = am[i]
      const p = ph[i]
      pos[idx + 0] = bx[i] + Math.sin(t + p) * a
      pos[idx + 2] = bz[i] + Math.cos(t * 0.9 + p) * a
    }

    geom.attributes.position.needsUpdate = true
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
        ref={materialRef}
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
