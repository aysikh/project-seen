import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import desk from '../assets/woman-at-desk.png'

const URL = "http://localhost:3000/company/"

const StyleBox = withStyles((theme) => ({
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: 'pink',
  },
  paper: {
    height: '96%',
    width: '90%',
    display: 'inline-block',
    padding: '15px',
    margin: '2px',
    backgroundColor: '#c1b9f7',
  },
  imgBox: {
    height: 'auto',
    width: 'auto',
    display: 'inline-block',
    padding: '10px',
    margin: '2px',
    backgroundColor: 'white',
    marginLeft: '-9.3rem',
    marginTop: '30rem',
  },
  info: {
    width: '20rem', 
    height: 'auto'
  },
  question: {
    backgroundColor: "#b39ddb", 
    color: 'white', 
    maxHeight: '20px'
  },
  bg: {
    width: '100%', 
    minHeight: '90vh',
    backgroundColor: 'white',
    // backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  row: {
    WebkitBoxSizing: 'border-box', 
    MozBoxSizing: 'border-box',
    boxSizing: 'border-box', 
    width: '30rem'
  }
}));

export default function NewReviewForm(props) {
  function Diversity() {
    return (
      <PopupState variant="popover" popupId="1">
        {(popupState) => (
          <div>
            <Button variant="contained" className={classes.question}{...bindTrigger(popupState)}>
              ?
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box p={2} className={classes.info} >
                <Typography>Rate your company on how diverse it is as a whole - are employees representative of the general population in disability, ethnicity, gender, race, religion, sexual orientation, etc., and is everyone seen as equals? </Typography>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    );
  }
  
  function Leadership() {
    return (
      <PopupState variant="popover" popupId="2">
        {(popupState) => (
          <div>
            <Button variant="contained" className={classes.question}{...bindTrigger(popupState)}>
              ?
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box p={2} className={classes.info} >
                <Typography>Rate your company on how diverse the mid- and senior-level leadership is - are underrepresented employees equitably reperesented and welcomed in leadership positions? </Typography>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    );
  }
  
  function WorkLife() {
    return (
      <PopupState variant="popover" popupId="1">
        {(popupState) => (
          <div>
            <Button variant="contained" className={classes.question}{...bindTrigger(popupState)}>
              ?
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box p={2} className={classes.info} >
                <Typography>Rate your company on overall work/life balance - does the company encourage employeese to balance work and other aspects of life such as family, personal development, social life, health, and other needs?  </Typography>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    );
  }
  
  function Inclusiveness() {
    return (
      <PopupState variant="popover" popupId="1">
        {(popupState) => (
          <div>
            <Button variant="contained" className={classes.question}{...bindTrigger(popupState)}>
              ?
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box p={2} className={classes.info} >
                <Typography>Rate your company on its overall inclusion - do all employees feel like their voices are heard and treated fairly and respectfully? That they have equal access to opportunities and resources? And that they can contribute fully to the organization's success?  </Typography>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    );
  }
  
  function Benefits() {
    return (
      <PopupState variant="popover" popupId="1">
        {(popupState) => (
          <div>
            <Button variant="contained" className={classes.question} {...bindTrigger(popupState)}>
              ?
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box p={2} className={classes.info} >
                <Typography>Rate your company on its D&I benefits and resources- does your company offer equivalent benefits and resources for all employees such as family and adoptive leave, fertility treatment, same sex partner benefits, flex time for religious observations, etc?  </Typography>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    );
  }
  
  function Recommend() {
    return (
      <PopupState variant="popover" popupId="1">
        {(popupState) => (
          <div>
            <Button variant="contained" className={classes.question} {...bindTrigger(popupState)}>
              ?
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box p={2} className={classes.info} >
                <Typography>Rate your company on how likely you would recommend as a place of employment to a friend. </Typography>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    );
  }

  const classes = useStyles();
  const history = useHistory(); 
  const [title, setTitle] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [content, setContent] = React.useState('');
  const [reviewCompany, setReviewCompany] = React.useState(0);
  const [companyName, setCompanyName] = React.useState('');
  const [diversity, setDiversity] = React.useState(1);
  const [leadership, setLeadership] = React.useState(1);
  const [worklife, setWorklife] = React.useState(1);
  const [inclusiveness, setInclusiveness] = React.useState(1);
  const [benefits, setBenefits] = React.useState(1)
  const [recommendation, setRecommendation] = React.useState(1)

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }
  const handlePosition = (event) => {
    setPosition(event.target.value)
  }
  const handleContent = (event) => {
    setContent(event.target.value)
  }
  const handleCompany = (event) => {
    setReviewCompany(event.target.value)
    findCompanyName(event.target.value);
  }
  const handleDiversity = (event) => {
    setDiversity(event.target.value)
  }
  const handleLeadership = (event) => {
    setLeadership(event.target.value)
  }
  const handleWorklife = (event) => {
    setWorklife(event.target.value)
  }
  const handleInclusiveness = (event) => {
    setInclusiveness(event.target.value)
  }
  const handleBenefits = (event) => {
    setBenefits(event.target.value)
  }
  const handleRecommendation = (event) => {
    setRecommendation(event.target.value)
  }

  const handleNewReviewSubmit = ( event ) => {
    event.preventDefault()

    let requestPackage = {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify( {
          title: title, 
          position: position, 
          content: content,
          diversity: diversity, 
          leadership: leadership, 
          worklife: worklife, 
          inclusiveness: inclusiveness, 
          benefits: benefits, 
          recommendation: recommendation,
          user_id: props.userLoggedIn.id,
          company_id: parseInt(reviewCompany)
        } )
    }
    console.log(requestPackage.body)
    fetch( URL + companyName + "/reviews", requestPackage )
      .then( rsp => rsp.json() )
      .then(console.log)
      history.push( "/profile" )
  }

  const findCompanyName = (value) => {
    let x = props.companies.filter(company => 
      company.id == value)
      // console.log(x[0].name.toLowerCase())
      setCompanyName(x[0].name.toLowerCase())
  }

// console.log(props.userLoggedIn.id)
// console.log(reviewCompany)

  return (
    <div className={classes.bg}>
      {/* {findCompanyName()} */}
      <form 
        autoComplete="on"
        noValidate
        onSubmit={ ( event ) => {
            handleNewReviewSubmit( event )
        } }>
      <Grid container xl={10} className={classes.root} >
          <Grid container justify="center"  >
              <Grid item xs={4} style={{marginTop: '2rem'}}>
                <Paper className={classes.paper} elevation={5}>
                  {/* <div className={classes.row}> */}
                    <h3>Write your Review!</h3>
                  {/* </div> */}
                  <br/>
                <FormControl className={classes.root}>
                  <InputLabel htmlFor="demo-customized-select-native">Choose one of the following companies: </InputLabel>
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={reviewCompany}
                    onChange={handleCompany}
                    input={<StyleBox />}
                  >
                    <option aria-label="Company" />
                    {props.companies.map(company => 
                      <option key={company.id} value={company.id}> {company.name} </option> 
                    )}
                  </NativeSelect>
                </FormControl>
                <br/> 
                  {/* <div className={classes.row}> */}
                    <TextField 
                      style={{backgroundColor: 'white', fontFamily: 'Josefin Sans', width: '100%'}}
                      // fullWidth
                      onChange={handleTitle}
                      id="outlined-basic" 
                      label="Enter a title for your review..." 
                      variant="outlined" 
                      />
                  {/* </div> */}
                  <br /> <br />
                  {/* <div> */}
                    <TextField 
                      style={{backgroundColor: 'white', width: '100%'}}
                      // fullWidth
                      onChange={handlePosition}
                      id="outlined-basic" 
                      label="What was your position here? " 
                      variant="outlined" 
                    />
                  {/* </div> */}
                  <br /> <br /> 
                  {/* <div> */}
                    <TextField
                      style={{backgroundColor: 'white', width: '100%'}}
                      // fullWidth
                      // multiline
                      // rows={15}
                      id="content-box"
                      label="Talk more about your experience here..."
                      onChange={handleContent}
                      variant="outlined" 
                    />
                  {/* </div> */}
                  <br /> <br /> 
                </Paper> 
              </Grid>

      {/* RATING */}
      <Grid item xs={3} style={{marginTop: '2rem'}}>
            <Paper style={{padding: '15px', height: '96.4%'}} elevation={5}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Grid container spacing={3}>
                <Grid item xs={9}>
                  <Typography component="legend">Diversity in Organization</Typography>
                </Grid>
                <Grid item xs={2}>
                  {Diversity()}
                </Grid>
                  <Rating
                    name="diversity"
                    precision={0.5}
                    style={{color: '#D2C7E0', fontSize: '3.5rem'}}
                    value={diversity}
                    onChange={handleDiversity}
                  />
              </Grid>    
            </Box>
            <Box component="fieldset" mb={3} borderColor="transparent">
            <Grid container spacing={3}>
                <Grid item xs={9}>
                  <Typography component="legend">Diversity in Leadership</Typography>
                </Grid>
                <Grid item xs={2}>
                  {Leadership()}
                </Grid>
                <Rating
                  name="leadership"
                  precision={0.5}
                  style={{color: '#b39ddb', fontSize: '3.5rem'}}
                  value={leadership}
                  onChange={handleLeadership}
                />
              </Grid>    
              </Box>
              <Box component="fieldset" mb={3} borderColor="transparent">
              <Grid container spacing={3}>
                <Grid item xs={9}>
                  <Typography component="legend">Rate the Work/Life Balance</Typography>
                </Grid>
                <Grid item xs={2}>
                  {WorkLife()}
                </Grid>
                <Rating
                  name="worklife"
                  precision={0.5}
                  style={{color: '#c1b9f7', fontSize: '3.5rem'}}
                  value={worklife}
                  onChange={handleWorklife}
                />
              </Grid>    
              </Box>
              <Box component="fieldset" mb={3} borderColor="transparent">
              <Grid container spacing={3}>
                <Grid item xs={9}>
                  <Typography component="legend">Inclusiveness</Typography>
                </Grid>
                <Grid item xs={2}>
                  {Inclusiveness()}
                </Grid>
                <Rating
                  name="inclusiveness"
                  precision={0.5}
                  style={{color: '#D2C7E0', fontSize: '3.5rem'}}
                  value={inclusiveness}
                  onChange={handleInclusiveness}
                />
              </Grid>    
              </Box>
              <Box component="fieldset" mb={3} borderColor="transparent">
              <Grid container spacing={3}>
                <Grid item xs={9}>
                  <Typography component="legend">Rate the Benefits</Typography>
                </Grid>
                <Grid item xs={2}>
                  {Benefits()}
                </Grid>
                <Rating
                  name="benefits"
                  precision={0.5}
                  style={{color: '#b39ddb', fontSize: '3.5rem'}}
                  value={benefits}
                  onChange={handleBenefits}
                />
              </Grid>    
              </Box>
              <Box component="fieldset" mb={3} borderColor="transparent">
              <Grid container spacing={3}>
                <Grid item xs={9}>
                  <Typography component="legend">Would you recommend to a friend? </Typography>
                </Grid>
                <Grid item xs={2}>
                  {Recommend()}
                </Grid>
                <Rating
                  name="recommendation"
                  precision={0.5}
                  style={{color: '#bbabf7', fontSize: '3.5rem'}}
                  value={recommendation}
                  onChange={handleRecommendation}
                />
              </Grid>    
              </Box>
            </Paper>
          </Grid>
          <Grid container xs={3} >
                <Grid container justify="center" >
                    <Grid item xs={2} style={{marginTop: '-3rem'}}>
                      <Paper className={classes.imgBox} elevation={5}>
                          <center>
                          <img src={desk} alt="woman-at-desk" style={{width: '24rem'}}/>
                          <Button 
                            style={{backgroundColor: '#c1b9f7', width: '23rem'}}
                            type="submit" 
                            variant="contained" 
                            color="primary">
                            Submit
                          </Button> 
                          </center>
                        </Paper> 
                    </Grid> 
                </Grid>
            </Grid> 
        </Grid>
      </Grid>
      </form>
    </div>
    
  );
}
