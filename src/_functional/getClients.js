import React from 'react'
import Axios from 'axios'
import ClientsListElement from '../Body/Pages/Clients/ClientsListElement';

export default async function getClients (){
    const URL = 'http://localhost:8080/clients/all';
    const response = await Axios.get(URL);
    const elementsAmount = response.data.length;
    var elements = [];
    for (var i = 0; i < elementsAmount; i++){
        const id = response.data[i].id;
        const surname = response.data[i].surname;
        const name = response.data[i].name;
        const patronymic = response.data[i].patronymic;
        const passportId = response.data[i].passportId;
        const getPassportURL = 'http://localhost:8080/passports';
        const passportQueryResponse = await Axios.get(getPassportURL);
        const passportSeries = passportQueryResponse.data[passportId - 1].series;
        const passportNumber = passportQueryResponse.data[passportId - 1].number;
        elements.push(<ClientsListElement number={id} surname={surname} name={name} patronymic={patronymic} passportSeries={passportSeries} passportNumber={passportNumber}/>)
    }
    return elements;
}
