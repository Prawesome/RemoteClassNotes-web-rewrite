import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import "./Grid.css";
import firebase from "./Firebase";
import { Link } from "react-router-dom";

const NavBar = props => {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(localStorage.setItem("isLoggedIn", "false"));
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="headline" color="inherit" className="nav-title">
          {props.title}
        </Typography>
        <Link to="/login" className="link-style-reset">
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
