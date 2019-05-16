import React, { Component } from "react";
import { Button } from "@material-ui/core";

class LoginButton extends Component {
    render(){
        return(
            <div>
                <Button color="inherit" variant = 'outlined'>Login</Button>
            </div>
        )
    }
}

export default LoginButton