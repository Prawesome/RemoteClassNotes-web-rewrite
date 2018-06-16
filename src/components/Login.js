import React from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import LoginStyle from './Login.css';
import Card from '@material-ui/core/Card/Card';
import { CardContent } from '@material-ui/core';

class Login extends React.Component {
    render() {
        return(
        <div className="container">
            <Card className='card-container'>
                <CardContent>
                    <Typography variant="headline" color="primary">
                    LOGIN
                    </Typography>
                    <TextField 
                        autoFocus={true}
                        name="login-email"
                        placeholder="Email ID"
                        type="email"
                        required="true"
                        fullWidth="true"
                    />
                    <TextField 
                        autoFocus={true}
                        name="login-password"
                        placeholder="Password"
                        type="password"
                        required="true"
                        fullWidth="true"
                    />
                </CardContent>
            </Card>
        </div>
        );
    }
}

export default Login;