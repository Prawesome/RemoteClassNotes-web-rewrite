import React, { Component } from "react";
import "./Grid.css";
import { GridList, GridListTile } from "@material-ui/core";
import SubjectCard from "./SubjectCard";
import firebase from "./Firebase";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";

class SubjectScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: []
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData = () => {
    const dbRef = firebase.database().ref("/subjects");

    dbRef.on("child_added", snapshot => {
      this.setState({
        subjects: [...this.state.subjects, snapshot.val()]
      });
    });
  };

  render() {
    let cards;
    
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      console.log("Redirecting from subjects to login");
      return <Redirect to="/login" />;
    }

    cards = this.state.subjects.map((subject, index) => (
      <GridListTile key={index} className="grid-item-container">
        <SubjectCard subject={subject} />{" "}
      </GridListTile>
    ));

    return (
      <div>
        <NavBar title="Subjects" />
        <div className="grid-outter-container">
          <GridList cols={5} className="grid-inner-container">
            {cards}
          </GridList>
        </div>
      </div>
    );
  }
}

export default SubjectScreen;
