import React, {Component} from 'react'
import PoliciesListElement from './PoliciesListElement';

class PoliciesListLoader extends Component{
    render(){
        return(
            <div>
                <PoliciesListElement 
                    number = '10903514' 
                    insuranceType = 'Частичное страхование здоровья'
                    insuranceTypeSpecific = 'Правая рука застрахована от переломов'
                    secondName = 'Васильев'
                    firstName = 'Максим'/>
            </div>
        )
    }
}

export default PoliciesListLoader