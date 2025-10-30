import { useState } from "react"

export function Counter(){
    const [count,setCount] = useState(0);
    return (
        <div>
            <h1>counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}