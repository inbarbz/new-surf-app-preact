// import preact
import { h, Component, render } from "preact";

// import required Components from 'components/'
import HomePage from "./homepage";

export default class App extends Component {
	//var App = React.createClass({

	// once the components are loaded, checks if the url bar has a path with "ipad" in it, if so sets state of tablet to be true
	componentDidMount() {
		this.setState({
			isTablet: true,
		});

		window.addEventListener("resize", function () {
			"use strict";
			window.location.reload();
		});
	}

	isMobileDisplaySize() {
		return window.screen.width <= 768;
	}

	/*
		A render method to display the required Component on screen (iPhone or iPad) : selected by checking component's isTablet state
	*/
	render() {
		console.log(
			`App height=${window.screen.height} width=${window.screen.width}`
		);
		if (this.isMobileDisplaySize()) {
			return (
				<div class="container">
					<HomePage />
					App
				</div>
			);
		} else {
			return (
				<div class="container" style="font-size=25px">
					<p>
						This App works only on mobile devices! <br />
						please change your to emulate iPhone 12 Pro in your Chrome browser
					</p>
				</div>
			);
		}
	}
}
// hi
