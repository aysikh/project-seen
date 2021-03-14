import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { ListItemAvatar } from '@material-ui/core';


  const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4),
      display: "absolute",
      left: "20%",
      height: "100vh",
      width: "100vh"
    }
  }))

  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

export default function TRASHReviewForm(props){ 
  const history = useHistory();
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [pros, setPros] = React.useState('');
  const [cons, setCons] = React.useState('');
  const [value, setValue] = React.useState(1);
  const [yearsEmployed, setYear] = React.useState(1);
  const [isCurrentlyEmployed, setIsCurrentlyEmployed] = React.useState(true);

  const handleTitle = (event) => {
    setTitle(event.target.value)
  };
  const handlePosition = (event) => {
    setPosition(event.target.value)
  };
  const handlePros = (event) => {
    setPros(event.target.value)
  };
  const handleCons = (event) => {
    setCons(event.target.value)
  };
  const handleEmployed = (event) => {
    setIsCurrentlyEmployed(event.target.value)
  };
  const handleYear = (event) => {
    setYear(event.target.value);
  };
  const handleValue = (event) => {
    setValue(event.target.value);
  };


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
            rating: value, 
            isCurrentlyEmployed: isCurrentlyEmployed, 
            yearsEmployed: yearsEmployed,
            // I need to grab the user-id and company-id 
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
              onChange={handleTitle}
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
                style={{color: '#007F80', fontSize: '5rem'}}
                value={value}
                onChange={handleValue}
              />
              {console.log(value)}
              </Box>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Read only</Typography>
                <Rating 
                  name="read-only" 
                  style={{color: '#99EEBB', fontSize: '5rem'}} 
                  precision={0.5} 
                  value={value} 
                  readOnly />
            </Box>
            <TextField 
              fullWidth
              onChange={handlePosition}
              id="outlined-basic" 
              label="Position" 
              variant="outlined" 
            />
            <br /> <br />
            <TextField 
              fullWidth
              onChange={handlePros}
              id="outlined-basic" 
              label="Pros" 
              variant="outlined" 
            />
            <br /> <br />
            <TextField
              fullWidth
              onChange={handleCons}
              id="outlined-multiline-static"
              label="Cons"
              multiline
              variant="outlined"
            />
                 <h4> Currently Employed? </h4> 
      <FormControl >
        <Select
          value={isCurrentlyEmployed}
          onChange={handleEmployed}
          input={<BootstrapInput />}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>
      <h4> Years Employed </h4> 
      <FormControl >
        <Select
          value={yearsEmployed}
          onChange={handleYear}
          input={<BootstrapInput />}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10+</MenuItem>
        </Select>
      </FormControl>
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

// Diversity Across Organization: Rate your company on how diverse it is as a whole - are employees representative of the general population in disability, ethnicity, gender, race, religion, sexual orientation, etc., and is everyone seen as equals? 
// Diversity in Leadership: Rate your company on how diverse the mid- and senior-level leadership is - are underrepresented employees equitably reperesented and welcomed in leadership positions?
// Work/Life Balance: Rate your company on overall work/life balance - does the company encourage employeese to balance work and other aspects of life such as family, personal development, social life, health, and other needs? 
// Overall Inclusiveness: Rate your company on its overall inclusion - do all employees feel like their voices are heard and treated fairly and respectfully? That they have equal access to opportunities and resources? And that they can contribute fully to the organization's success? 
// D& I Benefits and Resources: Rate your company on its D&I benefits and resources- does your company offer equivalent benefits and resources for all employees such as family and adoptive leave, fertility SVGComponentTransferFunctionElement, same sex partner benefits, flex time for religious observations, etc? 
// eNPS: Rate your company on how likely you would recommend as a place of employement to a friend. 