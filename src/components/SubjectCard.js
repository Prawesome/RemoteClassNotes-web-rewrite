import React from "react";
import {
    Card,
    CardContent,
    Typography
  } from "@material-ui/core";

const SubjectCard = props => (
  <Card className="card">
    <CardContent>
      <Typography variant="subheading" color="primary">
        {props.subject}
      </Typography>
    </CardContent>
  </Card>
);

export default SubjectCard;
