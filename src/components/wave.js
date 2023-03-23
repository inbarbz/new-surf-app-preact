import { h, Component } from "preact";

export class Wave extends Component {
	constructor() {
		super();
		this.c = undefined;
	}

	componentDidMount() {
		this.setupGraph(new Array(24).fill(1));
	}

	setupGraph(waveHeightHourly) {
		const ctx = document.getElementById("wave-graph");

		let currentHour = new Date().getHours();
		let labels = [];
		for (let i = 0; i < 6; i++) {
			//labels.push((currentHour + i).toString() + ":00");
			labels.push((currentHour + i) < 12 ? `${currentHour + i}am` : ((currentHour + i) === 12) ? `${currentHour + i}pm` : `${currentHour + i - 12}pm`);
		}

		this.c = new Chart(ctx, {
			type: "line",
			data: {
				labels: labels,
				datasets: [
					{
						label: "Wave Height",
						data: waveHeightHourly.slice(currentHour, currentHour + 6),
						borderWidth: 1,
						cubicInterpolationMode: "monotone",
						tension: 0.4,
						fill: false,
						borderColor: "blue"
					}
				]
			},
			options: {
				scales: {
					x: {
						beginAtZero: true,
						grid: {
							color: "rgba(255,255,255,0.4)",
							borderColor: "white" // <-- this line is answer to initial question
						}
					},
					y: {
						beginAtZero: true,
						grid: {
							color: "rgba(255,255,255,0.4)",
							borderColor: "white" // <-- this line is answer to initial question
						}
					}
				}
			}
		});
		this.c.render();
	}

	render() {
		let label = this.props.label ? this.props.label : "EMPTY";
		console.log("Render Wave() with label = " + label);
		if (this.c !== undefined) {
			this.c.data.datasets[0].data = this.props.wave_height_hourly;
			this.c.update();
		}

		return (
			<div style={this.divStyles}>
				{/* Place Holder for: {label} */}
				<canvas id="wave-graph" width="70%" height="100"></canvas>
			</div>
		);
	}

	divStyles = {
		boder: "solid",
		borderWidth: "2px"
	};
}
