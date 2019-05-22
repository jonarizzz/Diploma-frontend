import React, {Component} from 'react'
import { Button, withStyles } from '@material-ui/core';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
    
})

class PoliciesButton extends Component{
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Button variant = 'outlined' className = {classes.button}> Policies</Button>
            </div>
        )
    }
}

export default withStyles(styles)(PoliciesButton)