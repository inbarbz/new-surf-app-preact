import { h, Component } from "preact";
import { WaveDirection } from "./wavedirection";

export class WaveDirectionGroup extends Component {
	render() {
		console.log("Render WaveDirectionGroup");
		let waveDirectionHourly = this.props.wave_direction_hourly;

		let currentHour = new Date().getHours();
		let labels = [];
		for (let i = 0; i < 4; i++) {
			//labels.push((currentHour + i).toString() + ":00");
			labels.push(
				currentHour + i < 12
					? `${currentHour + i}am`
					: currentHour + i === 12
					? `${currentHour + i}pm`
					: `${currentHour + i - 12}pm`
			);
		}

		let cid = 1;
		return (
			<div class="row" style="padding-top:5px">
				<div class="col-4"> </div>
				{labels.map((label) => {
					return (
						<div class="col-2">
							<WaveDirection
								angle={waveDirectionHourly[currentHour + cid - 1]}
								hour={label}
								cid={cid++}
							/>
						</div>
					);
				})}
			</div>
		);
	}
}
