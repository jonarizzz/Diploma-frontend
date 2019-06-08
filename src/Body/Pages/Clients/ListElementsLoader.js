import React, {Component} from 'react'
import getClients from '../../../_functional/getClients';

var elements = [];

class ListElementsLoader extends Component {

    state = {
        loading: true,
    }

    loadElements = async() => {
        this.setState({loading: true})
        elements = await getClients();
        this.setState({loading: false});
    }

    componentDidMount(){
        this.loadElements();
    }

    render(){
        return(
            <div>
                {this.state.loading ? '' : <div>{elements}</div>}
            </div>
        )
    }
}

export default ListElementsLoader