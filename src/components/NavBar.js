import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import "./Grid.css";
import firebase from "./Firebase";
import { withRouter } from "react-router-dom";

const NavBar = props => {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.setItem("isLoggedIn", "false");
        props.history.push('/login');
      })
      .catch(err => console.log("Could not redirect", err)); //TODO: SHOW SOMETHING TO USER
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="headline" color="inherit" className="nav-title">
          {props.title}
        </Typography>
        <Button onClick={logout} color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(NavBar);
