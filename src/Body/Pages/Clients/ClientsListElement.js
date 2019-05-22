import React, {Component} from 'react'
import { Grid } from '@material-ui/core';

class ClientsListElement extends Component {
    render (){
        return (
            <div>
                <Grid container>
                    <Grid item xs = {12}>
                        {this.props.number + '  client'}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ClientsListElement