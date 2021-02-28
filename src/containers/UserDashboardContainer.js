import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Container from '@material-ui/core/Container';

const USER_URL = "http://localhost:3000/users"

export default function UserDashboardContainer() {

  const getUser = async () => {
    try {
        const userUser = await
            axios.get( USER_URL )
        setUser( userUser.data )
    } catch ( err ) {
        alert( err.message )
    }
}

  useEffect( () => {
    getUser()
  }, [] )

  return(
    <div>
      <h1> Hi I'm your user dashboard </h1> 
    </div>
  )
}