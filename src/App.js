import React, { Component } from "react";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Subjects from "./components/SubjectScreen";
import Files from "./components/FileScreen";
import Admin from "./components/AdminScreen";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <Switch>
        {/* TODO: IMPLEMENT 404 PAGE */}
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/faculty/login" component={Login} />
        <Route path="/faculty/subjects" component={NavBar} />
        <Route path="/subjects" component={Subjects} />
        <Route path="/files/:subjectId" component={Files} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    );
  }
}

export default App;
