import { useRef } from "react"

export function UseRefHookDemo(){
    const nameRef = useRef('');

    function handler(){
        console.log("nameRef:", nameRef.current.value);
    }

    function handler2(){
        nameRef.current.focus();
    }

    return (
        <div>
            <h1>useRef hook</h1>
            <div>
                <input ref={nameRef} type="text" placeholder="John Doe"/>
                <button onClick={handler}>Submit</button>
                <button onClick={handler2}>Focus</button>
            </div>
        </div>
    )
}