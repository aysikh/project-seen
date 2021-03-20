import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
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
      width: "100vh"
    },
    textfield: {
      width: '50rem', 
      position: 'relative', 
      marginLeft: '3.5rem'
    }
  }))

export default function SignUpForm(props){ 
  const history = useHistory();
  const classes = useStyles();

  const [ firstname, setFirstname ] = useState("")
  const [ lastname, setLastname ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ errors, setErrors ] = useState( [] )

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

  const redirect = () => {
    props.history.push( '/' )
}

  const handleSubmit = ( event ) => {
    event.preventDefault();
    const { firstname, lastname, email, password, password_confirmation } = this.state
    let user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
    }

    axios.post( 'http://localhost:3000/users', { user }, { withCredentials: true } )
      .then( response => {
          if ( response.data.status === 'created' ) {
              props.handleLogin( response.data )
              redirect()
          }
          else {
              setErrors( {
                  errors: response.data.errors
              } )
          }
      } )
      .catch( error => console.log( 'api errors:', error ) )
    };

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
          <img src={SignUp} style={{width: '20rem'}}/> 
          <form autoComplete="on"
            noValidate
            onSubmit={ ( event ) => {
                handleNewUserSubmit( event )
            } }>                      
            <TextField 
              className={classes.textfield}
              onChange={handleFirstname}
              id="first-name" 
              label="First Name" 
              variant="outlined" 
            />
            <br /> <br />
            <TextField 
              className={classes.textfield}
              onChange={handleLastname}
              id="last-name" 
              label="Last Name" 
              variant="outlined" 
            />
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