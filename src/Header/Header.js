import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LogoutButton from './Buttons/LogoutButton';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
};

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
                        <LogoutButton/>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header)