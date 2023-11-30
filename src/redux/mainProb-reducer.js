import { mainAPI } from "../api/api";

const SET_CALCULATIONS = 'SET_CALCULATIONS';
const SET_CALCULATIONRESULTINFO = 'SET_CALCULATIONRESULTINFO';

let initialState = {
    
    calculations: {
        calculationAmount: 2,
        calculations: [
        { id: 'iyk', name:'testInitial' , calculationEnd: null,progress: null },
    ]},

    calculationResultInfo: {
            powerFlowResultProcessed: {maximum: '20',minimum: '13', mean: '18', stD: '9', histogramData: [{interval: '1-2', height: '0,012'}]},
            voltageResultProcessed: [{nodeNumber: 'testNum', histogramData: [{interval: '1-2', height: '0,012'}]},
                {nodeNumber: 'testNum2', histogramData: [{interval: '1-2', height: '0,012'}]}],
            currentResultProcessed: [],

            powerFlowResults: [{powerFlowLimit: 868, calculationId: "282cac56",implementationId: 1}],
            voltageResults: [{nodeNumber: 2643,nodeName: "Север",voltageValue: 176,calculationId: "282ca",implementationId: 1}],
            currentResults: [],
        worseningSettings: [1654, 2653]
}};

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
                calculationResultInfo: action.calculationResultInfo
            }
        default:                                     
            return state;
    }
}

export const setCalculations = (calculations) => (
    { type: SET_CALCULATIONS,  calculations  }
)
export const getCalculations = () => {
    return async (dispatch) => { 
        let response = await mainAPI.getCalculations();
        dispatch(setCalculations(response.data));      
    }
}

export const setCalculationResultInfo = (calculationResultInfo) => (
    { type: SET_CALCULATIONRESULTINFO,  calculationResultInfo: calculationResultInfo  }
)
export const getCalculationResultInfoById = (id) => {
    return async (dispatch) => { 
        let response = await mainAPI.getCalculationStatisticById(id);
        dispatch(setCalculationResultInfo(response.data));      
    }
}

export const deleteCalculationById = (id) => {
    return async (dispatch) => { 
        let response = await mainAPI.deleteCalculationById(id);
        dispatch(setCalculations(response.data));       
    }
}

export default mainProbReducer;