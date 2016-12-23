// Reducer is a function() that takes previous state, the action beeing dispatch and
// returns the new state. Reducer has to be pure function:
// does not modify values of  passed parametres (produce the same output given the same input);
// don’t produce side-effects (Eg: mutate state, make calls to backend)
import { FETCH_WEATHER } from '../actions/index';
// State argument is not application state, but the state that this reducer is responsible for.
// This function only will be called, if action occurs
export default function(state = [], action){
   console.log("reducer_weather: ", action);
   switch(action.type){
   case FETCH_WEATHER:
      // concat will not change existing array, instead it will create a new array
      // with the old values + new ones, thus
      // THERE IS NO STATE MUTATIONS inside reducer
      // state.concat([action.payload.data])
      return [action.payload.data, ...state]; // ES6 syntax for array.concat
   default:
      return state;
   }
}
