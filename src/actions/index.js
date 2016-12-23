import axios from 'axios'; // library for ajax request

const weatherKey = "61aec6b40f000f663f418fc771c3c8ca";
const baseUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${weatherKey}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
   const url = `${baseUrl}&q=${city}&units=metric`;
   const request = axios.get(url); // returns promise

   console.log("action request: ", request);

   return {
      type: FETCH_WEATHER,
      payload: request
      // Payload now contains promise as its value.
      // When this function is called, redux-promise (middleware) stops this action,
      // After promise resolves, creates a new action with unwrapped promise inside
      // and send it to all reducers
   }
}
