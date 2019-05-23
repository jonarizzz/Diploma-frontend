import React, {Component} from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, withStyles, Grid, TextField, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        margin: theme.spacing.unit
    },
    containerGrids: {
        marginTop: theme.spacing.unit
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
                            <Grid item xs={4}>
                                <TextField fullWidth variant = 'outlined' disabled value = '№ 10903515'/>
                            </Grid>
                            <Grid item xs = {8}>
                                <Grid container>
                                    <Grid item xs = {12} className = {classes.containerGrids}>
                                        Тип страховки (частичное страхование здоровья)
                                    </Grid>
                                    <Grid item xs = {12} className = {classes.containerGrids}>
                                        <Typography variant = 'body1' color='textSecondary'>
                                            Поддтип страховки (правая рука застрахованана от переломов)
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing = {8}>
                            <Grid item xs = {12}>
                                Фамилия Имя застрахованого клиета (Ссылка на личную страницу)
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