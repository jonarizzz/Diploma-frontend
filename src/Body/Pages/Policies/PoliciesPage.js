import React, {Component} from 'react'
import NewPolicyButton from './NewPolicyButton';
import PoliciesList from './PoliciesList'


class PoliciesPage extends Component {
    render(){
        return(
            <div>
                <NewPolicyButton/>
                <PoliciesList/>
            </div>
        )
    }
}

export default PoliciesPage 