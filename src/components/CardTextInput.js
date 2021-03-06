import React, { Component } from "react";
import { TextField, InputAdornment } from "@material-ui/core/";
import "./Login.css";
import { AccountCircle, Lock } from "@material-ui/icons";

//custom input field in cards

class CardTextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const icon = this.props.icon === "AccountCircle" ? <AccountCircle /> : <Lock />;
    return (
      <div className="card-item">
        <TextField
          {...this.props}
          required={true}
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment className="icon-text-field" position="start" color="primary">
                {icon}
              </InputAdornment>
            )
          }}
        />
      </div>
    );
  }
}

export default CardTextInput;
