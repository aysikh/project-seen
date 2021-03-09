import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, matchPath } from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LandingPageContainer from './containers/LandingPageContainer';
import LogInContainer from './containers/LogInContainer';
import SignUpContainer from './containers/SignUpContainer';
import NewReviewForm from './components/NewReviewForm'
import CompanyShow from './components/CompanyShow'
import CompanyCard from './components/CompanyShow'

const COMPANY_URL = "http://localhost:3000/companies"

const useStyles = makeStyles(() => ({
  bg: {
    minHeight: '100vh',
    // backgroundColor: '#EADCA7'
    // backgroundImage: `url(${})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
  },
}));

export default function App({history}) {
  const classes = useStyles();
  const [company, setCompany] = useState([]);

  const getCompanies = () => {
    fetch(COMPANY_URL)
    .then(rsp => rsp.json())
    .then(companies => setCompany(companies))
  }
  useEffect(()=>{
    getCompanies();
  }, [])


  // const match = matchPath(history.location.pathname, {
  //   path: "/company/:id"
  // });

  // let companyId;

  // if (match && match.params.id) {
  //   companyId = match.params.id;
  // }

  return(
    <BrowserRouter>
      <div className={classes.bg}>
      <Switch>
        <div>
          <Route exact path="/" component={LandingPageContainer} />
          <Route exact path="/sign-up" component={SignUpContainer} />
          <Route path="/log-in" component={LogInContainer} /> 
          <Route path='/new-review' component={NewReviewForm} /> 
          <Route path="/company" component={CompanyShow} />
        </div>
      </Switch>
      </div>
    </BrowserRouter>
  )
}
