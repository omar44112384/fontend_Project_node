import { useState } from "react"; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "../Axios/Api";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
function Login() {
 const navigate = useNavigate();
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');

 const handleSubmit=async(event)=>{
 event.preventDefault();
 const objetuser = {
 email: email,
 password :password
 };
 await Axios.post("/users/login/", objetuser).then((res)=>{
 localStorage.setItem("CC_Token",
JSON.stringify(res.data.accessToken));
 localStorage.setItem("refreshToken",JSON.stringify(res.data.refreshToken));
 localStorage.setItem("user", JSON.stringify(objetuser));
 navigate("/dashboard"); 
 }).catch(error => {
 console.log(error)
 });
 }
 return (
 <>
 <Box className="container">
 <Box sx={{ marginTop : 10, marginLeft : 40, border:"solid blue", width:300, padding:10}}>
 <form style={{ marginLeft: 8}}>
 <Box>
 <TextField
 variant="outlined"
label="Email"
onChange={(event)=>setEmail(event.target.value)}
 required />
 </Box>
 <Box>
 <TextField
 variant="outlined"
type="password"
 label="Password"
onChange={(event)=>setPassword(event.target.value)}
 required />
 </Box>
 <Box>
 <Button color="error" variant="contained" onClick={(event)=>handleSubmit(event)}>Valider</Button>
 </Box>
 </form>
 </Box>
 </Box>
 </>
 );
}
export default Login;