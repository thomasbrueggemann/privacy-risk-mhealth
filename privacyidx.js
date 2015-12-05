var fs = require("fs");
var csv = require("fast-csv");

var ratings = [];
var multiplier = {
    "security": 1.0,
    "personal_target": 1.0,
    "category": 1.0,
    "unspecific_target": 1.0,
    "rating_source": 1.0,
    "data_reasonable": 1.0
};

var weights = {
    "security": 0.1,
    "personal_target": 0.4,
    "category": 0.2,
    "unspecific_target": 0.05,
    "rating_source": 0.15,
    "data_reasonable": 0.1
};

var personalTargetWeights = {
    "app provider": 0.2,
    "advertisers / marketeers": 0.4,
    "research": 0.1,
    "unknown": 0.3
};

var categoryWeights = {
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
    "sleep metrics": 0.006,
    "personality test": 0.012,
    "family": 0.059
};

var sourceRatingWeights = {
    "screenshots": 0.8,
    "description": 0.8,
    "app downloaded": 0.4,
    "http proxy": 0.2,
    "privacy policy": 0.1
};

// pipe in csv data
fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", function(data){

        // add rating from csv file
        ratings.push({
            "id": parseInt(data[0].trim()),
            "name": data[1].trim(),
            "personal_category": data[2].toLowerCase().split(",").map(function(item) { return item.trim(); }),
            "login": !(data[3].trim() === "" || data[3].trim().toLowerCase() === "none"),
            "personal_target": data[4].toLowerCase().split(",").map(function(item) { return item.trim(); }),
            "unspecific_target": data[5].toLowerCase().split(",").map(function(item) { return item.trim(); }),
            "personal_description": data[6].trim()  === "1",
            "rating_source": data[7].toLowerCase().split(",").map(function(item) { return item.trim(); }),
            "data_reasonable": data[8].trim() === "1",
            "secure_transmission": data[9].trim() === "1"
        });
    })
    .on("end", function() {

        // calculate privacy indizes
        for(var i in ratings) {
            var idx = 1.0;
            var rating = ratings[i];

            if(rating.personal_category.indexOf("none") >= 0) {
                rating.personal_category = [];
            }

            if(rating.personal_target.indexOf("none") >= 0) {
                rating.personal_target = [];
            }

            if(rating.unspecific_target.indexOf("none") >= 0) {
                rating.unspecific_target = [];
            }

            // initial "no risk" szenario
            if((rating.personal_target.length === 0 &&
               rating.unspecific_target.length === 0) ||
               rating.personal_category.length === 0)
            {
            	idx = 0.0;
            }
            else {

                // security multiplier
                if (rating.login === true &&
                    rating.secure_transmission === false &&
                    rating.personal_target.length > 0)
                {
                    multiplier.security = 1.0;
                }
                else {
                    multiplier.security = 0.0;
                }

                // personal data target
                multiplier.personal_target = 0.0;

                for(var j in rating.personal_target) {
                    multiplier.personal_target += personalTargetWeights[rating.personal_target[j]];
                }

                if(rating.login === false) {
                    multiplier.personal_target = multiplier.personal_target / 2.0;
                }

                // category
                multiplier.category = 0.0;
                for(var k in rating.personal_category) {
                    multiplier.category += categoryWeights[rating.personal_category[k]];
                }

                // unspecific data target
                multiplier.unspecific_target = 1.0;

                if(rating.unspecific_target.length === 0) {
                    multiplier.unspecific_target = 0.0;
                }
                else {
                    if(rating.unspecific_target.length == 1 && rating.unspecific_target[0] === "none") {
                        multiplier.unspecific_target = 0.0;
                    }
                }

                // source of rating
                multiplier.rating_source = 0.0;
                var hasScreenshotOrDescription =  false;
                for(var l in rating.rating_source) {

                    var rs = rating.rating_source[l];
                    if(rs.length <= 2) continue;

                    // is the current source a screenshot or description?
                    if(rs === "description" || rs === "screenshots") {

                        // screenshot or description already found?
                        if(hasScreenshotOrDescription === true) {
                            continue;
                        }
                        else {
                            hasScreenshotOrDescription = true;
                        }
                    }

                    // add rating multi
                    multiplier.rating_source += sourceRatingWeights[rs];
                }

                // reasonableness
                multiplier.data_reasonable = (rating.data_reasonable === true) ? 0.0 : 1.0;

                // privacy index
                idx = multiplier.security * weights.security +
                      multiplier.personal_target * weights.personal_target +
                      multiplier.category * weights.category +
                      multiplier.unspecific_target * weights.unspecific_target +
                      multiplier.rating_source * weights.rating_source +
                      multiplier.data_reasonable * weights.data_reasonable;
            }

            rating.privacy_index = idx;
        }

        console.log(ratings);
    });
