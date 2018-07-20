import React from "react";
import "./Login.css";
import {
  Card,
  CardContent,
  Typography,
  Tabs,
  AppBar,
  Tab
} from "@material-ui/core";
import CardInput from "./CardTextInput";
import {
  Redirect,
  withRouter
} from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import firebase from "./Firebase";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0
    };

    this.dbRef;
  }

  // TODO: Handle enter key for sign up too
  //Handle enter key press to submit form
  keyPressHandler = event => {
    if (event.keyCode === 13) {
      this.loginHandler();
      console.log("Enter button logged");
    }
  };

  //Handle tabChange
  tabChangeHandler = (event, value) => {
    this.setState({
      tabIndex: value
    });
  }

  //Handle view swipe
  swipeIndexChangeHandler = (index) => {
    this.setState({
      tabIndex: index
    })
  }

  render() {
    // Redirect if user is already logged in
    if (localStorage.getItem("isLoggedIn") === "true") {
      console.log("Redirecting to subjects");
      return <Redirect to="/subjects" />;
    }

    return (
      <div className="container"
        onKeyDown={this.keyPressHandler} >
        <Typography variant="title"
          className="card-item"
          color="secondary">
          Remote Class Notes
          </Typography>
        <Card>
          <AppBar position="static" >
            <Tabs value={this.state.tabIndex}
              onChange={this.tabChangeHandler}
              centered={true}
              fullWidth={true} >
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>
          </AppBar>
          <CardContent className="card-container">
            <SwipeableViews
              axis={'x'}
              index={this.state.tabIndex}
              onChangeIndex={this.swipeIndexChangeHandler}
            >
            <LoginForm />
            <SignUpForm />

            </SwipeableViews>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(AuthContainer);
