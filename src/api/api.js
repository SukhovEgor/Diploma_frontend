import axios from "axios";



export const calculationFormAPI = {
    startCalculation(values) {
        return axios.post("https://localhost:7295/api/Calculations/PostCalculations", values,
        {headers: { "Content-Type": "application/json"}});
    }
}