import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  topInfo: {
    fontFamily: 'Josefin Sans',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4),
    display: "absolute",
    left: "20%",
    height: "10%",
    width: "auto"
  },
  description: {
    fontFamily: 'Cardo',
    backgroundColor: 'black',
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4),
    display: "absolute",
    left: "20%",
    height: "10%",
    width: "auto"
  },

}))

export default function CompanyCard(props){
  const classes = useStyles();

  return(
    <div className="company-info-container">
      <div id="top-info" className={classes.topInfo}>
        <img src={props.comp.logo} style={{height: '6rem'}}/> 
        <h1 style={{fontSize: '3rem'}}>{props.comp.name}</h1>
        <LocationOnIcon /> <span style={{fontSize: '1.25rem'}}>{props.comp.location}</span>
      </div>
      <div className={classes.description}>
        <h2 style={{color: 'white'}}>{props.comp.description}</h2>
      </div>
      <div>
        
      </div>
    </div>
  )
}