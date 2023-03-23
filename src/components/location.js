import { h, Component } from "preact";
import { useState, useEffect } from 'preact/hooks';
import { getFormattedWeatherData } from './weatherService.js';
import { WeatherAPI } from "./weather_api";
import '../location.css';



export class Location extends Component {
  render() {
    console.log("Render Location");
    let location = this.props.location;
    return (
      <div class="container localtion" style="font-size:40px;color:white">
        {location}
      </div>
    );
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> 4a5c1c4ba64844403207fc1908315e7ca7776e22
