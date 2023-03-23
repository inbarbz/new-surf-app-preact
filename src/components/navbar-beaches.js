import { h, Component } from "preact";

export class NavBarBeaches extends Component {
	locations = {
		brighton: { latitude: 50.8229, longitude: 0.1363 },
		newquay: { latitude: 50.4155, longitude: 5.0737 },
		bournemouth: { latitude: 50.722, longitude: 1.8667 },
		blackpool: { latitude: 53.8167, longitude: 3.037 },
		StIves: { latitude: 50.2084, longitude: 5.4909 },
	};

	render() {
		console.log("Render NavBarBeaches");
		let location = this.props.location;
		return (
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<ul class="navbar-nav">
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-mdb-toggle="dropdown"
								aria-expanded="false"
							>
								<i class="m-0">Location</i>
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a class="dropdown-item" href="#">
										<i class="flag-russia flag"></i>Русский
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										<i class="flag-portugal flag"></i>Português
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
