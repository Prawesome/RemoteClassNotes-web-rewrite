import React, { Component } from "react";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Subjects from "./components/SubjectScreen";
import Files from "./components/FileScreen";

class App extends Component {
  render() {
    return (
      <Switch>
        {/* TODO: IMPLEMENT 404 PAGE */}
        <Route path="/login" component={Login} />
        <Route path="/subjects" component={Subjects} />
        <Route path="/files/:subjectId" component={Files} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    );
  }
}

export default App;
