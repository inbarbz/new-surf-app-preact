export class WeatherAPI {
	constructor(lat, long) {
		console.log("WeatherAPI() constructor");
		this.lat = lat;
		this.long = long;
		this.url = `https://api.open-meteo.com/v1/forecast?timezone=GMT&latitude=${lat}&longitude=${long}&hourly=temperature_2m&daily=uv_index_max,uv_index_clear_sky_max`;
		this.result = null;
	}

	getWeather() {
		if (this.result != null) {
			console.log("WeatherAPI.getWeather() returning cached result");
			return this.result;
		}
		console.log("WeatherAPI.getWeather() fetching from " + this.url);

		fetch(this.url)
			.then((res) => {
				return res.json();
			})
			.then((result) => {
				console.log(
					"WeatherAPI.getWeather() got result! UV index today = " +
						result.daily.uv_index_max[0]
				);
				console.log(result);
				this.result = result;
			});
		return null;
	}

	getWeatherAsync() {
		if (this.result != null) {
			console.log("getWeatherAsync.getWeather() returning cached result");
			return Promise.resolve(this.result);
		}
		console.log("getWeatherAsync.getWeather() fetching from " + this.url);

		return new Promise((resolve) => {
			fetch(this.url)
				.then((res) => {
					return res.json();
				})
				.then((result) => {
					console.log(
						"WeatherAPI.getWeatherAsync() got result! UV index today = " +
							result.daily.uv_index_max[0]
					);
					console.log(result);
					this.result = result;
					resolve(this.result);
				});
		});
	}

	getBeachTemperature() {
		if (this.result == null) {
			return 0;
		}
		return this.result.hourly.temperature_2m[0];
	}

	getTodayUVLevel() {
		if (this.result == null) {
			return 0;
		}

		if (this.result.daily.uv_index_max[0] <= 2) {
			return 2;
		}
		if (this.result.daily.uv_index_max[0] <= 5) {
			return 5;
		}
		if (this.result.daily.uv_index_max[0] <= 7) {
			return 7;
		}
		if (this.result.daily.uv_index_max[0] <= 10) {
			return 10;
		}
		return 11;
	}
}
