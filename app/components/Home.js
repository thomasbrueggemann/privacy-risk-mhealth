import React from "react";
import AppRow from "./AppRow";
import AddApp from "./AddApp";

class Home extends React.Component {

	// CONSTRUCTOR
	constructor(props) {
		super(props);
		this.state = {
			apps: []
		};
	}

	// ADD NEW APP
	addNewApp(app) {
		var apps = this.state.apps;
		apps.push(app);

		this.setState({
			"apps": apps
		});
	}

	// REMOVE APP
	removeApp(app) {

		this.setState({
			"apps": this.state.apps.filter(function(item) {
				return item.id !== app.id;
			})
		});

		window.scrollTo(0, 0);
	}

	// RENDER
	render() {

		return (
			<div className="mhealth">

				<div className="header">
					<div className="logo"><img src="/img/logo.png" /></div>
					<div className="title">Privacy Index for m<b>Health</b> Apps</div>
					<AddApp addNewApp={this.addNewApp.bind(this)} />
				</div>

				<div className="apps">
					<div className="app-header">
						<div className="app-cell">Name <i className="fa fa-tag fa-lg fa-fw"></i></div>
						<div className="app-cell">Store <i className="fa fa-link fa-lg fa-fw"></i></div>
						<div className="app-cell">Privacy risk index <i className="fa fa-trophy fa-lg fa-fw"></i></div>
						<div className="app-cell">Personal data collected <i className="fa fa-user fa-lg fa-fw"></i></div>
						<div className="app-cell">Login required <i className="fa fa-sign-in fa-lg fa-fw"></i></div>
						<div className="app-cell">Where is my data being sent? <i className="fa fa-wifi fa-lg fa-fw"></i></div>
						<div className="app-cell">Does the app track me? <i className="fa fa-search fa-lg fa-fw"></i></div>
						<div className="app-cell">Benefits entering personal data? <i className="fa fa-star fa-lg fa-fw"></i></div>
						<div className="app-cell">Secure data connection?  <i className="fa fa-lock fa-lg fa-fw"></i></div>
						<div className="app-cell"></div>
				  	</div>

					{this.state.apps.map(a => (
						<AppRow key={a.id} app={a} removeApp={this.removeApp.bind(this)} />
					))}
				</div>
			</div>
		);
	}
}

export default Home;
