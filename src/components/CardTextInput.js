import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import LoginStyle from './Login.css';

class CardTextInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-item">
                <TextField 
                    {...this.props}
                    required="true"
                    fullWidth="true"
                />
            </div>
        )
    };
};

export default CardTextInput;