import { useEffect, useState } from "react"

export function UseEffectHookDemo(){
    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("component mount!") 
    }, []) // empty dependancy array

    useEffect(() => {
        let clock = setInterval(() => {
            setCount(count => count + 1)
        }, 1000) // runs on mounting

        //cleanup logic
        return () => {
            clearInterval(clock);
            console.log("clean up logic ran!")
        }
    },[count])

    useEffect(() => {
        console.log("count update to :",count)
    }, [count]) // with dependancy array

    return(
        <div>
            <h2>useEffect hook demo</h2>
            <h1>Count : {count}</h1>
        </div>
    )
}