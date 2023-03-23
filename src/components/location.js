import { h, Component } from "preact";
import { useState, useEffect } from 'preact/hooks';
import { getFormattedWeatherData } from './weatherService.js';
import { WeatherAPI } from "./weather_api";
import '../location.css';



export class Location extends Component {
  render() {

    const [btext, setText] = useState("°F");
    const [city, setCity] = useState("Paris");
    const [weather, setWeather] = useState(null);
    const [latitude, setlat] = useState(48.8534);
    const [longitude, setLon] = useState(2.3488);
    const [units, setUnits] = useState("metric");

    const refreshWeatherData = (cityName) => {
      if (
        this.weatherAPI == null ||
        cityName != this.cityName ||
        this.state.weather == null
      ) {
        this.weatherAPI = new WeatherAPI(
          latitude,
          longitude
        );
        let weather = this.weatherAPI.getWeather();
        if (weather == null) {
          this.weatherAPI.getWeatherAsync().then((result) => {
            console.log(`homepage: getWeatherAsync() result = ${result}`);
            this.setState({ weather: result });
          });
        } else {
          this.setState({ weather: weather });
        }
      }
    };

    useEffect(() => {
      const fetchWeatherData = async () => {
        const data = await getFormattedWeatherData(city, units);
        setWeather(data);
        setLon(data.lon);
        setlat(data.lat);
        refreshWeatherData(city);
      };

      fetchWeatherData();
    }, [units, city]);

    const handleUnitsClick = (e) => {
      const button = e.currentTarget;
      const currentUnit = button.innerText.slice(1);

      const isCelsius = currentUnit === 'C';
      setText(isCelsius ? '°F' : '°C');
      setUnits(isCelsius ? 'metric' : 'imperial')
    };

    const enterKeyPressed = (e) => {
      if (e.keyCode === 13) {
        setCity(e.currentTarget.value);
        e.currentTarget.blur();
      }
    };


    return (
      <div className='app'>
        <div className="overlay">
          {
            weather && (
              <div className="container">
                <div className="section section__inputs">
                  <input onKeyDown={(e) => enterKeyPressed(e)} type="text" name="city" placeholder='Enter City...' />
                  <button onClick={(e) => handleUnitsClick(e)}>{btext}</button>
                </div>

                <div className="section section__temperature">
                  <div className="icon">
                    <h3>{ `${weather.name}, ${weather.country}` }</h3>
                    <img src={weather.iconURL} alt="weatherIcon" />
                    <h3>{weather.description}</h3>
                  </div>
                  <div className="temperature">
                    <h1>{ `${weather.temp.toFixed()} °${units === 'metric' ? 'C' : 'F'}` }</h1>
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>
    )
  }
};
