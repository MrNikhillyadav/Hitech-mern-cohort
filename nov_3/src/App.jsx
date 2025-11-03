import './App.css'
import { Counter } from './components/Counter'
import MouseHoverDemo from './components/MouseHover'
import PropsPassingDemo from './components/PropsPassingDemo'
import { UseStateHookDemo } from './components/UseStateHookDemo'
import { UseRefHookDemo } from './components/UseRefHookDemo'
import { UseEffectHookDemo } from './components/UseEffectHookDemo'
import FetchData from './components/FetchDataDemo'
import PropsDrilling from './components/PropDrilling'
import ContextAPI, { Light, LightSwitch } from './components/ContextApiDemo'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      {/* <Counter/> */}
      {/* <MouseHoverDemo/> */}
      {/* <PropsPassingDemo/> */}
      {/* <UseStateHookDemo/> */}
      {/* <UseRefHookDemo/> */}
      {/* <UseEffectHookDemo/> */}
      {/* <FetchData/> */}
      {/* <PropsDrilling/> */}
      {/* <ContextAPI/> */}
      <Navbar/>
    </>
  )
}
export default App
