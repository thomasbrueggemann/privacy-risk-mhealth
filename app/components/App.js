import React from "react";
import AddApp from "./AddApp";

class App extends React.Component {

	render() {
		return (
			<div className="mhealth">

				<div className="header">
					<div className="logo"><img src="/img/logo.png" /></div>
					<div className="title">Privacy Index for m<b>Health</b> Apps</div>
					<AddApp />
				</div>

				{this.props.children}
			</div>
		);
	}
}

export default App;
