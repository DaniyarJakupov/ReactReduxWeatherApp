// Reducer is a function() that takes previous state, the action beeing dispatch and
// returns the new state. Reducer has to be pure function:
// does not modify values of  passed parametres (produce the same output given the same input);
// don’t produce side-effects (Eg: mutate state, make calls to backend)

import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
   weather: WeatherReducer
});

export default rootReducer;
