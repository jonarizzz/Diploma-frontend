import React, {Component} from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, withStyles, Grid, TextField, Typography, Paper } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    paper: {
        margin: theme.spacing.unit,
    }
})

class ClientsListElement extends Component {
    render (){
        const {classes} = this.props;
        return (
            <div>
                <Paper className = {classes.paper}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon = {<ExpandMoreIcon/>}>
                            <Grid container spacing = {16}>
                                <Grid item xs={3}>
                                    <TextField fullWidth variant = 'outlined' multiline disabled value = {'№ ' + this.props.number}/>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Grid container>
                                        <Grid item xs = {12}>
                                            <Typography fullWidth align='center'>
                                                <b>{this.props.surname + ' ' + this.props.name + ' ' + this.props.patronymic}</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container spacing = {8}>
                                <Grid item xs = {12}>Passport data:</Grid>
                                <Grid item xs = {4}>series: {this.props.passportSeries}</Grid>
                                <Grid item xs = {8}>number: {this.props.passportNumber}</Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Paper>    
            </div>
        )
    }
}

export default withStyles(styles) (ClientsListElement)