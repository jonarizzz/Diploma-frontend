import React, {Component} from 'react'
import { Grid, Paper, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit,
    }
})

class PersonalPage extends Component {
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Grid container>
                    <Grid item xs = {4}>
                        <Paper className = {classes.paper}>
                            Employee status (user, admin)
                        </Paper>
                    </Grid>
                    <Grid item xs = {8}>
                        <Paper className = {classes.paper}>
                            <Typography>
                                {localStorage.getItem('username')}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs = {12}>
                        <Paper className = {classes.paper}>
                            Personal information
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(PersonalPage) 