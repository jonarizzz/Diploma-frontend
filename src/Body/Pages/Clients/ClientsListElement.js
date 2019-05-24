import React, {Component} from 'react'
import { Grid, Paper, withStyles } from '@material-ui/core';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit,
        margin: theme.spacing.unit
    }
})

class ClientsListElement extends Component {
    render (){
        const {classes} = this.props;
        return (
            <div>
                <Grid container>
                    <Grid item xs = {12}>
                        <Paper className = {classes.paper}>
                            1
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles) (ClientsListElement)