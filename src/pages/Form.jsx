import React, { useState } from 'react';
import {BASE_URL} from "../utils/baseurl"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Button } from '@mui/material';



const Form = () => {
  const [userdata, setUserdata] = useState({
    id: Date.now(),
    name: "",
    surname: "",
    username: "",
    password: "",
  });
const dataChange = (e) =>{
  setUserdata({...userdata,[e.target.name] : e.target.value});
};

const dataClick = () => {
  axios.post(`${BASE_URL}/create-data`, userdata).then(()=>{
    userdata({name:"",surname:"",username:"",password:"",})

  });
};
    // const {name,surname,username,password,id} = userdata;
    // console.log(name,surname,username,password,id);
  return (
    <div className="form-group">
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <span><h1>Sign Up</h1></span>
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={dataChange} name="name" />
      <TextField id="outlined-basic" label="Surname" variant="outlined" onChange={dataChange} name="surname"  />
      <TextField id="outlined-basic" label="Username" variant="outlined" onChange={dataChange} name="username"  />
      <TextField id="outlined-basic" type="password" label="Password" variant="outlined" onChange={dataChange}  name="password"/>
      <Button variant="contained" onClick={dataClick} >Sign up</Button>

    </Box>
    </div>

  )
}

export default Form