import React, {Component} from 'react';
import CardTextInputStyle from './CardTextInput.css';
import TextField from '@material-ui/core/TextField/TextField';

class CardTextInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-input">
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