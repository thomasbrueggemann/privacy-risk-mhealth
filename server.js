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

var app = express();
var ratings = [];
var original = [];
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
