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
                                            <Typography fullWidth align='center' variant='h6' color='textSecondary'>
                                                <b>{this.props.surname + ' ' + this.props.name + ' ' + this.props.patronymic}</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container spacing = {8}>
                                <Grid item xs = {12}>
                                    <Typography><b>Паспортные данные:</b></Typography>
                                </Grid>
                                <Grid item xs = {3}>
                                    <Typography color='textSecondary'>серия:</Typography><Typography>{this.props.passportSeries}</Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography color='textSecondary'>номер: </Typography><Typography>{this.props.passportNumber}</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Paper>    
            </div>
        )
    }
}

export default withStyles(styles) (ClientsListElement)