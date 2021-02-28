import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LandingPageContainer from './containers/LandingPageContainer';
import LogInContainer from './containers/LogInContainer';
import SignUpContainer from './containers/SignUpContainer';
import UserDashboardContainer from './containers/UserDashboardContainer'


const useStyles = makeStyles(() => ({
  bg: {
    minHeight: '100vh',
    backgroundColor: '#EADCA7'
    // backgroundImage: `url(${})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
  },
}));

export default function App() {
  const classes = useStyles();

  return(
    <BrowserRouter>
      <div className={classes.bg}>
      <Switch>
        <div>
          <Route exact path="/" component={LandingPageContainer} />
          <Route path="/home" component={UserDashboardContainer} />
          <Route exact path="/signup" component={SignUpContainer} />
          <Route path="/login" component={LogInContainer} /> 
        </div>
      </Switch>
      </div>
    </BrowserRouter>
  )
}
