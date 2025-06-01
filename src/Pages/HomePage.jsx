import { useState, useEffect } from "react"
import { Box, TextField } from "@mui/material"
import { Button } from "@mui/material"
import {Stack} from "@mui/material"

export default function HomePage(){
    const[name, setName] = useState('Min')
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    //useEffect(()=>{
        //alert("Welcome To Home Page")
    //},[])
    

    const changeName=()=>{
        setName('Extra')
    }

    const calculate = (operator) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
    
        if (isNaN(n1) || isNaN(n2)) {
          setResult('Invalid input');
          return;
        }
    
        switch (operator) {
          case '+':
            setResult(n1 + n2);
            break;
          case '-':
            setResult(n1 - n2);
            break;
          case 'x':
            setResult(n1 * n2);
            break;
          case '/':
            setResult(n2 !== 0 ? n1 / n2 : 'Cannot divide by 0');
            break;
          default:
            setResult('Unknown operation');
        }
    };    

    return(
        <div>
        <h1>Hello, {name}</h1>
        <button onClick={()=>setName('Clicked')}>Clicked</button>
        <button onClick={()=>changeName()}>Extra</button>
        <button onClick={()=>[setName('Twice'),console.log("Name",name)]}>Twice</button>

        <br/>

        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => setName(e.target.value)}/>

        <br/>

        <Stack direction={'column'}>
        <Button variant="text" onClick={()=>alert("Your name is : " + name)}>Change Name</Button>
        </Stack>

        <br/>

        <br/>

        <TextField
        label="Number 1"
        variant="outlined"
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        />

        <br/>

        <TextField
        label="Number 2"
        variant="outlined"
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        />   

        <br/>

        <button onClick={() => calculate('+')}>+</button>
            <button onClick={() => calculate('-')}>-</button>
            <button onClick={() => calculate('x')}>x</button>
            <button onClick={() => calculate('/')}>/</button>

            <h3>Result: {result}</h3>
        
     
        </div>

        
    )
}