import React, {Component} from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, withStyles, Grid, TextField, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        margin: theme.spacing.unit
    },
    containerGrids: {
        marginTop: theme.spacing.unit
    }, 
    numberField: {
        align: 'center'
    }
})

class PoliciesListElement extends Component{
    render(){

        const {classes} = this.props;

        return(
            <div className = {classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon = {<ExpandMoreIcon/>}>
                        <Grid container spacing = {16}>
                            <Grid item xs={3}>
                                <TextField fullWidth variant = 'outlined' multiline disabled value = {'№ ' + this.props.number} className = {classes.numberField}/>
                            </Grid>
                            <Grid item xs = {9}>
                                <Grid container>
                                    <Grid item xs = {12} className = {classes.containerGrids}>
                                        <Typography>
                                            <b>{this.props.insuranceType}</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs = {12} className = {classes.containerGrids}>
                                        <Typography variant = 'body1' color='textSecondary'>
                                            {this.props.insuranceTypeSpecific}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing = {8}>
                            <Grid item xs = {12}>
                                {this.props.secondName + ' ' + this.props.firstName}
                            </Grid>
                            <Grid item>
                                Сумма страхования, срок страхования, объем и частота выплат, другая информация по страховке и клиенту
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default withStyles(styles)(PoliciesListElement) 