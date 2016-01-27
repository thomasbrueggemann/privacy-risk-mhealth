import React from "react";
import AppRow from "./AppRow";

class Home extends React.Component {

	// CONSTRUCTOR
	constructor(props) {
		super(props);
		this.state = {
			apps: []
		};
	}

	// COMPONENT DID UPDATE
	componentDidUpdate() {
		$(".app-header > .tooltip").tooltipster({
			"position": "right",
			"maxWidth": 400
		});
	}

	// COMPONENT DID MOUNT
	componentDidMount() {
		$(window).on("addNewApp", this.addNewApp.bind(this));
	}

	// COMPONENT WILL UNMOUNT
	componentWillUnmount() {
		$(window).off("addNewApp");
	}

	// ADD NEW APP
	addNewApp(e, app) {
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

		if(this.state.apps.length > 0) {

			return (
				<div className="apps">
					<div className="app-header">
						<div className="app-cell">Name <i className="fa fa-tag fa-lg fa-fw"></i></div>
						<div className="app-cell">Store <i className="fa fa-link fa-lg fa-fw"></i></div>
						<div className="app-cell tooltip" title="The archetype of app. Possible values are:
Casual Tool,
Common Knowledge Provider,
Treatment Guide,
Fitness Ad-Hoc Tool,
Fitness Tracker,
Treatment Support Tool,
Intimate Ad-Hoc Tool,
State of Health Test,
Intimate Tracker,
Health Monitor,
Treatment Reminder,
Health Record">Archetype  <i className="fa fa-cube fa-lg fa-fw"></i></div>
						<div className="app-cell tooltip" title="From 0 to 100. The higher the greater the privacy risk!">Privacy risk index <i className="fa fa-trophy fa-lg fa-fw"></i></div>
						<div className="app-cell tooltip" title="From 0 to 100. The higher the more confident are we with the rating of the risk index calculation.">Rating confidence <i className="fa fa-percent fa-lg fa-fw"></i></div>
						<div className="app-cell tooltip" title="What kind of personal data you have to enter. Possible entries are: Address,
Medication intake,
Vital values,
Diseases,
Medical appointments,
Life status specs,
Food intake,
Body specs,
Symptoms,
Workout / Activities,
Sleep Metrics,
Personality Test,
Family">Personal data collected <i className="fa fa-user fa-lg fa-fw"></i></div>
						<div className="app-cell tooltip" title="Is a ia mail / password or a social network required to use the app effectively?">Login required <i className="fa fa-sign-in fa-lg fa-fw"></i></div>
						<div className="app-cell tooltip" title="The target, where your data is being sent. Possible values:
App provider,
Advertisers / Marketeers,
Research,
Unknown">Where is my data being sent? <i className="fa fa-wifi fa-lg fa-fw"></i></div>
						<div className="app-cell tooltip" title="Tracking means, apps show you personalized ads or track your clicks for analytics purposes">Does the app track me? <i className="fa fa-search fa-lg fa-fw"></i></div>
						<div className="app-cell tooltip" title="Sometimes apps ask for data that is not even used, just collected.">Personal data input reasonable? <i className="fa fa-star fa-lg fa-fw"></i></div>
						<div className="app-cell tooltip" title="is your data transferred via an encrypted connection?">Secure data connection?  <i className="fa fa-lock fa-lg fa-fw"></i></div>
						<div className="app-cell"></div>
				  	</div>

					<div className="scroll-apps-outer">
						<div className="scroll-apps-inner" style={{"width" : this.state.apps.length * 330}}>
							{this.state.apps.map(a => (
								<AppRow key={a.id} app={a} removeApp={this.removeApp.bind(this)} />
							))}
						</div>
					</div>
				</div>
			);
		}
		else {

			return (
				<div className="intro">
					<div className="arrow"><img width="150" src="img/arrow.png" /></div>
					<div className="infotext"><i className="fa fa-search"></i> Search for an app that we have reviewed and rated to compare it's privacy risk index to other apps!</div>
				</div>
			);
		}
	}
}

export default Home;
