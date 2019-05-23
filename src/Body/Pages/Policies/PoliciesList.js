import React, {Component} from 'react'
import { Paper, withStyles } from '@material-ui/core';
import PoliciesListLoader from './PoliciesListLoader';

const styles = theme => ({
    paper: {
        margin: theme.spacing.unit,
        padding: theme.spacing.unit,
        background: '#bdbdbd'
    }
})

class PoliciesList extends Component {
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Paper className = {classes.paper}>
                    <PoliciesListLoader/>
                </Paper>
            </div>
        )
    }
}

export default withStyles (styles) (PoliciesList)