import React, {Component} from 'react'
import PoliciesListElement from './PoliciesListElement';

class PoliciesListLoader extends Component{
    render(){
        return(
            <div>
                <PoliciesListElement/>
                <PoliciesListElement/>
                <PoliciesListElement/>

            </div>
        )
    }
}

export default PoliciesListLoader