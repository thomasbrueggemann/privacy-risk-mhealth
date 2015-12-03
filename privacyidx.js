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
            "personal_category": data[2].split(","),
            "login": !(data[3] === "" || data[3] === "None"),
            "personal_target": data[4].split(","),
            "unspecific_target": data[5].split(","),
            "personal_description": data[6]  === "1",
            "rating_source": data[7].split(","),
            "data_reasonable": data[8] === "1",
            "secure_transmission": data[9] === "1"
        });
    })
    .on("end", function() {

        // calculate privacy indizes
        for(var rating in ratings) {
            
        }
    });
