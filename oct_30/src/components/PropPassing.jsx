function Greetings({name, age}){
  return (
    <div>
      <h1>Hi,{name}, age : {age} </h1>
    </div>
  )
}

export function PropPassing(){
    const name1 = "Rohan"
    return (
        <div>
            <Greetings name={name1} age={'22'} />
            <Greetings name={"Mohan"} age={'21'} />
        </div>
    )
}

