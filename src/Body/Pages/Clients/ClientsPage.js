import React, {Component} from 'react'
import NewClientButton from './NewClientButton';
import ClientsList from './ClientsList'

class ClientsPage extends Component {
    render(){
        return(
            <div>
                <NewClientButton/>
                <ClientsList/>
            </div>
        )
    }
}

export default ClientsPage