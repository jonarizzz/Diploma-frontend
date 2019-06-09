import React, {Component} from 'react'
import {Grid, Button, withStyles, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, TextField} from '@material-ui/core'

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

    state = {
        dialogOpened : false,
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
                            Adding a new policy
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please insert policy data:
                            <br/>
                            <br/>
                        </DialogContentText>
                        <Grid container spacing = {8}>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Client' fullWidth/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Insurance type' fullWidth/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Insurance case' fullWidth/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Passport number' fullWidth/>
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField variant = 'outlined' label = 'Insurance cost' fullWidth/>
                            </Grid>
                            <Grid item xs = {6}>
                                <Button variant = 'contained' color = 'primary' fullWidth>Add</Button>
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

export default withStyles(styles) (NewPolicyButton)