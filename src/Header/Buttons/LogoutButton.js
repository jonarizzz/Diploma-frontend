import React, { Component } from "react";
import { Button, withStyles } from "@material-ui/core";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
    
})

class LogoutButton extends Component {
    handleClick = () =>{
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    };
    
    render(){
        const {classes} = this.props;
        return(
            <Button color = 'secondary' variant = 'contained' className = {classes.button} onClick = {this.handleClick}> Logout </Button>
        )
    }
}

export default withStyles(styles) (LogoutButton)