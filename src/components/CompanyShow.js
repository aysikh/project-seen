import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CompanyCard from './CompanyCard'
import AppBar from '@material-ui/core/AppBar';
import BG from '../assets/brown-bg.jpeg'
import LinearProgress from '@material-ui/core/LinearProgress';
import CompaniesAutocomplete from './CompaniesAutocomplete'


// might have to pull the company's name off the URL and do the fetch call here
// to grab the average scores....then pass i tdown to company card because I don't need the average anywhere else

const COMPANY_URL = "http://localhost:3000/companies/"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '10%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  bg: {
    width: '100%', 
    minHeight: '90vh',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
}));

export default function CompanyShow(props){
  const classes = useStyles(); 
  const [company, setCompany] = useState(null);


  const {
    params: { name },
  } = props.match;


  useEffect(() => {
    fetch(COMPANY_URL + `${name}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => res.json())
      .then((response) => {
        setCompany(response.company);
      })
      .catch((error) => console.log(error));
  }, [name]);

  // console.log(props.setCurrentCompany("Twitter"))

  return (
    <div className={classes.bg}>
      <center>
        <br/> <br/>
        <AppBar style={{backgroundColor: 'white', width: '40rem', position: 'relative'}}>
          <CompaniesAutocomplete {...props} /> 
        </AppBar>

    </center>
    <br/> <br/>
        {company ? <CompanyCard {...props} comp={company} key={company.id} /> : <LinearProgress className={classes.root}/>  }
    </div>
  )

}