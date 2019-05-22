import React, {Component} from 'react'
import ClientsListElement from './ClientsListElement';

class ListElementsLoader extends Component {
    render(){
        return(
            <div>
                <ClientsListElement number = '1'/>
                <ClientsListElement number = '2'/>
                <ClientsListElement number = '3'/>
                <ClientsListElement number = '4'/>
                <ClientsListElement number = '5'/>
            </div>
        )
    }
}

export default ListElementsLoader