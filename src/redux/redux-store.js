import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import CalculationProbReducer from './calculationProb-reducer';
import thunk from "redux-thunk";


let reducers = combineReducers({
    //mainProbPage: mainProbReducer,
    calculationProbPage: CalculationProbReducer
})
let store = legacy_createStore(reducers, applyMiddleware(thunk))
window.store = store;

export default store;