import React, { Component } from 'react';
import Logo from '../assets/seen-logo-dummy.png'
import LandingPageAppInfo from '../components/LandingPageAppInfo'

export default function LandingPageContainer() {
  return (
    <div class="Landing Page"> 
      <center> <img src={Logo} />  </center>
      <LandingPageAppInfo /> 
    </div> 
  )
}
