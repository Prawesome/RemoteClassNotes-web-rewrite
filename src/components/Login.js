import React from 'react';
import TextField from '@material-ui/core/TextField/TextField'
import Typography from '@material-ui/core/Typography/Typography'

class Login extends React.Component {
    render() {
        return(
        <div>
            <Typography variant="headline" color="primary">
            gidjgijdigjiogjiodj
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
        </div>
        );
    }
}

export default Login;