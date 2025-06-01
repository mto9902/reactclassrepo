import { useState, useEffect } from "react"
import { Box, TextField } from "@mui/material"
import { Button } from "@mui/material"
import {Stack} from "@mui/material"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AppBarComponent from "../components/AppBarComponent";


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
        <>
    <AppBarComponent />

    <Container maxWidth={false}>
      <Box sx={{ mt: 4, textAlign: 'center', maxWidth: '800px' }}>
        <Typography variant="h4" gutterBottom>
          Hello Home Page
        </Typography>

        <Typography variant="h3">Hello, {name}</Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Button variant="contained" onClick={() => setName('Clicked')}>Clicked</Button>
          <Button variant="contained" onClick={changeName}>Extra</Button>
          <Button variant="contained" onClick={() => [setName('Twice'), console.log("Name", name)]}>Twice</Button>
        </Stack>

        <Box sx={{ mt: 2}}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
        </Box>

        <Button variant="text" sx={{ mt: 1 }} onClick={() => alert("Your name is : " + name)}>
          Change Name
        </Button>

        <Box sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="Number 1"
            variant="outlined"
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Number 2"
            variant="outlined"
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </Box>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Button variant="outlined" onClick={() => calculate('+')}>+</Button>
          <Button variant="outlined" onClick={() => calculate('-')}>-</Button>
          <Button variant="outlined" onClick={() => calculate('x')}>×</Button>
          <Button variant="outlined" onClick={() => calculate('/')}>÷</Button>
        </Stack>

        <Typography variant="h6" sx={{ mt: 3 }}>
          Result: {result}
        </Typography>
      </Box>
    </Container>
  </>

        
    )
}