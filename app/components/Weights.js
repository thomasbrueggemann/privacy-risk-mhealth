import React from "react";
import { Link } from "react-router";

class Weights extends React.Component {

	// CONSTRUCTOR
	constructor(props) {
		super(props);
		this.state = {
			"weights": {
				"security": 0.1,
			    "personal_target": 0.4,
			    "category": 0.3,
				"login_required": 0.1,
			    "unspecific_target": 0.05,
			    "data_reasonable": 0.05
			}
		};
	}

	// COMPONENT DID MOUNT
	componentDidMount() {
		var defaultWeights = {
			"security": 0.1,
		    "personal_target": 0.4,
		    "category": 0.3,
			"login_required": 0.1,
		    "unspecific_target": 0.05,
		    "data_reasonable": 0.05
		};

		// find maximum
		var maxW = 0;
		for(var j in defaultWeights) {
			if(defaultWeights[j] > maxW) {
				maxW = defaultWeights[j];
			}
		}

		var mulFactor = 1 / maxW;

		for(var i in defaultWeights) {
			$("[data-weight='" + i + "']").val(defaultWeights[i] * mulFactor * 100);
		}
	}

	// SAVE WEIGHT
	saveWeight() {

		// store all new weights
		var sum = 0;
		$("[data-weight]").each(function(i, el) {
			var $el = $(el);
			sum += parseInt($el.val());
		});

		var w = this.state.weights;
		$("[data-weight]").each(function(i, el) {
			var $el = $(el);
			w[$el.data("weight")] = ($el.val() / (sum / 100)) / 100;
		});

		this.setState({
			"weights": w
		});
	}

	// DONE
	done() {
		Cookies.set("userWeights", this.state.weights);

		// navigate to next screen
		this.props.history.push({
			"pathname": "/weights-personal-target",
		  	"search": "",
		  	"state": {}
	  	});
	}

	// RENDER
	render() {
		return (
			<div className="weights">
                <h2>How important are the following factors to you?</h2>
				<div className="weight-row">
                    <label>A secure data connection</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="security" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>The target, data might be sent to</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="personal_target" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>The types of personal data you have to enter</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="category" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>The fact that advertisement and analytics services are used</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="unspecific_target" onChange={this.saveWeight.bind(this)} /> very
                </div>
				<div className="weight-row">
                    <label>The fact that you have to login to the app with an eMail or Facebook</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="login_required" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>The reasonableness of data collection</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="data_reasonable" onChange={this.saveWeight.bind(this)} /> very
                </div>
				<button onClick={this.done.bind(this)}><i className="fa fa-check"></i> Save</button>
				&nbsp;or&nbsp;
				<Link to={"/apps"}><i className="fa fa-share"></i> Skip the weighting</Link>
			</div>
		);
	}
}

export default Weights;
