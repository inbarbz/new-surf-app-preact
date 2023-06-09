import { h, Component } from "preact";

import { WeatherIndex } from "./weatherindex";
import { Location } from "./location";
import { UVIndex } from "./uv_index";

export class UpperWeatherData extends Component {
	render() {
		let uxIndex = this.props.ux_index;
		let cityName = this.props.city_name;
		let beachName = cityName + " Beach";
		console.log(`Render UpperWeatherData with uv index of ${uxIndex}`);
		return (
			<div class="container">
				<div class="row">
					<div class="col" style="text-align:center;margin-top:130px;">
						<Location />
					</div>
				</div>
				<div class="row" style="width=100%;padding-right=2px;padding-left=2px">
					<div class="col" style="text-align:center;margin-top:-1px;">
						<UVIndex ux_index={uxIndex} />
					</div>
				</div>
			</div>
		);
	}
}
