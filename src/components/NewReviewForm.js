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

export default function NewReviewForm(props){ 
  const history = useHistory();
  const classes = useStyles();

  const [ title, setTitle ] = useState("")
  const [ position, setPosition ] = useState("")
  const [ pros, setPros ] = useState("")
  const [ cons, setCons ] = useState("")
  const [ rating, setRating ] = useState(null)
  const [ isCurrentlyEmployed, setIsCurrentlyEmployed] = useState(null)
  const [ yearsEmployed, setYearsEmployed] = useState(null)
  const [ isUseful, setIsUseful ] = useState(null)
  const [ isNotUseful, setIsNotUseful ] = useState(null)
  const [ errors, setErrors ] = useState( [] )

  const handleFirstname = ( event ) => {
    setFirstname( event.target.value )
  }


  const redirect = () => {
    props.history.push( '/' )
}

  // const handleSubmit = ( event ) => {
  //   event.preventDefault();
  //   const { title, position, pros, cons, rating, isCurrentlyEmployed, yearsEmployed, isUseful, isNotUseful } = this.state
  //   let review = {
  //     title: title, 
  //     position: position, 
  //     pros: pros, 
  //     cons: cons, 
  //     rating: rating, 
  //     isCurrentlyEmployed: isCurrentlyEmployed, 
  //     yearsEmployed: yearsEmployed, 
  //     isUseful: isUseful, 
  //     isNotUseful: isNotUseful
  //   }

  //   axios.post( 'http://localhost:3000/reviews', { review }, { withCredentials: true } )
  //     .then( response => {
  //         if ( response.data.status === 'created' ) {
  //             props.handleLogin( response.data )
  //             redirect()
  //         }
  //         else {
  //             setErrors( {
  //                 errors: response.data.errors
  //             } )
  //         }
  //     } )
  //     .catch( error => console.log( 'api errors:', error ) )
  //   };

    const handleNewReviewSubmit = ( event ) => {
      event.preventDefault()

      let requestPackage = {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify( {
            title: title, 
            position: position, 
            pros: pros, 
            cons: cons, 
            rating: rating, 
            isCurrentlyEmployed: isCurrentlyEmployed, 
            yearsEmployed: yearsEmployed, 
            isUseful: isUseful, 
            isNotUseful: isNotUseful
          } )
      }
      fetch( "http://localhost:3000/reviews", requestPackage )
        .then( rsp => rsp.json() )
      .then(console.log)
        // history.push( "/homepage" )
  }

  return (
    <div>
      <Container className={classes.paper}>
        <Paper elevation={3}>
          <form autoComplete="on"
            noValidate
            onSubmit={ ( event ) => {
                handleNewReviewSubmit( event )
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