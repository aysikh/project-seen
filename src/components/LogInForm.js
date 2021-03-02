import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4),
    display: "absolute",
    left: "20%",
    height: "50vh",
    width: "100vh"
  },
}))

export default function LogInForm(){
  const history = useHistory();
  const classes = useStyles();

  const [ firstname, setFirstname ] = useState("")
  const [ lastname, setLastname ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    let user = {
          email: email,
          password: password
        }
      
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
      console.log(data)
        if (data.errors) {
          alert("Invalid Credentials")
        }
        else {
          // props.setCurrentUser(data.info)
          console.log(data.info)
          history.push('/homepage')
        }
      })
    
  };

  return(
    <div>
    <Container className={classes.paper}>
      <Paper elevation={3}>
        <form autoComplete="on"
          noValidate
          onSubmit={handleSubmit}
          >                      
          <TextField 
            fullWidth
            onChange={handleFirstname}
            id="outlined-basic" 
            label="First Name" 
            variant="outlined" 
          />
          <br /> <br />
          <TextField 
            fullWidth
            onChange={handleLastname}
            id="outlined-basic" 
            label="Last Name" 
            variant="outlined" 
          />
          <br /> <br />
          <TextField 
            fullWidth
            onChange={handleEmail}
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
          />
          <br /> <br />
          <TextField
            fullWidth
            onChange={handlePassword}
            id="outlined-multiline-static"
            label="Password"
            multiline
            variant="outlined"
          />
          <br/> <br/> 
          <Button 
            type="submit" 
            variant="contained" 
            color="primary">
            Submit
          </Button> 
        </form>
      </Paper>
      <br /> <br /> 
    </Container>
  </div>
  )
}