import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

function Leadership() {
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


function Diversity() {
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
              <Typography>Rate your company on how diverse it is as a whole - are employees representative of the general population in disability, ethnicity, gender, race, religion, sexual orientation, etc., and is everyone seen as equals? </Typography>
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
      {/* <h2> Bye </h2> */}
    </div>
  );
}
