// import preact
import { h, Component } from "preact";
import { TopNavBar } from "./topnavbar";
import { UpperWeatherData } from "./upperweatherdata";
import { LowerWeatherData } from "./lowerweatherdata";
// import { PlaceHolder } from "./placeholder";
import { WeatherAPI } from "./weather_api";

export default class HomePage extends Component {
	constructor() {
		super();
		console.log("HomePage() constructor");
		this.state = { isLoaded: false };
		this.cityName = "Brighton".toLowerCase();
		this.weatherAPI = null;
	}

	locations = {
		brighton: { latitude: 50.83, longitude: -0.14 },
		otherplace: { latitude: 50.83, longitude: -0.14 },
	};

	refreshWeatherData(cityName) {
		if (
			this.weatherAPI == null ||
			cityName != this.cityName ||
			this.state.weather == null
		) {
			this.weatherAPI = new WeatherAPI(
				this.locations[cityName].latitude,
				this.locations[cityName].longitude
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
	}

	componentDidMount() {
		console.log("HomePage() componentDidMount");
		this.fetchSurfData(this.cityName);
		this.refreshWeatherData(this.cityName);
	}

	fetchSurfData(locationName) {
		let latitude = this.locations[locationName].latitude;
		let longitude = this.locations[locationName].longitude;
		let hourly =
			"hourly=wave_height,wave_direction,wind_wave_height,wind_wave_direction,swell_wave_height,swell_wave_direction";
		let location = `latitude=${latitude}&longitude=${longitude}`;
		let daily = `daily=wave_height_max,wave_direction_dominant,wind_wave_height_max,wind_wave_direction_dominant,swell_wave_height_max,swell_wave_direction_dominant`;
		let url = `https://marine-api.open-meteo.com/v1/marine?timezone=GMT&${daily}&${hourly}&${location}`;
		console.log("fetching data from from marine-api...");
		console.log(url);
		fetch(url)
			.then((res) => {
				console.log("got response from marine-api!!!");
				let res_json = res.json();
				return res_json;
			})
			.then((result) => {
				console.log(result);
				this.setState({
					isLoaded: true,
					daily: result.daily,
					hourly: result.hourly,
				});
			});
	}

	getWaveHeight() {
		if (this.state.isLoaded) {
			console.log(
				"this.state.daily.wave_height_max[0] is " +
					this.state.daily.wave_height_max[0]
			);
			return this.state.daily.wave_height_max[0];
		} else {
			return 0;
		}
	}

	getWaveHeightHourly() {
		if (this.state.isLoaded) {
			// console.log(
			// 	"this.state.hourly.swell_wave_height is " +
			// 		this.state.hourly.swell_wave_height
			// );
			return this.state.hourly.swell_wave_height;
		} else {
			return new Array(24).fill(0);
		}
	}

	getWaveDirectionHourly() {
		if (this.state.isLoaded) {
			// console.log(
			// 	"this.state.hourly.wave_direction is " +
			// 		this.state.hourly.wave_direction
			// );
			return this.state.hourly.wave_direction;
		} else {
			return new Array(24).fill(0);
		}
	}

	getTodayUVLevel() {
		if (this.weatherAPI == null) {
			console.log("homepage.getTodayUVLevel() NO uvIndex data. returning 10 ");
			return 10;
		}
		let uvIndex = this.weatherAPI.getTodayUVLevel();
		console.log("homepage.getTodayUVLevel() uvIndex is " + uvIndex);
		return uvIndex;
	}

	getTemperature() {
		if (this.weatherAPI == null) {
			console.log(
				"homepage.getTemperature() NO temperature data. returning 0 "
			);
			return 0;
		}
		let beach_temp = this.weatherAPI.getBeachTemperature();
		console.log(`homepage.getTemperature() beach_temp=${beach_temp}`);
		return beach_temp;
	}

	render() {
		console.log("Render HomePage for " + this.cityName);
		// this.refreshWeatherData(this.cityName);

		return (
			<div class="container home-page-background">
				<div class="row">
					<div class="col">
						<TopNavBar />
					</div>
				</div>

				<div>
					<button onClick={"locztion.href = 'location.js'"}>Location</button>
				</div>
				<div class="row">
					<div class="col">
						<UpperWeatherData ux_index={this.getTodayUVLevel()} />
					</div>
				</div>
				<div class="row">
					<div class="col">
						<LowerWeatherData
							wave_height={this.getWaveHeight()}
							wave_height_hourly={this.getWaveHeightHourly()}
							wave_direction_hourly={this.getWaveDirectionHourly()}
							beach_temperature={this.getTemperature()}
							water_temperature={this.getTemperature() - 4}
						/>
					</div>
				</div>
			</div>
		);
	}
}
