import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Reducer from './navigation.js'

export const reducers = combineReducers({
    routing:routerReducer,
    masterBranch:Reducer,
});