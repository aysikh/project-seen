import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 'auto',
    width: 'auto',
    display: 'inline-block',
    padding: '10px',
    margin: '2px'
  },
  info: {
    width: '20rem', 
    height: 'auto'
  },
  question: {
    backgroundColor: "#b39ddb", 
    color: 'white', 
    maxHeight: '20px'
  }
}));


export default function NewReviewForm() {
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
  const [title, setTitle] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [content, setContent] = React.useState('');
  // const [value, setValue] = React.useState(1);
  
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
          leadership, leadership, 
          worklife: worklife, 
          inclusiveness, inclusiveness, 
          benefits: benefits, 
          recommendation: recommendation,
          // user_id: userID, 
          // company_id: company_id
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
      <form 
        autoComplete="on"
        noValidate
        onSubmit={ ( event ) => {
            handleNewReviewSubmit( event )
        } }>
      <Grid container xl={20} className={classes.root} >
          <Grid container justify="center" spacing={6} >
              <Grid item xs={4} style={{backgroundColor: 'red', marginTop: '2rem'}}>
                <Paper style={{padding: '15px'}} elevation={5}>
                <Typography>Write your Review!</Typography>
                <br/> <br/> 
                    <TextField 
                      fullWidth
                      onChange={handleTitle}
                      id="outlined-basic" 
                      label="Enter a title for your review..." 
                      variant="outlined" 
                    />
                    <br /> <br />
                    <TextField 
                      fullWidth
                      onChange={handlePosition}
                      id="outlined-basic" 
                      label="What was your position here? " 
                      variant="outlined" 
                    />
                    <br /> <br /> 
                    <TextField
                      fullWidth
                      multiline
                      rows={15}
                      id="standard-multiline-static"
                      label="Talk more about your experience here..."
                      onChange={handleContent}
                      variant="outlined" 
                    />
                </Paper> 
              </Grid>

{/* RATING ON THE RIGHT */}
<Grid item xs={4} style={{marginTop: '2rem'}}>
            <Paper style={{padding: '15px'}} elevation={5}>
            <h1> Hi Rating here</h1> 
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
          <Button 
              style={{backgroundColor: '#c1b9f7', marginLeft: '60rem'}}
              type="submit" 
              variant="contained" 
              color="primary">
              Submit
            </Button> 
        </Grid>
      </Grid>
      </form>
    </div>
    
  );
}
