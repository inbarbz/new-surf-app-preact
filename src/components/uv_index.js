import { h, Component } from "preact";

export class UXIndex extends Component {
	getImage(uvIndex) {
		switch (uvIndex) {
			case 2:
				return "../assets/uv_2.png";
			case 5:
				return "../assets/uv_5.png";
			case 7:
				return "../assets/uv_7.png";
			case 10:
				return "../assets/uv_10.png";
		}
		return "../assets/uv_10.png";
	}

	render() {
		let uvIndexToday = this.props.ux_index || 10;
		console.log(`Render UVIndex with ux_index = ${uvIndexToday}`);
		return (
			<div
				id="uv_index_container_id"
				class="container uv_index_container"
				style="padding:0px;margin:0px"
			>
				<div
					id="ux_index_row_id"
					class="row ux_index_row"
					style="padding:0px;margin:0px"
				>
					<img
						id="uv_index_image"
						src={this.getImage(uvIndexToday)}
						style="padding:0px;margin-bottom:2px"
					></img>
				</div>
			</div>
		);
	}
}
