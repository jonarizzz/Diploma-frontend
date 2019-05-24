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
                <PoliciesListElement 
                    number = '10903515' 
                    insuranceType = 'Страхование недвижимости'
                    insuranceTypeSpecific = 'Страхование квартиры'
                    secondName = 'Иванов'
                    firstName = 'Пётр'/>
                <PoliciesListElement 
                    number = '10903516' 
                    insuranceType = 'Страхование автомобиля'
                    insuranceTypeSpecific = 'Авто КАСКО'
                    secondName = 'Петров'
                    firstName = 'Александр'/>
                <PoliciesListElement 
                    number = '10903517' 
                    insuranceType = 'Частичное страхование здоровья'
                    insuranceTypeSpecific = 'Правая рука застрахована от переломов'
                    secondName = 'Васильев'
                    firstName = 'Максим'/>
                <PoliciesListElement 
                    number = '10903518' 
                    insuranceType = 'Страхование недвижимости'
                    insuranceTypeSpecific = 'Страхование квартиры'
                    secondName = 'Иванов'
                    firstName = 'Пётр'/>
                <PoliciesListElement 
                    number = '10903519' 
                    insuranceType = 'Страхование автомобиля'
                    insuranceTypeSpecific = 'Авто КАСКО'
                    secondName = 'Петров'
                    firstName = 'Александр'/>
                <PoliciesListElement 
                    number = '10903520' 
                    insuranceType = 'Частичное страхование здоровья'
                    insuranceTypeSpecific = 'Правая рука застрахована от переломов'
                    secondName = 'Васильев'
                    firstName = 'Максим'/>
                <PoliciesListElement 
                    number = '10903521' 
                    insuranceType = 'Страхование недвижимости'
                    insuranceTypeSpecific = 'Страхование квартиры'
                    secondName = 'Иванов'
                    firstName = 'Пётр'/>
                <PoliciesListElement 
                    number = '10903522' 
                    insuranceType = 'Страхование автомобиля'
                    insuranceTypeSpecific = 'Авто КАСКО'
                    secondName = 'Петров'
                    firstName = 'Александр'/>
            </div>
        )
    }
}

export default PoliciesListLoader