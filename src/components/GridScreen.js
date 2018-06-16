import React, { Component } from 'react';
import GridStyle from './GridScreen.css';

class GridScreen extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        subjects: ['DWM', 'OS', 'Android', 'iOS', 'DS', 'EM', 'MPMC', 'WTF', 'HOI', 'HELLO', 'OSS']
    };

    render() {
        return(
            <ul>
                {this.state.subjects.map(subject => (
                    <li>{subject}</li>))}
            </ul>
        );
    }
}

export default GridScreen;