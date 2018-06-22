import React, { Component } from "react";
import firebase from "./Firebase";
import { GridList, GridListTile } from "@material-ui/core";
import "./Grid.css";
import DownloadCard from "./DownloadCard";
import NavBar from "./NavBar";

class FileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: []
    };
  }

  componentWillMount() {
    this.getData(this.props.match.params.subjectId);
  }

  getData = subject => {
    const dbRef = firebase.database().ref("/files");

    dbRef.on("child_added", snapshot => {
      const file = snapshot.val();

      if (file.subjectName.toLowerCase() === subject.toLowerCase()) {
        this.setState({
          files: [...this.state.files, file]
        });
      }
    });
  };

  render() {
    let cards;

    cards = this.state.files.map((file, index) => (
      <GridListTile key={index} className="grid-item-container">
        <DownloadCard file={file} />
      </GridListTile>
    ));

    return (
      <div>
        <NavBar title={this.props.match.params.subjectId} />
        <div className="grid-outter-container">
          <GridList cols={5} className="grid-inner-container">
            {cards}
          </GridList>
        </div>
      </div>
    );
  }
}

export default FileScreen;
