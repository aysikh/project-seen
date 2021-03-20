import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

import LogIn from '../assets/login.png'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '3px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2),
    display: "absolute",
    height: "50vh",
    width: "100vh"
  },
  textfield: {
    width: '50rem', 
    position: 'relative', 
    marginLeft: '3.5rem'
  }
}))

export default function LogInForm(props){
  const history = useHistory();
  const classes = useStyles();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  // const [state, setState] = useState({
  //   email: "", 
  //   password: ""
  // })

  // const handleChange = (event) => {
  //   let {id, value} = event.target
  //   // console.log(event.target.value)
  //   setState(prevState => ({
  //     ...prevState,
  //     [id] : value
  //   }))
  // }

  const handleSubmit = (event) => {
    event.preventDefault()

    // let user = {
    //       email: email,
    //       password: password
    //     }
      
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email, 
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
      // console.log(data)
      // history.push('/profile')
        if (data.errors) {
          alert("Invalid Credentials")
        }
        else {
          console.log(data.info)
          props.setLoggedIn(true)
          history.push('/')
        }
      })
    
  };

  return(
    <div>
    <Container>
      <br /> <br /> 
      <center>
      <Paper elevation={5} className={classes.paper}>
      <img src={LogIn} style={{width: '20rem'}}/> 
        <form autoComplete="on"
          noValidate
          onSubmit={handleSubmit}
          >                      
          <br /> <br />
          <TextField 
            className={classes.textfield}
            onChange={handleEmail}
            id="email" 
            label="Email" 
            variant="outlined" 
          />
          <br /> <br />
          <TextField
            className={classes.textfield}
            onChange={handlePassword}
            id="password"
            label="Password"
            variant="outlined"
          />
          <br/> <br/> 
          <Button 
            style={{fontSize: '1rem', position: 'relative', width: '20rem', backgroundColor: '#c1b9f7'}}
            type="submit" 
            variant="contained"
            >
            LOG IN
          </Button> 
        </form>
      </Paper>
      </center>
    </Container>
  </div>
  )
}