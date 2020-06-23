import React, { useContext } from 'react';
import {Button} from '@material-ui/core'

import { AuthContext } from '../../context/AuthContext'
import './Auth.css';

const Auth = props => {

  const authContext = useContext(AuthContext);
    const loginHandler = () => {
        
        authContext.login();
        props.modalClose();
  };

  return (
    <div className="auth">
    
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <Button onClick={loginHandler} variant="contained" color="primary">Log In</Button>
  
    </div>
  );
};

export default Auth;