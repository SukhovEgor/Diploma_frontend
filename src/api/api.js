import axios from "axios";

export const calculationFormAPI = {
    startCalculation(values) {
        return axios.post("api/Calculations/PostCalculations", values,
        {headers: { "Content-Type": "application/json"}});
    }
}

export const mainAPI = {
    getCalculations(userId) {
        return axios.get('http://localhost/api/Calculations/GetCalculations/' + userId); //
        
    },
    getCalculationStatisticById(id) {
        return axios.get('http://localhost/api/Calculations/GetCalculationResult/'+id); //
    },
    deleteCalculationById(id) {
        return axios.delete('http://localhost/api/Calculations/DeleteCalculations/'+id); //
    },
}

export const authAPI = {
    auth(values) {
        return axios.post('api/Auth/auth',values); //
    },
    whoAmI() {
        return axios.get('api/Auth/whoAmI',{headers: authHeader()});
        
    },
    getUsers() {
        return axios.get('api/Auth/GetUsers'); //
    },
    createUser(values) {
        return axios.post('api/Auth/CreateUser',values); //
    },
    deleteUserById(id) {
        return axios.delete('api/Auth/DeleteUser/'+id); //
    },
}

export const authHeader = () => {
    const token = localStorage.getItem('token');
    //if (token) {
    return {Authorization: 'Bearer ' + token};
}