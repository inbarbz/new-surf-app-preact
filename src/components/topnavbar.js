import { h, Component } from "preact";
import iconButton from './iconButton'

function handleClick() {
	// function of the button goes here
}

export class TopNavBar extends Component {
	render() {
		return (
			<div class="container">
				<div class="row" style={{ padding: "0px", margin: "0px" }}>
					<div class="col-2">
						<div style="margin-top:30px;margin-left:20px">
							<iconButton src="path/to/icon.png" alt="Home" onClick={handleClick} />
						</div>
					</div>
					<div class="col-8"> </div>
					<div class="col-2">
						<div style="margin-top:30px;margin-right:10px;align-content:right">
							<iconButton src="path/to/icon.png" alt="Location" onClick={handleClick} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
