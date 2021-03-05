import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
  const [ errors, setErrors ] = useState( [] )
  const [value, setValue] = React.useState(1);

  const [state, setState ] = useState({
    title: "", 
    position: "", 
    pros: "", 
    cons: "", 
    rating: null,
    isCurrentlyEmployed: null, 
    yearsEmployed: null, 

  })


  const handleChange = (event) => {
    let {id, value} = event.target
    setState(prevState => ({
      ...prevState,
      [id] : value
    }))
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
            title: state.title, 
            position: state.position, 
            pros: state.pros, 
            cons: state.cons, 
            rating: state.rating, 
            isCurrentlyEmployed: state.isCurrentlyEmployed, 
            yearsEmployed: state.yearsEmployed, 
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
              onChange={handleChange}
              id="outlined-basic" 
              label="Title" 
              variant="outlined" 
            />
            <br /> <br />
            <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Controlled</Typography>
              <Rating
                name="half-rating"
                precision={0.5}
                style={{color: '#007F80', fontSize: '4rem'}}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              </Box>
              {console.log(value)}
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Read only</Typography>
                <Rating 
                  name="read-only" 
                  style={{color: '#99EEBB', fontSize: '4rem'}} 
                  precision={0.5} 
                  value={value} 
                  readOnly />
            </Box>
            <TextField 
              fullWidth
              onChange={handleChange}
              id="outlined-basic" 
              label="Position" 
              variant="outlined" 
            />
            <br /> <br />
            <TextField 
              fullWidth
              onChange={handleChange}
              id="outlined-basic" 
              label="Pros" 
              variant="outlined" 
            />
            <br /> <br />
            <TextField
              fullWidth
              onChange={handleChange}
              id="outlined-multiline-static"
              label="Cons"
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