import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

const FacultyEntry = props => {

    const facultyHandler = () => {
        console.log('grdgduriguidrjg');
    };

    return (
        <tr>
            <td>{props.faculty}</td>
            <td><Checkbox checked={true} onChange={facultyHandler} /></td>
        </tr>
    )
};

export default FacultyEntry;