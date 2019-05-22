import React, {Component} from 'react'
import {Grid, Button, withStyles, Typography} from '@material-ui/core'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class NewClientButton extends Component {
    render (){
        const {classes} = this.props;
        return(
            <div>
                <Grid container className = {classes.gridContainer}>
                    <Button variant = 'contained' className = {classes.button} fullWidth disableRipple>
                        <Typography variant = 'title' color = 'textSecondary'>
                            Add new client
                        </Typography>
                    </Button>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles) (NewClientButton)