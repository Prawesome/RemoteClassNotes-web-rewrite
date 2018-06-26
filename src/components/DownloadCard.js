import React from "react";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import "./Grid.css";

//layout of individual files in download screen

const DownloadCard = props => (
  <Card className="card">
    <CardContent>
      <Typography variant="title" color="primary" align="center">
        {props.file.fileName}
      </Typography>
      <Divider />
      <Typography variant="body1" color="secondary">
        {props.file.subjectName }
      </Typography>
    </CardContent>
  </Card>
);

export default DownloadCard;
