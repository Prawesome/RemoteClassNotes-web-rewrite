import React, { Component } from "react";
import GridStyle from "./GridScreen.css";
import { GridList, GridListTile } from "@material-ui/core";
import DownloadCard from "./DownloadCard";
import SubjectCard from "./SubjectCard";

class GridScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
        subjectSelected: false
    }
  }

  files = [
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

  subjects = [
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

  //TODO: ROUTING
  //TODO: SHIT TON OF REFACTORNING TO BE DONE

  render() {
    return (
      <div className="grid-outter-container">
        <GridList cols={5} className="grid-inner-container">
          {this.files.map((file, index) => (
            <GridListTile key={index} className="grid-item-container">
              <DownloadCard file={file} />
            </GridListTile>
          ))};
          {this.subjects.map((subject, index) => (
            <GridListTile key={index} className="grid-item-container">
              <SubjectCard subject={subject} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default GridScreen;
