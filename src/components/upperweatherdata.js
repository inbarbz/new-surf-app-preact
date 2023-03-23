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
<<<<<<< HEAD
					<div class="col" style="text-align:center;margin-top:100px;">
						<Location />
					</div>
				</div>
				<div class="row" style="width=100%;padding-right=2px;padding-left=2px">
					<div class="col" style="text-align:center;margin-top:-1px;">
=======
					<div class="col" style="text-align:center;margin-top:70px;">
						<Location location={beachName} />
					</div>
				</div>
				<div
					class="row"
					style="width=100%;padding-right=2px;padding-left=2px;padding-top:80px"
				>
					<div class="col" style="text-align:center;margin-top:53px;">
>>>>>>> 4a5c1c4ba64844403207fc1908315e7ca7776e22
						<UVIndex ux_index={uxIndex} />
					</div>
				</div>
			</div>
		);
	}
}
