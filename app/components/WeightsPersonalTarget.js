import React from "react";
import { Link } from "react-router";

class WeightsPersonalTarget extends React.Component {

	// CONSTRUCTOR
	constructor(props) {
		super(props);
		this.state = {
			"weights": {
			    "app provider": 0.3,
			    "advertisers / marketeers": 0.3,
			    "research projects": 0.1,
			    "facebook": 0.3
			}
		};
	}

	// COMPONENT DID MOUNT
	componentDidMount() {
		var defaultWeights = {
		    "app provider": 0.3,
		    "advertisers / marketeers": 0.3,
		    "research projects": 0.1,
		    "facebook": 0.3
		};

		for(var i in defaultWeights) {
			$("[data-weight='" + i + "']").val(defaultWeights[i] * 100);
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
		Cookies.set("userWeightsPersonalTarget", this.state.weights);

		// navigate to home screen
		this.props.history.push({
			"pathname": "/weights-category",
		  	"search": "",
		  	"state": {}
	  	});
	}

	// RENDER
	render() {
		return (
			<div className="weights">
                <h2>How important is the risk to you, where your personal data is potentionally sent?</h2>
				<div className="weight-row">
                    <label>The app provider</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="app provider" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>To advertisers or marketing companies</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="advertisers / marketeers" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>To research projects</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="research projects" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>To Facebook</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="facebook" onChange={this.saveWeight.bind(this)} /> very
                </div>
				<button onClick={this.done.bind(this)}><i className="fa fa-check"></i> Save</button>
				&nbsp;or&nbsp;
				<Link to={"/apps"}><i className="fa fa-share"></i> Skip the weighting</Link>
			</div>
		);
	}
}

export default WeightsPersonalTarget;
