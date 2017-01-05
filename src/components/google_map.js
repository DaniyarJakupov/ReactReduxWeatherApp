import React from 'react';
import { GoogleMapLoader, GoogleMap } from "react-google-maps";
//    "react-google-maps": "4.7.1",
export default (props) => {
   console.log(props.lat);
   return(
      <GoogleMapLoader
        containerElement={<div style={{ height: "100%"}} />}
        googleMapElement={
          <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
        }
      />
   );
}
//
// import GoogleMap from '../components/google_map.js'
//
// const lat = cityData.city.coord.lat;
// const lon = cityData.city.coord.lon;
// <GoogleMap lat={lat} lon={lon}/>
