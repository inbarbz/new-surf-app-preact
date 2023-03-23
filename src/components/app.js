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
	}

	/*
		A render method to display the required Component on screen (iPhone or iPad) : selected by checking component's isTablet state
	*/
	render() {
		console.log("App");
		return (
			<div class="container">
				<HomePage />
				App
			</div>
		);
	}
}
// hi
