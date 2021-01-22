import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from "./firebase";

function Login() {

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
            console.log(result);
        })
        .catch((error) => {
            alert(error.message);
        });
    }
  return (
    <div className="login">
      <div className="login__container">
          <img 
            src="https://screen.cloud/static/img/features/apps/Shadows/app_shadow_sack.png" 
            alt="" 
          />
          <h1>Sign in to VanWyk Dev'sHQ</h1>
          <p>vanwykdevs.slack.com</p>
          <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );

}

export default Login;
