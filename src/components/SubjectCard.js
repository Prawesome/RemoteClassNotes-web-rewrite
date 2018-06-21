import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Grid.css";

const SubjectCard = props => (
  <Card className="card">
    <CardContent>
      <Typography variant="subheading" color="primary" align="center">
        {props.subject}
      </Typography>
    </CardContent>
  </Card>
);

export default SubjectCard;
