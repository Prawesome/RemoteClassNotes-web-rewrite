import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import LoginStyle from './Login.css';
import Card from '@material-ui/core/Card/Card';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import CardInput from './CardTextInput';

class Login extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return(
        <div className="container">
            <Card className='card-container'>
                <CardContent>
                    <Typography variant="headline" color="primary" className="card-heading">
                    LOGIN
                    </Typography>
                    <CardInput 
                        name="login-email"
                        placeholder="Email ID"
                        type="email"
                        autoFocus={true}
                    />
                    <CardInput 
                        name="login-password"
                        placeholder="Password"
                        type="password"
                    />
                    <Button variant="raised" color="primary">Submit</Button>
                </CardContent>
            </Card>
        </div>
        );
    }
}

export default Login;