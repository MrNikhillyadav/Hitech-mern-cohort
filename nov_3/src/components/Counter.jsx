import { useState } from "react"

export function Counter(){
    const [count,setCount] = useState(0);

    function handleIncrement(){
        setCount(count + 1);
    }

    function handleDecrement(){
        setCount(count - 1);
    }
    return (
        <div>
            <h2>count : {count}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}