import React, {Component} from 'react'
// import LoginPage from './Pages/Login/LoginPage';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom'
import ClientsPage from './Pages/Clients/ClientsPage';
import PersonalPage from './Pages/Personal/PersonalPage';
import PoliciesPage from './Pages/Policies/PoliciesPage';

class Body extends Component {
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path = '/clients' component = {ClientsPage}/>
                    <Route path = '/user' component = {PersonalPage}/>
                    <Route path = '/policies' component = {PoliciesPage}/>
                </Switch>
            </main>
        )
    }
}

export default Body

//<Route exact path = '/' component = {LoginPage}/>
