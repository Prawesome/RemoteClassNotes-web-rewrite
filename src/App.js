import React, { Component } from "react";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Subjects from "./components/SubjectScreen";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/subjects" component={Subjects} />
        <Redirect from="/" to="/login" />
      </Switch>
    );
  }
}

export default App;
