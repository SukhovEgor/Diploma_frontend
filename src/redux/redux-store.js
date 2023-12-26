import {applyMiddleware, combineReducers, legacy_createStore, compose} from "redux"
import CalculationProbReducer from './calculationProb-reducer';
import thunk from "redux-thunk";
import mainProbReducer from "./mainProb-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    mainProbPage: mainProbReducer,
    calculationProbPage: CalculationProbReducer,
    auth: authReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
window.store = store;

export default store;