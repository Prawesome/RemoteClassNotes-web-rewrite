import React, { Component } from 'react';
import GridStyle from './GridScreen.css';
import { GridList, GridListTile, Card, CardContent, Typography } from '@material-ui/core';

class GridScreen extends Component {

    constructor(props) {
        super(props);
    }

    subjects = ['DWM', 'OS', 'Android', 'iOS', 'DS', 'EM', 'MPMC', 'WTF', 'HOI', 'HELLO', 'OSS'];

    render() {
        return(
            <div className="grid-container">
                <GridList cols={5}>
                    {this.subjects.map( (subject, index) => 
                    <div className="grid-item-container">
                        <GridListTile key={index}>
                            <Card>
                                <CardContent classes='test'>
                                    <Typography variant="subheading" color="primary">
                                        {subject}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </GridListTile>
                    </div>
                    )}
                </GridList>
            </div>
        );
    }
}

export default GridScreen;