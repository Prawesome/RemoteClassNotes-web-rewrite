import React, { Component } from 'react';
import { Button, LinearProgress } from '@material-ui/core';
import FileUpload from '@material-ui/icons/FileUpload'
import UploadScreenStyles from './UploadScreen.css'

class UploadScreen extends Component {

    render() {
        return (
            <div className="root-container">
            //TODO: MULTIPLE FILE SELECTED MANAGER
                <LinearProgress className="linear-progress" color="primary" variant="determinate" value={64} />
                <input id="input-file-selector" name="input-file-selector" type="file" className="hidden-input" onChange={(event) => console.log(event.target.files[0])} />
                <label htmlFor="input-file-selector" >
                    <Button variant="contained" color="default" component="span" disableRipple={true} >
                    Upload
                        <FileUpload />
                    </Button>
                </label>
            </div>
        );
    };
};

export default UploadScreen;