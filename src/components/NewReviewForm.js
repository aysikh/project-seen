import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import BG from '../assets/light-grey.png';


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
    width: '100%',
    display: 'inline-block',
    padding: '15px',
    margin: '2px',
    backgroundColor: 'white',
  },
  info: {
    width: '20rem', 
    height: 'auto'
  },
  question: {
    backgroundColor: "#4A2B1C", 
    color: 'white', 
    maxHeight: '20px'
  },
  bg: {
    backgroundColor: 'white',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 95%',
    backgroundAttachment: 'fixed',
    // marginBottom: '5rem',
  },
  selectionBox: {
    width: '22rem'
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
              <Box p={4} className={classes.info} >
                <span style={{fontFamily: 'Cardo'}}>Rate your company on how diverse it is as a whole - are employees representative of the general population in disability, ethnicity, gender, race, religion, sexual orientation, etc., and is everyone seen as equals? </span >
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
                <span style={{fontFamily: 'Cardo'}}>Rate your company on how diverse the mid- and senior-level leadership is - are underrepresented employees equitably reperesented and welcomed in leadership positions? </span >
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
                <span style={{fontFamily: 'Cardo'}}>Rate your company on overall work/life balance - does the company encourage employeese to balance work and other aspects of life such as family, personal development, social life, health, and other needs?  </span >
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
                <span style={{fontFamily: 'Cardo'}}>Rate your company on its overall inclusion - do all employees feel like their voices are heard and treated fairly and respectfully? That they have equal access to opportunities and resources? And that they can contribute fully to the organization's success?  </span >
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
                <span style={{fontFamily: 'Cardo'}}>Rate your company on its D&I benefits and resources- does your company offer equivalent benefits and resources for all employees such as family and adoptive leave, fertility treatment, same sex partner benefits, flex time for religious observations, etc?  </span >
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
                <span style={{fontFamily: 'Cardo'}}>Rate your company on how likely you would recommend as a place of employment to a friend. </span>
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

  const [openError, setOpenErrors] = React.useState(false)
  const [errors, setErrors] = React.useState('')


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
        body: JSON.stringify({
          title: title, 
          position: position, 
          content: content,
          diversity: diversity, 
          leadership: leadership, 
          worklife: worklife, 
          inclusiveness: inclusiveness, 
          benefits: benefits, 
          recommendation: recommendation,
          user_id: props.userLoggedIn.user.id,
          company_id: parseInt(reviewCompany)
        })
    }
    // console.log(requestPackage.body)
    fetch( URL + companyName + "/reviews", requestPackage )
      .then( rsp => rsp.json() )
      .then( data => {
        if(props.userLoggedIn.reviews && props.userLoggedIn.reviews.length){
          let newReviewArray = [...props.userLoggedIn.reviews]
          console.log(newReviewArray)
          console.log(data.review)
          newReviewArray.push(data.review)
          props.setUserLoggedIn({user: props.userLoggedIn.user, reviews: newReviewArray})
        }
        else{
          let newReviewArray = []
          newReviewArray.push(data.review)
          props.setUserLoggedIn({user: props.userLoggedIn.user, reviews: newReviewArray})
        }
      })
      history.push( "/profile" )
  }

  const findCompanyName = (value) => {
    let x = props.companies.filter(company => 
      company.id == value)
      setCompanyName(x[0].name.toLowerCase())
  }

  return (
    <div className={classes.bg}>
      <center>
        <form 
          autoComplete="on"
          noValidate
          onSubmit={ ( event ) => {
              handleNewReviewSubmit( event )
          } }>

      {/* RATING */}
        <Grid item xs={6} >
            <Paper className={classes.paper} elevation={5}>
              <span style={{fontSize: '2.5rem', fontFamily: 'Josefine Sans'}}>Write about your experience!</span>
              <br /> <br /> 
                <span style={{fontSize: '20px', fontFamily: 'Cardo'}}> Choose a company:  </span> 
                  <br/> <br/>
                    <FormControl className={classes.selectionBox}>
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
                    <br /> <br /> <br/> 
                    <Divider variant='center' style={{width: '80%'}}/>
                    <br /> <br />
                <Box component="fieldset" mb={2} borderColor="transparent">
                  <Grid container spacing={3}>
                    <Grid item xs={8}>
                      <span style={{fontSize: '20px', fontFamily: 'Cardo'}}component="legend">Diversity in Organization</span>
                    </Grid>
                    <Grid item xs={4} >
                      {Diversity()}
                    </Grid>
                      <Rating
                        name="diversity"
                        precision={0.5}
                        style={{color: '#A16338', fontSize: '4rem', marginLeft: '15%'}}
                        value={diversity}
                        onChange={handleDiversity}
                      />
                  </Grid>    
                </Box>
                <Box component="fieldset" mb={2} borderColor="transparent">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                      <span style={{fontSize: '20px', fontFamily: 'Cardo'}} component="legend">Diversity in Leadership</span>
                    </Grid>
                    <Grid item xs={4}>
                      {Leadership()}
                    </Grid>
                    <Rating
                      name="leadership"
                      precision={0.5}
                      style={{color: '#7B4C2B', fontSize: '4rem', marginLeft: '15%'}}
                      value={leadership}
                      onChange={handleLeadership}
                    />
                  </Grid>    
                  </Box>
                  <Box component="fieldset" mb={2} borderColor="transparent">
                  <Grid container spacing={3}>
                    <Grid item xs={8}>
                      <span style={{fontSize: '20px', fontFamily: 'Cardo'}} component="legend">The Work/Life Balance</span >
                    </Grid>
                    <Grid item xs={4}>
                      {WorkLife()}
                    </Grid>
                    <Rating
                      name="worklife"
                      precision={0.5}
                      style={{color: '#A16338', fontSize: '4rem', marginLeft: '15%'}}
                      value={worklife}
                      onChange={handleWorklife}
                    />
                  </Grid>    
                  </Box>
                  <Box component="fieldset" mb={2} borderColor="transparent">
                  <Grid container spacing={3}>
                    <Grid item xs={8}>
                      <span style={{fontSize: '20px', fontFamily: 'Cardo'}} component="legend">Inclusivity</span >
                    </Grid>
                    <Grid item xs={4}>
                      {Inclusiveness()}
                    </Grid>
                    <Rating
                      name="inclusiveness"
                      precision={0.5}
                      style={{color: '#7B4C2B', fontSize: '4rem', marginLeft: '15%'}}
                      value={inclusiveness}
                      onChange={handleInclusiveness}
                    />
                  </Grid>    
                  </Box>
                  <Box component="fieldset" mb={2} borderColor="transparent">
                  <Grid container spacing={3}>
                    <Grid item xs={8}>
                      <span style={{fontSize: '20px', fontFamily: 'Cardo'}} component="legend">Rate the Company's Benefits</span >
                    </Grid>
                    <Grid item xs={4}>
                      {Benefits()}
                    </Grid>
                    <Rating
                      name="benefits"
                      precision={0.5}
                      style={{color: '#A16338', fontSize: '4rem', marginLeft: '15%'}}
                      value={benefits}
                      onChange={handleBenefits}
                    />
                  </Grid>    
                  </Box>
                  <Box component="fieldset" mb={2} borderColor="transparent">
                  <Grid container spacing={3}>
                    <Grid item xs={8}>
                      <span style={{fontSize: '20px', fontFamily: 'Cardo'}} component="legend">Would you recommend to a friend? </span >
                    </Grid>
                    <Grid item xs={4}>
                      {Recommend()}
                    </Grid>
                    <Rating
                      name="recommendation"
                      precision={0.5}
                      style={{color: '#7B4C2B', fontSize: '4rem', marginLeft: '15%'}}
                      value={recommendation}
                      onChange={handleRecommendation}
                    />
                  </Grid>    
                  </Box>
                    <br/> 
                    <Divider variant='center' style={{width: '80%'}}/>
                    <br/> <br/>
                        <TextField 
                          style={{backgroundColor: 'white', width: '80%'}}
                          onChange={handleTitle}
                          id="outlined-basic" 
                          label="Enter a title for your review..." 
                          variant="outlined" 
                          />
                      <br /> <br />
                        <TextField 
                          style={{backgroundColor: 'white', width: '80%'}}
                          onChange={handlePosition}
                          id="outlined-basic" 
                          label="What was your position here? " 
                          variant="outlined" 
                        />
                      <br /> <br /> 
                        <TextField
                          style={{backgroundColor: 'white', width: '80%'}}
                          multiline
                          rows={5}
                          id="content-box"
                          label="Talk more about your experience here..."
                          onChange={handleContent}
                          variant="outlined" 
                        />
                          <br /> <br /> 
                        <Button 
                          style={{backgroundColor: 'black', color: 'white', width: '23rem', fontFamily: 'Cardo'}}
                          type="submit" 
                          variant="contained" 
                          color="primary">
                          Submit
                        </Button> 
                </Paper>
              </Grid>
          {/* <Grid item xs={5} style={{marginTop: '2rem'}}>
                <Paper className={classes.paper} elevation={5}>
                  
                </Paper> 
              </Grid> */}
      </form>
      </center>
    </div>
    
  );
}
