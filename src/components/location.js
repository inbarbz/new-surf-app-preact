import { h, Component } from "preact";

export class Location extends Component {
	render() {
		console.log("Render Location");
		let location = this.props.location;
		return (
			<div class="container localtion" style="font-size:30px;">
				{location}
			</div>
		);
	}
}
