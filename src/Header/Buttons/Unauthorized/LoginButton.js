import React, { Component } from "react";
import { withStyles, Button } from "@material-ui/core";

const styles = {

}

class LoginButton extends Component {
    render(){
        return(
            <div>
                <Button color="inherit" variant = 'outlined'>Login</Button>
            </div>
        )
    }
}

export default withStyles(styles)(LoginButton)