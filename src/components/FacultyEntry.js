import React, { Component } from "react";
import { Checkbox, TableRow, TableCell } from "@material-ui/core";

class FacultyEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isChecked = false
    };
  }

  facultyHandler = () => {
    this.setState({
        isChecked: !this.state.isChecked
    });
  };

  render() {
    return (
      <TableRow>
        <TableCell>{props.faculty}</TableCell>
        <TableCell>
          <Checkbox checked={true} onChange={facultyHandler} />
        </TableCell>
      </TableRow>
    );
  }
}

export default FacultyEntry;
