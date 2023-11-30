import { calculationFormAPI } from "../api/api";
let initialState = {
    values: null
}

const CalculationProbReducer = (state, action) => {
     switch (action.type) {
        default:                                     
        return initialState;
     }
}

export const startCalculation = (values) => {
    return async () => { 
        await calculationFormAPI.startCalculation(values);
        //dispatch(setDistricts(response.data));      
    }
}

export default CalculationProbReducer;