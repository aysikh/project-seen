import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

function Diversity() {
  return (
    <PopupState variant="popover" popupId="1">
      {(popupState) => (
        <div>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
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
            <Box p={2}>
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
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
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
            <Box p={2}>
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
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
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
            <Box p={2}>
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
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
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
            <Box p={2}>
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
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
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
            <Box p={2}>
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
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
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
            <Box p={2}>
              <Typography>Rate your company on how likely you would recommend as a place of employment to a friend. </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default function DummyTest() {
  return (
    <div>
      <h1> Hi </h1> 
      {Leadership()}
      <br /> 
      <br /> 
      {Diversity()}
      <br /> 
      <br /> 
      {WorkLife()}
      <br /> 
      <br /> 
      {Inclusiveness()}
      <br /> 
      <br /> 
      {Benefits()}
      <br /> 
      <br />
      {Recommend()}
    </div>
  );
}
