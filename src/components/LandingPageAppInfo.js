import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const COMPANY_URL = "http://localhost:3000/companies"

const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor: 'white',
    width: '60rem',
  },
  grow: {
    flexGrow: 1,
  }
}));


export default function LandingPageAppInfo(){
  const classes = useStyles();
  const history = useHistory();
  const [company, setCompany] = useState([]);
  const [value, setValue] = React.useState('');

  const getCompanies = () => {
    fetch(COMPANY_URL)
    .then(rsp => rsp.json())
    .then(companies => setCompany(companies))
  }
  useEffect(()=>{
    getCompanies();
  }, [])

  function handleSubmit(e){
    // e.preventDefault();
    console.log(e)
    // console.log(value)
    // history.push("company/" + e.name)
    if(e != null){
      history.push("company/"+ e.name)
    } else {
      return ""
    }
  }

  return(
    <div>
      <center>
      <span style={{fontSize: '4.5rem', fontFamily: 'Josefin Sans', margin: '10px', padding: '50px'}}> Would you like to know what Black women are saying about tech companies? </span>
      <br /> <br />
        <AppBar position="static" className={classes.appBar}>
            <Autocomplete
              id="combo-box-demo"
              options={company}
              value={value}
              onChange={(e, value) => handleSubmit(value)}
              getOptionLabel={(option) => option.name}
              style={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} label="Search for a Company..." variant="outlined" />}
            />
        </AppBar>
      </center>
    </div>
  )
}


//  on submit 

