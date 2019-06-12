import React, {Component} from 'react'
import {Grid, Button, withStyles, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, } from '@material-ui/core'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class NewPolicyButton extends Component {
    handleClickOpen = () => {
        this.setState({dialogOpened : true})
    };

    handleClickClose = () => {
        this.setState({dialogOpened : false})
    };

    sendData = async() => {
        const policyURL = 'http://localhost:8080/policies/add'
        const policyData = JSON.stringify({
            
        })
    }
    state = {
        dialogOpened : false,
        clientId: '',

    }

    render (){
        const {classes} = this.props;
        return(
            <div>
                <Grid container className = {classes.gridContainer}>
                    <Button variant = 'contained' className = {classes.button} fullWidth disableRipple onClick = {this.handleClickOpen}>
                        <Typography variant = 'title' color = 'textSecondary'>
                            Добавить новый полис
                        </Typography>
                    </Button>
                </Grid>
                <Dialog
                    open = {this.state.dialogOpened}
                    onClose = {this.handleClickClose}>
                    <DialogTitle>
                        <Typography variant='display2'>
                            Добавление полиса
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Пожалуйста введите данные:
                            <br/>
                            <br/>
                        </DialogContentText>
                        <Grid container spacing = {8}>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Клиент' fullWidth/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Тип страхования' fullWidth/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Страховой случай' fullWidth/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Стоимость страховки' fullWidth/>
                            </Grid>
                            <Grid item xs = {6}>
                                <Button variant = 'contained' color = 'primary' fullWidth>Добавить</Button>
                            </Grid>
                            <Grid item xs = {6}>
                                <Button variant = 'contained' color = 'inherit' fullWidth onClick = {this.handleClickClose}>Отмена</Button>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles) (NewPolicyButton)