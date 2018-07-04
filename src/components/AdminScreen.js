import React, { Component } from "react";
import NavBar from "./NavBar";
import firebase from "./Firebase";
import FacultyEntry from "./FacultyEntry";
import { Button, TextField } from "@material-ui/core";

class AdminScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faculties: [],
      currentFaculty: ""
    };

    this.dbRef;
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    this.dbRef().off();
  }

  getData = () => {
    this.dbRef = firebase.database().ref("/faculties");

    this.dbRef.on("child_added", snapshot => {
      this.setState({
        faculties: [...this.state.faculties, snapshot.val()]
      });
    });
  };

  addFaculty = () => {};

  facultyFieldHandler = (event) => {
    this.setState({
      currentFaculty: event.target.value
    }) ;
  }

  render() {
    let facultyEntries;

    facultyEntries = this.state.faculties.map((faculty, index) => {
      <FacultyEntry key={index} faculty={faculty} />;
    });

    return (
      <div>
        <NavBar title="Admin Dashboard" />
        <table>
          {facultyEntries}
          
          <TextField value={this.state.currentFaculty} onChange={this.facultyFieldHandler} />
          <Button variant="raised" color="primary" onClick={this.addFaculty}>
            Add Faculty
          </Button>
        </table>
      </div>
    );
  }
}

export default AdminScreen;
