import {createContext, useContext, useState} from "react"

export const BulbContext = createContext()

export function ContextAPIProvider({children}){
    const [isLightOn, setIsLightOn] = useState(false);
    
    return <BulbContext.Provider value={{isLightOn, setIsLightOn}}>
        {children}
    </BulbContext.Provider>
}

export default function ContextApiDemo(){
    return (
        <div>
            <h1>Context API</h1>

            <ContextAPIProvider>
                <Light/>
            </ContextAPIProvider>
        </div>
    )
}

export function Light(){
    return (
        <>
           <LightBulb  />
           <LightSwitch  />
        </>
    )
}

export function LightBulb(){
    const {isLightOn}  = useContext(BulbContext);

    return (
        <div>
            LightBulb status : {isLightOn ? "ON" : "OFF"}
        </div>
    )
}

export function LightSwitch(){
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