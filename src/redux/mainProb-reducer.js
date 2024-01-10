import { mainAPI } from "../api/api";

const SET_CALCULATIONS = 'SET_CALCULATIONS';
const SET_CALCULATIONRESULTINFO = 'SET_CALCULATIONRESULTINFO';

let initialState = {

    calculations: {
        calculationAmount: 2,
        calculations: [
            { id: 'iyk', name: 'testInitial' },
        ]
    },

    calculationResults: {
        calculationResults: [{
            //calculationId: "2a281fcd-78dc-4925-8b2b-9393ae2cae8f",
            implementationId: 0,
            urovValue: 0.3,
            probabilityValue: 0,
            urovTimeArray: [0.356613, 0.360472,]
        },
        ]
    },
};

const mainProbReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CALCULATIONS:
            return {
                ...state,
                calculations: action.calculations
            }
        case SET_CALCULATIONRESULTINFO:
            return {
                ...state,
                calculationResults: action.calculationResults

            }
        default:
            return state;
    }
}

export const setCalculations = (calculations) => (
    { type: SET_CALCULATIONS, calculations }
)
export const getCalculations = (userId) => {
    return async (dispatch) => {
        let response = await mainAPI.getCalculations(userId);
        dispatch(setCalculations(response.data));
    }
}

export const setCalculationResultInfo = (calculationResults) => (
    { type: SET_CALCULATIONRESULTINFO, calculationResults: calculationResults }
)
export const getCalculationResultInfoById = (id) => {
    return async (dispatch) => {
        let response = await mainAPI.getCalculationStatisticById(id);
        dispatch(setCalculationResultInfo(response.data));

    }
}

export const deleteCalculationById = (id) => {
    return async (dispatch) => {
         await mainAPI.deleteCalculationById(id); 
         let response = await mainAPI.getCalculations(localStorage.getItem('userId'));
         dispatch(setCalculations(response.data));     
    }
}

export default mainProbReducer;