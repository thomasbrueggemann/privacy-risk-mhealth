import React from "react";
import AppRow from "./AppRow";
import Model from "./Modal";

class Home extends React.Component {

	// CONSTRUCTOR
	constructor(props) {
		super(props);
		this.state = {
			"apps": []
		};
	}

	// RENDER
	render() {

		const customStyles = {
		  content : {
		    top                   : '50%',
		    left                  : '50%',
		    right                 : 'auto',
		    bottom                : 'auto',
		    marginRight           : '-50%',
		    transform             : 'translate(-50%, -50%)'
		  }
		};

		return (
			<div className="apps">

				<Modal
				  isOpen={bool}
				  onRequestClose={fn}
				  closeTimeoutMS={n}
				  style={customStyle}>

				  <h1>Modal Content</h1>
				  <p>Etc.</p>
				</Modal>

				<div className="app-header">
					<div className="app-cell">Name <i className="fa fa-tag fa-lg fa-fw"></i></div>
					<div className="app-cell">Store <i className="fa fa-link fa-lg fa-fw"></i></div>
					<div className="app-cell">Privacy index <i className="fa fa-trophy fa-lg fa-fw"></i></div>
					<div className="app-cell">Personal data collected <i className="fa fa-user fa-lg fa-fw"></i></div>
					<div className="app-cell">Login required <i className="fa fa-sign-in fa-lg fa-fw"></i></div>
					<div className="app-cell">Where is my data being sent? <i className="fa fa-wifi fa-lg fa-fw"></i></div>
					<div className="app-cell">Does the app track me? <i className="fa fa-search fa-lg fa-fw"></i></div>
					<div className="app-cell">Benefits entering personal data? <i className="fa fa-star fa-lg fa-fw"></i></div>
					<div className="app-cell">Secure data connection?  <i className="fa fa-lock fa-lg fa-fw"></i></div>
					<div className="app-cell">Permissions the apps wants <i className="fa fa-list fa-lg fa-fw"></i></div>
			  	</div>

				{this.state.apps.map(a => (
					<AppRow key={a.id} app={a} />
				))}

				<div className="plus-column">
			    	<span className="fa-stack">
						<i className="fa fa-circle-o fa-stack-2x"></i>
			        	<i className="fa fa-plus fa-stack-1x"></i>
			      	</span>
			    </div>
			</div>
		);
	}
}

export default Home;
