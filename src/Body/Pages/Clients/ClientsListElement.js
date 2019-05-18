import React, {Component} from 'react'

class ClientsListElement extends Component {
    render (){
        return (
            <div>
                Clients list element № {this.props.number}
            </div>
        )
    }
}

export default ClientsListElement