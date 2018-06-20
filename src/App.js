import React, { Component } from "react";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import Subjects from "./components/GridScreen";

class App extends Component {
  render() {
    return (
      <div>
        {/*  <Route path='/' exact component={} /> */}
        <Route path="/login" component={Login} />
        <Route path="/subjects" component={Subjects} />
      </div>
    );
  }
}

export default App;
