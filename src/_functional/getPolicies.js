import React from 'react'
import Axios from 'axios'
import PoliciesListElement from '../Body/Pages/Policies/PoliciesListElement'

export default async function getPolicies () {
    var elements = [];
    const policiesURL = 'http://localhost:8080/policies/all';
    const policiesResponse = await Axios.get(policiesURL);
    const policiesAmount = policiesResponse.data.length

    for(var i = 0; i < policiesAmount; i++){

        const number = policiesResponse.data[i].number;
        const sum = policiesResponse.data[i].sum;

        const clientId = policiesResponse.data[i].clientId;
        const insurance_type_id = policiesResponse.data[i].insurance_type_id;
        const insurance_case_id = policiesResponse.data[i].insurance_case_id;

        const clientsURL = 'http://localhost:8080/clients/all';
        const clientsResponse = await Axios.get(clientsURL);
        const clientSurname = clientsResponse.data[clientId-1].surname;
        const clientName = clientsResponse.data[clientId-1].name;

        const typesURL = 'http://localhost:8080/types/all';
        const typesResponse = await Axios.get(typesURL);
        const type = typesResponse.data[insurance_type_id-1].type_name;

        const casesURL = 'http://localhost:8080/cases/all';
        const casesResponse = await Axios.get(casesURL);
        const casee = casesResponse.data[insurance_case_id-1].case_name;

        elements.push(<PoliciesListElement 
            number={number} sum={sum} secondName={clientSurname} 
            firstName={clientName} type={type} case={casee}/>);
    }
    return elements.reverse();
}