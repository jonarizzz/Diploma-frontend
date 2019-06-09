import React, {Component} from 'react'
import {Grid, Button, withStyles, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, TextField} from '@material-ui/core'
import Axios from 'axios';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class NewClientButton extends Component {

    handleClickOpen = () => {
        this.setState({dialogOpened : true})
    };

    handleClickClose = () => {
        this.setState({dialogOpened : false})
    };

    sendData = async() => {
        const passportURL = 'http://localhost:8080/passports/add';
        const dataPassport = JSON.stringify({
            series: this.state.series,
            number: this.state.number,
        })
        const passportResponse = await Axios.post(passportURL, dataPassport, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(passportResponse.data);
        const clientURL = 'http://localhost:8080/clients/add'
        const dataClient = JSON.stringify({
            surname: this.state.surname,
            name: this.state.name,
            patronymic: this.state.patronymic,
            passportId: passportResponse.data
        });
        await Axios.post(clientURL, dataClient,{
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    handleClickAdding = () => {
        this.sendData();
        this.handleClickClose();
    }

    state = {
        dialogOpened : false,
        name: '',
        surname: '',
        patronymic: '',
        series: '',
        number: '',
    }

    render (){
        const {classes} = this.props;
        return(
            <div>
                <Grid container className = {classes.gridContainer}>
                    <Button variant = 'contained' className = {classes.button} fullWidth disableRipple onClick = {this.handleClickOpen}>
                        <Typography variant = 'title' color = 'textSecondary'>
                            Добавить нового клиента
                        </Typography>
                    </Button>
                </Grid>

                <Dialog
                    open = {this.state.dialogOpened}
                    onClose = {this.handleClickClose}>
                    <DialogTitle>
                        <Typography variant='display2'>
                            Добавление клиента
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Пожалуйста, введите пользовательские данные:
                            <br/>
                            <br/>
                        </DialogContentText>
                        <Grid container spacing = {8}>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Фамилия' fullWidth 
                                value={this.state.surname} onChange={e => this.setState({surname: e.target.value})}/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Имя' fullWidth
                                value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Отчество' fullWidth
                                value={this.state.patronymic} onChange={e => this.setState({patronymic: e.target.value})}/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Серия паспорта' fullWidth
                                value={this.state.series} onChange={e => this.setState({series: e.target.value})}/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Номер паспорта' fullWidth
                                value={this.state.number} onChange={e => this.setState({number: e.target.value})}/>
                            </Grid>
                            <Grid item xs = {6}>
                                <Button variant = 'contained' color = 'primary' fullWidth onClick = {this.handleClickAdding}>Добавить</Button>
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

export default withStyles(styles) (NewClientButton)