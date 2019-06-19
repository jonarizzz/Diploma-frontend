import React, {Component} from 'react'
import {Grid, Button, withStyles, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, FormControl, InputLabel, MenuItem, Select, } from '@material-ui/core'
import Axios from 'axios'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

var clients = [];
var types = [];
var cases = [];

class NewPolicyButton extends Component {
    handleClickOpen = () => {
        this.setState({dialogOpened : true})
    };

    handleClickClose = () => {
        clients = [];
        types = [];
        cases = [];
        console.log(this.state.test);
        this.setState({dialogOpened : false})
    };

    sendData = async() => {
        const policyURL = 'http://localhost:8080/policies/add'
        const policyData = JSON.stringify({
            
        })
    };

    loadClients = async() => {
        if (this.state.dialogOpened){
            const URL = 'http://localhost:8080/clients/all';
            const response = await Axios.get(URL);
            const elementsAmount = response.data.length;
            for (var i = 0; i < elementsAmount; i++){
                const id = response.data[i].id;
                const surname = response.data[i].surname;
                const name = response.data[i].name;
                const patronymic = response.data[i].patronymic;
                var client = <MenuItem value = {id}>{surname + ' ' + name + ' ' + patronymic}</MenuItem>;
                clients.push(client);
            }
        }    
    }

    loadTypes = async() => {
        if (this.state.dialogOpened){
            const URL = 'http://localhost:8080/types/all';
            const response = await Axios.get(URL);
            const elementsAmount = response.data.length;
            for (var i = 0; i < elementsAmount; i++){
                types.push(response.data[i].type_name);
            }
        }
    }

    loadCases = async() => {
        if (this.state.dialogOpened){
            const URL = 'http://localhost:8080/cases/all';
            const response = await Axios.get(URL);
            const elementsAmount = response.data.length;
            for (var i = 0; i < elementsAmount; i++){
                cases.push(response.data[i].case_name);
            }
        }
    }

    handleClientChange = (event) => {
        this.setState({test : event.target.value});
    }

    state = {
        dialogOpened : false,
        clientId: '',
        test: '',
    }

    render (){
        const {classes} = this.props;
        this.loadClients();
        this.loadTypes();
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
                        <Grid container spacing = {16}>
                            <Grid item xs = {12}>
                                <FormControl fullWidth>
                                    <InputLabel>Клиент</InputLabel>
                                    <Select
                                        value = {this.state.test}
                                        onChange = {this.handleClientChange}>
                                        {clients}
                                    </Select>
                                </FormControl>
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