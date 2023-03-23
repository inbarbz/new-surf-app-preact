import { h, Component } from "preact";

export class Temperature extends Component {
	render() {
		let beachTemperature = this.props.beach_temperature || 0;
		let waterTemperature = this.props.water_temperature || 0;

		console.log(
			"Render Temperature with beach_temperature = " +
				beachTemperature +
				" and water_temperature = " +
				waterTemperature
		);

		return (
			<div class="container">
				<div class="row" style="font-size:40px;color:white">
					<div class="col-6" style="text-align:center;margin-top:5px;">
						<img
							src="../assets/surfer_beach.png"
							style="width:75px;height:75px;"
						></img>
						<br />
						{beachTemperature.toFixed(1)}°
					</div>
					<div class="col-6" style="text-align:center;margin-top:5px;">
						<img
							src="../assets/surfer_water.png"
							style="width:75px;height:75px;"
						></img>
						<br />
						{waterTemperature.toFixed(1)}°
					</div>
				</div>
			</div>
		);
	}
}
