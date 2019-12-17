import { combineReducers } from 'redux'
import { defaultReducers } from "./DefaultAppReducers";

export const reducers = combineReducers({
    'content': defaultReducers
})