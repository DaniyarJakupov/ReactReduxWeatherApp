import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ShowWeather from '../containers/show_weather';

export default class App extends Component {
  render() {
    return (
      <div>
         <SearchBar />
         <ShowWeather />
      </div>
    );
  }
}
