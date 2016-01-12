import React from "react";

class Weights extends React.Component {

	render() {
		return (
			<div>
				<div className="weight-row">
                    <label>Blabla</label>
                    <input type="range" min="0" max="100" steps="10" /> 
                </div>
			</div>
		);
	}
}

export default Weights;
