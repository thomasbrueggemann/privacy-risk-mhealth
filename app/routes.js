import React from "react";
import {Route} from "react-router";
import App from "./components/App";
import Home from "./components/Home";
import Weights from "./components/Weights";
import WeightsPersonalTarget from "./components/WeightsPersonalTarget";
import WeightsCategory from "./components/WeightsCategory";
import Impressum from "./components/Impressum";

export default (
	<Route component={App}>
		<Route path="/apps" component={Home} />
		<Route path="/impressum" component={Impressum} />
		<Route path="/" component={Weights} />
		<Route path="/weights-personal-target" component={WeightsPersonalTarget} />
		<Route path="/weights-category" component={WeightsCategory} />
	</Route>
);
