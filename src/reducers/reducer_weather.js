// Reducer is a function() that takes previous state, the action beeing dispatch and
// returns the new state. Reducer has to be pure function:
// does not modify values of  passed parametres (produce the same output given the same input);
// don’t produce side-effects (Eg: mutate state, make calls to backend)

// State argument is not application state, but the state that this reducer is responsible for.
// This function only will be called, if action occurs
export default function(state = null, action){
   console.log("reducer_weather: ", action);
   return state;
   // switch(action.type){
   // case FETCH_WEATHER:
   //    return action.payload
   // default:
   //    return state
   // }
}
