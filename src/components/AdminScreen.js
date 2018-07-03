import React, { Component } from "react";
import NavBar from "./NavBar";
import firebase from "./Firebase";

class AdminScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
        faculties: []
    };

    this.dbRef;
  }

  componentDidMount() {
      this.getData();
  };

  componentWillUnmount() {
      this.dbRef().off();
  };

  getData = () => {
      this.dbRef = firebase.database().ref("/faculties");

      this.dbRef.on('child_added', snapshot => {
        this.setState({
            faculties: [...this.state.faculties, snapshot.val()]
        });
      });
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

        </table>
      </div>
    );
  }
}

export default AdminScreen;
