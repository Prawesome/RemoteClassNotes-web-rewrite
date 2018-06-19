import React, { Component } from "react";
import GridStyle from "./GridScreen.css";
import { GridList } from "@material-ui/core";
import {
  GridListTile,
  Card,
  CardContent,
  Typography,
  Divider
} from "@material-ui/core";
import DownloadCard from "./DownloadCard";

class GridScreen extends Component {
  constructor(props) {
    super(props);
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

              {/* <Card>
                <CardContent>
                  <Typography
                    variant="title"
                    color="primary"
                    align="center"                    
                  >
                    {file.name}
                  </Typography>
                  <Divider />
                  <Typography variant="body1" color="secondary">
                    {file.subject}
                  </Typography>
                </CardContent>
              </Card> */}
            </GridListTile>
          ))};
          {/* {this.subjects.map((subject, index) => (
            <GridListTile
              key={index}
              className="grid-item-container"
            >
              <Card className="card">
                <CardContent>
                  <Typography variant="subheading" color="primary">
                    {subject}
                  </Typography>
                </CardContent>
              </Card>
            </GridListTile>
          ))} */}
        </GridList>
      </div>
    );
  }
}

export default GridScreen;
