import React, { Component } from "react";
import "./Grid.css";
import { GridList, GridListTile } from "@material-ui/core";
import SubjectCard from "./SubjectCard";
import firebase from "./Firebase";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";
import FullScreenProgressCircle from './FullScreenProgressCircle';

class SubjectScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        subjects: []
      },
      progressControl: {
        isLoading: true
      }
    };

    this.dbRef;
  }

  componentDidMount() {
    console.log("mounted");

    this.getData();
  }

  componentWillUnmount() {
    this.dbRef.off();
  }

  getData = () => {
    this.dbRef = firebase.database().ref("/subjects");

    this.dbRef.on("child_added", snapshot => {
      this.setState({
        data: {
          subjects: [...this.state.data.subjects, snapshot.val()]
        },
        progressControl: {
          isLoading: false
        }
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

    cards = this.state.data.subjects.map((subject, index) => (
      <GridListTile key={index} className="grid-item-container">
        <SubjectCard subject={subject} />
      </GridListTile>
    ));

    return (
      <div>
        <NavBar title="Subjects" />
        <div className="grid-outter-container">
          {this.state.progressControl.isLoading ? (
            <FullScreenProgressCircle />
          ) : (
            <GridList cols={5} className="grid-inner-container">
              {cards}
            </GridList>
          )}
        </div>
      </div>
    );
  }
}

export default SubjectScreen;
