import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import CalculationProbReducer from './calculationProb-reducer';
import thunk from "redux-thunk";
import mainProbReducer from "./mainProb-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    mainProbPage: mainProbReducer,
    calculationProbPage: CalculationProbReducer,
    auth: authReducer
})
let store = legacy_createStore(reducers, applyMiddleware(thunk))
window.store = store;

export default store;