import axios from "axios";



export const calculationFormAPI = {
    startCalculation(values) {
        return axios.post("https://localhost:7295/api/Calculations/PostCalculations", values,
        {headers: { "Content-Type": "application/json"}});
    }
}

export const mainAPI = {
    getCalculations() {
        return axios.get('https://localhost:7295/api/Calculations/GetCalculations'); //
    },
    getCalculationStatisticById(id) {
        return axios.get('https://localhost:7295/api/Calculations/GetCalculationResult/'+id); //
    },
    deleteCalculationById(id) {
        return axios.delete('https://localhost:7295/api/Calculations/DeleteCalculations/'+id); //
    },
}

export const authAPI = {
    auth(values) {
        return axios.post('https://localhost:7295/api/Auth/auth',values); //
    },
    whoAmI() {
        return axios.get('https://localhost:7295/api/Auth/whoAmI',{headers: authHeader()});
    },
    getUsers() {
        return axios.get('https://localhost:7295/api/Auth/GetUsers'); //
    },
    createUser(values) {
        return axios.post('https://localhost:7295/api/Auth/CreateUser',values); //
    },
}

export const authHeader = () => {
    const token = localStorage.getItem('token');
    //if (token) {
    return {Authorization: 'Bearer ' + token};
}