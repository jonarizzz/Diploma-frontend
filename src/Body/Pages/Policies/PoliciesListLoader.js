import React, {Component} from 'react'
import getPolicies from '../../../_functional/getPolicies';

var elements = [];

class PoliciesListLoader extends Component{

    state = {
        loading: true,
    }

    loadElements = async() => {
        this.setState({loading: true});
        elements = await getPolicies();
        this.setState({loading: false});
    }

    componentDidMount (){
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

export default PoliciesListLoader