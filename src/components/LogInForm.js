import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import LogIn from '../assets/login.png'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '3px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2),
    display: "absolute",
    marginTop: '10rem',
    height: '50vh', 
    width: '95%',
  },
  textfield: {
    width: '85%', 
    position: 'relative', 
    marginLeft: '3.5rem',
    backgroundColor: 'white',
    color: 'black',
    // border: '3px solid #000', 
    borderRadius: '5px',
  },
  button: {
    fontSize: '1.1rem', 
    position: 'relative', 
    width: '30rem', 
    backgroundColor: 'black', 
    color: 'white', 
    fontFamily: 'Cardo',
    border: '3px solid #000', 
    borderRadius: '20px'
  }
}))

export default function LogInForm(props){
  const history = useHistory();
  const classes = useStyles();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [openError, setOpenError] = useState(false)

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
        if(data.error){
          setOpenError(true)
        }
        else{
          localStorage.setItem('token', data.token)
          props.setUserLoggedIn(data)
          props.setLoggedIn(true)
          history.push('/profile')
        }
      })
  };

  return(
    <div>
    <Container>
      <br /> <br /> 
      {openError ? 
        <Alert variant="filled" severity="error" style={{backgroundColor: '#b71c1c'}}>
          Invalid email & password combination. Please try again. 
        </Alert>
        : 
        ""
      }
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
            className={classes.button}
            type="submit" 
            variant="contained"
            >
            Log In
          </Button> 
        </form>
      </Paper>
      </center>
    </Container>
  </div>
  )
}