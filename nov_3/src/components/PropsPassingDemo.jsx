// children component
function Greetings({props, name}){
    return (
        <h1>
            {props}! {name}
        </h1>
    )
}

// parent component
function PropsPassingDemo() {
  return (
    <>
      <Greetings props={"Good evening" } name={"John"}/>
      <Greetings props={"Good night" } name={"Ram"}/>
    </>
  )
}

export default PropsPassingDemo;