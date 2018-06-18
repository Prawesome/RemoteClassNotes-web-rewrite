import React, { Component } from 'react';
import GridStyle from './GridScreen.css';
import { GridList, GridListTile, Card, CardContent, Typography, createMuiTheme } from '@material-ui/core';

class GridScreen extends Component {

    constructor(props) {
        super(props);
    }

    subjects = ['DWM', 'OS', 'Android', 'iOS', 'DS', 'EM', 'MPMC', 'WTF', 'HOI', 'HELLO', 'OSS'];

    render() {
        return(
            <div className="grid-outter-container">
                <GridList cols={5} className="grid-inner-container">
                    {this.subjects.map( (subject, index) => 
                    <GridListTile key={index} className="grid-item-container">
                        <Card className="card">
                            <CardContent>
                                <Typography variant="subheading" color="primary">
                                    {subject}
                                </Typography>
                            </CardContent>
                        </Card>
                    </GridListTile>
                    )}
                </GridList>
            </div>
        );
    }
}

export default GridScreen;