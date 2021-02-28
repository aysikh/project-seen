import React, { Component } from 'react';
import Logo from '../assets/seen-logo-dummy.png'
import SignUpForm from '../components/SignUpForm'

export default function LandingPageContainer() {
  return (
    <div class="Landing Page"> 
      <center> <img src={Logo} />  </center>
      Want to know what Black women are saying about these tech companies?
      <SignUpForm /> 
    </div> 
  )
}
