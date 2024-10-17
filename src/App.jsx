import { Canvas } from "@react-three/fiber";
import "./style.css";
import MacContaineer from "./MacContaineer"
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
function App() {
  return (
    <Canvas camera={{fov:10,position:[0,-10,210]}}>
      <OrbitControls />
      <ScrollControls>
      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/brown_photostudio_02_1k.hdr"]} />
      <MacContaineer />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
