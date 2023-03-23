import { h, Component } from "preact";
import { Wave } from "./wave";
import { WaveDirectionGroup } from "./wavedirectiongroup";
import { Temperature } from "./temperature";

export class LowerWeatherData extends Component {
	// className="lower-weather-class"
	render() {
		let waveHeight = this.props.wave_height;
		let waveHeightHourly = this.props.wave_height_hourly;
		let waveDirectionHourly = this.props.wave_direction_hourly;
		let beach_temperature = this.props.beach_temperature;
		let water_temperature = this.props.water_temperature;

		let waveDirection = this.props.wave_direction;
		return (
			<div class="container">
				<div class="row">
					<div class="col-2"> </div>
					<div class="col-10">
						<Wave wave_height_hourly={waveHeightHourly} />
					</div>
				</div>

				<div class="row">
					<div class="col">
						<WaveDirectionGroup wave_direction_hourly={waveDirectionHourly} />
					</div>
				</div>

				<div class="row" style="padding-top:25px">
					<Temperature
						beach_temperature={beach_temperature}
						water_temperature={water_temperature}
					/>
				</div>
			</div>
		);
	}
}
