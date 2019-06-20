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
        this.setState({dialogOpened : true});
        this.loadClients();
        this.loadTypes();
        this.loadCases();
    };

    handleClickClose = () => {
        clients = [];
        types = [];
        cases = [];
        this.setState({clientId : ''});
        this.setState({typeId : ''});
        this.setState({caseId : ''});
        this.setState({dialogOpened : false})
    };

    sendData = async() => {
        const policyURL = 'http://localhost:8080/policies/add'
        const policyData = JSON.stringify({
            sum: this.state.cost,
            clientId: this.state.clientId,
            employeeId: 1,
            insurance_type_id: this.state.typeId,
            insurance_case_id: this.state.caseId,
        });
        const policyAddingResponse = await Axios.post(policyURL, policyData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('New policy number', policyAddingResponse.data);
        this.handleClickClose();
    };

    loadClients = async() => {       
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

    loadTypes = async() => {
        const URL = 'http://localhost:8080/types/all';
        const response = await Axios.get(URL);
        const elementsAmount = response.data.length;
        for (var i = 0; i < elementsAmount; i++){
            const id = response.data[i].id;
            const name = response.data[i].type_name;
            const type = <MenuItem value = {id}>{name}</MenuItem>
            types.push(type);
        }
    }

    loadCases = async() => {
        const URL = 'http://localhost:8080/cases/all';
        const response = await Axios.get(URL);
        const elementsAmount = response.data.length;
        for (var i = 0; i < elementsAmount; i++){
            const id = response.data[i].id;
            const name = response.data[i].case_name;
            const element = <MenuItem value = {id}>{name}</MenuItem>
            cases.push(element);
        }
    }

    handleClientChange = (event) => {
        this.setState({clientId : event.target.value});
    }

    handleTypeChange = (event) => {
        this.setState({typeId : event.target.value});
    }

    handleCasesChange = (event) => {
        this.setState({caseId : event.target.value});
    }

    state = {
        dialogOpened : false,
        clientId: '',
        typeId: '',
        caseId: '',
        cost: '',
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
                        </DialogContentText>
                        <Grid container spacing = {16}>
                            <Grid item xs = {12}>
                                <FormControl fullWidth>
                                    <InputLabel>Клиент</InputLabel>
                                    <Select
                                        value = {this.state.clientId}
                                        onChange = {this.handleClientChange}>
                                        {clients}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs = {12}>
                                <FormControl fullWidth>
                                    <InputLabel>Тип страхования</InputLabel>
                                    <Select
                                        value = {this.state.typeId}
                                        onChange = {this.handleTypeChange}>
                                        {types}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs = {12}>
                                <FormControl fullWidth>
                                    <InputLabel>Страховой случай</InputLabel>
                                    <Select
                                        value = {this.state.caseId}
                                        onChange = {this.handleCasesChange}>
                                        {cases}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Стоимость страховки (белорусских рублей)' fullWidth onChange = {e => this.setState({cost: e.target.value})}/>
                            </Grid>
                            <Grid item xs = {6}>
                                <Button variant = 'contained' color = 'primary' fullWidth onClick = {this.sendData}>Добавить</Button>
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