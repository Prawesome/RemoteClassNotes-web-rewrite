import React, { Component } from 'react';
import { Checkbox, TableRow, TableCell } from '@material-ui/core';

const FacultyEntry = props => {

    const facultyHandler = () => {
        console.log('grdgduriguidrjg');
    };

    return (
        <TableRow>
            <TableCell>{props.faculty}</TableCell>
            <TableCell><Checkbox checked={true} onChange={facultyHandler} /></TableCell>
        </TableRow>
    )
};

export default FacultyEntry;