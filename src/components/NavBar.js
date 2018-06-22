import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import "./Grid.css";
// import firebase from "./Firebase";
import { Redirect } from "react-router-dom";

const NavBar = props => {
  const logout = () => {
    console.log("press");

    // firebase.auth().signOut();
    // localStorage.setItem("isLoggedIn", "false");
    return <Redirect to="/login" />;
  };

  return (
    <AppBar position="sticky" className="nav-margin">
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

export default NavBar;
