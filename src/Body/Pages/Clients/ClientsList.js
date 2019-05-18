import React, {Component} from 'react'
import ListElementsLoader from './ListElementsLoader';
import {withStyles} from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit,
    },
});

class ClientsList extends Component {
    render(){
        const {classes} = this.props;
        return(
            <Grid container className = {classes.root}>
                <Grid item xs = {12}>
                    <Paper className = {classes.paper}>
                        <ListElementsLoader/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}


export default withStyles(styles) (ClientsList)