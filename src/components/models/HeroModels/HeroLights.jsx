import * as THREE from "three";

const HeroLights = () => (
  <>
    <spotLight
      position={[2, 5, 6]}
      angle={0.2}
      penumbra={0.3}
      intensity={60}
      color="#ffffff" // soft white
    />
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.4}
      intensity={40}
      color="#90e0ef" // light aqua
    />
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={0.8}
      intensity={45}
      color="#fcbf49" // warm golden
    />
    <primitive
      object={new THREE.RectAreaLight("#ffd166", 5, 3, 2)} // soft amber
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={8}
    />
    <pointLight position={[0, 1, 0]} intensity={6} color="#ffe066" /> {/* warm yellow */}
    <pointLight position={[1, 2, -2]} intensity={6} color="#a8dadc" /> {/* pastel teal */}
  </>
);

export default HeroLights;
