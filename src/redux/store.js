import { combineReducers, legacy_createStore,applyMiddleware } from "redux";
import {reducer as productReducer} from "./productReducer/reducer";
import {reducer as loginReducer} from "./loginReducer/reducer";
import thunk from "redux-thunk";

const rootReducer  = combineReducers({productReducer,loginReducer})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))