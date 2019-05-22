import React, {Component} from 'react'
import {Grid, Button, withStyles, Typography} from '@material-ui/core'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class NewPolicyButton extends Component {
    render (){
        const {classes} = this.props;
        return(
            <div>
                <Grid container className = {classes.gridContainer}>
                    <Button variant = 'contained' className = {classes.button} fullWidth disableRipple>
                        <Typography variant = 'title' color = 'textSecondary'>
                            Add new policy
                        </Typography>
                    </Button>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles) (NewPolicyButton)