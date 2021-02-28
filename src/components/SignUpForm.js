import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
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

    axios.post( 'http://localhost:3001/users', { user }, { withCredentials: true } )
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
      fetch( "http://localhost:3001/users", requestPackage )
        .then( rsp => rsp.json() )
      .then(console.log)
        // history.push( "/home" )
  }


  return (
    <div>
      <Container className={classes.paper}>
        <Paper elevation={3}>
          <form autoComplete="on"
            noValidate
            onSubmit={ ( event ) => {
                handleNewUserSubmit( event )
            } }>                      
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