import React, { Component } from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: '90px',
      width: 'auto',
      display: 'block', 
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
        padding: theme.spacing.unit * 6,
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    textField: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '80%',
    },
    form: {
        marginTop: theme.spacing.unit * 2,
    },
    button: {
        marginTop: theme.spacing.unit * 2,
        margin: theme.spacing.unit,
    },
});

class LoginPage extends Component {

    state = {
        formData: {
            username: '',
            password: '',
        },
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    };

    handleSubmit = () => {
        
    };

    handleCancelClick = () => {
        
    };

    render() {
        const { formData } = this.state;
        const { classes } = this.props;
        return (
            <div className = {classes.root}>
                <Grid container justify='center' alignItems='center' spacing={8}>
                    <Grid item xs = {8}>
                        <Paper className={classes.paper}>
                            <Typography variant = 'display1'> Login </Typography>
                            <ValidatorForm ref = "form" onSubmit = {this.handleSubmit} className = {classes.form}>
                                
                                <TextValidator 
                                label="Username" 
                                variant = "outlined" 
                                className = {classes.textField} 
                                onChange={this.handleChange} 
                                name="username"
                                value={formData.username} 
                                validators={['required']} 
                                errorMessages={['This field is required']}/>
                                
                                <TextValidator 
                                label="Password" 
                                variant = "outlined" 
                                type = 'password' 
                                className = {classes.textField} 
                                onChange={this.handleChange}
                                name="password" 
                                value={formData.password} 
                                validators={['required']} 
                                errorMessages={['This field is required']}/>
                                
                                <Button color="primary" size = 'large' variant="contained" type="submit" className = {classes.button}>
                                    Sign in
                                </Button>
                                <Button className = {classes.button} size = 'large' variant="contained" color= 'default' onClick = {this.handleCancelClick}> 
                                    Cancel 
                                </Button>
                            </ValidatorForm>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            
        );
    }

    
}

export default withStyles(styles)(LoginPage)