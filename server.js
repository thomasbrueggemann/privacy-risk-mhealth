var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var swig = require("swig");
var React = require("react");
var ReactDOM = require("react-dom/server");
var Router = require("react-router");
var RoutingContext = Router.RoutingContext;
var routes = require("./app/routes");
var cookieParser = require("cookie-parser");
var privacyIdx = require("./privacyidx");
var extend = require("extend");
var crypto = require("crypto");

var app = express();
var ratings = [];
var original = [];
var userCache = {};
privacyIdx.ratings(false, function(imported) { ratings = imported; });
privacyIdx.original(function(imported) { original = imported; });

app.set("port", process.env.PORT || 3000);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static(path.join(__dirname, "public")));

// API / SEARCH / :QUERY
app.get("/api/search/:query", function(req, res) {

	if(req.params.query.length <= 2) {
		return res.send([]);
	}

	var filtered = ratings.filter(function(item) {
		return item.name.toLowerCase().indexOf(req.params.query) >= 0;
	});

	// add original information
	for(var f in filtered) {

		// find original data item
		for(var o in original) {
			if(original[o].id === filtered[f].id) {

				// extend filtered rating by original information
				extend(false, filtered[f], original[o]);
			}
		}
	}

	return res.send(filtered);
});

// return the index of an app with provided weights
app.get("/api/idx/:id", function(req, res) {

	// read user weights from cookie
	// the cookie would look like this:
	// { "security": 0.1, "personal_target": 0.4, "category": 0.35, "unspecific_target": 0.1, "data_reasonable": 0.05 }
	var userWeights = (req.cookies.userWeights) ? JSON.parse(req.cookies.userWeights) : privacyIdx.defaultWeights;
	var userWeightsPersonalTarget = (req.cookies.userWeightsPersonalTarget) ? JSON.parse(req.cookies.userWeightsPersonalTarget) : privacyIdx.personalTargetWeights;
	var userWeightsCategory = (req.cookies.userWeightsCategory) ? JSON.parse(req.cookies.userWeightsCategory) : privacyIdx.categoryWeights;

	var cacheKey = crypto.createHash("md5").update(
		JSON.stringify(userWeights) +
		JSON.stringify(userWeightsPersonalTarget) +
		JSON.stringify(userWeightsCategory)
	).digest("hex");

	// data is in cache
	if(!(cacheKey in userCache)) {

		// generate ratings
		userCache[cacheKey] = privacyIdx.performRating(ratings, userWeights);
	}

	// filter the app that was requested
	var filteredApp = userCache[cacheKey].filter(function(item) {
		return item.id === parseInt(req.params.id);
	});

	// return the privacy index
	if(filteredApp.length > 0) {

		var app = filteredApp[0];
		var min_idx = null;
		var max_idx = null;

		// find archetype continuum
		if(app.archetype) {

			// find other apps with same archetype
			var other = userCache[cacheKey].filter(function(item) {
				return item.archetype === app.archetype && item.id !== app.id;
			});

			// find minimum privacy index for other apps
			min_idx = Math.min.apply(Math, other.map(function(item) {
				return item.privacy_index;
			}));

			// find maximum privacy index for other apps
			max_idx = Math.max.apply(Math, other.map(function(item) {
				return item.privacy_index;
			}));
		}

		return res.send({
			"id": parseInt(req.params.id),
			"idx": app.privacy_index,
			"continuum": {
				"min": min_idx,
				"max": max_idx
			}
		});
	}
	else {
		return res.status(500).send("No app found");
	}
});

// REACT MIDDLEWARE
app.use(function(req, res) {

	Router.match({ routes: routes, location: req.url }, function(err, redirectLocation, renderProps) {

		// error
		if(err) {
			return res.status(500).send(err.message);
		}

		// redirect
		else if(redirectLocation) {
			return res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
		}

		// render
		else if(renderProps) {
			var html = ReactDOM.renderToString(<RoutingContext {...renderProps} />);
			var page = swig.renderFile("views/index.html", { html: html });
			return res.status(200).send(page);
		}

		// not found
		else {
			return res.status(404).send("Page Not Found");
		}
	});
});

app.listen(app.get("port"), function() {
	console.log("Express server listening on port " + app.get("port"));
});
