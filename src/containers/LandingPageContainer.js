import React, { Component } from 'react';
import Logo from '../assets/seen-logo-dummy.png'
import LandingPageAppInfo from '../components/LandingPageAppInfo'

export default function LandingPageContainer() {
  return (
    <div className="Landing Page" style={{marginTop: '15rem'}}> 
      <LandingPageAppInfo /> 
      <center> <img src={Logo} style={{marginTop: '10rem'}}/>  </center>
    </div> 
  )
}
