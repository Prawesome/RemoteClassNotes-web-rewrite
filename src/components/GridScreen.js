import React, { Component } from "react";
import "./GridScreen.css";
import { GridList, GridListTile } from "@material-ui/core";
import DownloadCard from "./DownloadCard";
import SubjectCard from "./SubjectCard";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import firebase from './Firebase';

class GridScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjectSelected: false,
      subjects: []
    };

    this.files = [
      {
        name: "Hi.ppt",
        subject: "DWM"
      },
      {
        name: "Hello",
        subject: "Andrid"
      },
      {
        name: "MS.doc",
        subject: "OS"
      },
      {
        name: "Poda.patti",
        subject: "odra"
      }
    ];

  }
  componentWillMount() {
    this.getData();
  }

  getData = () => {
    const dbRef = firebase.database().ref('/subjects');

    dbRef.on('child_added', snapshot => {
        this.setState({
            subjects: [...this.state.subjects, snapshot.val()]
        });
    });
  } 

  //TODO: SHIT TON OF REFACTORNING TO BE DONE
  render() {
    let cards;
    if (this.state.subjectSelected) {
      cards = this.files.map((file, index) => (
        <GridListTile key={index} className="grid-item-container">
          <DownloadCard file={file} />
        </GridListTile>
      ));
    } else {
      cards = this.state.subjects.map((subject, index) => (
        <GridListTile key={index} className="grid-item-container">
          <SubjectCard subject={subject} />
        </GridListTile>
      ));
    }
    return (
      <div className="grid-outter-container">
        <GridList cols={5} className="grid-inner-container">
          {cards}
        </GridList>
      </div>
    );
  }
}

export default GridScreen;
