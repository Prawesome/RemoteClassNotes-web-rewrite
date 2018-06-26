import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import "./Grid.css";
import { Link } from "react-router-dom";

//layout of individual subject cards

const SubjectCard = props => (
  <Card className="card">
    <CardContent>
      <Typography variant="subheading" color="primary" align="center">
        {props.subject}
      </Typography>
      <Link to={{
        pathname: `/files/${props.subject}`
      }}>
      <Button variant='raised' color="primary" >Browse</Button>
      </Link>
    </CardContent>
  </Card>
);

export default SubjectCard;
