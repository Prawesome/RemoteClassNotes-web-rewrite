import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import './Grid.css';

const NavBar = props => {
  return (
    <AppBar position="sticky" className="nav-margin" >
      <Toolbar>
        <Typography variant="headline" color="inherit" className="nav-title">
          {props.title}
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
