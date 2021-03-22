import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import SignUp from '../assets/signup.png'

  const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '3px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4),
      display: "absolute",
      height: "60vh",
      width: "95%"
    },
    textfield: {
      width: '85%', 
      position: 'relative', 
      marginLeft: '3.5rem'
    },
    button: {
      fontSize: '1.1rem', 
      position: 'relative', 
      width: '30rem', 
      backgroundColor: 'black', 
      color: 'white'
    }
  }))

export default function SignUpForm(props){ 
  const history = useHistory();
  const classes = useStyles();

  const [ firstname, setFirstname ] = useState("")
  const [ lastname, setLastname ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleFirstname = ( event ) => {
    setFirstname( event.target.value )
  }

  const handleLastname = ( event ) => {
    setLastname( event.target.value )
  }
  const handleEmail = ( event ) => {
      setEmail( event.target.value )
  }
  const handlePassword = ( event ) => {
      setPassword( event.target.value )
  }

  const handleNewUserSubmit = ( event ) => {
    event.preventDefault()

    let requestPackage = {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify( {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        } )
    }
    fetch( "http://localhost:3000/users", requestPackage )
      .then( rsp => rsp.json() )
    .then(console.log)
      // history.push( "/profile" )
  }


  return (
    <div>
      <Container >
        <br /> <br /> 
        <center>
        <Paper elevation={3} className={classes.paper}>
          <img src={SignUp} alt="sign-up-banner" style={{width: '20rem'}}/> 
          <form autoComplete="on"
            noValidate
            onSubmit={ ( event ) => {
                handleNewUserSubmit( event )
            } }>                      
            <TextField 
              required
              className={classes.textfield}
              onChange={handleFirstname}
              id="first-name" 
              label="First Name" 
              variant="outlined" 
            />
            <br /> <br />
            <TextField 
              required
              className={classes.textfield}
              onChange={handleLastname}
              id="last-name" 
              label="Last Name" 
              variant="outlined" 
            />
            <br /> <br />
            <TextField 
              required
              className={classes.textfield}
              onChange={handleEmail}
              id="email" 
              label="Email" 
              variant="outlined" 
            />
            <br /> <br />
            <TextField
              required
              className={classes.textfield}
              onChange={handlePassword}
              label="Password"
              type="password"
              id="password"
              name="password"
              variant="outlined"
            />
            <br/> <br/> 
            <Button 
              className={classes.button}
              type="submit" 
              variant="contained" 
              >
              SUBMIT
            </Button> 
          </form>
        </Paper>
        </center>
        <br /> <br /> 
      </Container>
    </div>
  )
}