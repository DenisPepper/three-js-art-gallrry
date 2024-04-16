import './App.css'
import { Canvas } from "@react-three/fiber"
import { Experience } from './components/experience/experience'

function App() {

  return (
    <div className='app'>
      <Canvas>
        <Experience />
      </Canvas>
    </div>

  )
}

export default App
