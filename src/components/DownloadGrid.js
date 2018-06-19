import React, { Component } from 'react';
import { GridListTile, Card, CardContent, Typography, Divider } from '@material-ui/core'
import GridStyle from './GridScreen.css';

const DownloadGrid = () => {

    const files = [
        {
            name: 'Hi.ppt',
            subject: 'DWM'
        }, 
        {
            name: 'Hello',
            subject: 'Andrid'
        },
        {
            name: 'MS.doc',
            subject: 'OS'
        },
        {
            name: 'Poda.patti',
            subject: 'odra'
        }
    ];

    let content = files.map( (file, index) => (
        <GridListTile key={index} >
            <Card>
                <CardContent>
                    <Typography variant="title" color="primary" className="center-text">
                    {file.name}
                    </Typography>
                    <Divider />
                    <Typography variant="body1" color="secondary">
                    {file.subject}
                    </Typography>
                </CardContent>
            </Card>
        </GridListTile>
    ));

    return content;
}

export default DownloadGrid;