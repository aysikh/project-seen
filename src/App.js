import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LandingPageContainer from './containers/LandingPageContainer';
import LogInContainer from './containers/LogInContainer';
import SignUpContainer from './containers/SignUpContainer';
import NewReviewForm from './components/NewReviewForm'
import CompanyShow from './components/CompanyShow'
import ReviewShow from './components/ReviewShow'
import NavBar from './components/NavBar'
import ProfileShow from './containers/ProfileShow'

const COMPANY_URL = "http://localhost:3000/companies"

const useStyles = makeStyles(() => ({
  bg: {
    minHeight: '100vh',
    // overflow: 'hidden',
    // overflowY: 'scroll'
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
    <div>
      <NavBar /> 
      <BrowserRouter>
        <div >
        <Switch>
          <div>
            <Route exact path="/" component={LandingPageContainer} />
            <Route exact path="/sign-up" component={SignUpContainer} />
            <Route path="/login" component={LogInContainer} /> 
            <Route path='/new-review' component={NewReviewForm} /> 
            <Route exact path="/company/:name" component={CompanyShow} />
            <Route path="/reviews" component={ReviewShow} /> 
            <Route path="/profile" component={ProfileShow} />
          </div>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}
