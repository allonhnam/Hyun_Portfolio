import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export function Robo(props) {
const group = React.useRef()
const { nodes, materials, animations } = useGLTF('/models/futuristic_flying_animated_robot_-_low_poly.glb')
const { actions } = useAnimations(animations, group)

const ringBloomMat = React.useMemo(
() => new THREE.MeshStandardMaterial({
color: '#b7f7ff',
metalness: 0,
roughness: 0.4,
emissive: '#b7f7ff',
emissiveIntensity: 50,
toneMapped: false
}),
[]
)

const haloMat = React.useMemo(
() => new THREE.MeshStandardMaterial({
color: '#b7f7ff',
metalness: 0,
roughness: 0.25,
emissive: '#b7f7ff',
emissiveIntensity: 24,
toneMapped: false
}),
[]
)

const rotXHalf = React.useMemo(() => -Math.PI / 2, [])
const rotXHalfPos = React.useMemo(() => Math.PI / 2, [])
const robotOriginPos = React.useMemo(() => [0, 9.763, 0], [])
const robotOriginRot = React.useMemo(() => [-Math.PI / 2, 0, 0], [])
const headHaloPos = React.useMemo(() => [0, 0.32, 3.12], [])
const headHaloRot = React.useMemo(() => [Math.PI / 2, 0, 0], [])
const mouthPos = React.useMemo(() => [0, -0.504, 2.573], [])
const mouthScale = React.useMemo(() => [1, 1, 2.881], [])
const wavePos = React.useMemo(() => [0, 0, 0.113], [])
const waveScale = React.useMemo(() => [1, 1, 0.186], [])
const wave2Pos = React.useMemo(() => [0, 0, 0.879], [])
const wave2Scale = React.useMemo(() => [1, 1, 0.889], [])
const wave1Pos = React.useMemo(() => [0, 0, -0.089], [])
const wave1Scale = React.useMemo(() => [1, 1, 0.001], [])
const wave3Pos = React.useMemo(() => [0, 0, 0.511], [])
const wave3Scale = React.useMemo(() => [1, 1, 0.552], [])
const earsPos = React.useMemo(() => [0, 0, 2.967], [])
const emptyPos = React.useMemo(() => [0, -0.06, 2.786], [])
const eyesPos = React.useMemo(() => [0, -0.431, 0.076], [])
const handOriginPos = React.useMemo(() => [0.723, 0, 2.015], [])
const handOriginRot = React.useMemo(() => [0, -0.064, 0], [])
const handsPos = React.useMemo(() => [-0.723, 0, -1.963], [])
const handOrigin2Pos = React.useMemo(() => [-0.723, 0, 2.015], [])
const handOrigin2Rot = React.useMemo(() => [0, 0.064, -Math.PI], [])
const robotPos = React.useMemo(() => [0, 0, 0.051], [])
const wavesPos = React.useMemo(() => [0, 0, 1], [])
const wavesScale = React.useMemo(() => [1, 1, 0.747], [])

React.useEffect(() => {
Object.values(actions).forEach(a => a?.reset().fadeIn(0.2).play())
return () => Object.values(actions).forEach(a => a?.fadeOut(0.2).stop())
}, [actions])

return (
<group ref={group} {...props} dispose={null}>
<group name='Sketchfab_Scene'>
<group name='Sketchfab_model' rotation={[rotXHalf, 0, 0]} scale={0.246}>
<group name='a45b6f53b9cc462a82863bb5898bf730fbx' rotation={[rotXHalfPos, 0, 0]} scale={0.01}>
<group name='Object_2'>
<group name='RootNode'>
<group name='Robot_Origin' position={robotOriginPos} rotation={robotOriginRot} scale={100}>

              <group name='HeadHalo' position={headHaloPos} rotation={headHaloRot}>
                <mesh material={haloMat}>
                  <torusGeometry args={[0.35, 0.06, 16, 64]} />
                </mesh>
              </group>

              <group name='Mouth' position={mouthPos} scale={mouthScale}>
                <mesh name='Mouth_Blue_Light_0' geometry={nodes.Mouth_Blue_Light_0.geometry} material={materials.Blue_Light} />
              </group>

              <group name='Wave' position={wavePos} scale={waveScale}>
                <mesh name='Wave_Blue_Light_0' geometry={nodes.Wave_Blue_Light_0.geometry} material={materials.Blue_Light} />
              </group>

              <group name='Wave002' position={wave2Pos} scale={wave2Scale}>
                <mesh name='Wave002_Blue_Light_0' geometry={nodes.Wave002_Blue_Light_0.geometry} material={materials.Blue_Light} />
              </group>

              <group name='Wave001' position={wave1Pos} scale={wave1Scale}>
                <mesh name='Wave001_Blue_Light_0' geometry={nodes.Wave001_Blue_Light_0.geometry} material={materials.Blue_Light} />
              </group>

              <group name='Wave003' position={wave3Pos} scale={wave3Scale}>
                <mesh name='Wave003_Blue_Light_0' geometry={nodes.Wave003_Blue_Light_0.geometry} material={materials.Blue_Light} />
              </group>

              <group name='Ears' position={earsPos}>
                <mesh name='Ears_Black_Matt_0' geometry={nodes.Ears_Black_Matt_0.geometry} material={materials.Black_Matt} />
              </group>

              <group name='Empty' position={emptyPos}>
                <group name='Eyes' position={eyesPos}>
                  <mesh name='Eyes_Blue_Light_0' geometry={nodes.Eyes_Blue_Light_0.geometry} material={materials.Blue_Light} />
                </group>
              </group>

              <group name='Hand_origin' position={handOriginPos} rotation={handOriginRot}>
                <group name='hANDS' position={handsPos}>
                  <mesh name='hANDS_White_Glossy_0' geometry={nodes.hANDS_White_Glossy_0.geometry} material={materials.White_Glossy} />
                </group>
              </group>

              <group name='Hand_origin002' position={handOrigin2Pos} rotation={handOrigin2Rot}>
                <group name='hANDS002' position={handsPos}>
                  <mesh name='hANDS002_White_Glossy_0' geometry={nodes.hANDS002_White_Glossy_0.geometry} material={materials.White_Glossy} />
                </group>
              </group>

              <group name='Robot' position={robotPos}>
                <mesh name='Robot_White_Glossy_0' geometry={nodes.Robot_White_Glossy_0.geometry} material={materials.White_Glossy} />
                <mesh name='Robot_Blue_Light_0' geometry={nodes.Robot_Blue_Light_0.geometry} material={materials.Blue_Light} />
                <mesh name='Robot_Black_Matt_0' geometry={nodes.Robot_Black_Matt_0.geometry} material={materials.Black_Matt} />
              </group>

              <group name='Waves' position={wavesPos} scale={wavesScale}>
                <mesh
                  geometry={nodes.Wave003_Blue_Light_0?.geometry || nodes.Wave_Blue_Light_0?.geometry}
                  material={ringBloomMat}
                />
              </group>

            </group>
          </group>
        </group>
      </group>
    </group>
  </group>
</group>


)
}

useGLTF.preload('/models/futuristic_flying_animated_robot_-_low_poly.glb')