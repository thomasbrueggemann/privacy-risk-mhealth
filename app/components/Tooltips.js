
/*** TOOLTIPS ***/
class Tooltips {

	// CONFIDENCE
	confidence(value) {
		console.log(value);
		switch(value) {
			case 0.1: return "We inspected the screenshots or the description of the app";
			case 0.6: return "We downloaded the app and used it";
			case 0.8: return "We downloaded the app and inspected the HTTP connections";
			case 0.9: return "We downloaded the app, inspected the HTTP connections and read the privacy policy";
		}
	}

	// CATEGORIES
	categories(values) {

		var title = "";
		for(var i in values) {

			title += "\"" + values[i] + "\": e.g. ";

			// what category values are available?
			switch(values[i]) {
				case "address": title += "Country, State, Street"; break;
				case "medication intake": title += "Pills / recipes, Medication dosage"; break;
				case "vital values": title += "Blood pressure, Heart rate, Blood sugar, Blood values"; break;
				case "diseases": title += "Kind of disease"; break;
				case "medical appointments": title += "Date, Doctor"; break;
				case "life status specs": title += "Pregnancy, Lifestyle (activity), Smoking habit"; break;
				case "food intake": title += "Calories, diet plan, drinks"; break;
				case "body specs": title += "Weight, Height, Body frame, Body fat, Temperature etc."; break;
				case "symptoms": title += "All acute, chronic, relapsing or remitting symptoms. For example: Mood changes, rash, swellings"; break;
				case "workout / activities": title += "Goals, Steps, Distance covered / GPS Tracking"; break;
				case "sleep metrics": title += "Sleep sound, dream description"; break;
				case "personality test": title += "Questions about own behavior"; break;
				case "family": title += "Medical condition of children or ancestors, Family size"; break;
			}

			title += "; ";
		}

		return title;
	}

	// PRIVACY IDX
	privacyIdx(continuum, archetype, val) {
		var title = "The privacy risk index of this app is " + val + ". ";

		if(archetype !== "non" && continuum.min !== null && continuum.max !== null) {
			title += "Within the category \"" + archetype + "\" the lowest privacy risk index is ";
			title += continuum.min;
			title += " and the highest is ";
			title += continuum.max + "";
		}

		return title;
	}
}

export default Tooltips;
