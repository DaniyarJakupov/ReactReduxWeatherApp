import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import Chart from '../components/chart';
//==================================
class ShowWeather extends Component {
   renderWeather(cityData){
      //" at " +  cityData.list[0].dt_txt
      const name = cityData.city.name + ", " + cityData.city.country;
      const temp = cityData.list[0].main.temp;
      const pressure = cityData.list[0].main.pressure;
      const humidity = cityData.list[0].main.humidity;
      const description =  cityData.list[0].weather[0].description;
      const tempArray = cityData.list.map(weather => weather.main.temp);
      const pressureArray = cityData.list.map(weather => weather.main.pressure);
      const humidityArray = cityData.list.map(weather => weather.main.humidity);

      console.log(tempArray);

      return(
         <tr key={name}>
            <td>{name}</td>
            <td>{temp}</td>
            <td>{pressure}</td>
            <td>{humidity}</td>
            <td>{description}</td>
         </tr>
      );
   }

   render(){
      return(
         <div>
            {console.log(this.props.weather)}
            <table className="table table-hover">
               <thead>
                  <tr>
                     <th>City</th>
                     <th>Temperature, °C</th>
                     <th>Pressure, Pa</th>
                     <th>Humidity, %</th>
                     <th>Description</th>
                  </tr>
               </thead>
               <tbody>
                  {this.props.weather.map(this.renderWeather)}
               </tbody>
            </table>
         </div>
      )
   }
}

function mapStateToProps(state){
   // Whatever is returned  will show up as props
   // inside of ShowWeather Class
   return{
      weather: state.weather
   }
}
//==================================
export default connect(mapStateToProps)(ShowWeather);
