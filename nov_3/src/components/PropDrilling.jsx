import { useState } from "react"

function PropsDrilling() {
    const [isOn, setIsOn] = useState(true)
  return (
      <div>
            <h1>Prop Drilling Demo</h1>
           <Light isOn={isOn}  setIsOn={setIsOn}/> 
      </div>
  )
}

function Light({isOn,setIsOn}){
  return (
    <div>
      <LightBulb isOn={isOn} />
      <LightSwitch isOn={isOn} setIsOn={setIsOn} />
    </div>
  )
}

function LightBulb({isOn}){
  return (
    <div>
      {isOn ? <p>Light is on</p> : <p>Light is off</p>} 
    </div>
  )
}


function LightSwitch({isOn, setIsOn}){
  function ToggleBulb(){
    setIsOn(!isOn)
  }
  return (
    <button onClick={ToggleBulb}>Toggle Bulb</button>
  )
}

export default PropsDrilling
