import React from "react";
import "./Login.css";
import {
  CircularProgress,
  Button,
  Typography,
  Snackbar
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
      confirmPassword: {
        value: "",
        isError: false,
        errorText: ""
      },
      buttonDisabled: false,
      progressControls: {
        isLoading: false
      },
      snackbarOpened: false,
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

  // TODO: BUGGY IMPLEMENTATION, CONFIRM PASSWORD ALWAYS DISABLED
  //Set value of confirm password field
  confirmPasswordFieldHandler = event => {
    this.setState({
      confirmPassword: {
        ...this.state.confirmPassword,
        value: event.target.value
      }
    });

    if (this.state.password.value === this.state.confirmPassword.value) {
      this.setState({
        buttonDisabled: false
      })
    } else {
      this.setState({
        buttonDisabled: true
      })
    }
  };

  //Set error on email field
  setEmailError = (errorText) => {
    this.setState({
      mail: {
        ...this.state.mail,
        isError: true,
        errorText: errorText
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
        errorText: "Password should be at least 6 characters long!"
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

  // close the sandwich
  closeSnackbar = () => {
    this.setState({
      snackbarOpened: false
    })
  }

  //Executed on login submit
  signUpHandler = () => {
    this.setState({
      ...this.state,
      progressControls: {
        isLoading: true
      }
    });

    // TODO: Snackbar is not visible!
    //Firebase sign in action
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.mail.value,
        this.state.password.value
      )
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification().then(() => {
          if (this.props.match.path === "/faculty/login") {

            firebase.database().ref('approvalWait').push(this.state.mail.value);

            this.props.history.push("/faculty/approval");
          } else if (this.props.match.path === "/login") {
            this.props.history.push("/approval");
          }
        }).catch(error => {
          this.setState({
            snackbarOpened: true
          })
        })
      })
      .catch(error => {
        //Handle login errors
        switch (error.code) {
          case "auth/email-already-in-use":
            this.setEmailError("EMAIL already in use");
            break;
          case "auth/invalid-email":
            this.setEmailError("EMAIL invalid");
            break;
          case "auth/operation-not-allowed":
            this.setEmailError("Invalid operation");
            break;
          case "auth/weak-password":
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
          onChange={this.passwordFieldHandler}
          value={this.state.password.value}
          error={this.state.password.isError}
          helperText={this.state.password.errorText}
          icon="Lock" />
        <CardInput name="sign-up-confirm-password"
          placeholder="Confirm Password"
          type="password"
          onChange={this.confirmPasswordFieldHandler}
          value={this.state.confirmPassword.value}
          error={this.state.confirmPassword.isError}
          icon="Lock" />
        <div className="card-item" >
          {this.state.progressControls.isLoading ? (
            <CircularProgress />
          ) : (
              <Button id="btn-signup"
                variant="raised"
                color="primary"
                onClick={this.signUpHandler}
                disabled={this.state.buttonDisabled} >
                Sign Up
              </Button>
            )
          }
        </div>
        {/* TODO: Fix this */}
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.snackbarOpened}
          autoHideDuration={6000}
          onClose={this.closeSnackbar}
          message={<span>An unexpected error. Try again</span>} />
      </div>
    );
  }
}

export default withRouter(SignUpForm);
