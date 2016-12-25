import React, {Component} from 'react';
import { connect } from 'react-redux';
//==================================
class ShowWeather extends Component {
   render(){
      if(!this.props.weather[0]){
         return <div>EMPTY</div>
      }
      return(
         <div>
            {console.log(this.props.weather)}
            <h4>
               The weather in {this.props.weather[0].city.name}, {this.props.weather[0].city.country} is currently&nbsp;
               {this.props.weather[0].list[0].main.temp}°C with {this.props.weather[0].list[0].weather[0].description}
            </h4>
         </div>
      )
   }
}

function mapStateToProps(state){
   return{
      weather: state.weather
   }
}

//==================================
export default connect(mapStateToProps)(ShowWeather);
