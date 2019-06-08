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
        
        const clientURL = 'http://localhost:8080/clients/add'
        const dataClient = JSON.stringify({
            surname: this.state.surname,
            name: this.state.name,
            patronymic: this.state.patronymic,
            passportId: passportResponse.data[0]
        });
        await Axios.post(clientURL, dataClient,{
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    handleClickAdding = () => {
        this.sendData();
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
                            Add new client
                        </Typography>
                    </Button>
                </Grid>

                <Dialog
                    open = {this.state.dialogOpened}
                    onClose = {this.handleClickClose}>
                    <DialogTitle>
                        <Typography variant='display2'>
                            Adding a new client
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please insert user data:
                            <br/>
                            <br/>
                        </DialogContentText>
                        <Grid container spacing = {8}>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Surname' fullWidth 
                                value={this.state.surname} onChange={e => this.setState({surname: e.target.value})}/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Name' fullWidth
                                value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Patronymic' fullWidth
                                value={this.state.patronymic} onChange={e => this.setState({patronymic: e.target.value})}/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Passport series' fullWidth
                                value={this.state.series} onChange={e => this.setState({series: e.target.value})}/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Passport number' fullWidth
                                value={this.state.number} onChange={e => this.setState({number: e.target.value})}/>
                            </Grid>
                            <Grid item xs = {6}>
                                <Button variant = 'contained' color = 'primary' fullWidth onClick = {this.handleClickAdding}>Add</Button>
                            </Grid>
                            <Grid item xs = {6}>
                                <Button variant = 'contained' color = 'inherit' fullWidth onClick = {this.handleClickClose}>Cancel</Button>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles) (NewClientButton)