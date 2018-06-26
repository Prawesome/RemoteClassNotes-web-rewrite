import React, { Component } from "react";
import "./Grid.css";
import { GridList, GridListTile } from "@material-ui/core";
import SubjectCard from "./SubjectCard";
import firebase from "./Firebase";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";
import FullScreenProgressCircle from './FullScreenProgressCircle';

//Subject screen which lists subjects

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

    //initialise variable
    this.dbRef;
  }

  componentDidMount() {
    console.log("mounted");

    //get data from firebase
    this.getData();
  }

  componentWillUnmount() {
    //unlisten to changes in firebase db
    this.dbRef.off();
  }

  getData = () => {
    //get ref to firebase db
    this.dbRef = firebase.database().ref("/subjects");

    //listen to child added events in firebase db
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

    //redirect back to login page if user is not logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      console.log("Redirecting from subjects to login");
      return <Redirect to="/login" />;
    }

    //populate the screen with content from firebase taken into state
    cards = this.state.data.subjects.map((subject, index) => (
      <GridListTile key={index} className="grid-item-container">
        <SubjectCard subject={subject} />
      </GridListTile>
    ));

    return (
      <div>
        <NavBar title="Subjects" />
        <div className="grid-outter-container">
          {/* show loading screen if not loaded, else show content */}
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
