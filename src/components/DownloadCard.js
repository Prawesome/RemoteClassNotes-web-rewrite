import React, { Component } from "react";
import {
    Card,
    CardContent,
    Typography,
    Divider
  } from "@material-ui/core";

const DownloadCard = props => (
  <Card>
    <CardContent>
      <Typography variant="title" color="primary" align="center">
        {props.file.name}
      </Typography>
      <Divider />
      <Typography variant="body1" color="secondary">
        {props.file.subject}
      </Typography>
    </CardContent>
  </Card>
);

export default DownloadCard;
