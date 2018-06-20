import React, { Component } from "react";
import GridStyle from "./GridScreen.css";
import { GridList, GridListTile } from "@material-ui/core";
import DownloadCard from "./DownloadCard";
import SubjectCard from "./SubjectCard";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

class GridScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjectSelected: false
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
    this.subjects = [
      "DWM",
      "OS",
      "Android",
      "iOS",
      "DS",
      "EM",
      "MPMC",
      "WTF",
      "HOI",
      "HELLO",
      "OSS"
    ];
  }

  //TODO: ROUTING
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
      cards = this.subjects.map((subject, index) => (
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
