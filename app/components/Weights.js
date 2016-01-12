import React from "react";

class Weights extends React.Component {

	render() {
		return (
			<div>
                <h4>How important are the following factors to you?</h4>
				<div className="weight-row">
                    <label>A secure data connection</label>
                    not so much <input type="range" min="0" max="10" steps="1" /> very
                </div>
                <div className="weight-row">
                    <label>The target, data might be sent to</label>
                    not so much <input type="range" min="0" max="10" steps="1" /> very
                </div>
                <div className="weight-row">
                    <label>The types of personal data you have to enter</label>
                    not so much <input type="range" min="0" max="10" steps="1" /> very
                </div>
                <div className="weight-row">
                    <label>The fact that advertisement and analytics services are used</label>
                    not so much <input type="range" min="0" max="10" steps="1" /> very
                </div>
                <div className="weight-row">
                    <label>The reasonableness of data collection</label>
                    not so much <input type="range" min="0" max="10" steps="1" /> very
                </div>
			</div>
		);
	}
}

export default Weights;
