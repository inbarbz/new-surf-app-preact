import { h, Component } from "preact";

export class WeatherIndex extends Component {
	render() {
		console.log("Render WeatherIndex");
		let index = this.props.index;
		return (
			<div class="container" style="font-size:50px;">
				{index}%
			</div>
		);
	}
}
