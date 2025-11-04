import {createContext, useContext, useState} from "react"

//step 1
const BulbContext = createContext()

//step 2
function ContextAPIProvider({children}){
    const [isLightOn, setIsLightOn] = useState(false);
    
    return <BulbContext.Provider value={{isLightOn,setIsLightOn}}>
        {children}
    </BulbContext.Provider>
}

//step 3
export default function ContextApiDemo(){
    return (
        <div>
            <h1>Context API demo</h1>
            <ContextAPIProvider>
                <Light/>
            </ContextAPIProvider>
        </div>
    )
}

//parent component
function Light(){
    return (
        <>
           <LightBulb  />
           <LightSwitch  />
        </>
    )
}

//using useContext( ) hook in children
function LightBulb(){
    const {isLightOn}  = useContext(BulbContext);

    return (
        <div>
            LightBulb status : {isLightOn ? "ON" : "OFF"}
        </div>
    )
}

function LightSwitch(){
    const {isLightOn,setIsLightOn} = useContext(BulbContext);

    function handleToggle(){
        setIsLightOn(!isLightOn)
    }
    return (
        <div>
            <h3>Switch</h3>
            <button onClick={handleToggle}>toggle</button>
        </div>
    )
}