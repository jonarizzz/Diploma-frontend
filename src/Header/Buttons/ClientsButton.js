import React, {Component} from 'react'
import { Button, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
    
})

class ClientsButton extends Component{

    handleClick = () => { 
        this.props.history.push('/clients');
    }

    render(){
        const {classes} = this.props;
        return(
            <div>
                <Button variant = 'contained' className = {classes.button} onClick = {this.handleClick}> Clients</Button>
            </div>
        )
    }
}

export default compose (withStyles(styles), withRouter) (ClientsButton)