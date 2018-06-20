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
      mail: "",
      password: ""
    };
  }

  mailFieldHandler = event => {
    this.setState({
      mail: event.target.value
    });
  };

  passwordFieldHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  loginHandler = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.mail, this.state.password)
      .catch(error => {
          
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
              value={this.state.mail}
            />
            <CardInput
              name="login-password"
              placeholder="Password"
              type="password"
              onChange={this.passwordFieldHandler}
              value={this.state.password}
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
