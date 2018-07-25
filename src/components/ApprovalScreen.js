import React from 'react';
import { Typography, Button } from '@material-ui/core';
import "./Login.css";
import firebase from "./Firebase";
import { withRouter } from "react-router-dom";

const ApprovalScreen = (props) => {

  //TODO: Create custom email verification handler

  const refreshUser = () => {
    
    if(firebase.auth().currentUser.emailVerified) {
      if(props.match.path === "/approval") {
        props.history.push('/subjects')
      } else if (props.match.path === "/faculty/approval") {
        let dbRef = firebase.database().ref('/faculties');
        
        props.history.push('/subjects')
      }
    }
  }

  return (
    <div className="container">
      <Typography>This account does not have a verified email. Please verify to proceed</Typography>
      <Button color="secondary" type="raised" onClick={refreshUser}>Refresh</Button>
    </div>
  );
}

export default withRouter(ApprovalScreen);