import React, { Component } from 'react';
import GridStyle from './GridScreen.css';
import { GridList, GridListTile, Card, CardContent, Typography, createMuiTheme, Divider } from '@material-ui/core';

class GridScreen extends Component {

    constructor(props) {
        super(props);
    }

    subjects = ['DWM', 'OS', 'Android', 'iOS', 'DS', 'EM', 'MPMC', 'WTF', 'HOI', 'HELLO', 'OSS'];

    files = [
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
    
    //TODO: ROUTING

    render() {
        return(
            <div className="grid-outter-container">
                <GridList cols={5} className="grid-inner-container">
                    {
                        this.files.map( (file, index) => (
                            <GridListTile key={index} >
                                {console.log(file.name)}
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
                        ))
                    }
                    {/* {this.subjects.map( (subject, index) => 
                    <GridListTile key={index} className="grid-item-container center-text">
                        <Card className="card">
                            <CardContent>
                                <Typography variant="subheading" color="primary">
                                    {subject}
                                </Typography>
                            </CardContent>
                        </Card>
                    </GridListTile>
                    )} */}
                </GridList>
            </div>
        );
    }
}

export default GridScreen;