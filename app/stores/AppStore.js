import alt from "../alt";
import AppActions from "../actions/AppActions";

class AppStore {

	constructor() {
		this.bindActions(AppActions);
		this.apps = [];
	}

	// SEARCH APPS SUCCESS
  	searchAppsSuccess(data) {
    	this.apps = data;
  	}

	// SEARCH APPS FAIL
  	searchAppsFail(jqXhr) {
    	// Handle multiple response formats, fallback to HTTP status code number.
    	console.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  	}
}

export default alt.createStore(AppStore);
