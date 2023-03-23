import { h, Component } from "preact";

export class BeachTemp extends Component {
	render() {
		let label = this.props.label ? this.props.label : "EMPTY";
		console.log("Render BeachTemp() with label = " + label);
		// return <div style={this.divStyles}>Place Holder for: {label}</div>;
	}

	divStyles = {
		boder: "solid",
		borderWidth: "2px",
		height: "50px",
	};
}
