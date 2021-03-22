import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import LogIn from '../assets/login.png'

// import FlashMessage from "react-flash-message";

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

  const handleSubmit = (event) => {
    event.preventDefault()
      
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
        console.log(data)
        console.log(data.user)
        localStorage.setItem('token', data.token)
        props.setUserLoggedIn(data.user)
        props.setLoggedIn(true)
        history.push('/profile')
      }
      //   {
      //   if (data.errors) {
      //     props.setLoggedIn(false)
      //   }
      //   else {
      //     console.log(data.info)
      //     props.setLoggedIn(true)
      //     history.push('/')
      //   }
      // }
      )
    
  };

  return(
    <div>
    <Container>
      <br /> <br /> 
      <center>
      <Paper elevation={5} className={classes.paper}>
      <img src={LogIn} alt="log-in-banner" style={{width: '20rem'}}/> 
        <form autoComplete="on"
          noValidate
          onSubmit={handleSubmit}
          >                      
          <br /> <br />
          <TextField 
            required
            className={classes.textfield}
            onChange={handleEmail}
            id="email" 
            label="Email" 
            name="email"
            variant="outlined" 
          />
          <br /> <br />
          <TextField
            required
            className={classes.textfield}
            onChange={handlePassword}
            id="password"
            name="password"
            type="password"
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
          {/* {props.isLoggedIn && (
            <FlashMessage duration={5000}>
              <strong>I will disapper in 5 seconds!</strong>
            </FlashMessage>
          )} */}
        </form>
      </Paper>
      </center>
    </Container>
  </div>
  )
}