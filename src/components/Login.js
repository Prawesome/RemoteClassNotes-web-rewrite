import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import "./Login.css";
import { Card, CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import CardInput from "./CardTextInput";
import { Redirect } from "react-router-dom";
import GridScreen from "./GridScreen";
import firebase from "./Firebase";

class Login extends React.Component {
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
      }
    };
  }

  mailFieldHandler = event => {
    this.setState({
      mail: {
        ...this.state.mail,
        value: event.target.value
      }
    });
  };

  passwordFieldHandler = event => {
    this.setState({
      password: {
        ...this.state.password,
        value: event.target.value
      }
    });
  };

  setEmailError = () => {
    this.setState({
      mail: {
        ...this.state.mail,
        isError: true,
        errorText: "Invalid/Incorrect Email"
      }
    });
  };

  setPasswordError = () => {
    this.setState({
      password: {
        ...this.state.password,
        isError: true,
        errorText: "Incorrect password"
      }
    });
  };

  loginHandler = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.mail.value, this.state.password.value)
      .catch(error => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
          case "auth/argument-error":
            this.setEmailError();
            break;
          case "auth/wrong-password":
            this.setPasswordError();
            break;
          default:
            break;
        }
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <Typography variant="title" className="card-item" color="primary">
          Remote Class Notes
        </Typography>
        <Card className="card-container">
          <CardContent>
            <Typography
              variant="headline"
              color="primary"
              className="card-item"
            >
              Login
            </Typography>
            <CardInput
              name="login-email"
              placeholder="Email ID"
              type="email"
              autoFocus={true}
              onChange={this.mailFieldHandler}
              value={this.state.mail.value}
              error={this.state.mail.isError}
              helperText={this.state.mail.errorText}
            />
            <CardInput
              name="login-password"
              placeholder="Password"
              type="password"
              onChange={this.passwordFieldHandler}
              value={this.state.password.value}
              error={this.state.password.isError}
              helperText={this.state.password.errorText}
            />
            <div className="card-item">
              <Button
                variant="raised"
                color="primary"
                onClick={this.loginHandler}
              >
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Login;
