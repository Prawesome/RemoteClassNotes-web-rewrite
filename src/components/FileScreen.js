import React, { Component } from "react";
import firebase from "./Firebase";
import { GridList, GridListTile } from "@material-ui/core";
import "./Grid.css";
import DownloadCard from "./DownloadCard";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";
import FullScreenProgressCircle from "./FullScreenProgressCircle";

class FileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        files: []
      },
      progressControl: {
        isLoading: true
      }
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
          data: {
            files: [...this.state.data.files, file]
          },
          progressControl: {
            isLoading: false
          }
        });
      }
    });
  };

  render() {
    let cards;

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      console.log("Redirecting from subjects to login");
      return <Redirect to="/login" />;
    }

    cards = this.state.data.files.map((file, index) => (
      <GridListTile key={index} className="grid-item-container">
        <DownloadCard file={file} />
      </GridListTile>
    ));

    return (
      <div>
        <NavBar title={this.props.match.params.subjectId} />
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

export default FileScreen;
