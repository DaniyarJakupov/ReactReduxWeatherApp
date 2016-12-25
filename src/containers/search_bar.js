import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
   constructor(props){
      super(props);

      this.state = {
         term: ''
      };
      //Bind onInputChange() function to the component object
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
   }

   //Function for changing state of the component
   onInputChange(event){
      this.setState({term: event.target.value});
   }

   onFormSubmit(event){
      // Preventing POST request from form
      event.preventDefault();
      // Fetch weather data
      this.props.fetchWeather(this.state.term);
      // Clear input
      this.setState({term: ""});
   }

   render(){
      return(
         <div>
            <form onSubmit={this.onFormSubmit} className="input-group">
               <input
                  placeholder="What's the weather in ..."
                  className="form-control"
                  value={this.state.term}
                  onChange={this.onInputChange}
               />
               <span className="input-group-btn">
                  <button type="submit" className="btn btn-secondary">Submit</button>
               </span>
            </form>
         </div>
      );
   }
}

// Anything returned from this function will end up as props
function mapDispatchToProps(dispatch){
   // Whenever fetchWeather() is called, the result should be passed to all
   // of our reducers.
   return bindActionCreators({ fetchWeather }, dispatch);
}
//==========================================
// Take component SearchBar, take function mapStateToProps()
// and take function mapDispatchToProps() then
//  promote SearchBar component to Container  (component that has state).
// Make return values of above functions (e.g. fetchWeather) available
// as a props in SearchBar  class.
export default connect(null, mapDispatchToProps)(SearchBar);
