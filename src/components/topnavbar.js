import { h, Component } from "preact";
import iconButton from "./iconButton";

function handleClick() {
	// function of the button goes here
}

export class TopNavBar extends Component {
	locations = [
		{ name: "Brighton" },
		{ name: "Newquay" },
		{ name: "Bournemouth" },
		{ name: "Blackpool" },
		{ name: "StIves" },
	];

	render() {
		return (
			<div class="container">
				<div class="row" style={{ padding: "0px", margin: "0px" }}>
					<div class="col-2" style="padding-left:0px">
						<select
							name="beaches"
							id="beaches-id"
							style="background-color:#e07010"
						>
							{this.locations.map((location) => {
								return <option value={location.name}>{location.name}</option>;
							})}
						</select>
					</div>
					<div class="col-8"> </div>
				</div>
			</div>
		);
	}
}
