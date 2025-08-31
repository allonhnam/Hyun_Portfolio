import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
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

  // halo material for bloom on top of the head
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

  React.useEffect(() => {
    Object.values(actions).forEach(a => a?.reset().fadeIn(0.2).play())
    return () => Object.values(actions).forEach(a => a?.fadeOut(0.2).stop())
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]} scale={0.246}>
          <group name='a45b6f53b9cc462a82863bb5898bf730fbx' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='Robot_Origin' position={[0, 9.763, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>

                  {/* halo above the head */}
                  <group name='HeadHalo' position={[0, 0.32, 3.12]} rotation={[Math.PI / 2, 0, 0]}>
                    <Select enabled>
                      <mesh material={haloMat}>
                        <torusGeometry args={[0.35, 0.06, 16, 64]} />
                      </mesh>
                    </Select>
                  </group>

                  <group name='Mouth' position={[0, -0.504, 2.573]} scale={[1, 1, 2.881]}>
                    <mesh name='Mouth_Blue_Light_0' geometry={nodes.Mouth_Blue_Light_0.geometry} material={materials.Blue_Light} />
                  </group>

                  <group name='Wave' position={[0, 0, 0.113]} scale={[1, 1, 0.186]}>
                    <mesh name='Wave_Blue_Light_0' geometry={nodes.Wave_Blue_Light_0.geometry} material={materials.Blue_Light} />
                  </group>
                  <group name='Wave002' position={[0, 0, 0.879]} scale={[1, 1, 0.889]}>
                    <mesh name='Wave002_Blue_Light_0' geometry={nodes.Wave002_Blue_Light_0.geometry} material={materials.Blue_Light} />
                  </group>
                  <group name='Wave001' position={[0, 0, -0.089]} scale={[1, 1, 0.001]}>
                    <mesh name='Wave001_Blue_Light_0' geometry={nodes.Wave001_Blue_Light_0.geometry} material={materials.Blue_Light} />
                  </group>
                  <group name='Wave003' position={[0, 0, 0.511]} scale={[1, 1, 0.552]}>
                    <mesh name='Wave003_Blue_Light_0' geometry={nodes.Wave003_Blue_Light_0.geometry} material={materials.Blue_Light} />
                  </group>

                  <group name='Ears' position={[0, 0, 2.967]}>
                    <mesh name='Ears_Black_Matt_0' geometry={nodes.Ears_Black_Matt_0.geometry} material={materials.Black_Matt} />
                  </group>

                  <group name='Empty' position={[0, -0.06, 2.786]}>
                    <group name='Eyes' position={[0, -0.431, 0.076]}>
                      <mesh name='Eyes_Blue_Light_0' geometry={nodes.Eyes_Blue_Light_0.geometry} material={materials.Blue_Light} />
                    </group>
                  </group>

                  <group name='Hand_origin' position={[0.723, 0, 2.015]} rotation={[0, -0.064, 0]}>
                    <group name='hANDS' position={[-0.723, 0, -1.963]}>
                      <mesh name='hANDS_White_Glossy_0' geometry={nodes.hANDS_White_Glossy_0.geometry} material={materials.White_Glossy} />
                    </group>
                  </group>
                  <group name='Hand_origin002' position={[-0.723, 0, 2.015]} rotation={[0, 0.064, -Math.PI]}>
                    <group name='hANDS002' position={[-0.723, 0, -1.963]}>
                      <mesh name='hANDS002_White_Glossy_0' geometry={nodes.hANDS002_White_Glossy_0.geometry} material={materials.White_Glossy} />
                    </group>
                  </group>

                  <group name='Robot' position={[0, 0, 0.051]}>
                    <mesh
                      name='Robot_White_Glossy_0'
                      geometry={nodes.Robot_White_Glossy_0.geometry}
                      material={materials.White_Glossy}
                    />
                    <mesh name='Robot_Blue_Light_0' geometry={nodes.Robot_Blue_Light_0.geometry} material={materials.Blue_Light} />
                    <mesh name='Robot_Black_Matt_0' geometry={nodes.Robot_Black_Matt_0.geometry} material={materials.Black_Matt} />
                  </group>

                  <group name='Waves' position={[0, 0, 1]} scale={[1, 1, 0.747]}>
                    <Select enabled>
                      <mesh
                        geometry={nodes.Wave003_Blue_Light_0?.geometry || nodes.Wave_Blue_Light_0?.geometry}
                        material={ringBloomMat}
                      />
                    </Select>
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
