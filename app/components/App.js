import React from "react";
import AddApp from "./AddApp";
import { Link } from "react-router";

class App extends React.Component {

	render() {

		console.log();

		return (
			<div className="mhealth">

				<div className="header">
					<Link to={"/apps"}>
						<div className="logo"><img src="/img/logo.png" /></div>
						<div className="title">Privacy Index for m<b>Health</b> Apps</div>
					</Link>

		            <Link to={"/"}><i className="fa fa-sliders"></i> Weight Settings</Link>
					<Link to={"/impressum"}><i className="fa fa-gavel"></i> Impressum</Link>
					{(this.props.history.isActive("/apps") === true) ? <AddApp /> : null}
				</div>

				{this.props.children}
			</div>
		);
	}
}

export default App;
