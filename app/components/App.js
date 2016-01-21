import React from "react";
import AddApp from "./AddApp";
import { Link } from "react-router";

class App extends React.Component {

	render() {
		return (
			<div className="mhealth">

				<div className="header">
					<Link to={"/"}>
						<div className="logo"><img src="/img/logo.png" /></div>
						<div className="title">Privacy Index for m<b>Health</b> Apps</div>
					</Link>
					<AddApp />
				</div>

				{this.props.children}

				<div className="footer">
					&copy; 2016&nbsp;&middot;&nbsp;
					<Link to={"/impressum"}>Impressum</Link>
				</div>
			</div>
		);
	}
}

export default App;
