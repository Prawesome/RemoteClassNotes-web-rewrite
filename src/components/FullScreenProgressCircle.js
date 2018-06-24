import React from 'react';
import './Grid.css'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'

const FullScreenProgressCircle = () => {
    return (
        <CircularProgress size="40" thickness={4.0}  className="progress-circle"/>
    )
}

export default FullScreenProgressCircle