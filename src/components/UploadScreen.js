import React, { Component } from 'react';
import { Button, LinearProgress } from '@material-ui/core';
import FileUpload from '@material-ui/icons/FileUpload'
import UploadScreenStyles from './UploadScreen.css'

class UploadScreen extends Component {

    render() {
        return (
            <div className="root-container">
                <LinearProgress className="linear-progress" color="primary" variant="determinate" value={64} />
                <Button variant="contained" color="default">
                    Upload
                    <FileUpload />
                </Button>
            </div>
        );
    };
};

export default UploadScreen;