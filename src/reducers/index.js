import { combineReducers } from "redux";
import phonedirReducer from './phonedirReducer';

export default combineReducers({
    phonedir: phonedirReducer
})