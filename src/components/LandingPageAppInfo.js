import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CompaniesAutocomplete from './CompaniesAutocomplete'

const COMPANY_URL = "http://localhost:3000/companies"

const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor: 'white',
    width: '60rem',
    marginBottom: '3rem'
  },
  grow: {
    flexGrow: 1,
  }, 
  text1:{
    fontSize: '6.5rem', 
    fontFamily: 'Josefin Sans', 
    margin: '25px', 
    padding: theme.spacing(4),
  },
  text2:{
    fontSize: '3.5rem', 
    fontFamily: 'Josefin Sans', 
    margin: '25px', 
    // padding: '100px', 
    padding: theme.spacing(2, 4),
  }
}));

export default function LandingPageAppInfo(props){
  const classes = useStyles();

  return(
    <div>
      <center>
      <br/> <br/> 
      <span className={classes.text1}> Are you a Black woman? </span>
      <br/> <br/> <br/>
      <span className={classes.text2}> Find out what other Black women are saying about a company.  </span>
      <br /> <br /> <br/> <br/>
        <AppBar position="static" className={classes.appBar}>
          <CompaniesAutocomplete {...props}/> 
        </AppBar>
      </center>
    </div>
  )
}


//  on submit 

