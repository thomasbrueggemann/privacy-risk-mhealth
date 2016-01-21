import React from "react";
import { Link } from "react-router";

class WeightsCategory extends React.Component {

	// CONSTRUCTOR
	constructor(props) {
		super(props);
		this.state = {
			"weights": {
			    "address": 0.088,
			    "medication intake": 0.147,
			    "vital values": 0.147,
			    "diseases": 0.118,
			    "medical appointments": 0.053,
			    "life status specs": 0.106,
			    "food intake": 0.035,
			    "body specs": 0.082,
			    "symptoms": 0.118,
			    "workout / activities": 0.029,
			    "workout / activity": 0.029,    // naming gitter
			    "sleep metrics": 0.006,
			    "personality test": 0.012,
			    "family": 0.059,
			    "unknown": 0.147    // give an unkown component the highest value
			}
		};
	}

	// COMPONENT DID MOUNT
	componentDidMount() {
		var defaultWeights = {
		    "address": 0.088,
		    "medication intake": 0.147,
		    "vital values": 0.147,
		    "diseases": 0.118,
		    "medical appointments": 0.053,
		    "life status specs": 0.106,
		    "food intake": 0.035,
		    "body specs": 0.082,
		    "symptoms": 0.118,
		    "workout / activities": 0.029,
		    "workout / activity": 0.029,    // naming gitter
		    "sleep metrics": 0.006,
		    "personality test": 0.012,
		    "family": 0.059,
		    "unknown": 0.147    // give an unkown component the highest value
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
		Cookies.set("userWeightsCategory", this.state.weights);

		// navigate to home screen
		this.props.history.push({
			"pathname": "/apps",
		  	"search": "",
		  	"state": {}
	  	});
	}

	// RENDER
	render() {
		return (
			<div className="weights">
                <h2>How important are these personal data categories to you?</h2>
				<div className="weight-row">
                    <label>Your address</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="address" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Medication intake</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="medication intake" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Vital values (e.g. blood pressue or heartrate)</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="vital values" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Diseases you have</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="diseases" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Medical appointments</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="medical appointments" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Life status specs (e.g. if you are pregnant or how active you are)</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="life status specs" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Food intake</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="food intake" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Body specs (e.g. weight or size)</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="body specs" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Symptoms you experience</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="symptoms" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Workout / Activities</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="workout / activities" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Sleep metrics (e.g. schedule)</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="sleep metrics" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Personality test questions</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="personality test" onChange={this.saveWeight.bind(this)} /> very
                </div>
                <div className="weight-row">
                    <label>Family information (e.g. number of children)</label>
                    not so much <input type="range" min="0" max="100" steps="10" data-weight="family" onChange={this.saveWeight.bind(this)} /> very
                </div>
				<button onClick={this.done.bind(this)}><i className="fa fa-check"></i> Save</button>
				&nbsp;or&nbsp;
				<Link to={"/apps"}><i className="fa fa-share"></i> Skip the weighting</Link>
			</div>
		);
	}
}

export default WeightsCategory;
