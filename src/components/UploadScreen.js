import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import FileUpload from '@material-ui/icons/FileUpload'

class UploadScreen extends Component {

    render() {
        return (
            <Button variant="contained" color="default">
                Upload
                <FileUpload />
            </Button>
        );
    };
};

export default UploadScreen;