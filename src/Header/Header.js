import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import LogoutButton from './Buttons/LogoutButton';
import ClientsButton from './Buttons/ClientsButton'
import PoliciesButton from './Buttons/PoliciesButton';
import PersonalButton from './Buttons/PersonalButton'

const styles =  theme => ({
    root: {
        marginBottom: theme.spacing.unit,
    },
    grow: {
      flexGrow: 1,
    },
});

class Header extends Component {
    render(){
        const { classes } = this.props;
        return(
            <div className = {classes.root}>
                <AppBar position = 'static'>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Insurance agent workstation
                        </Typography>
                        <ClientsButton/>
                        <PoliciesButton/>
                        <PersonalButton/>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header)