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
        return axios.get('https://localhost:7295/api/Calculations/GetCalculations/'+id); //
    },
    deleteCalculationById(id) {
        return axios.delete('https://localhost:7295/api/Calculations/DeleteCalculations/'+id); //
    },
}