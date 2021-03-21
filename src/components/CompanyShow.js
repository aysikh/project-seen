import React, { useState, useEffect } from 'react'
import { useHistory, Link, NavLink} from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CompanyCard from './CompanyCard'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import BG from '../assets/bg-2.jpeg'
import LinearProgress from '@material-ui/core/LinearProgress';
import CompaniesAutocomplete from './CompaniesAutocomplete'

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
  const history = useHistory();
  const [company, setCompany] = useState(null);
  const [comp, setComp] = useState([]);
  const [value, setValue] = React.useState('')

  const {
    params: { name },
  } = props.match;


  useEffect(() => {
    // console.log(name)
    // console.log("NAME:", name)
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
        {company ? <CompanyCard comp={company} key={company.id} /> : <LinearProgress className={classes.root}/>  }
    </div>
  )

}