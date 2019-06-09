import React, {Component} from 'react'
import { Button, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
    
})

class PoliciesButton extends Component{

    handleClick = () => {
        this.props.history.push('/policies');
    }

    render(){
        const {classes} = this.props;
        return(
            <div>
                <Button variant = 'contained' className = {classes.button} onClick = {this.handleClick}> Полисы</Button>
            </div>
        )
    }
}

export default compose(withRouter, withStyles(styles)) (PoliciesButton)