import { useState } from "react"

export default function HomePage(){
    const[name, setName] = useState('Min')
    const changeName=()=>{
        setName('Extra')
    }
    return(
        <div>
        <h1>Hello, {name}</h1>
        <button onClick={()=>setName('Clicked')}>Clicked</button>
        <button onClick={()=>changeName()}>Extra</button>
        <button onClick={()=>[setName('Twice'),console.log("Name",name)]}>Twice</button>
        </div>
    )
}