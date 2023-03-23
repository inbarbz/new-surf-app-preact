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
				plugins: {
					title: {
						display: false
					},
					legend: {
						display: false
					}
				},
				scales: {
					x: {
						beginAtZero: true,
						grid: {
							color: "rgba(255,255,255,0.8)",
							tickColor: "rgba(255,255,255,0.8)",
							borderColor: "white" // <-- this line is answer to initial question
						}
					},
					y: {
						beginAtZero: true,
						grid: {
							color: "rgba(255,255,255,0.8)",
							tickColor: "rgba(255,255,255,0.8)",
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
			<div style={this.divStyles} style="height:115px;padding-bottom:0px">
				{/* Place Holder for: {label} */}
				<canvas id="wave-graph" style="padding-bottom:0px"> </canvas>
			</div>
		);
	}

	divStyles = {
		boder: "solid",
		borderWidth: "2px"
	};
}
