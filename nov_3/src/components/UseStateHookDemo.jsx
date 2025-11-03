import { useState } from "react"

export function UseStateHookDemo(){
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')

    function handleChange(e){
        console.log(username)
        setUsername(e.target.value);
    }

    function handleEmail(e){
        console.log(email)
        setEmail(e.target.value);
    }

    return (
        <div>
            <h1>useState hook</h1>

            <div>
                <label>
                    Username :
                    <input 
                        type="text"   
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    email :
                    <input 
                        type="text"   
                        onChange={handleEmail}
                    />
                </label>
            </div>

        </div>
    )
}