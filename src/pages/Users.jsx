import React ,{ useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {BASE_URL} from "../utils/baseurl"


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'First name',
    width: 150,
    
  },
  {
    field: 'surname',
    headerName: 'Surname',
    width: 150,
    
  },
  {
    field: 'username',
    headerName: 'Username',
    width: 150,
   
  },
  {
    field: 'password',
    headerName: 'Password',
    width: 150,
    typeof: "password"
  },
];



const Users = () => {
  const [userData, setData] = useState([])

  useEffect(()=>{
      axios.get(`${BASE_URL}/get-data`).then((res)=>{
        console.log(res.data.data);
        setData(res.data.data);
  });
  },[]);


  return (
    <Box sx={{ height: 400, width: '60%' , margin: 20 , marginLeft: 40 }}>
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  )
}

export default Users