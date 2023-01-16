import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, Stars } from "@react-three/drei";
// import { OrbitControls } from "drei";
function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}
function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
