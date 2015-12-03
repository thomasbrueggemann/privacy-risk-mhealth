var fs = require("fs");
var csv = require("fast-csv");

var ratings = [];

// pipe in csv data
fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", function(data){

        // add rating from csv file
        ratings.push({
            "id": parseInt(data[0]),
            "name": data[1],
            "personal_category": data[2].toLowerCase().split(",").map(function(item) { return item.trim(); }),
            "login": !(data[3] === "" || data[3].toLowerCase() === "none"),
            "personal_target": data[4].toLowerCase().split(",").map(function(item) { return item.trim(); }),
            "unspecific_target": data[5].toLowerCase().split(",").map(function(item) { return item.trim(); }),
            "personal_description": data[6]  === "1",
            "rating_source": data[7].toLowerCase().split(",").map(function(item) { return item.trim(); }),
            "data_reasonable": data[8] === "1",
            "secure_transmission": data[9] === "1"
        });
    })
    .on("end", function() {

        // calculate privacy indizes
        for(var i in ratings) {
            var idx = 1.0;
            var rating = ratings[i];

            // initial "no risk" szenario
            if (rating.personal_category.indexOf("none") !== -1 ||
               rating.personal_target.indexOf("none") !== -1 ||
               rating.unspecific_target.indexOf("none") !== -1)
            {
            	idx = 0.0;
            }
            else {



                idx = 1.0;//PERSONAL_DATA_TARGET_MULTI * PERSONAL_DATA_TARGET_WEIGHT + SECURITY_MULTI * SECURITY_WEIGHT + CATEGORY_MULTI * CATEGORY_WEIGHT + UNSCPECIFIY_DATA_TARGET_MULTI * UNSCPECIFIY_DATA_TARGET_WEIGHT + SOURCE_OF_RATING_MULTI * SOURCE_OF_RATING_WEIGHT + REASONABLENESS_OF_DATA_COLLECTION_MULTI * REASONABLENESS_OF_DATA_COLLECTION_WEIGHT
            }

            rating.privacy_index = idx;
        }

        console.log(ratings);
    });
