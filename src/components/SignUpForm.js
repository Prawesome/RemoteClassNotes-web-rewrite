import React from "react";
import "./Login.css";
import {
  Card,
  CardContent,
  CircularProgress,
  Button,
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

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: {
        value: "",
        isError: false,
        errorText: ""
      },
      password: {
        value: "",
        isError: false,
        errorText: ""
      },
      progressControls: {
        isLoading: false
      },
      tabIndex: 0
    };

    this.dbRef;
  }

  //Set value of email field
  mailFieldHandler = event => {
    this.setState({
      mail: {
        ...this.state.mail,
        value: event.target.value
      }
    });
  };

  //Set value of password field
  passwordFieldHandler = event => {
    this.setState({
      password: {
        ...this.state.password,
        value: event.target.value
      }
    });
  };

  //Set error on email field
  setEmailError = () => {
    this.setState({
      mail: {
        ...this.state.mail,
        isError: true,
        errorText: "Badly formatted email"
      }
    });
  };

  //Remove error in email field
  removeEmailError = () => {
    this.setState({
      mail: {
        ...this.state.mail,
        isError: false,
        errorText: ""
      }
    });
  };

  //Set error on password field
  setPasswordError = () => {
    this.setState({
      password: {
        ...this.state.password,
        isError: true,
        errorText: "Incorrect email or password"
      }
    });
  };

  // TODO: Handle enter key for sign up too
  //Handle enter key press to submit form
  keyPressHandler = event => {
    if (event.keyCode === 13) {
      this.loginHandler();
      console.log("Enter button logged");
    }
  };

  //Executed on login submit
  loginHandler = () => {
    this.setState({
      ...this.state,
      progressControls: {
        isLoading: true
      }
    });

    //Firebase sign in action
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.mail.value,
        this.state.password.value
      )
      .then(() => {
        if (this.props.match.path === "/faculty/login") {

          // TODO: dummy code to check for faculty at login

          this.dbRef = firebase.database().ref("/faculties");
          this.dbRef.once('child_added').then(snapshot => {
            snapshot.forEach(element => {
              if (element.val() === this.state.mail.value) {
                this.props.history.push("/faculty/subjects");
              }
            })
          }).catch(err => console.log())

          this.props.history.push("/faculty/subjects");
        } else if (this.props.match.path === "/login") {
          console.log("Redirecting to subject after auth");

          //Set as logged in
          localStorage.setItem("isLoggedIn", "true");
          this.props.history.push("/subjects");
        }
      })
      .catch(error => {
        //Handle login errors
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
          case "auth/argument-error":
            this.setEmailError();
            break;
          case "auth/wrong-password":
            this.setPasswordError();
            this.removeEmailError();
            break;
          default:
            break;
        }
        this.setState({
          ...this.state,
          progressControls: {
            isLoading: false
          }
        });
        console.log(error);
      });
  };

  render() {
    return (

      <div>
        <Typography variant="headline"
          color="primary"
          className="card-item" >
          Sign Up
                </Typography>
        <CardInput name="sign-up-email"
          placeholder="Email ID"
          type="email"
          autoFocus={true}
          onChange={this.mailFieldHandler}
          value={this.state.mail.value}
          error={this.state.mail.isError}
          helperText={this.state.mail.errorText}
          icon="AccountCircle" />
        <CardInput name="sign-up-password"
          placeholder="Password"
          type="password"
          onChange={this.passwordFieldHandler} login
          value={this.state.password.value}
          error={this.state.password.isError}
          helperText={this.state.password.errorText}
          icon="Lock" />
        <div className="card-item" >
          {this.state.progressControls.isLoading ? (
            <CircularProgress />
          ) : (
              <Button variant="raised"
                color="primary"
                onClick={this.loginHandler} >
                Sign Up
                      </Button>
            )
          }
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
