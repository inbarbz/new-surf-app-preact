import { h, Component } from "preact";

export class WaveDirection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ctx: null,
			compass: null,
			needle: null,
		};
	}

	setup(component_id) {
		// Grab the compass element
		let compass_canvas = `compass_canvas_${this.props.cid}`;
		this.state.canvas = document.getElementById(compass_canvas);
		// console.log(
		// 	`WaveDirection component_id=${component_id} canvas=${this.state.canvas}`
		// );

		// Canvas supported?
		if (this.state.canvas.getContext("2d")) {
			this.state.ctx = this.state.canvas.getContext("2d");

			// Load the compass image
			this.state.compass = new Image();
			this.state.compass.image_loaded = false;
			this.state.compass.onload = function () {
				this.image_loaded = true;
			};
			this.state.compass.src = "../assets/compass.png";

			// Load the needle image
			this.state.needle = new Image();
			this.state.needle.image_loaded = false;
			this.state.needle.onload = function () {
				this.image_loaded = true;
			};
			this.state.needle.src = "../assets/direction.png";
		} else {
			alert("Canvas not supported!");
		}
	}

	componentDidMount() {
		this.setup(this.props.cid);
	}

	drawImageRotated(image, canvas, angle, factor, centered, width, height) {
		canvas.width = width;
		canvas.height = height;
		let scale_factor = Math.min(
			(centered ? canvas.width / 2 : canvas.width) / image.width,
			(centered ? canvas.height / 2 : canvas.height) / image.height
		);

		var x = canvas.width / 2;
		var y = canvas.height / 2;
		var width = (image.width * scale_factor) / factor;
		var height = (image.height * scale_factor) / factor;

		var angleInRadians = angle * (Math.PI / 180);

		var context = this.state.ctx;

		context.save();
		if (angleInRadians != 0) {
			context.translate(x, y);
			context.rotate(angleInRadians);
			context.translate(-x, -y);
		}
		if (centered) {
			context.drawImage(image, x - width / 2, y - height / 2, width, height);
		} else {
			context.drawImage(image, 0, 0, width, height);
		}
		context.restore();
	}

	render() {
		let componentWidth = 50;
		let componentHeight = 50;

		let degrees = parseInt(this.props.angle);
		let hour = this.props.hour;
		let cid = this.props.cid;

		if (
			this.state.ctx != null &&
			this.state.needle.image_loaded &&
			this.state.compass.image_loaded
		) {
			this.drawImageRotated(
				this.state.compass,
				this.state.canvas,
				0,
				1.0,
				false,
				componentWidth,
				componentHeight
			);
			this.drawImageRotated(
				this.state.needle,
				this.state.canvas,
				degrees,
				1.0,
				true,
				componentWidth,
				componentHeight
			);
		}

		let compass_canvas = `compass_canvas_${cid}`;
		let style = `width:${componentWidth}px;height:${componentHeight}px`;
		return (
			<div class="container wavedirection_container_div">
				<canvas id={compass_canvas} style={style}></canvas>
				<div class="wavedirection_hour">{hour}</div>
			</div>
		);
	}
}
