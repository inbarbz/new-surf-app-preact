import { h, Component } from "preact";

import { WeatherIndex } from "./weatherindex";
import { Location } from "./location";
import { UXIndex } from "./uv_index";

export class UpperWeatherData extends Component {
	render() {
		let uxIndex = this.props.ux_index;
		console.log(`Render UpperWeatherData with uv index of ${uxIndex}`);
		return (
			<div class="container">
				<div class="row">
					<div class="col" style="text-align:center;margin-top:100px;">
						<Location location="Brighton Beach" />
					</div>
				</div>
				<div class="row">
					<div class="col" style="text-align:center;margin-top:5px;">
						<WeatherIndex index="30" />
					</div>
				</div>
				<div class="row" style="width=100%;padding-right=2px;padding-left=2px">
					<div class="col" style="text-align:center;margin-top:53px;">
						<UXIndex ux_index={uxIndex} />
					</div>
				</div>
			</div>
		);
	}
}
